import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cozinha } from 'src/app/models/cozinha';
import { CozinhaService } from 'src/app/services/cozinha.service';

@Component({
  selector: 'app-cozinha-update',
  templateUrl: './cozinha-update.component.html',
  styleUrls: ['./cozinha-update.component.css']
})
export class CozinhaUpdateComponent implements OnInit {

  id_cozinha = '';

  cozinha: Cozinha = {
    id: '',
    cozinhaNome: ''
  }

  cozinhaNome = new FormControl('', [Validators.minLength(4)]);

  constructor(private router: Router,
              private service: CozinhaService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id_cozinha = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  update(): void{
    this.service.update(this.cozinha).subscribe(resposta => {
      this.router.navigate(['cozinhas']);
      this.service.message('Cozinha atualizada com sucesso!')
    }, err => {
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

  findById(): void{
    this.service.findById(this.id_cozinha).subscribe(resposta => {
      this.cozinha = resposta;
    })
  }

  cancel():void {
    this.router.navigate(['cozinhas']);
  }

  errorValidName(){
    if(this.cozinhaNome.invalid){
      return 'O nome da cozinha deve ter entre 5 e 60 caracteres'
    }
    return false;
  }
}
