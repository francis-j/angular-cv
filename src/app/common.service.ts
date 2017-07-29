import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
    
}