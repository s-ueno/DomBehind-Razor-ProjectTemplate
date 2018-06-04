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
            var SideMenuViewModel = /** @class */ (function (_super) {
                __extends(SideMenuViewModel, _super);
                function SideMenuViewModel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                SideMenuViewModel.prototype.Initialize = function () {
                    var menuList = new Array();
                    var topNodes = {
                        Title: "Sample Forms",
                        IsGroup: true,
                        Children: [
                            {
                                Title: "2 pane form", Icon: "fa fa-coffee", AddtionalInfo: {
                                    MainUri: "ContentsHoge/Main",
                                    BottomUri: "",
                                    RightUri: "ContentsHoge/Detail",
                                }
                            },
                            {
                                Title: "3 pane form", Icon: "fa fa-home", AddtionalInfo: {
                                    MainUri: "",
                                    BottomUri: "",
                                    RightUri: "",
                                }
                            },
                        ],
                    };
                    menuList.push(topNodes);
                    var gridNodes = {
                        Title: "Other",
                        IsGroup: true,
                        Children: [
                            {
                                Title: "Other - 1", Icon: "fa fa-table", AddtionalInfo: {
                                    MainUri: "",
                                    BottomUri: "",
                                    RightUri: "",
                                }
                            },
                            {
                                Title: "Other - 2", Icon: "fa fa-list", AddtionalInfo: {
                                    MainUri: "",
                                    BottomUri: "",
                                    RightUri: "",
                                }
                            },
                        ],
                    };
                    menuList.push(gridNodes);
                    this.MenuList = new DomBehind.Data.ListCollectionView(menuList);
                    this.MenuList.Current = topNodes.Children.FirstOrDefault();
                    this.UpdateTarget();
                };
                SideMenuViewModel.prototype.SideMenuAction = function (args) {
                    var node = args;
                    this.NotifyEvent(RazorTemplate.AppMediator.SelectedMenu, node.AddtionalInfo);
                };
                return SideMenuViewModel;
            }(DomBehind.BizViewModel));
            Home.SideMenuViewModel = SideMenuViewModel;
        })(Home = RazorTemplate.Home || (RazorTemplate.Home = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=SideMenuViewModel.js.map