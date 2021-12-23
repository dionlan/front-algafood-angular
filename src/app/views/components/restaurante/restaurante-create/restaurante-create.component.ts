import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cozinha } from 'src/app/models/cozinha';
import { Restaurante } from 'src/app/models/restaurante';
import { CozinhaService } from 'src/app/services/cozinha.service';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-create',
  templateUrl: './restaurante-create.component.html',
  styleUrls: ['./restaurante-create.component.css']
})
export class RestauranteCreateComponent implements OnInit {

  selected?: ''; 
  idCozinha?: Cozinha;
  cozinhas: Cozinha[] = [];

  restaurante: Restaurante = {
    nome: '',
    precoFrete: 1,
    cozinha: this.idCozinha
  }

  nome = new FormControl('', [Validators.minLength(5)]);

  constructor(private router: Router,
              private service: RestauranteService, 
              private cozinhaService: CozinhaService) { }

  ngOnInit(): void {
    this.listarCozinhas();
  }

  cancel():void {
    this.router.navigate(['restaurantes']);
  }

  create():void {
    console.log(this.restaurante);
    this.service.create(this.restaurante).subscribe((resposta) => {
      this.restaurante.cozinha.id = resposta.cozinha.id;
      this.router.navigate(['restaurantes']);
      this.service.message('Restaurante cadastro com sucesso!')
    });
  }

  listarCozinhas(): void {
    this.cozinhaService.findAll().subscribe(resposta => {
      this.cozinhas = resposta;
    })
  }

  errorValidName(){
    if(this.nome.invalid){
      return 'O nome deve ter entre 5 e 100 caracteres'
    }
    return false;
  }

}
