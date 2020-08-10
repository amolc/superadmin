import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate{

  constructor(public svc: HardcodedAuthenticationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.svc.isUserLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }}