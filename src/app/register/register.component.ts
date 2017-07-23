import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Register } from "app/models/Register";
import { Router, NavigationExtras } from "@angular/router";
import { HttpHelper } from "app/app.api";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @Output() switchPageEvent = new EventEmitter();
    public errorMsg: string;

    constructor(private router: Router, private httpHelper: HttpHelper) { }

    ngOnInit() {
        this.errorMsg = "";
    }

    switchPage() {
        this.switchPageEvent.next("switchPage");
    }

    attemptRegister(register: Register) {
        let r = JSON.stringify(register);
        try {
            var statusCode = this.httpHelper.post("account/register", r);

            switch (statusCode) {
                case 200:
                    this.router.navigate(["/account"]);
                    break;
                case 400:
                    this.errorMsg = "Fuck.";
                    break;
                default:
                    this.errorMsg = "Shit.";
            }
        }
        catch (e) {
            let extras: NavigationExtras = [{ "Message": e.message }];
            this.router.navigate(["/error"], extras)
            alert(e.message);
        }
    }

}
