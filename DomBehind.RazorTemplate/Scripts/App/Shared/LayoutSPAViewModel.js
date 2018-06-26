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
            var LayoutSPAViewModel = /** @class */ (function (_super) {
                __extends(LayoutSPAViewModel, _super);
                function LayoutSPAViewModel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                LayoutSPAViewModel.prototype.Initialize = function () {
                    this.CreateMenu();
                    this.UpdateTarget();
                };
                LayoutSPAViewModel.prototype.CreateMenu = function () {
                    var menuList = new Array();
                    var topNodes = {
                        Title: "Sample Forms",
                        IsGroup: true,
                        Children: [
                            {
                                Title: "2 pane form", Icon: "fa fa-coffee", AddtionalInfo: "ContentsHoge/Main"
                            },
                            {
                                Title: "3 pane form", Icon: "fa fa-home", AddtionalInfo: ""
                            },
                        ],
                    };
                    menuList.push(topNodes);
                    this.MenuList = new DomBehind.Data.ListCollectionView(menuList);
                    this.MenuList.Current = topNodes.Children.FirstOrDefault();
                };
                LayoutSPAViewModel.prototype.SelectedMenu = function (args) {
                    if (args && args.AddtionalInfo) {
                        this.Navigator.Move(args.AddtionalInfo);
                    }
                };
                LayoutSPAViewModel.prototype.Reload = function () {
                    location.reload();
                };
                LayoutSPAViewModel.prototype.SignOut = function () {
                    var _this = this;
                    var svc = new RazorTemplate.Signin.SignoutWebService();
                    return svc.ExecuteAjax(null).always(function () {
                        _this.Navigator.Move("Home");
                    });
                };
                return LayoutSPAViewModel;
            }(DomBehind.BizViewModel));
            Shared.LayoutSPAViewModel = LayoutSPAViewModel;
        })(Shared = RazorTemplate.Shared || (RazorTemplate.Shared = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=LayoutSPAViewModel.js.map