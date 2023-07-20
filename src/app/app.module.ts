import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SecondReceiverComponent } from './second-receiver/second-receiver.component';
import { FirstReceiverComponent } from './first-receiver/first-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    SecondReceiverComponent,
    FirstReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
