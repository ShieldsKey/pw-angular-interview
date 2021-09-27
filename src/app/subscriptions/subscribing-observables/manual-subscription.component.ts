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
    thirdSubscription: Subscription;
  
    ngOnInit() {
      getSingleValueObservable()
        .subscribe(value => this.first = value);
  
      getDelayedValueObservable()
        .subscribe(value => this.second = value);
  
      this.thirdSubscription = getMultiValueObservable()
        .subscribe(value => this.third = value);
    }
  
    // Multi value observables must manually
    // unsubscribe to prevent memory leaks.
    ngOnDestroy() {
      this.thirdSubscription.unsubscribe();
    }
  }
