import { Component, OnInit, Input } from '@angular/core';
import { HeaderItem } from "app/models/Generic/HeaderItem";
import { Subscription } from "rxjs/Subscription";
import { CommonService } from "app/common.service";
import { SessionStorageValues } from "app/common.values";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
    @Input() menuItems:Array<HeaderItem>;
    public accountItems:Array<HeaderItem>;
    private loggedIn:boolean;
    private subscription:Subscription;

    public showNav:boolean;

    constructor(private router:Router, private commonService:CommonService) { }

    ngOnInit() {
        this.accountItems = new Array<HeaderItem>();
        this.checkLoginStatus();

        this.subscription = this.commonService.loginActionObservable$.subscribe(
            result => this.checkLoginStatus()
        );

        this.showNav = false;
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    checkLoginStatus() {
        this.loggedIn = sessionStorage.getItem(SessionStorageValues.CURRENT_USER) ? true : false;
        this.updateAccountItems();
    }

    private updateAccountItems() {
        this.accountItems = new Array<HeaderItem>();

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

    //Drag events
    public onDrag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    public onDrop(event) {
        event.preventDefault();
        this.router.navigate(["tv"]);
    }

    public allowDrop(event) {
        event.preventDefault();
    }
}
