import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message, Messages } from 'src/app/interfaces/message.interface';
import { v4 as uuidv4 } from 'uuid';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages$ = new BehaviorSubject<Messages>([]);
  status$ = new BehaviorSubject<string>('idle');

  constructor(private wsSrv: WebsocketService) {
    this.init();
  }

  setMessages = (messages: Messages) => {
    this.messages$.next(messages);
  };

  setStatus = (status: string) => {
    this.status$.next(status);
  };

  createNewChat = () => {
    const newId = uuidv4();
    this.wsSrv.getConnection().emit('initialize_chat', newId);
    localStorage.setItem('uuid', newId);
    this.loadChatMessages();
    return newId;
  };

  loadChatMessages = () => {
    var uuid = localStorage.getItem('uuid');
    if (uuid === null) {
      return;
    }
    fetch('http://localhost:3000/messages/' + uuid)
      .then((res) => res.json())
      .then((data) => {
        this.setMessages(data);
      });
  };

  sendMessage = (message: string) => {
    var uuid = localStorage.getItem('uuid');
    this.wsSrv.getConnection().emit('message_emitted', { message, uuid });
  };

  init = () => {
    this.wsSrv.getConnection().on('new_message', (data: Message) => {
      if (data.sender !== 'System') {
        this.setMessages([...this.messages$.getValue(), data]);
        return;
      }
      this.setStatus('writing');
      const msg = this.messages$.getValue();

      this.setMessages([...msg, data]);
    });

    this.loadChatMessages();

    this.wsSrv.getConnection().on('writing', () => this.setStatus('waiting'));
  };
}
