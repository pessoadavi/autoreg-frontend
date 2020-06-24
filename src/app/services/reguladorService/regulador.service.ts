import { ResponseApi } from 'src/app/models/response-api';
import { Observable } from 'rxjs';
import { Regulador } from './../../models/regulador.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReguladorService {

  baseUrl = 'http://localhost:8080/reguladores';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  
  /* Método para cadastrar um novo regulador */
  create(regulador: Regulador): Observable<Regulador> {
    return this.http.post<Regulador>(this.baseUrl, regulador);
  }

  /* Método para deletar um regulador */
  delete(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  /* Método para encontrar um regulador pelo seu id */
  readById(id: number): Observable<Regulador> {
    return this.http.get<Regulador>(`${this.baseUrl}/${id}`);
  }

  /* Método que lerá todos os reguladores cadastrados */
  read(page:number, count:number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.baseUrl}/${page}/${count}`);
  }

  /* Método que lerá todos os reguladores cadastrados */
  read2(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.baseUrl);
  }

  

  /* Método para atualizar os dados de um regulador */
  update(regulador: Regulador):  Observable<Regulador> {
    return this.http.put<Regulador>(`${this.baseUrl}/${regulador.id}`, regulador);
  }

  /* Método que mostra mensagens configuradas nos componentes */
  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
      //panelClass: isError? ['msg-error']:['msg-success']
    });
  }
}
