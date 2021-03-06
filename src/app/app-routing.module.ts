import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteReadComponent } from './views/components/restaurante/restaurante-read/restaurante-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { RestauranteCreateComponent } from './views/components/restaurante/restaurante-create/restaurante-create.component';
import { CozinhaReadComponent } from './views/components/cozinha/cozinha-read/cozinha-read.component';
import { CozinhaCreateComponent } from './views/components/cozinha/cozinha-create/cozinha-create.component';
import { CozinhaUpdateComponent } from './views/components/cozinha/cozinha-update/cozinha-update.component';
import { CozinhaDeleteComponent } from './views/components/cozinha/cozinha-delete/cozinha-delete.component';
import { RestauranteUpdateComponent } from './views/components/restaurante/restaurante-update/restaurante-update.component';
import { RestauranteDeleteComponent } from './views/components/restaurante/restaurante-delete/restaurante-delete.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'restaurantes',
    component: RestauranteReadComponent
  },
  {
    path: 'restaurantes/create',
    component: RestauranteCreateComponent
  },
  {
    path: 'restaurantes/update/:id',
    component: RestauranteUpdateComponent
  },
  {
    path: 'restaurantes/delete/:id',
    component: RestauranteDeleteComponent
  },
  
  {
    path: 'cozinhas',
    component: CozinhaReadComponent
  },
  {
    path: 'cozinhas/create',
    component: CozinhaCreateComponent
  },
  {
    path: 'cozinhas/update/:id',
    component: CozinhaUpdateComponent
  },
  {
    path: 'cozinhas/delete/:id',
    component: CozinhaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
