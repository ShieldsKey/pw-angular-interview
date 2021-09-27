import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTableModule} from '@angular/material/table';
import { MaterialTableComponent } from './material-table/material-table.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManualSubscriptionsComponent } from './subscriptions/subscribing-observables/manual-subscription.component';
import { AsyncPipeComponent } from './subscriptions/subscribing-observables/async-pipe.component';
import { ForkJoinOperatorComponent } from './subscriptions/subscribing-observables/fork-join-operator/fork-join-operator.component';
import { CombineLatestOperatorComponent } from './subscriptions/subscribing-observables/combine-latest-operator/combine-latest-operator.component';
import { AsyncPipeObjectComponent } from './subscriptions/subscribing-observables/async-pipe-object/async-pipe-object.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    HtmlTableComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    ManualSubscriptionsComponent,
    AsyncPipeComponent,
    ForkJoinOperatorComponent,
    CombineLatestOperatorComponent,
    AsyncPipeObjectComponent

  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
