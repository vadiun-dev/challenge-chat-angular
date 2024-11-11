import { Injectable } from '@angular/core';
import { Socket } from 'socket.io';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private webSocket!: WebSocket;

  constructor() {}

  init() {
    this.webSocket = new WebSocket(enviroment.apiUrl);

    this.webSocket.onopen = () => console.log("Websocket conectado");
    this.webSocket.onmessage = (ev) => console.log("Message", ev)
  }
}
