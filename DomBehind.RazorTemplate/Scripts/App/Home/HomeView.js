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
            var HomeView = /** @class */ (function (_super) {
                __extends(HomeView, _super);
                function HomeView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                HomeView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    builder.Element("#SPALayout")
                        .BuildLayout()
                        .Top("Home/Titlebar", { size: 50, resizable: false })
                        .Left("Home/SideMenu", { size: 220, resizable: true })
                        .Preview(function (x) { return x.BottomContentSource; }, { size: 475, resizable: true }, function (x) { return x.IsVisibleBottomContent; })
                        .Right(function (x) { return x.RightContentSource; }, { size: 350, resizable: true }, function (x) { return x.IsVisibleRightContent; })
                        .Main(function (x) { return x.MainContentSource; }, { style: "overflow-x:auto;" });
                };
                return HomeView;
            }(DomBehind.BizView));
            Home.HomeView = HomeView;
        })(Home = RazorTemplate.Home || (RazorTemplate.Home = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=HomeView.js.map