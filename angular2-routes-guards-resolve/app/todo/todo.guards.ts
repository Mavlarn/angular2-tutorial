import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router,
    ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class MyTodoGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('can activate: ', next.url[0].path);
        let requiredRole = next.data['role'];
        console.log('Require role: ', requiredRole);
        if (!this.authService.isLogdedin()) {
            alert('You need to login!');
            this.router.navigate(['/home']);
            return false;
        }
        if (requiredRole == null || this.authService.getAccount().roles.includes(requiredRole)) {
            return true;
        }
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('can activate child: ', childRoute.url[0].path);
        return this.canActivate(childRoute, state);
    }
}