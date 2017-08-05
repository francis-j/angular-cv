import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LocalStorageValues } from "app/common.values";

@Injectable()
export class CommonService {

    private accountAction = new Subject<any>();
    accountActionObservable$ = this.accountAction.asObservable();

    private loginAction = new Subject<any>();
    loginActionObservable$ = this.loginAction.asObservable();

    constructor() { }

    public showAccountPage(showLogin:boolean) {
        this.accountAction.next(showLogin);
    }

    public processLoginAction() {
        this.loginAction.next();
    }

    public getAccountId() {
        let account:Account = JSON.parse(localStorage.getItem(LocalStorageValues.CURRENT_USER));

        return account.id;
    }
    
}