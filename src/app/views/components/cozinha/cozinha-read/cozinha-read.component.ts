import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Cozinha } from 'src/app/models/cozinha';
import { MatPaginator } from '@angular/material/paginator';
import { CozinhaService } from 'src/app/services/cozinha.service';

@Component({
  selector: 'app-cozinha-read',
  templateUrl: './cozinha-read.component.html',
  styleUrls: ['./cozinha-read.component.css']
})
export class CozinhaReadComponent implements AfterViewInit {
  cozinhas: Cozinha[] = [];

  displayedColumns: string[] = ['id', 'nome', 'action'];

  dataSource = new MatTableDataSource<Cozinha>(this.cozinhas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CozinhaService, 
              private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.cozinhas = resposta;
      console.log(this.cozinhas);
      this.dataSource = new MatTableDataSource<Cozinha>(this.cozinhas);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['cozinhas/create'])
  }
}