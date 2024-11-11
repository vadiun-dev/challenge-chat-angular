import { Component, Input } from '@angular/core';
import { Messages } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-chat-view-message-list',
  templateUrl: './chat-view-message-list.component.html',
  styleUrls: ['./chat-view-message-list.component.scss']
})
export class ChatViewMessageListComponent {
  @Input() messages: Messages = [];
}
