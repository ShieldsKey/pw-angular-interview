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
import { SubscriptionsComponent } from './subscriptions/subscribing-observables/subscriptions.component';
import { ManualSubscriptionsComponent } from './subscriptions/subscribing-observables/manual-subscription/manual-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualSubscriptionsComponent,
    MaterialTableComponent,
    HtmlTableComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    SubscriptionsComponent
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
