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
        var Shared;
        (function (Shared) {
            var LayoutSPAView = /** @class */ (function (_super) {
                __extends(LayoutSPAView, _super);
                function LayoutSPAView() {
                    var _this = _super.call(this) || this;
                    var layout = $("body").layout({
                        north: {
                            resizable: false,
                            closable: false,
                            spacing_open: 0,
                            size: 50,
                        },
                        east: {
                            size: 300
                        }
                    });
                    layout.hide("east");
                    layout.hide("south");
                    RazorTemplate.AppMediator.ShowHideRightMenu.AddHandler(function (sender, e) {
                        if (e) {
                            layout.show("east", true);
                        }
                        else {
                            layout.hide("east");
                        }
                    });
                    RazorTemplate.AppMediator.ShowHideBottomMenu.AddHandler(function (sender, e) {
                        if (e) {
                            layout.show("south", true);
                        }
                        else {
                            layout.hide("south");
                        }
                    });
                    return _this;
                }
                LayoutSPAView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    builder.Element("#SharedSidemenu")
                        .BuildSidebar(function (x) { return x.MenuList; }, function (x, args) { return x.SelectedMenu(args); });
                    builder.Element("#AppBrand")
                        .BindingAction(DomBehind.UIElement.Click, function (x) { return x.Reload(); });
                    builder.Element("#SignOutButton")
                        .BindingAction(DomBehind.UIElement.Click, function (x) { return x.SignOut(); });
                };
                return LayoutSPAView;
            }(DomBehind.BizView));
            Shared.LayoutSPAView = LayoutSPAView;
        })(Shared = RazorTemplate.Shared || (RazorTemplate.Shared = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=LayoutSPAView.js.map