import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonValues } from "app/common.values";
import { HttpHelper } from "app/app.api";
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-unlock-site',
    templateUrl: './unlock-site.component.html',
    styleUrls: ['./unlock-site.component.css']
})
export class UnlockSiteComponent implements OnInit {

    @Input() siteId:string;

    public errorMsg:string;

    constructor(public activeModal: NgbActiveModal, private httpHelper:HttpHelper, private commonService:CommonService) { }

    ngOnInit() {
        this.errorMsg = "";
    }

    validateCode(code: string) {
        
        var json = JSON.stringify([this.siteId, code]);
        this.httpHelper.post("site/validateAccessKey", json).subscribe(
            result => this.validationSuccessul(),
            error => this.validationFailed(error)
        );
    }

    validationSuccessul() {
        this.commonService.unlockSite();

        this.activeModal.dismiss();
    }

    validationFailed(error:any) {
        this.errorMsg = <any>error._body;
    }

}
