import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Result, RootObject } from '../interfaces/searchResults';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.scss']
})
export class HtmlTableComponent implements OnInit {
    public results: Result[];
    public totalAngularPackages: number;
    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.httpService.getSearchResults().subscribe((data: RootObject) => {
            this.results =  data.results;
            this.totalAngularPackages = data.total;
        });
    }

  }
