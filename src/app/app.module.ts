import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTableModule} from '@angular/material/table';
import { MaterialTableComponent } from './material-table/material-table.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    HtmlTableComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
