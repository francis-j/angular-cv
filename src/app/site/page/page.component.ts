import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'site-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
    inputs: ["page"]
})
export class PageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
