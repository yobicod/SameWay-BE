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
      console.log('Connecting to server... ⏰');
      console.log(`Socket id: ${socket.id}`);
      console.log(`Connected ✅`);
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
    // Example usage
    const passengerLocation = {
      latitude: 40.7128,
      longitude: -74.006,
    };
    const driverLocation = {
      latitude: 40.7141,
      longitude: -74.006,
    };
    const circleRadius = 1; // Radius in kilometers

    const isMatch = findCircleIntersection(
      passengerLocation,
      driverLocation,
      circleRadius,
    );

    if (isMatch) {
      console.log(
        'Match: Passenger and Driver are within the intersecting circles.',
      );
    } else {
      console.log(
        'No Match: Passenger and Driver are not within the intersecting circles.',
      );
    }

    const driversInredis = JSON.parse(await this.redis.get('DriverOpen'));
    console.log(
      '🚀 ~ file: gateway.service.ts:89 ~ GatewayService ~ waitForPassenger ~ driversInredis:',
      driversInredis,
    );
    const selectedDriver = driversInredis[driversInredis.length - 1];
    console.log(
      '🚀 ~ file: gateway.service.ts:94 ~ GatewayService ~ waitForPassenger ~ selectedDriver:',
      selectedDriver,
    );

    const driverSocketInstance = this.server.sockets.sockets.get(socket.id);

    setTimeout(() => {
      driverSocketInstance.emit(
        'waitingForDriver',
        'Finally find driver... with socketId: ' + socket.id,
      );
    }, 5000);
  }

  @SubscribeMessage('test')
  async test(@MessageBody() body: any, @ConnectedSocket() socket: Socket) {
    console.log(body);
    const socketInstance = this.server.sockets.sockets.get(socket.id);
    socketInstance.emit('customEvent', 'Msg from server...📊');
  }
}
