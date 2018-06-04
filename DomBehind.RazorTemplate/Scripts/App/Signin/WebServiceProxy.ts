namespace DomBehind.RazorTemplate.Signin {
    export interface Request {
        Email: string;
        Password: string;
    }
    export interface Response {
        AllowSignin: boolean;
        Message: string;
    }
    export class SigninWebService
        extends DomBehind.Web.WebService<Request, Response> {
        protected Url: string = "Signin/SignIn";
    }
    export class SignoutWebService
        extends DomBehind.Web.WebService<any, any> {
        protected Url: string = "Signin/Signout";
    }
}