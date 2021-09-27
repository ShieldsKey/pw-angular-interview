import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from '../subscriptionServices';

@Component({
    selector: 'app-async-pipe',
    templateUrl: './async-pipe.component.html'
  })
  export class AsyncPipeComponent {
    show = false;
    first$ = getSingleValueObservable();
    second$ = getDelayedValueObservable();
    third$ = getMultiValueObservable();
  }