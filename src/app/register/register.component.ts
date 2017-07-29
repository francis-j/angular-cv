import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountRegister } from "app/models/AccountRegister";
import { Router, NavigationExtras } from "@angular/router";
import { HttpHelper } from "app/app.api";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http, RequestOptionsArgs, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [HttpHelper]
})
export class RegisterComponent implements OnInit {

    private headers:Headers = new Headers({
        "Content-Type": "application/json"
    });
    private options:RequestOptionsArgs = { headers: this.headers };

    @Output() switchPageEvent = new EventEmitter();

    public account:AccountRegister = new AccountRegister();
    public form:FormGroup;
    public errorMsg: string;

    constructor(private router: Router, private httpHelper: HttpHelper, private http:Http, private commonService:CommonService) { }

    ngOnInit() {
        this.errorMsg = "";
        this.form = new FormGroup({
            email: new FormControl("", Validators.required),
            password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
            repeatPassword: new FormControl("", Validators.required),
            name: new FormControl("", Validators.required)
        });
    }

    showLoginPage() {
        this.commonService.showAccountPage(true);
    }
    
    attemptRegister(form: FormGroup) {

        var account:AccountRegister = new AccountRegister();
        account.email = form.controls["email"].value;
        account.password = form.controls["password"].value;
        account.repeatPassword = form.controls["repeatPassword"].value;
        account.name = form.controls["name"].value;

        if (account.password != account.repeatPassword) {
            this.errorMsg = "Passwords do not match.";
            return;
        }

        let strAccount = JSON.stringify(account);
        try {
            this.httpHelper
                .post("account/register", strAccount)
                .subscribe(
                    result => this.processRegistration(result),
                    error => this.setError(error)
                );
        }
        catch (e) {
            let extras: NavigationExtras = [{ "Message": e.message }];
            this.router.navigate(["/error"], extras)
            alert(e.message);
        }
    }

    processRegistration(result:string) {
        try {
            let obj = JSON.parse(result);
            
            if (obj.status == 200) {
                this.showLoginPage();
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

}