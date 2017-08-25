import { Component, OnInit, Input, state, style, transition, animate, trigger } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from "app/models/Site/Page";

@Component({
    selector: 'page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css'],
    animations: [
        trigger(
            "animation",
            [
                transition(
                    ":enter",
                    [
                        style({opacity: 0}),
                        animate(500, style({ opacity: 1 }))
                    ]
                )
            ]
        )
    ]
})
export class PageListComponent implements OnInit {

    @Input() pages:Array<Page>;
    @Input() siteId:string;
    @Input() activePage:string;

    constructor(private router:Router) { }

    ngOnInit() {
        if (!this.pages) {
            this.pages = new Array<Page>();
        }

        var urlSegments = this.router.parseUrl(this.router.url).root.children.primary.segments;

        if (urlSegments.length > 1) {
            this.activePage = urlSegments[1].path;
        }
    }

    goToPage(id:string) {
        this.router.navigate(["", this.siteId, id]);
        this.activePage = id;
    }

}
