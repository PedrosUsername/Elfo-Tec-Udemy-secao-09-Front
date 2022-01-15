import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = "http://127.0.0.1:8080" + "/api/usuarios"
  tokenURL: string = "http://127.0.0.1:8080" + "/oauth/token"
  clientID: string = "my-angular-app";
  clientSecret: string = '@321';
  jwtHelper: JwtHelperService = new JwtHelperService();


  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean{
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired;
    }
    return false;
  }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token;
    }
    return null;
  }

  salvar(usuario: User): Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }

  tentarLogar( username: string, password: string ): Observable<any> {
    const params = new HttpParams()
                        .set('username', username)
                        .set('password', password)
                        .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    return this.http.post( this.tokenURL, params.toString(), { headers });
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name
      return usuario;
    }
    return null;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')
  }
}
