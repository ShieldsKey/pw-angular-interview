import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'interview-app';
    constructor(private readonly router: Router) {}

    public goHtml(): void {
        this.router.navigate(['html']);
    }

    public goTable(): void {
        this.router.navigate(['table']);
    }

    public goManualSub(): void {
        this.router.navigate(['manual']);
    }
}
