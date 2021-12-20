import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(public route:Router){}

// Refered and implmented by Suhas from https://www.angular.io
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
  
      if(localStorage.getItem('username'))
      {
        return true;

      }
      else
      {
        this.route.navigateByUrl('/login');
        return false;
      }


    }
}
