import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SessionStorageValues } from "app/common.values";

@Injectable()
export class CommonService {

    private accountAction = new Subject<any>();
    accountActionObservable$ = this.accountAction.asObservable();

    private loginAction = new Subject<any>();
    loginActionObservable$ = this.loginAction.asObservable();

    private unlockSiteAction = new Subject<any>();
    unlockSiteActionObservable$ = this.unlockSiteAction.asObservable();

    private modalConfirmAction = new Subject<any>();
    modalConfirmActionObservable$  = this.modalConfirmAction.asObservable();

    constructor() { }

    public getAccountId() {
        let account: Account = JSON.parse(sessionStorage.getItem(SessionStorageValues.CURRENT_USER));

        return account.id;
    }

    public showAccountPage(showLogin: boolean) {
        this.accountAction.next(showLogin);
    }

    public processLoginAction() {
        this.loginAction.next();
    }

    public unlockSite() {
        this.unlockSiteAction.next();
    }

    public modalConfirmation() {
        this.modalConfirmAction.next();
    }

}