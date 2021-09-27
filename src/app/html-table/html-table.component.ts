import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../app/http.service';
import { RootObject } from '../../app/interfaces/searchResults';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.scss']
})
export class HtmlTableComponent implements OnInit {
    totalAngularPackages: number  = 0 ;

    packages: any[];
    baseObject$: Observable<RootObject>

    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        // this.getProductsUsingSubscribeMethod();
         this.getProductsUsingAsyncPipe();
    }

    public getProductsUsingSubscribeMethod() {
        this.httpService.getSearchResults().subscribe((data: RootObject) => {
            this.packages =  data.results;
            this.totalAngularPackages = data.total;
        });
    }

    public getProductsUsingAsyncPipe() {
            this.baseObject$ =this.httpService.getSearchResults();
    }
  }
