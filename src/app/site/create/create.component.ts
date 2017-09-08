import { Component, OnInit, Input } from '@angular/core';
import { RequestOptionsArgs, Headers } from "@angular/http";
import { Site } from "app/models/Site/Site";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router, NavigationExtras, ActivatedRoute, Params } from "@angular/router";
import { HttpHelper } from "app/app.api";
import { CommonService } from "app/common.service";
import { Page } from "app/models/Site/Page";
import { AddPageComponent } from "app/site/create/add-page/add-page.component";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { SiteService } from "app/services/site.service";
import { Subscription } from "rxjs/Subscription";
import { NotificationModalComponent } from "app/generic/notification-modal/notification-modal.component";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    private site:Site;
    private subscription:Subscription;

    private headers: Headers = new Headers({
        "Content-Type": "application/json"
    });
    private options: RequestOptionsArgs = { headers: this.headers };
    public form: FormGroup;
    public errorMsg: string;
    
    public pages: Array<Page>;
    private addPageSubscription:Subscription;
    private updatePageSubscription:Subscription;

    constructor(private route:ActivatedRoute, private router: Router, private httpHelper: HttpHelper, private modalService: NgbModal, 
        private commonService: CommonService, private siteService: SiteService) { }

    ngOnInit() {
        this.errorMsg = "";

        this.form = new FormGroup({
            title: new FormControl("", Validators.required),
            description: new FormControl("", [])
        });

        this.pages = new Array<Page>();
        
        this.subscription = this.route.params.subscribe(
            (params:Params) => this.getSite(params["siteId"])
        );

        this.addPageSubscription = this.siteService.pageAddedObservable$.subscribe(
            result => this.addPage(result),
            error => this.setError(error)
        );

        this.updatePageSubscription = this.siteService.pageUpdatedObservable$.subscribe(
            result => this.updatePage(result),
            error => this.setError(error)
        );
    }

    private getSite(siteId:string) {
        if (siteId) {
            this.httpHelper.get("site", siteId).subscribe(
                result => this.processSite(result),
                error => this.showError(error)
            );
        }
    }

    private processSite(result:any) {
        this.site = JSON.parse(JSON.parse(result)._body)[0];

        if (this.site)
            this.populateSiteForm();
    }
    
    private populateSiteForm() {
        this.form = new FormGroup({
            title: new FormControl(this.site.title, Validators.required),
            description: new FormControl(this.site.description, [])
        });

        this.pages = this.site.pages;
    }

    addPage(page: Page) {
        this.errorMsg = "";
        var titleExists = false;

        this.pages.forEach(element => {
            if (element.title == page.title)
                titleExists = true;
        });

        if (titleExists)
            this.errorMsg = "A page with this title already exists.";
        else
            this.pages.push(page);
    }

    updatePage(pages:Page[]) {
        this.errorMsg = "";
        let oldPage = pages[0];
        let newPage = pages[1];

        let index = this.pages.indexOf(oldPage)
        
        if (index >= 0) {
            this.pages[index] = newPage;
        }
    }

    clearPages() {
        this.pages = new Array<Page>();
    }

    createSite(form: FormGroup) {

        var site = this.site ? this.site : new Site();
        site.title = form.controls["title"].value;
        site.description = form.controls["description"].value;
        site.accountId = this.commonService.getAccountId();
        site.pages = this.pages;

        let siteJson = JSON.stringify(site);
        try {

            if (this.site) {
                this.httpHelper
                    .put("site", site.id, siteJson)
                    .subscribe(
                        result => this.processResult(result),
                        error => this.setError(error)
                    );
            }
            else {
                this.httpHelper
                    .post("site", siteJson)
                    .subscribe(
                        result => this.processResult(result),
                        error => this.setError(error)
                    );
            }
            
        }
        catch (e) {
            let extras: NavigationExtras = [{ "Message": e.message }];
            this.router.navigate(["error"], extras)
            alert(e.message);
        }
    }

    processResult(result:string) {
        try {
            let obj = JSON.parse(result);
            
            if (obj.status == 200) {
                let body = JSON.parse(obj._body);
                this.router.navigate([body.id]);
                
                let options:NgbModalOptions = { windowClass: "in" };
                const modal = this.modalService.open(NotificationModalComponent, options);
                modal.componentInstance.message = "Site Access Key: " + body.accessKey;
            } else {
                this.errorMsg = "An error has occurred: " + obj.statusText;
            }
        }
        catch (e) {
            alert(e.message);
        }
    }

    setError(error:any) {
        this.errorMsg = <any>error._body;
    }

    public openModal(page?:Page) {
        let options:NgbModalOptions = { windowClass: "in" };
        const modalRef = this.modalService.open(AddPageComponent, options);

        if (page) {
            modalRef.componentInstance.page = page;
        }
    }

    private showError(code:Number) {
        this.router.navigate(["error", code]);
    }

}
