import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private webSocket!: Socket;

  constructor() {
    this.init();
  }

  init() {
    this.webSocket = io('http://localhost:3000');
  }

  getConnection() {
    return this.webSocket;
  }
}
