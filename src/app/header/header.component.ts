import { Component, OnInit, Input } from '@angular/core';
import { HeaderItem } from "app/models/Generic/HeaderItem";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() menuItems:Array<HeaderItem>;

    constructor() { }

    ngOnInit() {
    }

}
