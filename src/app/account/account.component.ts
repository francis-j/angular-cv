import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    public showLogin: boolean;

    constructor() { }

    ngOnInit() {
        this.showLogin = true;
    }

    switchPage() {
        this.showLogin = !this.showLogin;
    }

}
