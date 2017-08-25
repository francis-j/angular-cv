import { Component, OnInit, Input } from '@angular/core';
import { HttpHelper } from "app/app.api";
import { Site } from "app/models/Site/Site";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Page } from "app/models/Site/Page";
import { Section } from "app/models/Site/Section";

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

    private subscription:Subscription;
    public site:Site = new Site();
    public page:Page;

    constructor(private route:ActivatedRoute, private httpHelper: HttpHelper, private router:Router) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params:Params) => this.getSite(params["siteId"], params["pageId"])
        );

        this.page = new Page("", "", new Array<Section>());
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    private getSite(siteId:string, pageId:string) {
        this.httpHelper.get("site", siteId).subscribe(
            result => this.processSite(result, pageId),
            error => this.error(error)
        );
    }

    private processSite(result:any, pageId:string) {
        this.site = JSON.parse(JSON.parse(result)._body)[0];

        if (pageId) {
            this.page = this.site.pages.find(x => x.id == pageId);
        }
    }

    private error(error) {
        this.router.navigate["/error"];
    }

}
