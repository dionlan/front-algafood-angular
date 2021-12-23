import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Restaurante } from '../../../../models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-read',
  templateUrl: './restaurante-read.component.html',
  styleUrls: ['./restaurante-read.component.css']
})

export class RestauranteReadComponent implements AfterViewInit {
  restaurantes: Restaurante[] = [];

  displayedColumns: string[] = ['id', 'nome', 'precoFrete'];

  dataSource = new MatTableDataSource<Restaurante>(this.restaurantes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: RestauranteService, 
              private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.restaurantes = resposta;
      console.log(this.restaurantes);
      this.dataSource = new MatTableDataSource<Restaurante>(this.restaurantes);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['restaurantes/create'])
  }


}

/* export class RestauranteReadComponent implements OnInit {

  restaurantes: Array<any> = [];

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.restauranteService.listar().subscribe(dados => this.restaurantes = dados);
  }

} */
