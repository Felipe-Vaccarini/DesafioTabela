import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['posição', 'nome', 'idade', 'fortuna']; 

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  pageSize = 10;
  pageIndex = 0;

  constructor() {
    this.dataSource = new MatTableDataSource([
      { posição: 1, nome: 'Elon Musk', idade: 51, fortuna: "US$ 237,7 bilhões"},
      { posição: 2, nome: "Bernard Arnault", idade: 74, fortuna: "US$ 231,9 bilhões"},
      { posição: 3, nome: 'Jeff Bezos', idade: 59, fortuna: "US$ 153 bilhões"},
      { posição: 4, nome: 'Larry Ellison', idade: 78, fortuna: "US$ 149,2 bilhões"},
      { posição: 5, nome: 'Bill Gates', idade: 67, fortuna: "US$ 119,3 bilhões"},
      { posição: 6, nome: 'Warren Buffett', idade: 92, fortuna: "US$ 111,9 bilhões"},
      { posição: 7, nome: 'Steven Ballmer', idade: 67, fortuna: "US$ 104,0 bilhões"},
      { posição: 8, nome: 'Larry Page', idade: 50, fortuna: "US$ 102,2 bilhões"},
      { posição: 9, nome: 'Mark Zuckerberg', idade: 39, fortuna: "US$ 101,8 bilhões"},
      { posição: 10, nome: 'Carlos Slim Helu', idade: 83, fortuna: "US$ 101,4 bilhões"},
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  aplicarFiltroGlobal(event: any) {
    const filtro = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filtro;
  }


  atualizarPagina(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.dataSource.paginator = this.paginator; 
  }
  
}
