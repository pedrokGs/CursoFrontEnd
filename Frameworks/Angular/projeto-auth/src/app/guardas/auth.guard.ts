import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Middleware 
// implements -> contrato que obriga a implementar o método canActivate
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate() : boolean{
    if(this.authService.estaAutenticado()){
      return true;
    } else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}