import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlTableComponent } from './html-table/html-table.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ManualSubscriptionsComponent } from './subscriptions/subscribing-observables/manual-subscription/manual-subscription.component';
import { SubscriptionsComponent } from './subscriptions/subscribing-observables/subscriptions.component';

const routes: Routes = [
    { path: 'html', component: HtmlTableComponent },
    { path: 'table', component: MaterialTableComponent },
    { path: 'form', component: ReactiveFormComponent },
    { path: 'subscriptions', component: SubscriptionsComponent },
    { path: 'manual', component: ManualSubscriptionsComponent },
    { path: '',   redirectTo: '/manual', pathMatch: 'full' }, // redirect to `html`
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
