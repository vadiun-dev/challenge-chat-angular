import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  
  status: boolean = false;
  
  constructor(
    private _chatService: ChatService
  ){}

  ngOnInit(): void {
  }
}
