import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { MenuItem } from "app/models/MenuItem";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private _httpService: Http) { }
    menuItems: Array<MenuItem>;

    ngOnInit() {
        this._httpService.get("http://localhost:5000/api/page").subscribe(values => {
            this.menuItems = values.json() as Array<MenuItem>;
        });
    }
}