import { Component, OnInit } from '@angular/core';

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
        if (localStorage.getItem("currentUser")) {
            return true;
        }
        return false;
    }

}
