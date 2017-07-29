import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "app/models/MenuItem";
import { Subscription } from "rxjs/Subscription";
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
    @Input() menuItems:Array<MenuItem>;
    accountItems:Array<MenuItem>;
    private loggedIn:boolean;
    private subscription:Subscription;

    constructor(private commonService:CommonService) { }

    ngOnInit() {
        this.accountItems = new Array<MenuItem>();
        this.checkLoginStatus();

        this.subscription = this.commonService.loginActionObservable$.subscribe(
            result => this.checkLoginStatus()
        );
    }

    checkLoginStatus() {
        this.loggedIn = localStorage.getItem("currentUser") ? true : false;
        this.updateAccountItems();
    }

    private updateAccountItems() {
        this.accountItems = new Array<MenuItem>();

        if (this.loggedIn) {
            this.accountItems.push({ 
                title: "Log Out", 
                urlRoute: "logout"
            });
        }
        else {
            this.accountItems.push({ 
                title: "Log In", 
                urlRoute: "account/login"
            });
            this.accountItems.push({ 
                title: "Register", 
                urlRoute: "account/register"
            });
        }
    }
}
