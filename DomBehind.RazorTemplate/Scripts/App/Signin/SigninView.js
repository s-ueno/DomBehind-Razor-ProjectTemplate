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
            var UIElement = DomBehind.UIElement;
            var SigninView = /** @class */ (function (_super) {
                __extends(SigninView, _super);
                function SigninView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                SigninView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    // Email 
                    builder.Element("#EmailInput")
                        .Binding(UIElement.ValueProperty, function (x) { return x.Email; })
                        .Required();
                    // Password
                    builder.Element("#PasswordInput")
                        .Binding(UIElement.ValueProperty, function (x) { return x.Password; })
                        .Required("Password is required！");
                    // Remember me
                    builder.Element("#RememberMeCheckbox")
                        .Binding(UIElement.ValueProperty, function (x) { return x.IsRememberMe; });
                    // Sign in Button
                    builder.Element("#SignInButton")
                        .BindingAction(UIElement.Click, function (x) { return x.SignIn(); });
                    builder.Element("#ForgotPasswordButton")
                        .BindingAction(UIElement.Click, function (x) { return x.ForgotPassword(); });
                };
                return SigninView;
            }(DomBehind.BizView));
            Signin.SigninView = SigninView;
        })(Signin = RazorTemplate.Signin || (RazorTemplate.Signin = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=SigninView.js.map