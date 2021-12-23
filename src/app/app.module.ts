import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestauranteService } from './services/restaurante.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestauranteReadComponent } from './views/components/restaurante/restaurante-read/restaurante-read.component';
import { RestauranteCreateComponent } from './views/components/restaurante/restaurante-create/restaurante-create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { CozinhaReadComponent } from './views/components/cozinha/cozinha-read/cozinha-read.component';
import { CozinhaCreateComponent } from './views/components/cozinha/cozinha-create/cozinha-create.component';
import { CozinhaUpdateComponent } from './views/components/cozinha/cozinha-update/cozinha-update.component';
import { CozinhaDeleteComponent } from './views/components/cozinha/cozinha-delete/cozinha-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteReadComponent,
    RestauranteCreateComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CozinhaReadComponent,
    CozinhaCreateComponent,
    CozinhaUpdateComponent,
    CozinhaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule
    
  ],
  providers: [RestauranteService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
