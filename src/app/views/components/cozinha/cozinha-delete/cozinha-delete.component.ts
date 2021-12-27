import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cozinha } from 'src/app/models/cozinha';
import { CozinhaService } from 'src/app/services/cozinha.service';

@Component({
  selector: 'app-cozinha-delete',
  templateUrl: './cozinha-delete.component.html',
  styleUrls: ['./cozinha-delete.component.css']
})
export class CozinhaDeleteComponent implements OnInit {

  id_cozinha = '';

  cozinha: Cozinha = {
    id: '',
    nome: ''
  }

  constructor(private router: Router,
              private service: CozinhaService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id_cozinha = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id_cozinha).subscribe(resposta => {
      this.cozinha = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.id_cozinha).subscribe(resposta => {
      this.router.navigate(['cozinhas'])
      this.service.message('Cozinha deletada com sucesso!')
    }, err => {
      this.service.message(err.error.detail);
    })
  }

  cancel(): void{
    this.router.navigate(['cozinhas']);
  }
}
