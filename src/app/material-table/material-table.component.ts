import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Result, RootObject } from '../../app/interfaces/searchResults';
import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
    loading = false
    dataSource: any[];
    displayedColumns: string[] = ['name', 'scope', 'version', 'date'];
    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.loading = true;
        this.httpService.getSearchResults().pipe(
            finalize(() => this.loading = false)
        ).subscribe((data: RootObject) => {
            this.dataSource = data.results.map((result: Result) => {
                return result.package;
            });
        });
    }
}