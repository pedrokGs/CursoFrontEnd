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

  // cadastrar o usuário no sistema
  registrar(usuario: any): Observable<any> {
    // verificar se o usuário já existe
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      map(usuarios => {
        // se usuário já existe
        if (usuarios.length > 0) {
          // lançar um erro para o sistema.
          throw new Error('Usuário já cadastrado');
        }
        return usuario
      }),

      // se usuário não existe, cadastrar o novo usuário
      switchMap(novoUsuario =>
        this.http.post(this.apiUrl, usuario).pipe(
          tap(() => alert('Usuário cadastrado com sucesso!')),

        )
      ), catchError(err => {
        // tratar o erro
        alert("Erro: " + err.message);
        throw err;
      })
    );
  }

  // logar usuários já registrados
  login(credenciais: any): Observable<boolean> {
    // passar o banco para uma busca com email e senha''
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuarios => {
        // se não encontrar nenhum usuário, retornar falso
        if (usuarios.length === 0) return false;

        // o usuario e chave de autenticação => localstorage
        const usuario = usuarios[0];
        localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario));
        this.router.navigate(['/interna']);
        return true; // deu certo -> pode avançar
      })
    )
  }


  logout() {
    // limpo o localstorage
    localStorage.removeItem(this.CHAVE_AUTH);
    // redireciono para a página de login
    this.router.navigate(['/login']);
  }

  // autorização do acesso
  estaAutenticado(): boolean {
    // transformando a verificação da string em boolean
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  // pegar dados do usuário
  getUsuarioLogado(): any {
    // ao armazenar no localstorage -> texto
    // pegar do localstorage -> converter para json
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
}


}
