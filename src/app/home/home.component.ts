import { Component, OnInit } from '@angular/core';
import { LocalStorageValues } from "app/common.values";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    isUserLoggedIn(): boolean {
        if (localStorage.getItem(LocalStorageValues.CURRENT_USER)) {
            return true;
        }
        return false;
    }

}
