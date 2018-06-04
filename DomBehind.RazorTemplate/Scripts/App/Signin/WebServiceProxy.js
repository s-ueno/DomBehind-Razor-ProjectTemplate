var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DomBehind;
(function (DomBehind) {
    var RazorTemplate;
    (function (RazorTemplate) {
        var Signin;
        (function (Signin) {
            var SigninWebService = /** @class */ (function (_super) {
                __extends(SigninWebService, _super);
                function SigninWebService() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.Url = "Signin/SignIn";
                    return _this;
                }
                return SigninWebService;
            }(DomBehind.Web.WebService));
            Signin.SigninWebService = SigninWebService;
            var SignoutWebService = /** @class */ (function (_super) {
                __extends(SignoutWebService, _super);
                function SignoutWebService() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.Url = "Signin/Signout";
                    return _this;
                }
                return SignoutWebService;
            }(DomBehind.Web.WebService));
            Signin.SignoutWebService = SignoutWebService;
        })(Signin = RazorTemplate.Signin || (RazorTemplate.Signin = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=WebServiceProxy.js.map