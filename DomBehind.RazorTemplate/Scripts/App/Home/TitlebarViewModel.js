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
        var Home;
        (function (Home) {
            var TitlebarViewModel = /** @class */ (function (_super) {
                __extends(TitlebarViewModel, _super);
                function TitlebarViewModel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                TitlebarViewModel.prototype.Initialize = function () {
                };
                TitlebarViewModel.prototype.BrowserReflesh = function () {
                    this.Navigator.Move("Home");
                };
                TitlebarViewModel.prototype.ShowContact = function () {
                };
                TitlebarViewModel.prototype.SignOut = function () {
                    var _this = this;
                    var svc = new RazorTemplate.Signin.SignoutWebService();
                    return svc.ExecuteAjax(null).always(function () {
                        _this.Navigator.Move("Signin");
                    });
                };
                return TitlebarViewModel;
            }(DomBehind.BizViewModel));
            Home.TitlebarViewModel = TitlebarViewModel;
        })(Home = RazorTemplate.Home || (RazorTemplate.Home = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=TitlebarViewModel.js.map