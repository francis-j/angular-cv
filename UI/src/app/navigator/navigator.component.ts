import { Component, OnInit } from '@angular/core';
import { MenuItem } from "app/MenuItem";
import { Http } from "@angular/http";

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css'],
    inputs: ["menuItems"]
})
export class NavigatorComponent implements OnInit {

    accountItems:Array<MenuItem>;

    constructor(private _httpService: Http) { }

    ngOnInit() {
        this.accountItems = new Array<MenuItem>();
        this.accountItems.push({ title: "Login", urlTag: "login" });
        this.accountItems.push({ title: "Sign Up", urlTag: "signup" });
    }

    DoShit()
    {

    }

}
