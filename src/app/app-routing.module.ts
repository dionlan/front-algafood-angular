import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteReadComponent } from './views/components/restaurante/restaurante-read/restaurante-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { RestauranteCreateComponent } from './views/components/restaurante/restaurante-create/restaurante-create.component';
import { CozinhaReadComponent } from './views/components/cozinha/cozinha-read/cozinha-read.component';
import { CozinhaCreateComponent } from './views/components/cozinha/cozinha-create/cozinha-create.component';
import { CozinhaUpdateComponent } from './views/components/cozinha/cozinha-update/cozinha-update.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
