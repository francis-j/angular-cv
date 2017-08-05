import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from "app/models/Page/Page";

@Component({
    selector: 'page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    @Input() pages:Array<Page>;
    @Input() siteId:string;
    @Input() activePage:string;

    constructor(private router:Router) { }

    ngOnInit() {
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
