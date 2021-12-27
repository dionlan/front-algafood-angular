import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';
import { Restaurante } from '../models/restaurante';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestauranteUpdateComponent } from '../views/components/restaurante/restaurante-update/restaurante-update.component';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  //restaurantesUrl = '/api/restaurantes';

  headers={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, 
              private snack: MatSnackBar) { }

  findAll(): Observable<Restaurante[]>{
    const url = "/api/restaurantes";
    return this.http.get<Restaurante[]>(url); 
  }

  findById(id: any): Observable<Restaurante>{
    const url = `/api/restaurantes/${id}`;
    return this.http.get<Restaurante>(url);
  }

  create(restaurante: Restaurante) :Observable<Restaurante>{
    const url = "/api/restaurantes";
    return this.http.post<Restaurante>(url, JSON.stringify(restaurante), this.headers);
  }

  update(id: any, restaurante: Restaurante): Observable<Restaurante>{
    const url = `/api/restaurantes/${id}`;
    return this.http.put<Restaurante>(url, JSON.stringify(restaurante), this.headers);
  }

  delete(id: any): Observable<Restaurante>{
    const url = `/api/restaurantes/${id}`;
    return this.http.delete<Restaurante>(url);
  }

  message(msg: string): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
