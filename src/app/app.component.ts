import { Component, OnInit } from '@angular/core';
import { HttpHelper } from "app/app.api";
import { HeaderItem } from "app/models/Generic/HeaderItem";
import { Router } from "@angular/router";

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
        if (!localStorage.getItem("currentUser")) {
            this.router.navigate(["/account"]);
        }
    }
}