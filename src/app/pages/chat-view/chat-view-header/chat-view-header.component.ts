import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-view-header',
  templateUrl: './chat-view-header.component.html',
  styleUrls: ['./chat-view-header.component.scss'],
})
export class ChatViewHeaderComponent {
  @Input() user: any;
  @Input() status: 'waiting' | string = '';
}
