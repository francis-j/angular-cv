import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from "app/common.service";
import { LocalStorageValues } from "app/common.values";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router, private commonService:CommonService) { }

    ngOnInit() {
        this.processLogout();
    }

    processLogout() {
        localStorage.removeItem(LocalStorageValues.CURRENT_USER);
        this.commonService.processLoginAction();
        this.router.navigate(["/account"]);
    }

    

}
