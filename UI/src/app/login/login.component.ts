import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Login } from 'app/models/login';
import { GlobalSettings } from 'app/app.static.values';
import { HttpHelper } from 'app/app.api';
import { User } from 'app/models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [HttpHelper]
})
export class LoginComponent implements OnInit {

    public login:Login = new Login();

    constructor(private router: Router, private httpHelper:HttpHelper) { }

    ngOnInit() {
        if (localStorage.getItem("currentUser")) {
            this.router.navigate(["/home"]);
        }
    }

    AttemptLogin(login: Login) {
        let l = JSON.stringify(login);
        try {
            var users = this.httpHelper.get("user", l) as Array<User>;
            var user:User; 

            alert(JSON.stringify(user));

            if (users.length == 0) 
            {
                var error = new Error();
                error.message = "No users found";

                throw error;
            } else if (users.length > 1) {
                var error = new Error();
                error.message = "Too many users match the criteria.";

                throw error;
            }
            else
            {
                this.router.navigate(["/home"]);
                localStorage.setItem("currentUser", JSON.stringify(user));
            }
        }
        catch (e) {
            let extras:NavigationExtras = [ { "Message": e.message } ];
            this.router.navigate(["/error"], extras)
            alert(e.message);
        }
    }

}
