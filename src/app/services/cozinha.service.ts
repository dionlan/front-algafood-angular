import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cozinha } from '../models/cozinha';

@Injectable({
  providedIn: 'root'
})
export class CozinhaService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, 
              private snack: MatSnackBar) { }

  findAll(): Observable<Cozinha[]>{
    const url = "/api/cozinhas";
    return this.http.get<Cozinha[]>(url); 
  }
  
  findById(id: any): Observable<Cozinha>{
    const url = `/api/cozinhas/${id}`;
    return this.http.get<Cozinha>(url);
  }

  create(cozinha: Cozinha):Observable<Cozinha>{
    const url = `/api/cozinhas`;
    return this.http.post<Cozinha>(url, cozinha);
  }

  update(cozinha: Cozinha):Observable<Cozinha>{
    const url = `/api/cozinhas/${cozinha.id}`;
    //const url = `${this.baseUrl}/api/cozinhas/${cozinha.id}`
    return this.http.put<Cozinha>(url, cozinha);
  }

  delete(id: any): Observable<Cozinha>{
    const url = `/api/cozinhas/${id}`;
    return this.http.delete<Cozinha>(url);
  }

  message(msg: string): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
