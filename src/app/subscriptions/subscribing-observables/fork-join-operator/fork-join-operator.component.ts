import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDelayedValueObservable, getSingleValueObservable } from '../../subscriptionServices';

@Component({
    selector: 'app-fork-join-operator',
    templateUrl: './fork-join-operator.component.html'
  })
  export class ForkJoinOperatorComponent {
    show = false;

  }
