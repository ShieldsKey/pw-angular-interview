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
    baseObject$: Observable<RootObject>

    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.baseObject$ =this.httpService.getSearchResults();
    }
}
