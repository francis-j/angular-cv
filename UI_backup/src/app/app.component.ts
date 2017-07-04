import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MenuItem } from "app/MenuItem";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private _httpService: Http) { }
    menuItems: Array<MenuItem>;
    ngOnInit() {
        this._httpService.get("api/page").subscribe(values => {
            this.menuItems = values.json() as Array<MenuItem>;
        });
    }
}