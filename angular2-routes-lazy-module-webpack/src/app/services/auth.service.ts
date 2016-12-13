import { Injectable } from '@angular/core';

import { Account } from './account';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
    account: Account;

    constructor() {
      console.log('AuthService created.');
    }

    // simulation to login.
    login(role: string): Observable<Account> {
        let account = new Account();
        account.id = 11;
        account.name = 'super man';
        account.roles = [role];
        this.account = account;
        return Observable.of(account);
    }
    getAccount(): Account {
        return this.account;
    }
    isLogdedin(): boolean {
        return this.account && this.account.id != null;
    }
    hasRole(role: string): boolean {
        return this.account && this.account.roles.indexOf(role) >= 0;
    }
}
