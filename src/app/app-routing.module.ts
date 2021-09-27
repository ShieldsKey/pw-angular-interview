import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AsyncPipeObjectComponent } from './subscriptions/subscribing-observables/async-pipe-object/async-pipe-object.component';
import { AsyncPipeComponent } from './subscriptions/subscribing-observables/async-pipe.component';
import { CombineLatestOperatorComponent } from './subscriptions/subscribing-observables/combine-latest-operator/combine-latest-operator.component';
import { ForkJoinOperatorComponent } from './subscriptions/subscribing-observables/fork-join-operator/fork-join-operator.component';
import { ManualSubscriptionsComponent } from './subscriptions/subscribing-observables/manual-subscription.component';

const routes: Routes = [
    { path: 'html', component: HtmlTableComponent },
    { path: 'table', component: MaterialTableComponent },
    { path: 'form', component: ReactiveFormComponent },
    { path: 'subscriptions', component: ManualSubscriptionsComponent },
    { path: 'asyncPipe', component: AsyncPipeComponent },
    { path: 'forkJoin', component: ForkJoinOperatorComponent },
    { path: 'combineLatest', component: CombineLatestOperatorComponent },
    { path: 'asyncPipeObject', component: AsyncPipeObjectComponent },
    { path: '',   redirectTo: '/asyncPipeObject', pathMatch: 'full' }, // redirect to `html`
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
