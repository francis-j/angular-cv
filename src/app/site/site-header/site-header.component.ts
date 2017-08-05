import { Component, OnInit, Input } from '@angular/core';
import { Site } from "app/models/Site/Site";

@Component({
    selector: 'site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.css'],
    inputs: ["site"]
})
export class SiteHeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
