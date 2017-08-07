import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { CommonService } from "app/common.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    public showLogin: boolean;
    private accountSubscription:Subscription;
    private routeSubscription:Subscription;

    constructor(private router:Router, private commonService:CommonService) { }

    ngOnInit() {
        this.showLogin = true;
        
        this.accountSubscription = this.commonService.accountActionObservable$.subscribe(
            result => this.showAccountPage(result)
        );
    }

    ngOnDestroy() {
        if (this.accountSubscription)
            this.accountSubscription.unsubscribe();
    }

    showAccountPage(showLogin:boolean) {
        this.showLogin = showLogin;
    }

    private handleRouteParams(action:string) {
        if (action == "register") {
            this.showLogin = false;
        }
        else {
            this.showLogin = true;
        }
    }

}
