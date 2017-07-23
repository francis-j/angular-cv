import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "app/models/MenuItem";

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

    @Input() menuItems:Array<MenuItem>;
    accountItems:Array<MenuItem>;

    constructor() { }

    ngOnInit() {
        this.accountItems = new Array<MenuItem>();
        let loggedIn:boolean = localStorage.getItem("currentUser") ? false : true;

        this.accountItems.push({ 
            title: "Log In", 
            urlRoute: "login", 
            visible: !loggedIn
        });
        this.accountItems.push({ 
            title: "Log Out", 
            urlRoute: "logout",
            visible: loggedIn
        });
        this.accountItems.push({ 
            title: "Register", 
            urlRoute: "signup",
            visible: !loggedIn
        });
    }

}
