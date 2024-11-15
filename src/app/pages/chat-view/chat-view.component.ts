import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/interfaces/message.interface';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit {
  status: boolean = false;
  messages: Messages = [];

  constructor(private _chatService: ChatService) {}

  ngOnInit(): void {
    this._chatService.messages$.subscribe((messages) => {
      this.messages = messages;
      const el = document.getElementById('messages');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }

  handleSubmit = (inputTextValue: string) => {
    this._chatService.sendMessage(inputTextValue);
  };

  createNewChat = () => {
    this._chatService.createNewChat();
  };

  sendMessage = (inputTextValue: string) => {
    this._chatService.sendMessage(inputTextValue);
  };
}
