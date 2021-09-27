Start with this test.  We are looking for a few things in this coding example.
Candidate given three observables that they have to bind to.

They will have a simple form with just an html template showing three values.  The source of the values are in subscription.service.ts.

There are a few ways this can be solved.  
solution 1: Subscribing directly to the component.  see manual-subscription.component.ts.

Problems with this method:  memory leaks.
How can this be overcome it you want to subscribe directly?
    They should add a ngOnDestroy to manually unsubscribe.
    ```ts
    // Multi value observables must manually
    // unsubscribe to prevent memory leaks.
    ngOnDestroy() {
      this.thirdSubscription.unsubscribe();
    }
    ```
Solution 2: async pipe
let the async pipe automatically subscribe and handles the observables.  
Syntax can be tricky when there are multiple subscriptions

Other Problems:

Multiple observables:

ForkJoin and *ngIf:
User forkJoin to combine the Observables.  Once a value is received from all observables it will emit a value.  Does not work well with multi-value Observables

Similar to a promise.ALL (question?, jhave them show this?)

template have some Angular features such as ng-content allows the use of ngIf without generating HTML like excessive div elements.

CombineLatest:
Combine Latest will emit the single combined value as soon as at least every Observable emits a single value and will continue emitting multiple values with the latest of each.
In the template, we use the same technique with *ngIf and the async pipe.

Async Pipe:
Using *ngIf and the async pipe we can unwrap each Observable into a single value object that contains the unwrapped value of each Observable.

