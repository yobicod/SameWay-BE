import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from '../user/user.service';
import { Redis } from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { findCircleIntersection } from 'src/global-function';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
})
@Injectable()
export class GatewayService implements OnModuleInit {
  constructor(
    private readonly userService: UserService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Socket id: ${socket.id} : => Connected ✅`);
    });
  }

  @SubscribeMessage('')
  async onNewMessage(
    @MessageBody() body: any,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log('Received message:', body);

    try {
      const users = await this.userService.getAllUsers();
      console.log(
        '🚀 ~ file: gateway.service.ts:38 ~ GatewayService ~ users:',
        users,
      );

      if (users.length !== 0) {
        this.server.emit('onMessage', users);
        socket.disconnect();
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      socket.emit('onMessage', error);
    }
  }

  @SubscribeMessage('waitForPassenger')
  async waitForPassenger(
    @MessageBody() body: any,
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      const data = body;
      data.socketId = socket.id;

      const driversInRedis = JSON.parse(await this.redis.get('DriverOpen'));
      driversInRedis.push(data);

      await this.redis.set('DriverOpen', JSON.stringify(driversInRedis));

      const specificSocketId = socket.id;
      const specificSocketInstance =
        await this.server.sockets.sockets.get(specificSocketId);

      specificSocketInstance.emit(
        'driverStatus',
        'status: finding passenger... with socketId:' + socket.id,
      );
    } catch (error) {
      console.log(
        '🚀 ~ file: gateway.service.ts:61 ~ GatewayService ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  @SubscribeMessage('findDriver')
  async findDriver(
    @MessageBody() body: any,
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      console.log('********************************');
      console.log(body);

      // Set distance
      const circleRadius = 1;

      // create passenger obj
      const passengerLocation = {
        latitude: body.userLat,
        longitude: body.userLong,
      };

      // get driver who is available in redis
      const driversInredis = JSON.parse(
        await this.redis.get('DriverAvailable'),
      );

      // find driver who match with user lat lng
      let matchDriverList = [];
      driversInredis.map((driver) => {
        const driverLocation = {
          latitude: driver.driverLat,
          longitude: driver.driverLong,
        };

        const isMatch = findCircleIntersection(
          passengerLocation,
          driverLocation,
          circleRadius,
        );

        if (isMatch) {
          console.log('Math with these driver : ', driver);
          matchDriverList.push(driver);
        }
      });

      // create instance for passenger
      const passengerSocketInstance = this.server.sockets.sockets.get(
        socket.id,
      );

      // emit to client(passenger)
      console.log('before emit', socket.id);
      passengerSocketInstance.emit('waitingForDriver', matchDriverList);
      console.log('emit successfull');
    } catch (error) {
      console.log(
        '🚀 ~ file: gateway.service.ts:108 ~ GatewayService ~ error:',
        error.message,
      );

      throw new InternalServerErrorException('Web socket error');
    }
  }

  @SubscribeMessage('test')
  async test(@MessageBody() body: any, @ConnectedSocket() socket: Socket) {
    console.log(body);
    const socketInstance = this.server.sockets.sockets.get(socket.id);
    socketInstance.emit('customEvent', 'Msg from server...📊');
  }

  @SubscribeMessage('join')
  async joinRoom(@MessageBody() body: any, @ConnectedSocket() socket: Socket) {
    try {
      socket.join('room1');
      socket.to('room1').emit('roomMessage', body);
    } catch (error) {
      console.error('Error joining room:', error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
