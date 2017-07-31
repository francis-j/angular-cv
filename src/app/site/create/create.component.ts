import { Component, OnInit } from '@angular/core';
import { RequestOptionsArgs, Headers } from "@angular/http";
import { SiteCreate } from "app/models/Site/SiteCreate";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, NavigationExtras } from "@angular/router";
import { HttpHelper } from "app/app.api";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    private headers: Headers = new Headers({
        "Content-Type": "application/json"
    });
    private options: RequestOptionsArgs = { headers: this.headers };
    public form: FormGroup;
    public errorMsg: string;

    constructor(private router: Router, private httpHelper:HttpHelper) { }

    ngOnInit() {
        this.errorMsg = "";
        this.form = new FormGroup({
            title: new FormControl("", Validators.required),
            description: new FormControl("", [])
        });
    }

    createSite(form: FormGroup) {

        var site = new SiteCreate();
        site.title = form.controls["title"].value;
        site.description = form.controls["description"].value;

        let siteJson = JSON.stringify(site);
        try {
            this.httpHelper
                .post("site", siteJson)
                .subscribe(
                    result => this.processResult(result),
                    error => this.setError(error)
                );
        }
        catch (e) {
            let extras: NavigationExtras = [{ "Message": e.message }];
            this.router.navigate(["/error"], extras)
            alert(e.message);
        }
    }

    processResult(result:string) {
        try {
            let obj = JSON.parse(result);
            
            if (obj.status == 200) {
                let body = JSON.parse(obj._body)[0];
                this.router.navigate(["/site/" + body.id]);
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
