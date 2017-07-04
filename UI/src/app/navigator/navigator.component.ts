import { Component, OnInit } from '@angular/core';
import { MenuItem } from "app/MenuItem";

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css'],
    inputs: ["menuItems"]
})
export class NavigatorComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
