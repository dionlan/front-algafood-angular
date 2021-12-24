import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cozinha } from 'src/app/models/cozinha';
import { CozinhaService } from 'src/app/services/cozinha.service';

@Component({
  selector: 'app-cozinha-create',
  templateUrl: './cozinha-create.component.html',
  styleUrls: ['./cozinha-create.component.css']
})
export class CozinhaCreateComponent implements OnInit {

  cozinha: Cozinha = {
    id: '',
    cozinhaNome: ''
  }

  cozinhaNome = new FormControl('', [Validators.minLength(4)]);

  constructor(private router: Router,
    private service: CozinhaService) { }

  ngOnInit(): void {
  }

  cancel():void {
    this.router.navigate(['cozinhas']);
  }

  create():void {
    console.log(this.cozinha);
    this.service.create(this.cozinha).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['cozinhas']);
      this.service.message('Cozinha cadastra com sucesso!')
    }, err => {
      console.log(err)
      if(err.error.error.match('já cadastrado')){
        this.service.message(err.error.error) 
      }else if(err.error.errors[0].message == 'Ex.: Número de CPF inválido'){
        this.service.message('CPF inválido') 
        console.log(err);
      }else{
        console.log(err);
      }
    });
  }
  
  errorValidName(){
    if(this.cozinhaNome.invalid){
      return 'O nome deve ter entre 5 e 60 caracteres'
    }
    return false;
  }
}
