import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-delete',
  templateUrl: './restaurante-delete.component.html',
  styleUrls: ['./restaurante-delete.component.css']
})
export class RestauranteDeleteComponent implements OnInit {

  id_restaurante = '';
  
  restaurante: Restaurante = {
    id: '',
    nome: '',
    taxaFrete: '',
    cozinha: ''
  }

  constructor(private router: Router,
              private service: RestauranteService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_restaurante = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_restaurante).subscribe(resposta => {
      this.restaurante = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.id_restaurante).subscribe(resposta => {
      this.router.navigate(['restaurantes'])
      this.service.message('Restaurante deletado com sucesso!')
    }, err => {
      this.service.message(err.error.detail);
    })
  }

  cancel(): void{
    this.router.navigate(['restaurantes']);
  }

} 
