import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import { Site } from "app/models/Site/Site";
import { HttpHelper } from "app/app.api";
import { Router } from "@angular/router";
import { CommonService } from "app/common.service";

@Component({
    selector: 'my-sites',
    templateUrl: './my-sites.component.html',
    styleUrls: ['./my-sites.component.css'],
    animations: [
        trigger(
            "animation",
            [
                transition(
                    ":enter",
                    [
                        style({ opacity: 0 }),
                        animate("500ms", style({ opacity: 1 }))
                    ]
                ),
                transition(
                    ":leave",
                    [
                        style({ opacity: 1 }),
                        animate("0ms", style({ opacity: 0 }))
                    ]
                )
            ]
        )
    ]
})
export class MySitesComponent implements OnInit {

    public sites:Array<Site> = [];
    public errorMsg:string;

    constructor(private httpHelper:HttpHelper, private router:Router, private commonService:CommonService) { }

    ngOnInit() {
        this.httpHelper.get("site/my", this.commonService.getAccountId()).subscribe(
            result => this.processSites(result)
        );

        this.errorMsg = "";
    }

    private processSites(result: any) {
        let sites:Array<Site> = JSON.parse(JSON.parse(result)._body);
        
        this.sites = sites;
    }

    goToSite(site:Site) {
        let siteId = site.id;
        let pageId = site.pages.length > 0 ? site.pages[0].id : "";

        this.router.navigate(["", siteId, pageId]);
    }

    editSite(site:Site) {
        this.router.navigate(["site/edit", site.id]);
    }

    deleteSite(site:Site) {
        this.httpHelper.delete("site", site.id).subscribe(
            result => this.processDeletion(site.id),
            error => this.setErrorMsg(error)
        );
    }

    private processDeletion(id:string) {
        this.sites.splice(this.sites.findIndex(x => x.id == id), 1);
    }

    private setErrorMsg(error) {
        this.errorMsg = error.message;
    }
}
