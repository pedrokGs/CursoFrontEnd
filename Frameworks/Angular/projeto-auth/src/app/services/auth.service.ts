import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3003/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      map(usuarios => {
        if (usuarios.length > 0) {
          throw new Error('Usuário já cadastrado');
        }
        return usuario
      }),
      switchMap(novoUsuario =>
        this.http.post(this.apiUrl, usuario).pipe(
          tap(() => alert('Usuário cadastrado com sucesso!')),

        )
      ), catchError(err => {
        alert("Erro: " + err.message);
        throw err;
      })
    );
  }

  login(credenciais: any): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuarios => {
        if (usuarios.length === 0) return false;
        const usuario = usuarios[0];
        localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario));
        this.router.navigate(['/interna']);
        return true;
      })
    )
  }


  logout() {
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(['/login']);
  }

  estaAutenticado(): boolean {
    return localStorage.getItem(this.CHAVE_AUTH) !== null;
  }

  getUsuarioLogado(): any {
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
}
