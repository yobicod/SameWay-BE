import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from '../user/user.service';

@WebSocketGateway()
@Injectable()
export class GatewayService implements OnModuleInit {
  constructor(private readonly userService: UserService) {}

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

  // Other event handlers...
}
