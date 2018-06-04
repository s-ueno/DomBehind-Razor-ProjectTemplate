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
            var SideMenuView = /** @class */ (function (_super) {
                __extends(SideMenuView, _super);
                function SideMenuView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                SideMenuView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    builder.Element("#SideMenubar")
                        .BuildSidebar(function (x) { return x.MenuList; }, function (x, args) { return x.SideMenuAction(args); });
                };
                return SideMenuView;
            }(DomBehind.BizView));
            Home.SideMenuView = SideMenuView;
        })(Home = RazorTemplate.Home || (RazorTemplate.Home = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=SideMenuView.js.map