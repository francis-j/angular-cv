import { Component, OnInit } from '@angular/core';
import { MenuItem } from "app/MenuItem";

@Component({
    selector: 'app-horizontal-list',
    templateUrl: './horizontal-list.component.html',
    styleUrls: ['./horizontal-list.component.css'],
    inputs: ["listItems"]
})
export class HorizontalListComponent implements OnInit {

    constructor() { }
    ngOnInit() {

    }

}