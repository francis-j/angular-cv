import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { User } from 'app/models/User';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private url = "http://localhost:5000/api/user";
    private headers:Headers = new Headers({ "Content-Type": "application/json" });
    private options:RequestOptionsArgs = { headers: this.headers };

    constructor(private _httpService:Http) { }

    ngOnInit() {

    }

    submitForm(username) {
        let u = JSON.stringify(username);
        this._httpService.post(this.url, u, this.options);
    }

}