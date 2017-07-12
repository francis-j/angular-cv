import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalSettings } from 'app/app.static.values';
import { HttpHelper } from 'app/app.api';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers: [HttpHelper]
})
export class SignUpComponent implements OnInit {

    public user:User = new User();

    constructor(private router:Router, private httpHelper:HttpHelper) { }

    ngOnInit() {
    }

    submitForm(user:User) {
        let u = JSON.stringify(user);
        var result:User;
        try {
            result = this.httpHelper.post("user", u) as User;  

            if (result == null) 
            {
                var error = new Error();
                error.message = "Unhandled exception";

                throw error;
            }
            else
            {
                this.router.navigate(["/login"]);
            }
        }
        catch (e) {
            let extras:NavigationExtras = [ { "Message": e.message } ];
            this.router.navigate(["/error"], extras)
        }
    }

}