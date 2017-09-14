import { Component, OnInit } from '@angular/core';
import { Site } from 'app/models/Site/Site';
import { HttpHelper } from 'app/app.api';
import { CommonService } from 'app/common.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NotificationModalComponent } from 'app/generic/notification-modal/notification-modal.component';
import { Router } from '@angular/router';

@Component({
    selector: 'manage-sites',
    templateUrl: './manage-sites.component.html',
    styleUrls: ['./manage-sites.component.css']
})
export class ManageSitesComponent implements OnInit {

    public sites:Site[];

    constructor(private httpHelper:HttpHelper, 
        private commonService:CommonService, 
        private modalService:NgbModal,
        private router:Router) { }

    ngOnInit() {
        this.getSites();
    }

    private getSites() {
        this.httpHelper.get("site/my", this.commonService.getAccountId()).subscribe(
            result => this.processSites(result),
            error => this.showError(error)
        );
    }

    private processSites(result) {
        var obj = JSON.parse(result);
        if (obj.status == 200)
            this.sites = JSON.parse(obj._body)
    }

    private showError(error) {
        //log error
    }

    public goToSite(site) {
        this.router.navigate(["/", site.id]);
    }

    public showAccessCode(site) {
        let options:NgbModalOptions = { windowClass: "in" };
        let modal = this.modalService.open(NotificationModalComponent, options);
        modal.componentInstance.message = site.accessKey;
    }

}
