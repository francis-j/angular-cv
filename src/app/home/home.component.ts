import { Component, OnInit, state, trigger, transition, animate, style } from '@angular/core';
import { SessionStorageValues } from "app/common.values";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger(
            "animation",
            [
                transition(
                    ":enter",
                    [
                        style({ opacity: 0 }),
                        animate("500ms", style({ opacity: 1 }))
                    ]
                ),
                transition(
                    ":leave",
                    [
                        style({ opacity: 1 }),
                        animate("0ms", style({ opacity: 0 }))
                    ]
                )
            ]
        )
    ]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    isUserLoggedIn(): boolean {
        if (sessionStorage.getItem(SessionStorageValues.CURRENT_USER)) {
            return true;
        }
        return false;
    }

}
