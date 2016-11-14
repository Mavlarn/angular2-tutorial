import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, Router,
    ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { TodoDetailComponent } from './detail/detail.component';

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
        if (requiredRole == null || this.authService.hasRole(requiredRole)) {
            return true;
        }
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('can activate child: ', childRoute.url[0].path);
        return this.canActivate(childRoute, state);
    }
}

@Injectable()
export class CanLeaveTodoDetailGuard implements CanDeactivate<TodoDetailComponent> {
    canDeactivate(component: TodoDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return confirm('Confirm?');
    }
}