import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  cozinhas: Cozinha[] = [];

  formCadastroRestaurante = new FormGroup({
    nome: new FormControl(null),
    taxaFrete: new FormControl(null),
    cozinha: new FormGroup({
      id: new FormControl(null)
    })
  });

  restaurante: Restaurante = {
    nome: '',
    taxaFrete: '',
    cozinha: {
      id: '',
      nomeCozinha: ''
    }
  }
 
  constructor(private router: Router,
              private service: RestauranteService, 
              private cozinhaService: CozinhaService, 
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listarCozinhas();
  }

  popularFormCadastroRestaurante(): void{

    this.formCadastroRestaurante.patchValue({
      nome: this.restaurante.nome,
      taxaFrete: this.restaurante.taxaFrete,
      
      cozinha: {
        id: this.restaurante.cozinha
      }
    });
  }

  cancel():void {
    this.router.navigate(['restaurantes']);
  }

  create():void {
    this.popularFormCadastroRestaurante();
    console.log("CRIAÇÃO RESTAURANTE: ", JSON.stringify(this.formCadastroRestaurante.value))
    
    this.service.create(this.formCadastroRestaurante.value).subscribe((resposta) => {
    this.router.navigate(['restaurantes']);
    this.service.message('Restaurante cadastro com sucesso!')
    });
  }

  listarCozinhas(): void {
    this.cozinhaService.findAll().subscribe(resposta => {
      
      this.cozinhas = resposta;
      console.log(this.cozinhas);
    })
  }

/*   errorValidName(){
    if(this.nome.invalid){
      return 'O nome deve ter entre 5 e 100 caracteres'
    }
    return false;
  } */

}
