import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  //restaurantesUrl = '/api/restaurantes';

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, 
              private snack: MatSnackBar) { }

  findAll(): Observable<Restaurante[]>{
    const url = "/api/restaurantes";
    console.log(url);
    return this.http.get<Restaurante[]>(url); 
  }

  create(restaurante: Restaurante):Observable<Restaurante>{
    const url = "/api/restaurantes";
    return this.http.post<Restaurante>(url, restaurante);
  }

  message(msg: string): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
