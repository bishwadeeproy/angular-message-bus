import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstReceiverComponent } from './first-receiver.component';

describe('FirstReceiverComponent', () => {
  let component: FirstReceiverComponent;
  let fixture: ComponentFixture<FirstReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstReceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
