import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../subscriptionServices';

@Component({
  selector: 'app-subscribing-observables',
  template: `
  <p>{{first}}</p>
  <p>{{second}}</p>
  <p>{{third}}</p>
`
})
export class ManualSubscriptionsComponent {
    first: string;
    second: string;
    third: number;

  }
