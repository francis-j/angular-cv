import { Page } from "app/models/Site/Page";

export class Site {
    id:string;
    title:string;
    description:string;
    accountId:string;
    pages:Array<Page>;
}