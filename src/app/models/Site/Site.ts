import { Page } from "app/models/Page/Page";

export class Site {
    id:string;
    title:string;
    description:string;
    accountId:string;
    pages:Array<Page>;
}