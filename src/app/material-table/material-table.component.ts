import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { finalize } from 'rxjs/operators';
import { Result, RootObject } from 'src/app/interfaces/searchResults';
import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit, AfterViewInit {
    @ViewChild('dataTable', { static: false }) public dataTable!: MatTable<any>;
    @ViewChild('dataTable', { static: true }) public dataTableStatic!: MatTable<any>;
    loadingData = true
    dataSource: any[];
    displayedColumns: string[] = ['name', 'scope', 'version', 'date'];
    constructor(private readonly httpService: HttpService, private readonly changeDetection: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.loadingData = true;
        this.httpService.getSearchResults().pipe(
            finalize(() => {
                this.loadingData = false;
                console.log('-----------------data table')
                console.log('static: false', this.dataTable);
                console.log(this.dataTableStatic);
                this.changeDetection.detectChanges();

                console.log('-----------------after change detection')
                console.log('static: false', this.dataTable);
                console.log(this.dataTableStatic);
             })
        ).subscribe((data: RootObject) => {
            this.dataSource = data.results.map((result: Result) => {
                return result.package;
            });
        });
    }

    public ngAfterViewInit(): void {
        console.log('-----------------ngAfterViewInit')
        console.log('static: false', this.dataTable);
        console.log(this.dataTableStatic);
    }
}