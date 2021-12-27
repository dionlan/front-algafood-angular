import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { CozinhaService } from 'src/app/services/cozinha.service';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-update',
  templateUrl: './restaurante-update.component.html',
  styleUrls: ['./restaurante-update.component.css']
})
export class RestauranteUpdateComponent implements OnInit {

  id_restaurante = '';

  restaurantes: Restaurante[] = [];

  formUpdateRestaurante = new FormGroup({
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
      id: ''
    }
  }

  nome = new FormControl('', [Validators.minLength(4)]);
  taxaFrete = new FormControl('', [Validators.minLength(3)]);

  constructor(private router: Router, 
              private service: RestauranteService, 
              private route: ActivatedRoute){}

  ngOnInit(): void { 
    this.id_restaurante = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  update(): void {
    this.popularFormUpdateRestaurante();
    this.service.update(this.id_restaurante, this.formUpdateRestaurante.value).subscribe(resposta => {
      this.router.navigate(['restaurantes']);
      this.service.message('Restaurante atualizado com sucesso!')
    }, err => {
      if(err.error.error.match('já cadastrado')){
        this.service.message(err.error.error)
      }else 
      console.log(err);
    })
  }

  findById(): void {
    this.service.findById(this.id_restaurante).subscribe((resposta => {
      this.restaurante = resposta;
    }))
  }

  popularFormUpdateRestaurante(): void{
    
    this.formUpdateRestaurante.patchValue({
      nome: this.restaurante.nome,
      taxaFrete: this.restaurante.taxaFrete,
      
      cozinha: {
        id: this.restaurante.cozinha.id
      }
    });
  }

  cancel(): void {
    this.router.navigate(['restaurantes']);
  }

  errorValidade() {
    if(this.nome.invalid){
      return 'O nome do restaurante deve ter entre 5 e 60 caracteres!';
    }
      return false
  }

}
