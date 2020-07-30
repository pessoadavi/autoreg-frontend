import { Observable } from 'rxjs';
import { User } from './../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from 'src/app/models/response-api';
import { CurrentUser } from 'src/app/models/currentUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  /* Método para poder fazer o login do usuário */
  login(user: User): Observable<CurrentUser> {
    return this.http.post<CurrentUser>(`${this.baseUrl}/auth`, user);
  }

  /* Método para criar um novo usuário */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  /* Método para deletar um usuário*/
  deleteUser(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  /* Método que lerá todos os usuários cadastrados */
  read(page:number, count:number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.baseUrl}/${page}/${count}`);
  }

  /* Método para achar um usuário pelo seu id */
  readUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  /* Método que lerá todos os usuários cadastrados */
  listAllUser(page:number, count:number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.baseUrl}/${page}/${count}`);
  }

  /* Método para atualizar os dados de um usuário */
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

  /* Método que mostra mensagens configuradas nos componentes */
  showMessage(msg: string): void {
  this.snackbar.open(msg,'X', {
    duration: 4000,
    verticalPosition: 'top',
    horizontalPosition: 'center'
    //panelClass: isError? ['msg-error']:['msg-success']
  });
}

























}
