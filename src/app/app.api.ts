import { Component, OnInit, Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptionsArgs } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import { CommonValues } from "app/common.values";

@Injectable()
export class HttpHelper
{
    private headers:Headers = new Headers({
        "Content-Type": "application/json"
    });
    private options:RequestOptionsArgs = { headers: this.headers };

    constructor(private http:Http) { }

    get(apiRoute:string, id?:string):Observable<any> {
        let url:string = CommonValues.API_URL + apiRoute + (id ? "/" + id : "");

        return this.http
            .get(url, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    }

    post(apiRoute:string, body:string):Observable<any> {
        var url:string = CommonValues.API_URL + apiRoute;

        return this.http
            .post(url, body, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    }

    delete(apiRoute:string, id:string):Observable<any> {
        let url:string = CommonValues.API_URL + apiRoute + "/" + id;

        return this.http
            .delete(url, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    }

    put(apiRoute:string, body:string):Observable<any> {
        let url:string = CommonValues.API_URL + apiRoute;

        return this.http
            .put(url, body, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    }

    private getResponseData(res:Response) {
        let body = JSON.stringify(res);
        return body || {};
    }

    private logError(error:any) {
        console.error("Error", error);
        console.log("Error");
        return Observable.throw(error);
    }
}