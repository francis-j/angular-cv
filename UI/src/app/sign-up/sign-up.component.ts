import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from 'app/models/User';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

    private url = "";
    private headers:Headers = new Headers({ "Content-Type": "application/json" });

    constructor(private _httpService:Http) { }

    ngOnInit() {
    }

    submitForm(user: User) {
        this._httpService.post(this.url, JSON.stringify(user), { headers: this.headers });
    }

}