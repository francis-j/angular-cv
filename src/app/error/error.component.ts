import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

    private subscription:Subscription;

    public errorCode:string;
    public errorMessage:string;

    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            params => this.setErrorMessage(params["code"]),
            error => this.setErrorMessage("-1")
        );
    }

    private setErrorMessage(code:string) {
        this.errorCode = code;
        this.errorMessage = this.getMessageFromCode(code);
    }

    private getMessageFromCode(code:string):string {
        switch(code) {
            case "401":
                return "You are not authorized.";
            case "404":
                return "Not found.";
            default:
                return "An error occurred.";
        }
    }

}