// message-bus.service.ts
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class MessageBusService {
  private messageBus: Subject<any> = new Subject<any>();

  publish(message: any) {
    this.messageBus.next(message);
  }

  on<T>(messageType: string): Observable<T> {
    return this.messageBus.asObservable().pipe(
      filter((message: any) => message.type === messageType),
      map((message: any) => message.payload as T)
    );
  }
}
