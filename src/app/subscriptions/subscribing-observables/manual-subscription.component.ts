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
export class ManualSubscriptionsComponent implements OnInit {
    first: string;
    second: string;
    third: number;
    thirdSubscription: Subscription;
  
    ngOnInit() {
        // we don't need to worry about the first two values since they return only one value
      getSingleValueObservable()
        .subscribe(value => this.first = value);
  
      getDelayedValueObservable()
        .subscribe(value => this.second = value);

        // the third one continues to send values
        // need to create a subscription so it can be unsubscribed when the component is descroyed
        // to avoid memory leaks
      this.thirdSubscription = getMultiValueObservable()
        .subscribe(value => this.third = value);
    }

    // Multi value observables must manually
    // unsubscribe to prevent memory leaks.
    ngOnDestroy() {
      this.thirdSubscription.unsubscribe();
    }
  }
