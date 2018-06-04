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
            var SigninViewModel = /** @class */ (function (_super) {
                __extends(SigninViewModel, _super);
                function SigninViewModel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                SigninViewModel.prototype.Initialize = function () {
                };
                /**
                 * Sign in process
                 */
                SigninViewModel.prototype.SignIn = function () {
                    var _this = this;
                    // Validation is executed, and processing is terminated in case of error
                    if (!this.Validate())
                        return;
                    // Display overlay for long processing
                    this.WaitingOverlay(function () { return _this.SignInRaw(); });
                };
                /**
                 * I will try to sign in to the server
                 */
                SigninViewModel.prototype.SignInRaw = function () {
                    var _this = this;
                    var svc = new Signin.SigninWebService();
                    return svc.ExecuteAjax({
                        Email: this.Email,
                        Password: this.Password
                    }).done(function (x) {
                        if (x && x.AllowSignin) {
                            _this.Navigator.Move('Home');
                        }
                        else {
                            _this.ShowWarning("failed to sign in.\n" + x.Message);
                        }
                    });
                };
                SigninViewModel.prototype.ForgotPassword = function () {
                    // Even if you forget your password, your user name is required
                    if (!this.Validate("Email"))
                        return;
                };
                return SigninViewModel;
            }(DomBehind.BizViewModel));
            Signin.SigninViewModel = SigninViewModel;
        })(Signin = RazorTemplate.Signin || (RazorTemplate.Signin = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=SigninViewModel.js.map