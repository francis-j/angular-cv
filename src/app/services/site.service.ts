import { Subject } from "rxjs/Subject";
import { Page } from "app/models/Page/Page";

export class SiteService {

    private pageAdded = new Subject<Page>();
    public pageAddedObservable$ = this.pageAdded.asObservable();
    
    private pageUpdated = new Subject<any>();
    public pageUpdatedObservable$ = this.pageUpdated.asObservable();

    constructor() {

    }

    savePage(page:Page) {
        this.pageAdded.next(page);
    }

    updatePage(oldPage:Page, newPage:Page) {
        this.pageUpdated.next([oldPage, newPage]);
    }

}