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
            var UIElement = DomBehind.UIElement;
            var TitlebarView = /** @class */ (function (_super) {
                __extends(TitlebarView, _super);
                function TitlebarView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                TitlebarView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    builder.Element("#AppBrand")
                        .BindingAction(UIElement.Click, function (x) { return x.BrowserReflesh(); });
                    builder.Element("#ContactButton")
                        .BindingAction(UIElement.Click, function (x) { return x.ShowContact(); });
                    builder.Element("#SignOutButton")
                        .BindingAction(UIElement.Click, function (x) { return x.SignOut(); });
                };
                return TitlebarView;
            }(DomBehind.BizView));
            Home.TitlebarView = TitlebarView;
        })(Home = RazorTemplate.Home || (RazorTemplate.Home = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=TitlebarView.js.map