import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "app/models/MenuItem";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() menuItems:Array<MenuItem>;

    constructor() { }

    ngOnInit() {
    }

}
