import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AccountLogin } from 'app/models/Account/AccountLogin';
import { GlobalSettings } from 'app/app.static.values';
import { HttpHelper } from 'app/app.api';
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [HttpHelper]
})
export class LoginComponent implements OnInit {

    @Output() switchPageEvent = new EventEmitter();
    @Output() checkLoginEvent = new EventEmitter();

    public account:AccountLogin = new AccountLogin();
    public errorMsg: string;

    constructor(private router: Router, private httpHelper:HttpHelper, private commonService:CommonService) { }

    ngOnInit() {
        this.errorMsg = "";

        if (localStorage.getItem("currentUser")) {
            this.router.navigate(["/home"]);
        }
    }

    attemptLogin(account: AccountLogin) {
        let strAccount = JSON.stringify(account);
        try {
            this.httpHelper
                .post("account/login", strAccount)
                .subscribe(
                    result => this.processLogin(result),
                    error => this.setError(error)
                );
        }
        catch (e) {
            let extras:NavigationExtras = [ { "Message": e.message } ];
            this.router.navigate(["/error"], extras)
            alert(e.message);
        }
    }

    processLogin(result:string) {
        try {
            let obj = JSON.parse(result);
            
            if (obj.status == 200) {
                localStorage.setItem("currentUser", JSON.stringify(obj));
                this.commonService.processLoginAction();
                this.router.navigate(["/home"]);
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

    showRegistrationPage() {
        this.commonService.showAccountPage(false);
    }

    checkLoginStatus() {
        this.checkLoginEvent.next("checkLoginStatus");
    }

}
