import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

    constructor(private _httpService:Http) { }

    ngOnInit() {
    }

    submitForm(event) {
        //this._httpService.post("http://localhost:5000/api/user", event)
    }

}