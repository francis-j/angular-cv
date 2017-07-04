import { Component, OnInit } from '@angular/core';
import { MenuItem } from "app/MenuItem";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    inputs: ["menuItems"]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
