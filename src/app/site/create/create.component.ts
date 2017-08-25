import { Component, OnInit } from '@angular/core';
import { RequestOptionsArgs, Headers } from "@angular/http";
import { Site } from "app/models/Site/Site";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router, NavigationExtras } from "@angular/router";
import { HttpHelper } from "app/app.api";
import { CommonService } from "app/common.service";
import { Page } from "app/models/Site/Page";
import { AddPageComponent } from "app/site/create/add-page/add-page.component";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { SiteService } from "app/services/site.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    private headers: Headers = new Headers({
        "Content-Type": "application/json"
    });
    private options: RequestOptionsArgs = { headers: this.headers };
    public form: FormGroup;
    public errorMsg: string;
    
    public pages: Array<Page>;
    private addPageSubscription:Subscription;
    private updatePageSubscription:Subscription;

    constructor(private router: Router, private httpHelper: HttpHelper, private modalService: NgbModal, 
        private commonService: CommonService, private siteService: SiteService) { }

    ngOnInit() {
        this.errorMsg = "";
        this.form = new FormGroup({
            title: new FormControl("", Validators.required),
            description: new FormControl("", [])
        });

        this.pages = new Array<Page>();

        this.addPageSubscription = this.siteService.pageAddedObservable$.subscribe(
            result => this.addPage(result),
            error => this.setError(error)
        );

        this.updatePageSubscription = this.siteService.pageUpdatedObservable$.subscribe(
            result => this.updatePage(result),
            error => this.setError(error)
        );
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

        var site = new Site();
        site.title = form.controls["title"].value;
        site.description = form.controls["description"].value;
        site.accountId = this.commonService.getAccountId();
        site.pages = this.pages;

        let siteJson = JSON.stringify(site);
        try {
            this.httpHelper
                .post("site", siteJson)
                .subscribe(
                    result => this.processResult(result),
                    error => this.setError(error)
                );
        }
        catch (e) {
            let extras: NavigationExtras = [{ "Message": e.message }];
            this.router.navigate(["/error"], extras)
            alert(e.message);
        }
    }

    processResult(result:string) {
        try {
            let obj = JSON.parse(result);
            
            if (obj.status == 200) {
                let body = JSON.parse(obj._body);
                this.router.navigate([body.id]);
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

    

}
