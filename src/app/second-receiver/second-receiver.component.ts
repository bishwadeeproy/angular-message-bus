import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MessageBusService } from '../services/message-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-receiver',
  templateUrl: './second-receiver.component.html',
  styleUrls: ['./second-receiver.component.css']
})
export class SecondReceiverComponent implements OnDestroy {
  message!: string;
  private subscription: Subscription;

  constructor(private messageBusService: MessageBusService) {
    this.subscription = this.messageBusService
      .on<string>('hiMessage')
      .subscribe((payload: any) => {
        this.message = JSON.stringify(payload);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
