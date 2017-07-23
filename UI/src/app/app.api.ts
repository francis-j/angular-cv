import { Component, OnInit, Injectable } from "@angular/core";
import { Http, Headers, RequestOptionsArgs } from "@angular/http";
import { GlobalSettings } from "app/app.static.values";

@Injectable()
export class HttpHelper
{
    private headers:Headers = new Headers({
        "Content-Type": "application/json"
    });
    private options:RequestOptionsArgs = { headers: this.headers };

    constructor(private http:Http) { }

    get(apiRoute:string, id?:string):any {
        let url:string = GlobalSettings.API_URL + apiRoute + (id ? "/" + id : "");
        var model:any;

        this.http.get(url, this.options).subscribe(values => {
            model = values.json();
        });

        return model;
    }

    post(apiRoute:string, body:string):any {
        let url:string = GlobalSettings.API_URL + apiRoute;
        var status:any;

        this.http.post(url, body, this.options).subscribe(values => {
            status = { "code":values.status, "message":values.statusText };
        },
        error => {
            status = { "code":error.status, "message":error.statusText };
        });

        return status;
    }

    delete(apiRoute:string, id:string):boolean {
        let url:string = GlobalSettings.API_URL + apiRoute + "/" + id;
        var success = false;

        this.http.delete(url, this.options).subscribe(values => {
            success = values.ok;
        });

        return success;
    }

    put(apiRoute:string, body:string):any {
        let url:string = GlobalSettings.API_URL + apiRoute;
        var model:any;

        this.http.put(url, body, this.options).subscribe(values => {
            model = values.json();
        });

        return model;
    }
}