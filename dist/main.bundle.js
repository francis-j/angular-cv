webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"showLogin\" (switchPageEvent)=\"switchPage()\" (checkLoginEvent)=\"checkLoginStatus()\"></app-login>\r\n<app-register *ngIf=\"!showLogin\" (switchPageEvent)=\"switchPage()\"></app-register>"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLogin = true;
        this.accountSubscription = this.commonService.accountActionObservable$.subscribe(function (result) { return _this.showAccountPage(result); });
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        if (this.accountSubscription)
            this.accountSubscription.unsubscribe();
    };
    AccountComponent.prototype.showAccountPage = function (showLogin) {
        this.showLogin = showLogin;
    };
    AccountComponent.prototype.handleRouteParams = function (action) {
        if (action == "register") {
            this.showLogin = false;
        }
        else {
            this.showLogin = true;
        }
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_common_service__["a" /* CommonService */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h2>Log in</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <form (submit)=\"attemptLogin(account)\">\r\n            <span *ngIf=\"errorMsg.length > 0\" class=\"text-error\">{{errorMsg}}</span>\r\n            <h5>Username</h5>\r\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"account.email\" />\r\n            <h5>Password</h5>\r\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"account.password\" />\r\n            <div style=\"height:20px;\"></div>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Log in\"/>\r\n            <input type=\"button\" class=\"btn btn-secondary\" value=\"Register\" (click)=\"showRegistrationPage()\" />\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_Account_AccountLogin__ = __webpack_require__("../../../../../src/app/models/Account/AccountLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, httpHelper, commonService) {
        this.router = router;
        this.httpHelper = httpHelper;
        this.commonService = commonService;
        this.switchPageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.checkLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_2_app_models_Account_AccountLogin__["a" /* AccountLogin */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMsg = "";
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER)) {
            this.router.navigate([""]);
        }
    };
    LoginComponent.prototype.attemptLogin = function (account) {
        var _this = this;
        var strAccount = JSON.stringify(account);
        try {
            this.httpHelper
                .post("account/login", strAccount)
                .subscribe(function (result) { return _this.processLogin(result); }, function (error) { return _this.setError(error); });
        }
        catch (e) {
            var extras = [{ "Message": e.message }];
            this.router.navigate(["/error"], extras);
            alert(e.message);
        }
    };
    LoginComponent.prototype.processLogin = function (result) {
        try {
            var obj = JSON.parse(result);
            if (obj.status == 200) {
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_5_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER, obj._body);
                this.commonService.processLoginAction();
                this.router.navigate([""]);
            }
            else {
                this.errorMsg = "An error has occurred: " + obj.statusText;
            }
        }
        catch (e) {
            alert(e.message);
        }
    };
    LoginComponent.prototype.setError = function (error) {
        this.errorMsg = error._body;
    };
    LoginComponent.prototype.showRegistrationPage = function () {
        this.commonService.showAccountPage(false);
    };
    LoginComponent.prototype.checkLoginStatus = function () {
        this.checkLoginEvent.next("checkLoginStatus");
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "switchPageEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "checkLoginEvent", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_app_api__["a" /* HttpHelper */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_api__["a" /* HttpHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_common_service__["a" /* CommonService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    Logging out...\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.processLogout();
    };
    LogoutComponent.prototype.processLogout = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_3_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER);
        this.commonService.processLoginAction();
        this.router.navigate(["/account"]);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/account/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_common_service__["a" /* CommonService */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/manage/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/manage/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  manage works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/manage/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageComponent = (function () {
    function ManageComponent() {
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    return ManageComponent;
}());
ManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-manage',
        template: __webpack_require__("../../../../../src/app/account/manage/manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/manage/manage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageComponent);

//# sourceMappingURL=manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h2>Register</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <form novalidate [formGroup]=\"form\" (ngSubmit)=\"attemptRegister(form)\">\r\n            <span *ngIf=\"errorMsg.length > 0\" class=\"text-error\" [innerHTML]=\"errorMsg\"></span>\r\n            <h5>Email Address</h5>\r\n            <input type=\"email\" formControlName=\"email\" ngModel required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\r\n            <h5>Password</h5>\r\n            <input type=\"password\" formControlName=\"password\" ngModel required minlength=\"8\" maxlength=\"16\"/>\r\n            <h5>Repeat Password</h5>\r\n            <input type=\"password\" formControlName=\"repeatPassword\" ngModel required minlength=\"8\" maxlength=\"16\"/>\r\n            <h5>Full Name</h5>\r\n            <input type=\"text\" formControlName=\"name\" ngModel required minlength=\"2\" maxlength=\"64\"/>\r\n            <div style=\"height:20px;\"></div>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\" \r\n                [disabled]=\"!form.valid\" />\r\n            <input type=\"button\" class=\"btn btn-secondary\" value=\"Cancel\" (click)=\"showLoginPage()\" />\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_Account_AccountRegister__ = __webpack_require__("../../../../../src/app/models/Account/AccountRegister.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = (function () {
    function RegisterComponent(router, httpHelper, http, commonService) {
        this.router = router;
        this.httpHelper = httpHelper;
        this.http = http;
        this.commonService = commonService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Headers */]({
            "Content-Type": "application/json"
        });
        this.options = { headers: this.headers };
        this.switchPageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_1_app_models_Account_AccountRegister__["a" /* AccountRegister */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorMsg = "";
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(14)]),
            repeatPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
    };
    RegisterComponent.prototype.showLoginPage = function () {
        this.commonService.showAccountPage(true);
    };
    RegisterComponent.prototype.attemptRegister = function (form) {
        var _this = this;
        var account = new __WEBPACK_IMPORTED_MODULE_1_app_models_Account_AccountRegister__["a" /* AccountRegister */]();
        account.email = form.controls["email"].value;
        account.password = form.controls["password"].value;
        account.repeatPassword = form.controls["repeatPassword"].value;
        account.name = form.controls["name"].value;
        if (account.password != account.repeatPassword) {
            this.errorMsg = "Passwords do not match.";
            return;
        }
        var strAccount = JSON.stringify(account);
        try {
            this.httpHelper
                .post("account/register", strAccount)
                .subscribe(function (result) { return _this.processRegistration(result); }, function (error) { return _this.setError(error); });
        }
        catch (e) {
            var extras = [{ "Message": e.message }];
            this.router.navigate(["/error"], extras);
            alert(e.message);
        }
    };
    RegisterComponent.prototype.processRegistration = function (result) {
        try {
            var obj = JSON.parse(result);
            if (obj.status == 200) {
                this.showLoginPage();
            }
            else {
                this.errorMsg = "An error has occurred: " + obj.statusText;
            }
        }
        catch (e) {
            alert(e.message);
        }
    };
    RegisterComponent.prototype.setError = function (error) {
        this.errorMsg = error._body;
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "switchPageEvent", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/account/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/register/register.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_app_api__["a" /* HttpHelper */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_api__["a" /* HttpHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_common_service__["a" /* CommonService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpHelper = (function () {
    function HttpHelper(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            "Content-Type": "application/json"
        });
        this.options = { headers: this.headers };
    }
    HttpHelper.prototype.get = function (apiRoute, id) {
        var url = __WEBPACK_IMPORTED_MODULE_6_app_common_values__["b" /* CommonValues */].API_URL + apiRoute + (id ? "/" + id : "");
        return this.http
            .get(url, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    };
    HttpHelper.prototype.post = function (apiRoute, body) {
        var url = __WEBPACK_IMPORTED_MODULE_6_app_common_values__["b" /* CommonValues */].API_URL + apiRoute;
        return this.http
            .post(url, body, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    };
    HttpHelper.prototype.delete = function (apiRoute, id) {
        var url = __WEBPACK_IMPORTED_MODULE_6_app_common_values__["b" /* CommonValues */].API_URL + apiRoute + "/" + id;
        return this.http
            .delete(url, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    };
    HttpHelper.prototype.put = function (apiRoute, id, body) {
        var url = __WEBPACK_IMPORTED_MODULE_6_app_common_values__["b" /* CommonValues */].API_URL + apiRoute + "/" + id;
        return this.http
            .put(url, body, this.options)
            .map(this.getResponseData)
            .catch(this.logError);
    };
    HttpHelper.prototype.getResponseData = function (res) {
        var body = JSON.stringify(res);
        return body || {};
    };
    HttpHelper.prototype.logError = function (error) {
        console.error("Error", error);
        console.log("Error");
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
    };
    return HttpHelper;
}());
HttpHelper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpHelper);

var _a;
//# sourceMappingURL=app.api.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-content {\r\n    font-family: sans-serif;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n    max-width: 1000px;\r\n    margin: 10px auto;\r\n    background: #3d3d3d;\r\n    border-radius: 15px;\r\n    border-color: #2d2d2d;\r\n    color: #dadada;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-content\">\r\n    <app-header [menuItems]=\"menuItems\"></app-header>\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer class=\"footer\"></app-footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER)) {
            this.router.navigate(["/account"]);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generic_horizontal_list_horizontal_list_component__ = __webpack_require__("../../../../../src/app/generic/horizontal-list/horizontal-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_navigator_navigator_component__ = __webpack_require__("../../../../../src/app/header/navigator/navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_logout_logout_component__ = __webpack_require__("../../../../../src/app/account/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_register_register_component__ = __webpack_require__("../../../../../src/app/account/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__generic_vertical_list_vertical_list_component__ = __webpack_require__("../../../../../src/app/generic/vertical-list/vertical-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_popular_popular_component__ = __webpack_require__("../../../../../src/app/home/popular/popular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_latest_latest_component__ = __webpack_require__("../../../../../src/app/home/latest/latest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__account_manage_manage_component__ = __webpack_require__("../../../../../src/app/account/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__site_site_component__ = __webpack_require__("../../../../../src/app/site/site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__site_create_create_component__ = __webpack_require__("../../../../../src/app/site/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__site_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/site/site-header/site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__site_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/site/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__site_create_add_page_add_page_component__ = __webpack_require__("../../../../../src/app/site/create/add-page/add-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_services_site_service__ = __webpack_require__("../../../../../src/app/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__site_page_page_component__ = __webpack_require__("../../../../../src/app/site/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_my_sites_my_sites_component__ = __webpack_require__("../../../../../src/app/home/my-sites/my-sites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__tv_tv_component__ = __webpack_require__("../../../../../src/app/tv/tv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__site_unlock_site_unlock_site_component__ = __webpack_require__("../../../../../src/app/site/unlock-site/unlock-site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__generic_confirmation_modal_confirmation_modal_component__ = __webpack_require__("../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__generic_notification_modal_notification_modal_component__ = __webpack_require__("../../../../../src/app/generic/notification-modal/notification-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__generic_horizontal_list_horizontal_list_component__["a" /* HorizontalListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_navigator_navigator_component__["a" /* NavigatorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__account_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__account_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__account_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_18__generic_vertical_list_vertical_list_component__["a" /* VerticalListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_popular_popular_component__["a" /* PopularComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_latest_latest_component__["a" /* LatestComponent */],
            __WEBPACK_IMPORTED_MODULE_21__account_manage_manage_component__["a" /* ManageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__site_site_component__["a" /* SiteComponent */],
            __WEBPACK_IMPORTED_MODULE_23__site_create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__site_site_header_site_header_component__["a" /* SiteHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_25__site_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__site_create_add_page_add_page_component__["a" /* AddPageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__site_page_page_component__["a" /* PageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__home_my_sites_my_sites_component__["a" /* MySitesComponent */],
            __WEBPACK_IMPORTED_MODULE_32__tv_tv_component__["a" /* TvComponent */],
            __WEBPACK_IMPORTED_MODULE_33__site_unlock_site_unlock_site_component__["a" /* UnlockSiteComponent */],
            __WEBPACK_IMPORTED_MODULE_34__generic_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */],
            __WEBPACK_IMPORTED_MODULE_35__generic_notification_modal_notification_modal_component__["a" /* NotificationModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_27_app_app_api__["a" /* HttpHelper */], __WEBPACK_IMPORTED_MODULE_28_app_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_29_app_services_site_service__["a" /* SiteService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_26__site_create_add_page_add_page_component__["a" /* AddPageComponent */], __WEBPACK_IMPORTED_MODULE_33__site_unlock_site_unlock_site_component__["a" /* UnlockSiteComponent */], __WEBPACK_IMPORTED_MODULE_34__generic_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */], __WEBPACK_IMPORTED_MODULE_35__generic_notification_modal_notification_modal_component__["a" /* NotificationModalComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_logout_logout_component__ = __webpack_require__("../../../../../src/app/account/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_site_component__ = __webpack_require__("../../../../../src/app/site/site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_create_create_component__ = __webpack_require__("../../../../../src/app/site/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_tv_tv_component__ = __webpack_require__("../../../../../src/app/tv/tv.component.ts");
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var router = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "error",
        component: __WEBPACK_IMPORTED_MODULE_2__error_error_component__["a" /* ErrorComponent */]
    },
    {
        path: "error/:code",
        component: __WEBPACK_IMPORTED_MODULE_2__error_error_component__["a" /* ErrorComponent */]
    },
    {
        path: "account/login",
        component: __WEBPACK_IMPORTED_MODULE_3__account_account_component__["a" /* AccountComponent */]
    },
    {
        path: "account/register",
        component: __WEBPACK_IMPORTED_MODULE_3__account_account_component__["a" /* AccountComponent */]
    },
    {
        path: "account",
        component: __WEBPACK_IMPORTED_MODULE_3__account_account_component__["a" /* AccountComponent */]
    },
    {
        path: "logout",
        component: __WEBPACK_IMPORTED_MODULE_4__account_logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: "site/create",
        component: __WEBPACK_IMPORTED_MODULE_6__site_create_create_component__["a" /* CreateComponent */]
    },
    {
        path: "site/edit/:siteId",
        component: __WEBPACK_IMPORTED_MODULE_6__site_create_create_component__["a" /* CreateComponent */]
    },
    {
        path: "tv",
        component: __WEBPACK_IMPORTED_MODULE_7_app_tv_tv_component__["a" /* TvComponent */]
    },
    {
        path: ":siteId",
        component: __WEBPACK_IMPORTED_MODULE_5__site_site_component__["a" /* SiteComponent */]
    },
    {
        path: ":siteId/:pageId",
        component: __WEBPACK_IMPORTED_MODULE_5__site_site_component__["a" /* SiteComponent */]
    }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = (function () {
    function CommonService() {
        this.accountAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.accountActionObservable$ = this.accountAction.asObservable();
        this.loginAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loginActionObservable$ = this.loginAction.asObservable();
        this.unlockSiteAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.unlockSiteActionObservable$ = this.unlockSiteAction.asObservable();
        this.modalConfirmAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.modalConfirmActionObservable$ = this.modalConfirmAction.asObservable();
    }
    CommonService.prototype.getAccountId = function () {
        var account = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER));
        return account.id;
    };
    CommonService.prototype.showAccountPage = function (showLogin) {
        this.accountAction.next(showLogin);
    };
    CommonService.prototype.processLoginAction = function () {
        this.loginAction.next();
    };
    CommonService.prototype.unlockSite = function () {
        this.unlockSiteAction.next();
    };
    CommonService.prototype.modalConfirmation = function () {
        this.modalConfirmAction.next();
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/common.values.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommonValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageValues; });
var CommonValues = (function () {
    function CommonValues() {
    }
    return CommonValues;
}());

CommonValues.API_URL = "http://fj-site-concept-api.azurewebsites.net/api/";
var LocalStorageValues = (function () {
    function LocalStorageValues() {
    }
    return LocalStorageValues;
}());

LocalStorageValues.CURRENT_USER = "current_user";
//# sourceMappingURL=common.values.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <strong>{{errorCode}}</strong>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h2>{{errorMessage}}</h2>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) { return _this.setErrorMessage(params["code"]); }, function (error) { return _this.setErrorMessage("-1"); });
    };
    ErrorComponent.prototype.setErrorMessage = function (code) {
        this.errorCode = code;
        this.errorMessage = this.getMessageFromCode(code);
    };
    ErrorComponent.prototype.getMessageFromCode = function (code) {
        switch (code) {
            case "401":
                return "You are not authorized.";
            case "404":
                return "Not found.";
            default:
                return "An error occurred.";
        }
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    background: black;\r\n    color: white;\r\n    width: 100%;\r\n    text-align: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"text-small\">by francis jones</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">No</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmationModalComponent = (function () {
    function ConfirmationModalComponent(activeModal, commonService) {
        this.activeModal = activeModal;
        this.commonService = commonService;
    }
    ConfirmationModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmationModalComponent.prototype.confirm = function () {
        this.commonService.modalConfirmation();
        this.activeModal.dismiss();
    };
    ConfirmationModalComponent.prototype.cancel = function () {
        this.activeModal.dismiss();
    };
    return ConfirmationModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ConfirmationModalComponent.prototype, "title", void 0);
ConfirmationModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-confirmation-modal',
        template: __webpack_require__("../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_common_service__["a" /* CommonService */]) === "function" && _b || Object])
], ConfirmationModalComponent);

var _a, _b;
//# sourceMappingURL=confirmation-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/generic/horizontal-list/horizontal-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/generic/horizontal-list/horizontal-list.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/generic/horizontal-list/horizontal-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalListComponent = (function () {
    function HorizontalListComponent() {
    }
    HorizontalListComponent.prototype.ngOnInit = function () {
    };
    return HorizontalListComponent;
}());
HorizontalListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'horizontal-list',
        template: __webpack_require__("../../../../../src/app/generic/horizontal-list/horizontal-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/generic/horizontal-list/horizontal-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HorizontalListComponent);

//# sourceMappingURL=horizontal-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/generic/notification-modal/notification-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/generic/notification-modal/notification-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h6 class=\"modal-title\">{{message}}</h6>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">OK</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/generic/notification-modal/notification-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationModalComponent = (function () {
    function NotificationModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    NotificationModalComponent.prototype.ngOnInit = function () {
    };
    NotificationModalComponent.prototype.close = function () {
        this.activeModal.dismiss();
    };
    return NotificationModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], NotificationModalComponent.prototype, "message", void 0);
NotificationModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-notification-modal',
        template: __webpack_require__("../../../../../src/app/generic/notification-modal/notification-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/generic/notification-modal/notification-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], NotificationModalComponent);

var _a;
//# sourceMappingURL=notification-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/generic/vertical-list/vertical-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/generic/vertical-list/vertical-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vertical-list works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/generic/vertical-list/vertical-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerticalListComponent = (function () {
    function VerticalListComponent() {
    }
    VerticalListComponent.prototype.ngOnInit = function () {
    };
    return VerticalListComponent;
}());
VerticalListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-vertical-list',
        template: __webpack_require__("../../../../../src/app/generic/vertical-list/vertical-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/generic/vertical-list/vertical-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VerticalListComponent);

//# sourceMappingURL=vertical-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigator [menuItems]=\"menuItems\"></app-navigator>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "menuItems", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/navigator/navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    border-radius: 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin:0;\r\n}\r\n\r\n.navbar-right {\r\n    border-radius: 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: right;\r\n        -ms-flex-align: right;\r\n            align-items: right;\r\n    -webkit-box-pack: right;\r\n        -ms-flex-pack: right;\r\n            justify-content: right;\r\n}\r\n\r\n.navbar-toggler {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n#navbarNav {\r\n    width: 100%;\r\n}\r\n\r\n.header-bar {\r\n    background: black;\r\n    width: 100%;\r\n    height: 100px;\r\n    margin: 0;\r\n}\r\n\r\n.header-title {\r\n    width: 100%;\r\n    color: white;\r\n    line-height: 50px;\r\n    text-align: left;\r\n}\r\n\r\na {\r\n    color: currentColor;\r\n    text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/navigator/navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-sm navbar-inverse bg-inverse\" (checkLoginEvent)=\"checkLoginStatus()\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"showNav = !showNav\" style=\"height: 50px;\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"header-title text-huge\" href=\"/\"><span class=\"fa fa-tv fa-logo-icon\" (drop)=\"onDrop($event)\" (dragover)=\"allowDrop($event)\" aria-hidden=\"true\"></span></a>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" [ngbCollapse]=\"!showNav\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\" *ngFor=\"let menuItem of menuItems\">\r\n                <a class=\"nav-link\" href=\"/{{menuItem.urlRoute}}\">{{menuItem.title}}</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-right mr-auto\">\r\n            <li class=\"nav-item\" *ngFor=\"let accountItem of accountItems\">\r\n                <a class=\"nav-link\" href=\"/{{accountItem.urlRoute}}\">{{accountItem.title}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <span class=\"fa fa-user fa-logo-icon text-huge\" draggable=\"true\" (drag)=\"onDrag($event)\"></span>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/navigator/navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigatorComponent = (function () {
    function NavigatorComponent(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    NavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountItems = new Array();
        this.checkLoginStatus();
        this.subscription = this.commonService.loginActionObservable$.subscribe(function (result) { return _this.checkLoginStatus(); });
        this.showNav = false;
    };
    NavigatorComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    NavigatorComponent.prototype.checkLoginStatus = function () {
        this.loggedIn = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER) ? true : false;
        this.updateAccountItems();
    };
    NavigatorComponent.prototype.updateAccountItems = function () {
        this.accountItems = new Array();
        if (this.loggedIn) {
            this.accountItems.push({
                title: "Log Out",
                urlRoute: "logout"
            });
        }
        else {
            this.accountItems.push({
                title: "Log In",
                urlRoute: "account/login"
            });
            this.accountItems.push({
                title: "Register",
                urlRoute: "account/register"
            });
        }
    };
    //Drag events
    NavigatorComponent.prototype.onDrag = function (event) {
        event.dataTransfer.setData("text", event.target.id);
    };
    NavigatorComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        this.router.navigate(["tv"]);
    };
    NavigatorComponent.prototype.allowDrop = function (event) {
        event.preventDefault();
    };
    return NavigatorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NavigatorComponent.prototype, "menuItems", void 0);
NavigatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-navigator',
        template: __webpack_require__("../../../../../src/app/header/navigator/navigator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/navigator/navigator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_common_service__["a" /* CommonService */]) === "function" && _b || Object])
], NavigatorComponent);

var _a, _b;
//# sourceMappingURL=navigator.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-menu-bar {\r\n    background: #2a4968;\r\n    border-radius: 15px;\r\n    margin: 0;\r\n}\r\n\r\n.home-menu-button {\r\n    background: #1b3044;\r\n    border: none;\r\n    color: white;\r\n}\r\n\r\n.home-menu-button:hover {\r\n    background: #142332;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"container\" [@animation]>\r\n        <div class=\"row\">\r\n            <div class=\"home-menu-bar container panel border-rounded\">\r\n                <a href=\"/site/create\" class=\"btn btn-default home-menu-button\">Create a site</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-12 container\">\r\n            <my-sites></my-sites>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12 container\">\r\n            <latest-sites></latest-sites>\r\n        </div>\r\n    </div>\r\n    <!-- <app-profile></app-profile> -->\r\n    <!-- <app-subscriptions></app-subscriptions> -->\r\n    <!-- <app-friends></app-friends> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_values__ = __webpack_require__("../../../../../src/app/common.values.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.isUserLoggedIn = function () {
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1_app_common_values__["a" /* LocalStorageValues */].CURRENT_USER)) {
            return true;
        }
        return false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])("animation", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":enter", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])("500ms", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":leave", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])("0ms", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/latest/latest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\r\n    background: #eef;\r\n    border-radius: 15px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.list-group-item:hover {\r\n    background: #ddf;\r\n}\r\n\r\n.list-group-item:focus {\r\n    background: #ddf;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/latest/latest.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sites.length > 0\" class=\"container panel border-rounded\" [@animation]>\r\n    <h4>Latest Public Sites</h4>\r\n    <div class=\"padding-10 margin-10\">\r\n        <div class=\"list-group\">\r\n            <button *ngFor=\"let site of sites\" class=\"list-group-item list-group-item-action\" (click)=\"goToSite(site)\">{{site.title}}</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/latest/latest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatestComponent = (function () {
    function LatestComponent(httpHelper, router) {
        this.httpHelper = httpHelper;
        this.router = router;
        this.sites = [];
    }
    LatestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpHelper.get("site/latest/3").subscribe(function (result) { return _this.processSites(result); });
    };
    LatestComponent.prototype.processSites = function (result) {
        var sites = JSON.parse(JSON.parse(result)._body);
        this.sites = sites;
    };
    LatestComponent.prototype.goToSite = function (site) {
        var siteId = site.id;
        var pageId = site.pages.length > 0 ? site.pages[0].id : "";
        this.router.navigate(["", siteId, pageId]);
    };
    return LatestComponent;
}());
LatestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'latest-sites',
        template: __webpack_require__("../../../../../src/app/home/latest/latest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/latest/latest.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])("animation", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":enter", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])("500ms", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":leave", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])("0ms", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LatestComponent);

var _a, _b;
//# sourceMappingURL=latest.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/my-sites/my-sites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\r\n    background: #f7eeff;\r\n    border-radius: 15px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.list-group-item:hover {\r\n    background: #eedaff;\r\n}\r\n\r\n.list-group-item:focus {\r\n    background: #eedaff;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/my-sites/my-sites.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sites.length > 0\" class=\"container panel border-rounded\" [@animation]>\r\n    <h4>My Sites</h4>\r\n    <div class=\"padding-10 margin-10\">\r\n        <div class=\"list-group\">\r\n            <div *ngFor=\"let site of sites\">\r\n                <button class=\"list-group-item list-group-item-action\" (click)=\"goToSite(site)\">{{site.title}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/my-sites/my-sites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySitesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MySitesComponent = (function () {
    function MySitesComponent(httpHelper, router, commonService) {
        this.httpHelper = httpHelper;
        this.router = router;
        this.commonService = commonService;
        this.sites = [];
    }
    MySitesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpHelper.get("site/my", this.commonService.getAccountId()).subscribe(function (result) { return _this.processSites(result); });
    };
    MySitesComponent.prototype.processSites = function (result) {
        var sites = JSON.parse(JSON.parse(result)._body);
        this.sites = sites;
    };
    MySitesComponent.prototype.goToSite = function (site) {
        var siteId = site.id;
        var pageId = site.pages.length > 0 ? site.pages[0].id : "";
        this.router.navigate(["", siteId, pageId]);
    };
    return MySitesComponent;
}());
MySitesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-sites',
        template: __webpack_require__("../../../../../src/app/home/my-sites/my-sites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/my-sites/my-sites.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])("animation", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":enter", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])("500ms", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":leave", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])("0ms", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_common_service__["a" /* CommonService */]) === "function" && _c || Object])
], MySitesComponent);

var _a, _b, _c;
//# sourceMappingURL=my-sites.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/popular/popular.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/popular/popular.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  popular works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/popular/popular.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularComponent = (function () {
    function PopularComponent() {
    }
    PopularComponent.prototype.ngOnInit = function () {
    };
    return PopularComponent;
}());
PopularComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-popular',
        template: __webpack_require__("../../../../../src/app/home/popular/popular.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/popular/popular.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PopularComponent);

//# sourceMappingURL=popular.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Account/AccountLogin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
var AccountLogin = (function () {
    function AccountLogin() {
    }
    return AccountLogin;
}());

//# sourceMappingURL=AccountLogin.js.map

/***/ }),

/***/ "../../../../../src/app/models/Account/AccountRegister.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
var AccountRegister = (function () {
    function AccountRegister() {
    }
    return AccountRegister;
}());

//# sourceMappingURL=AccountRegister.js.map

/***/ }),

/***/ "../../../../../src/app/models/Site/Page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(title, description, sections) {
        this.title = title;
        this.description = description;
        this.sections = sections;
    }
    return Page;
}());

//# sourceMappingURL=Page.js.map

/***/ }),

/***/ "../../../../../src/app/models/Site/Site.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Site; });
var Site = (function () {
    function Site() {
    }
    return Site;
}());

//# sourceMappingURL=Site.js.map

/***/ }),

/***/ "../../../../../src/app/services/site.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteService; });

var SiteService = (function () {
    function SiteService() {
        this.pageAdded = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.pageAddedObservable$ = this.pageAdded.asObservable();
        this.pageUpdated = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.pageUpdatedObservable$ = this.pageUpdated.asObservable();
    }
    SiteService.prototype.savePage = function (page) {
        this.pageAdded.next(page);
    };
    SiteService.prototype.updatePage = function (oldPage, newPage) {
        this.pageUpdated.next([oldPage, newPage]);
    };
    return SiteService;
}());

//# sourceMappingURL=site.service.js.map

/***/ }),

/***/ "../../../../../src/app/site/create/add-page/add-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/create/add-page/add-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Add page</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <h5>Title<span class=\"font-red\">*</span></h5>\r\n    <input type=\"text\" #title value=\"{{page.title}}\" required/>\r\n    <h5>Description</h5>\r\n    <input type=\"text\" #description value=\"{{page.description}}\"/>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePage(title.value, description.value)\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/create/add-page/add-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Page__ = __webpack_require__("../../../../../src/app/models/Site/Page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_site_service__ = __webpack_require__("../../../../../src/app/services/site.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPageComponent = (function () {
    function AddPageComponent(modalService, activeModal, siteService) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.siteService = siteService;
    }
    AddPageComponent.prototype.ngOnInit = function () {
        if (!this.page) {
            this.page = new __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Page__["a" /* Page */]("", "", new Array());
            this.hasNewPage = true;
        }
        else {
            this.hasNewPage = false;
        }
    };
    AddPageComponent.prototype.savePage = function (title, description) {
        var page = new __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Page__["a" /* Page */](title, description, new Array());
        if (this.hasNewPage) {
            this.siteService.savePage(page);
        }
        else {
            this.siteService.updatePage(this.page, page);
        }
        this.activeModal.dismiss();
    };
    return AddPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Page__["a" /* Page */]) === "function" && _a || Object)
], AddPageComponent.prototype, "page", void 0);
AddPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'add-page-modal',
        template: __webpack_require__("../../../../../src/app/site/create/add-page/add-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/create/add-page/add-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_site_service__["a" /* SiteService */]) === "function" && _d || Object])
], AddPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/site/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customModal {\r\n    margin-top: 50px;\r\n}\r\n\r\n.list-group {\r\n    margin: 10px 0 10px 0;\r\n}\r\n\r\n.list-group-item {\r\n    background: #6d6d6d;\r\n    color: white;\r\n    border: none;\r\n}\r\n\r\n.list-group-item:hover {\r\n    background: #5d5d5d;\r\n}\r\n\r\n.btn-save {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"container\">\r\n        <h2>Site Creator</h2>\r\n        <div class=\"row\">\r\n            <p>Construct your site by filling out the form below.</p>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form novalidate [formGroup]=\"form\" class=\"width-100\" (ngSubmit)=\"createSite(form)\">\r\n                <span *ngIf=\"errorMsg.length > 0\" class=\"text-error\" [innerHTML]=\"errorMsg\"></span>\r\n                <h5>Title<span class=\"font-red\">*</span></h5>\r\n                <input type=\"text\" formControlName=\"title\" ngModel required/>\r\n                <h5>Description</h5>\r\n                <input type=\"text\" formControlName=\"description\" ngModel/>\r\n                <div class=\"spacer\"></div>\r\n                <p class=\"text-v-small\"><span class=\"font-red\">*</span> must be unique</p>\r\n                <div class=\"spacer\"></div>\r\n                <h4>Pages</h4>\r\n                <div *ngIf=\"pages.length == 0; then noPages; else pageList\"></div>\r\n                <ng-template #noPages>\r\n                    <p class=\"text-small\"><i>There are currently no pages.</i></p>\r\n                </ng-template>\r\n                <ng-template #pageList>\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let page of pages\" class=\"list-group-item list-group-item-action\" (click)=\"openModal(page)\">{{page.title}}</li>\r\n                    </ul>\r\n                </ng-template>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"openModal()\">Add</button>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"clearPages()\">Clear</button>\r\n                <div class=\"spacer\"></div>\r\n                <div class=\"btn-save\">\r\n                    <input type=\"submit\" class=\"btn btn-primary width-25\" value=\"Save\" [disabled]=\"!form.valid\" />\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Site__ = __webpack_require__("../../../../../src/app/models/Site/Site.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_site_create_add_page_add_page_component__ = __webpack_require__("../../../../../src/app/site/create/add-page/add-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_services_site_service__ = __webpack_require__("../../../../../src/app/services/site.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_generic_notification_modal_notification_modal_component__ = __webpack_require__("../../../../../src/app/generic/notification-modal/notification-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CreateComponent = (function () {
    function CreateComponent(route, router, httpHelper, modalService, commonService, siteService) {
        this.route = route;
        this.router = router;
        this.httpHelper = httpHelper;
        this.modalService = modalService;
        this.commonService = commonService;
        this.siteService = siteService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            "Content-Type": "application/json"
        });
        this.options = { headers: this.headers };
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorMsg = "";
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormControl */]("", [])
        });
        this.pages = new Array();
        this.subscription = this.route.params.subscribe(function (params) { return _this.getSite(params["siteId"]); });
        this.addPageSubscription = this.siteService.pageAddedObservable$.subscribe(function (result) { return _this.addPage(result); }, function (error) { return _this.setError(error); });
        this.updatePageSubscription = this.siteService.pageUpdatedObservable$.subscribe(function (result) { return _this.updatePage(result); }, function (error) { return _this.setError(error); });
    };
    CreateComponent.prototype.getSite = function (siteId) {
        var _this = this;
        if (siteId) {
            this.httpHelper.get("site", siteId).subscribe(function (result) { return _this.processSite(result); }, function (error) { return _this.showError(error); });
        }
    };
    CreateComponent.prototype.processSite = function (result) {
        this.site = JSON.parse(JSON.parse(result)._body)[0];
        if (this.site)
            this.populateSiteForm();
    };
    CreateComponent.prototype.populateSiteForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormControl */](this.site.title, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormControl */](this.site.description, [])
        });
        this.pages = this.site.pages;
    };
    CreateComponent.prototype.addPage = function (page) {
        this.errorMsg = "";
        var titleExists = false;
        this.pages.forEach(function (element) {
            if (element.title == page.title)
                titleExists = true;
        });
        if (titleExists)
            this.errorMsg = "A page with this title already exists.";
        else
            this.pages.push(page);
    };
    CreateComponent.prototype.updatePage = function (pages) {
        this.errorMsg = "";
        var oldPage = pages[0];
        var newPage = pages[1];
        var index = this.pages.indexOf(oldPage);
        if (index >= 0) {
            this.pages[index] = newPage;
        }
    };
    CreateComponent.prototype.clearPages = function () {
        this.pages = new Array();
    };
    CreateComponent.prototype.createSite = function (form) {
        var _this = this;
        var site = this.site ? this.site : new __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Site__["a" /* Site */]();
        site.title = form.controls["title"].value;
        site.description = form.controls["description"].value;
        site.accountId = this.commonService.getAccountId();
        site.pages = this.pages;
        var siteJson = JSON.stringify(site);
        try {
            if (this.site) {
                this.httpHelper
                    .put("site", site.id, siteJson)
                    .subscribe(function (result) { return _this.processResult(result); }, function (error) { return _this.setError(error); });
            }
            else {
                this.httpHelper
                    .post("site", siteJson)
                    .subscribe(function (result) { return _this.processResult(result); }, function (error) { return _this.setError(error); });
            }
        }
        catch (e) {
            var extras = [{ "Message": e.message }];
            this.router.navigate(["error"], extras);
            alert(e.message);
        }
    };
    CreateComponent.prototype.processResult = function (result) {
        try {
            var obj = JSON.parse(result);
            if (obj.status == 200) {
                var body = JSON.parse(obj._body);
                this.router.navigate([body.id]);
                var options = { windowClass: "in" };
                var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_10_app_generic_notification_modal_notification_modal_component__["a" /* NotificationModalComponent */], options);
                modal.componentInstance.message = "Site Access Key: " + body.accessKey;
            }
            else {
                this.errorMsg = "An error has occurred: " + obj.statusText;
            }
        }
        catch (e) {
            alert(e.message);
        }
    };
    CreateComponent.prototype.setError = function (error) {
        this.errorMsg = error._body;
    };
    CreateComponent.prototype.openModal = function (page) {
        var options = { windowClass: "in" };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7_app_site_create_add_page_add_page_component__["a" /* AddPageComponent */], options);
        if (page) {
            modalRef.componentInstance.page = page;
        }
    };
    CreateComponent.prototype.showError = function (code) {
        this.router.navigate(["error", code]);
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/site/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_app_api__["a" /* HttpHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_common_service__["a" /* CommonService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9_app_services_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_services_site_service__["a" /* SiteService */]) === "function" && _f || Object])
], CreateComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/site/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    margin: 10px 10px 10px 0;\r\n    padding: 20px;\r\n    background: #2d2d2d;\r\n    border-radius: 0 15px 15px 0;\r\n}\r\n\r\n.list-group-item-action {\r\n    background: #f7eeff;\r\n    border-radius: 15px;\r\n    color: #555;\r\n    margin-bottom: 3px;\r\n    border: none;\r\n}\r\n\r\n.list-group-item-action:hover:not(.active), .list-group-item-action:focus:not(.active) {\r\n    background: #eedaff;\r\n    color: #555;\r\n    outline: none;\r\n}\r\n\r\n.active {\r\n    background: #8000ee;\r\n    color: #fff;\r\n}\r\n\r\n.active:hover, .active:focus {\r\n    background: #7000D2;\r\n    color: #fff;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pages.length > 0\" class=\"list-group\" [@animation]>\r\n    <button *ngFor=\"let page of pages\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{active: page.id == activePage}\" (click)=\"goToPage(page.id)\">{{page.title}}</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageListComponent = (function () {
    function PageListComponent(router) {
        this.router = router;
    }
    PageListComponent.prototype.ngOnInit = function () {
        if (!this.pages) {
            this.pages = new Array();
        }
        var urlSegments = this.router.parseUrl(this.router.url).root.children.primary.segments;
        if (urlSegments.length > 1) {
            this.activePage = urlSegments[1].path;
        }
    };
    PageListComponent.prototype.goToPage = function (id) {
        this.router.navigate(["", this.siteId, id]);
        this.activePage = id;
    };
    return PageListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PageListComponent.prototype, "pages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PageListComponent.prototype, "siteId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PageListComponent.prototype, "activePage", void 0);
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'page-list',
        template: __webpack_require__("../../../../../src/app/site/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/page/page-list/page-list.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])("animation", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])(":enter", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PageListComponent);

var _a;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/site/page/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4 class=\"text-center\">{{page.title}}</h4>\r\n    <p class=\"text-center\"><i>{{page.description}}</i></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_Site_Page__ = __webpack_require__("../../../../../src/app/models/Site/Page.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    return PageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_models_Site_Page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_models_Site_Page__["a" /* Page */]) === "function" && _a || Object)
], PageComponent.prototype, "page", void 0);
PageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'site-page',
        template: __webpack_require__("../../../../../src/app/site/page/page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/page/page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageComponent);

var _a;
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/app/site/site-header/site-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-header {\r\n    background: #2d2d2d;\r\n    border-radius: 15px 15px 0 0;\r\n}\r\n\r\n.btn:hover {\r\n    color: red;\r\n}\r\n\r\n.btn:focus {\r\n    color: #fafafa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/site-header/site-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-header padding-10\">\r\n    <div class=\"col-lg-2 right\">\r\n        <button *ngIf=\"isSiteLocked\"\r\n            class=\"btn btn-none fa fa-lock\" \r\n            (mouseover)=\"showLock=false\" \r\n            (mouseleave)=\"showLock=true\" \r\n            (click)=\"requestAccessKey()\"\r\n            [class.fa-lock]=\"showLock\" \r\n            [class.fa-unlock]=\"!showLock\">\r\n        </button>\r\n        <button *ngIf=\"!isSiteLocked\"\r\n            class=\"btn btn-none fa fa-pencil\" \r\n            (click)=\"editSite(site.id)\">\r\n        </button>\r\n        <button *ngIf=\"!isSiteLocked\"\r\n            class=\"btn btn-none fa fa-trash\" \r\n            (click)=\"requestDelete(site.id)\">\r\n        </button>\r\n    </div>\r\n    <div class=\"col-lg-8 col-centered text-center\">\r\n        <div>\r\n            <h1 class=\"margin-0\">{{site.title}}</h1>\r\n        </div>\r\n        <div>\r\n            <p>{{site.description}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_Site_Site__ = __webpack_require__("../../../../../src/app/models/Site/Site.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_site_unlock_site_unlock_site_component__ = __webpack_require__("../../../../../src/app/site/unlock-site/unlock-site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_generic_confirmation_modal_confirmation_modal_component__ = __webpack_require__("../../../../../src/app/generic/confirmation-modal/confirmation-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SiteHeaderComponent = (function () {
    function SiteHeaderComponent(router, commonService, modalService, httpHelper) {
        this.router = router;
        this.commonService = commonService;
        this.modalService = modalService;
        this.httpHelper = httpHelper;
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSiteLocked = this.showLock = true;
        this.subscription = this.commonService.unlockSiteActionObservable$.subscribe(function (result) { return _this.unlockSite(); });
    };
    SiteHeaderComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
        if (this.modalSubscription)
            this.modalSubscription.unsubscribe();
    };
    SiteHeaderComponent.prototype.unlockSite = function () {
        this.isSiteLocked = false;
    };
    SiteHeaderComponent.prototype.requestAccessKey = function () {
        var options = { windowClass: "in" };
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4_app_site_unlock_site_unlock_site_component__["a" /* UnlockSiteComponent */], options);
        modal.componentInstance.siteId = this.site.id;
    };
    SiteHeaderComponent.prototype.editSite = function (id) {
        this.router.navigate(["site/edit", id]);
    };
    SiteHeaderComponent.prototype.requestDelete = function (id) {
        var _this = this;
        var options = { windowClass: "in" };
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7_app_generic_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */], options);
        modal.componentInstance.title = "Are you sure you want to delete this site?";
        if (!this.modalSubscription) {
            this.modalSubscription = this.commonService.modalConfirmActionObservable$.subscribe(function (result) { return _this.deleteSite(id); });
        }
    };
    SiteHeaderComponent.prototype.deleteSite = function (id) {
        var _this = this;
        this.httpHelper.delete("site", id).subscribe(function (result) { return _this.router.navigate([""]); }, function (error) { return _this.router.navigate(["error", 404]); });
    };
    return SiteHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_models_Site_Site__["a" /* Site */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_models_Site_Site__["a" /* Site */]) === "function" && _a || Object)
], SiteHeaderComponent.prototype, "site", void 0);
SiteHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'site-header',
        template: __webpack_require__("../../../../../src/app/site/site-header/site-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/site-header/site-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_common_service__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_app_api__["a" /* HttpHelper */]) === "function" && _e || Object])
], SiteHeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=site-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/site/site.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/site.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-0\">\r\n    <site-header [site]=\"site\"></site-header>\r\n    <div class=\"col-lg-3 margin-0 padding-0\">\r\n        <page-list [pages]=\"site.pages\" [siteId]=\"site.id\"></page-list>\r\n    </div>\r\n    <div class=\"col-lg-9 margin-0 padding-0\">\r\n        <site-page [page]=\"page\">Loading...</site-page>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Site__ = __webpack_require__("../../../../../src/app/models/Site/Site.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models_Site_Page__ = __webpack_require__("../../../../../src/app/models/Site/Page.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SiteComponent = (function () {
    function SiteComponent(route, httpHelper, router) {
        this.route = route;
        this.httpHelper = httpHelper;
        this.router = router;
        this.site = new __WEBPACK_IMPORTED_MODULE_2_app_models_Site_Site__["a" /* Site */]();
    }
    SiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) { return _this.getSite(params["siteId"], params["pageId"]); });
        this.page = new __WEBPACK_IMPORTED_MODULE_4_app_models_Site_Page__["a" /* Page */]("", "", new Array());
    };
    SiteComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    SiteComponent.prototype.getSite = function (siteId, pageId) {
        var _this = this;
        this.httpHelper.get("site", siteId).subscribe(function (result) { return _this.processSite(result, pageId); }, function (error) { return _this.error(error); });
    };
    SiteComponent.prototype.processSite = function (result, pageId) {
        this.site = JSON.parse(JSON.parse(result)._body)[0];
        if (pageId) {
            this.page = this.site.pages.find(function (x) { return x.id == pageId; });
        }
    };
    SiteComponent.prototype.error = function (error) {
        this.router.navigate["/error"];
    };
    return SiteComponent;
}());
SiteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-site',
        template: __webpack_require__("../../../../../src/app/site/site.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/site.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_app_api__["a" /* HttpHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SiteComponent);

var _a, _b, _c;
//# sourceMappingURL=site.component.js.map

/***/ }),

/***/ "../../../../../src/app/site/unlock-site/unlock-site.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site/unlock-site/unlock-site.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Enter Access Key</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div *ngIf=\"errorMsg.length > 0\" class=\"row text-error\">\r\n        <p>{{errorMsg}}</p>\r\n    </div>\r\n    <input class=\"width-100\" type=\"text\" #code value=\"\" required/>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"validateCode(code.value)\">Continue</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/site/unlock-site/unlock-site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnlockSiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnlockSiteComponent = (function () {
    function UnlockSiteComponent(activeModal, httpHelper, commonService) {
        this.activeModal = activeModal;
        this.httpHelper = httpHelper;
        this.commonService = commonService;
    }
    UnlockSiteComponent.prototype.ngOnInit = function () {
        this.errorMsg = "";
    };
    UnlockSiteComponent.prototype.validateCode = function (code) {
        var _this = this;
        var json = JSON.stringify([this.siteId, code]);
        this.httpHelper.post("site/validateAccessKey", json).subscribe(function (result) { return _this.validationSuccessul(); }, function (error) { return _this.validationFailed(error); });
    };
    UnlockSiteComponent.prototype.validationSuccessul = function () {
        this.commonService.unlockSite();
        this.activeModal.dismiss();
    };
    UnlockSiteComponent.prototype.validationFailed = function (error) {
        this.errorMsg = error._body;
    };
    return UnlockSiteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], UnlockSiteComponent.prototype, "siteId", void 0);
UnlockSiteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-unlock-site',
        template: __webpack_require__("../../../../../src/app/site/unlock-site/unlock-site.component.html"),
        styles: [__webpack_require__("../../../../../src/app/site/unlock-site/unlock-site.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_api__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_api__["a" /* HttpHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_common_service__["a" /* CommonService */]) === "function" && _c || Object])
], UnlockSiteComponent);

var _a, _b, _c;
//# sourceMappingURL=unlock-site.component.js.map

/***/ }),

/***/ "../../../../../src/app/tv/tv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tv/tv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"container panel panel-rounded\">\r\n            <h3>TV Component</h3>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tv/tv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TvComponent = (function () {
    function TvComponent() {
    }
    TvComponent.prototype.ngOnInit = function () {
    };
    return TvComponent;
}());
TvComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tv',
        template: __webpack_require__("../../../../../src/app/tv/tv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tv/tv.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TvComponent);

//# sourceMappingURL=tv.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map