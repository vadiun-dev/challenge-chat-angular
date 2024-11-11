import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from "../avatar/avatar.component";
import { Message } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss']
})
export class MessageBubbleComponent {
  @Input() message!: Message;
}
