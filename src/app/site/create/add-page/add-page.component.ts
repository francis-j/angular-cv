import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Page } from "app/models/Page/Page";
import { SiteService } from "app/services/site.service";

@Component({
    selector: 'add-page-modal',
    templateUrl: './add-page.component.html',
    styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

    @Input() page:Page;
    private hasNewPage:boolean;

    constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, 
        private siteService: SiteService) { }

    ngOnInit() {
        if (!this.page) {
            this.page = new Page("", "");
            this.hasNewPage = true;
        }
        else {
            this.hasNewPage = false;
        }
    }

    savePage(title:string, description:string) {
        var page = new Page(title, description);

        if (this.hasNewPage) {
            this.siteService.savePage(page);
        }
        else {
            this.siteService.updatePage(this.page, page);
        }

        this.activeModal.dismiss();
    }

}
