import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { MaterialTableComponent } from './material-table/material-table/material-table.component';

const routes: Routes = [
    { path: 'html', component: HtmlTableComponent },
    { path: 'table', component: MaterialTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
