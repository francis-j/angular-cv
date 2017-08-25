import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Page } from "app/models/Site/Page";
import { SiteService } from "app/services/site.service";
import { Section } from "app/models/Site/Section";

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
            this.page = new Page("", "", new Array<Section>());
            this.hasNewPage = true;
        }
        else {
            this.hasNewPage = false;
        }
    }

    savePage(title:string, description:string, sections:Array<Section>) {
        var page = new Page(title, description, sections);

        if (this.hasNewPage) {
            this.siteService.savePage(page);
        }
        else {
            this.siteService.updatePage(this.page, page);
        }

        this.activeModal.dismiss();
    }

}
