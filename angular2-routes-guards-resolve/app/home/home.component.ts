import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {

    constructor(private authService: AuthService) {

    }
    isLoggedin() {
        return this.authService.isLogdedin();
    }
    login() {
        return this.authService.login().subscribe(() => {
            alert('login successfully.')
        });
    }
}

