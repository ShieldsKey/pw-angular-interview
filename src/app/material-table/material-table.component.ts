import { Component } from '@angular/core';
import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent  {

    dataSource: any[];
    displayedColumns: string[] = ['name', 'scope', 'version', 'date'];
    constructor(private readonly httpService: HttpService) { }

}