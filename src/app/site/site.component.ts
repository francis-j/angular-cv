import { Component, OnInit, Input } from '@angular/core';
import { HttpHelper } from "app/app.api";
import { Site } from "app/models/Site/Site";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

    private subscription:Subscription;
    site:Site = new Site();

    constructor(private route:ActivatedRoute, private httpHelper: HttpHelper) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params:Params) => this.getSite(params["id"])
        );
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    private getSite(id:string) {
        this.httpHelper.get("site", id).subscribe(
            result => this.processSite(result)
        );
    }

    private processSite(result:any) {
        this.site = JSON.parse(JSON.parse(result)._body)[0];
    }

}
