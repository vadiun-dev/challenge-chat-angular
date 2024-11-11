import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-view-footer',
  templateUrl: './chat-view-footer.component.html',
  styleUrls: ['./chat-view-footer.component.scss'],
})
export class ChatViewFooterComponent {
  @Output() onMessageSent: EventEmitter<string> = new EventEmitter();

  message: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  send() {
    if (this.message.valid) {
      this.onMessageSent.emit(this.message.value);
    }
  }
}
