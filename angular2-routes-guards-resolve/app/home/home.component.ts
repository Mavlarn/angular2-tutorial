import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {

    constructor(private authService: AuthService, private router: Router) {

    }
    isLoggedin() {
        return this.authService.isLogdedin();
    }
    login(role: string) {
        return this.authService.login(role).subscribe(() => {
            alert('login successfully as:' + role)
            if (role === 'CUSTOMER') {
                this.router.navigate(['/todo/list'])
            }
        });
    }
    hasRole(role: string): boolean {
        return this.authService.hasRole(role);
    }
}

