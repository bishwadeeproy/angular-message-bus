import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MessageBusService } from '../services/message-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-receiver',
  templateUrl: './first-receiver.component.html',
  styleUrls: ['./first-receiver.component.css']
})
export class FirstReceiverComponent implements OnDestroy {
  message!: string;
  private subscription: Subscription;

  constructor(private messageBusService: MessageBusService) {
    this.subscription = this.messageBusService
      .on<string>('helloMessage')
      .subscribe((payload: any) => {
        this.message = JSON.stringify(payload);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
