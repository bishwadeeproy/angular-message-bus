import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MessageBusService } from '../services/message-bus.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnDestroy{
  message!: string;
  private subscription: Subscription;

  constructor(private messageBusService: MessageBusService) {
    this.subscription = this.messageBusService
      .on<string>('customMessage')
      .subscribe((payload: any) => {
        this.message = payload;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
