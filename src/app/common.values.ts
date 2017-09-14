import { environment } from "environments/environment";

export class CommonValues {
    static API_URL:string = environment.apiUrl;
}

export class SessionStorageValues {
    static CURRENT_USER:string = "current_user";
}