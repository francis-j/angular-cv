import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

    @Input() title:string;

    constructor(private activeModal:NgbActiveModal, private commonService:CommonService) { }

    ngOnInit() {
    }

    public confirm() {
        this.commonService.modalConfirmation();

        this.activeModal.dismiss();
    }

    public cancel() {
        this.activeModal.dismiss();
    }

}
