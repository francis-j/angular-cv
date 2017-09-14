import { Component, OnInit } from '@angular/core';
import { HttpHelper } from "app/app.api";
import { HeaderItem } from "app/models/Generic/HeaderItem";
import { Router } from "@angular/router";
import { SessionStorageValues } from "app/common.values";
import { Account } from "app/models/account/account";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpHelper]
})
export class AppComponent implements OnInit {

    constructor(private http: HttpHelper, private router:Router) { }
    menuItems: Array<HeaderItem>;

    ngOnInit() {
        if (!sessionStorage.getItem(SessionStorageValues.CURRENT_USER)) {
            this.router.navigate(["/account"]);
        }
        else {
            let account:Account = JSON.parse(sessionStorage.getItem(SessionStorageValues.CURRENT_USER));

            var limit = new Date().getTime() - 18000000; //5 hours
            if (new Date(account.timestamp).getTime() - limit < 0) {
                sessionStorage.removeItem(SessionStorageValues.CURRENT_USER);
                this.router.navigate(["/account"]);
            }
        }
    }
}