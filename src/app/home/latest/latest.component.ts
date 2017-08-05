import { Component, OnInit } from '@angular/core';
import { Site } from "app/models/Site/Site";
import { HttpHelper } from "app/app.api";
import { Router } from "@angular/router";

@Component({
    selector: 'latest-sites',
    templateUrl: './latest.component.html',
    styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

    public sites:Array<Site> = [];

    constructor(private httpHelper:HttpHelper, private router:Router) { }

    ngOnInit() {
        this.httpHelper.get("site").subscribe(
            result => this.processSites(result)
        );
    }

    processSites(result: any) {
        let sites:Array<Site> = JSON.parse(JSON.parse(result)._body);
        
        this.sites = sites;
    }

    goToSite(id:string) {
        this.router.navigate(["", id]);
    }

}
