import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const usersList: string[] = [];
const messages = [];

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log(`Init`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    this.server.emit('returnId', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('userConnection')
  // client: any, payload: any
  handleUserConnection(@MessageBody() data: any) {
    usersList.push(data.name);
    this.server.emit('recieveMessages', messages);
    return this.server.emit('userConnected', usersList);
  }

  @SubscribeMessage('sendMessage')
  handleSendMessage(@MessageBody() data: any) {
    console.log(data);
    messages.push(data);
    return this.server.emit('recieveMessages', messages);
  }
}
