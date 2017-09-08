import { Component, OnInit, Input } from '@angular/core';
import { Page } from "app/models/Site/Page";

@Component({
    selector: 'site-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    @Input() page:Page;

    constructor() { }

    ngOnInit() {
    }

}
