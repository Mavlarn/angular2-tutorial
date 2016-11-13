import { Injectable } from '@angular/core';

import { Account } from './account';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
    account: Account;

    // simulation to get account based on cookie or token in localStorage.
    login(): Observable<Account> {
        let account = new Account();
        account.id = 11;
        account.name = 'super man';
        account.roles = ['CUSTOMER', 'OPERATOR'];
        this.account = account;
        return Observable.of(account);
    }
    getAccount(): Account {
        return this.account;
    }
    isLogdedin(): boolean {
        return this.account && this.account.id != null;
    }
}