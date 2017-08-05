import { Component, OnInit } from '@angular/core';
import { HttpHelper } from "app/app.api";
import { HeaderItem } from "app/models/Generic/HeaderItem";
import { Router } from "@angular/router";
import { LocalStorageValues } from "app/common.values";

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
        if (!localStorage.getItem(LocalStorageValues.CURRENT_USER)) {
            this.router.navigate(["/account"]);
        }
    }
}