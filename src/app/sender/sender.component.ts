import { Component } from '@angular/core';
import { MessageBusService } from '../services/message-bus.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  constructor(private messageBusService: MessageBusService) {}

  publishHelloMessage() {
    const message = { type: 'helloMessage', payload: {data:[1,2,3,4,5,6,7,8,9], msg:"Hello, world!"} };
    this.messageBusService.publish(message);
  }

  publishHiMessage() {
    const message = { type: 'hiMessage',  payload: {data:[10,20,30,40,50,60,70,80,90], msg:"Hi, world!"} };
    this.messageBusService.publish(message);
  }
}
