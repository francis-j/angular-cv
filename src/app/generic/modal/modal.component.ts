import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    inputs: ["modalContent"]
})
export class ModalComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
