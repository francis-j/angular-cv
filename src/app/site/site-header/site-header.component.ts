import { Component, OnInit, Input } from '@angular/core';
import { Site } from "app/models/Site/Site";
import { CommonService } from "app/common.service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { UnlockSiteComponent } from "app/site/unlock-site/unlock-site.component";
import { Router } from "@angular/router";
import { HttpHelper } from "app/app.api";
import { Subscription } from "rxjs/Subscription";
import { ConfirmationModalComponent } from "app/generic/confirmation-modal/confirmation-modal.component";

@Component({
    selector: 'site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

    @Input() site:Site;

    private subscription:Subscription;
    private modalSubscription:Subscription;

    public isSiteLocked:boolean;
    public showLock:boolean;

    constructor(private router:Router, private commonService:CommonService, private modalService: NgbModal, private httpHelper:HttpHelper) { }

    ngOnInit() {
        this.isSiteLocked = this.showLock = true;

        this.subscription = this.commonService.unlockSiteActionObservable$.subscribe(
            result => this.unlockSite()
        );
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();

        if (this.modalSubscription)
            this.modalSubscription.unsubscribe();
    }

    private unlockSite() {
        this.isSiteLocked = false;
    }

    public requestAccessKey() {
        let options:NgbModalOptions = { windowClass: "in" };
        const modal = this.modalService.open(UnlockSiteComponent, options);
        modal.componentInstance.siteId = this.site.id;
    }

    public editSite(id:string) {
        this.router.navigate(["site/edit", id])
    }

    public requestDelete(id:string) {
        let options:NgbModalOptions = { windowClass: "in" };
        const modal = this.modalService.open(ConfirmationModalComponent, options);
        modal.componentInstance.title = "Are you sure you want to delete this site?";

        if (!this.modalSubscription) {
            this.modalSubscription = this.commonService.modalConfirmActionObservable$.subscribe(
                result => this.deleteSite(id)
            );
        }        
    }

    private deleteSite(id:string) {
        this.httpHelper.delete("site", id).subscribe(
            result => this.router.navigate([""]),
            error => this.router.navigate(["error", 404])
        );
    }

}
