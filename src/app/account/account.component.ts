import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    public showLogin: boolean;
    private subscription:Subscription;

    constructor(private commonService:CommonService) { }

    ngOnInit() {
        this.showLogin = true;
        
        this.subscription = this.commonService.accountActionObservable$.subscribe(
            result => this.showAccountPage(result)
        );
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    showAccountPage(showLogin:boolean) {
        this.showLogin = showLogin;
    }

}
