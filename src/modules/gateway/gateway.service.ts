import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UserService } from '../user/user.service';

@WebSocketGateway()
@Injectable()
export class GatewayService implements OnModuleInit {
  constructor(private readonly userService: UserService) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Connectingto server... ⏰');
      console.log(`Socket id: ${socket.id}`);
      console.log(`Connected ✅`);
    });
  }

  @SubscribeMessage('incomingRequest')
  // retreive body @MessageBody()
  async onNewMessage(@MessageBody() body: any) {
    console.log(
      '🚀 ~ file: gateway.service.ts:10 ~ GatewayService ~ onNewMessage ~ body:',
      body,
    );
    // push data to client
    const users = await this.userService.getAllUsers();
    this.server.emit('onMessage', users);
  }
}
