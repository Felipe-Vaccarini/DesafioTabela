import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco']; // Declare a propriedade displayedColumns

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource([
      { id: 1, nome: 'Item 1', descricao: 'Descrição do Item 1', preco: 10.99 },
      { id: 2, nome: 'Item 2', descricao: 'Descrição do Item 2', preco: 11.99 },
      { id: 3, nome: 'Item 3', descricao: 'Descrição do Item 3', preco: 12.99 },
      // ...
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  aplicarFiltroGlobal(event: any) {
    const filtro = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filtro;
  }
  

}
