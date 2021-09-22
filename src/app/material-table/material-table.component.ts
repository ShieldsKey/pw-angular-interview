import { Component, OnInit } from '@angular/core';
import { Result, RootObject } from 'src/app/interfaces/searchResults';
import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

    dataSource: any[];
    displayedColumns: string[] = ['name', 'scope', 'version', 'date'];
    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.httpService.getSearchResults().subscribe((data: RootObject) => {
            this.dataSource = data.results.map((result: Result) => {
                return result.package;
            });
        });
    }
}