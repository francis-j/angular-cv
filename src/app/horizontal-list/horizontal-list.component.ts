import { Component, OnInit } from '@angular/core';
import { MenuItem } from "app/models/MenuItem";
import { Router } from "@angular/router";
import { CommonService } from "app/common.service";

@Component({
    selector: 'app-horizontal-list',
    templateUrl: './horizontal-list.component.html',
    styleUrls: ['./horizontal-list.component.css'],
    inputs: ["listItems"]
})
export class HorizontalListComponent implements OnInit {

    constructor(private router: Router, private commonService:CommonService) { }
    ngOnInit() {

    }

    navigateTo(urlRoute: string) {

        var route: string;

        if (urlRoute.includes("/")) {

            var index = urlRoute.indexOf("/");
            route = urlRoute.substr(0, index);

            switch (urlRoute.substr(index + 1)) {
                case "login":
                    this.commonService.showAccountPage(true);
                    break;
                case "register":
                    this.commonService.showAccountPage(false);
                    break;
                default:
                    break;
            }
        }
        else {
            route = urlRoute;
        }


        this.router.navigate(["/" + route]);

    }

}