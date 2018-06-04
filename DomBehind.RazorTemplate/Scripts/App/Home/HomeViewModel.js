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
            var HomeViewModel = /** @class */ (function (_super) {
                __extends(HomeViewModel, _super);
                function HomeViewModel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._isVisibleBottomContent = false;
                    _this._isVisibleRightContent = false;
                    return _this;
                }
                HomeViewModel.prototype.Initialize = function () {
                    var _this = this;
                    RazorTemplate.AppMediator.ShowHideRightMenu.AddHandler(function (sender, e) { return _this.ShowHideRightMenu(e); });
                    RazorTemplate.AppMediator.ShowHideBottomMenu.AddHandler(function (sender, e) { return _this.ShowHideBottomMenu(e); });
                    RazorTemplate.AppMediator.SelectedMenu.AddHandler(function (sender, e) { return _this.OnSelectedMenu(sender, e); });
                };
                HomeViewModel.prototype.ShowHideRightMenu = function (isShow) {
                    this.IsVisibleRightContent = isShow;
                };
                HomeViewModel.prototype.ShowHideBottomMenu = function (isShow) {
                    this.IsVisibleBottomContent = isShow;
                };
                Object.defineProperty(HomeViewModel.prototype, "IsVisibleBottomContent", {
                    get: function () {
                        return this._isVisibleBottomContent;
                    },
                    set: function (value) {
                        if (value == this._isVisibleBottomContent)
                            return;
                        this._isVisibleBottomContent = value;
                        this.UpdateTarget("IsVisibleBottomContent");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HomeViewModel.prototype, "IsVisibleRightContent", {
                    get: function () {
                        return this._isVisibleRightContent;
                    },
                    set: function (value) {
                        if (value == this._isVisibleRightContent)
                            return;
                        this._isVisibleRightContent = value;
                        this.UpdateTarget("IsVisibleRightContent");
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeViewModel.prototype.OnSelectedMenu = function (sender, e) {
                    var uri = e;
                    if (Object.IsNullOrUndefined(uri))
                        return;
                    this.MainContentSource = uri.MainUri;
                    this.BottomContentSource = uri.BottomUri;
                    this.IsVisibleBottomContent = !String.IsNullOrWhiteSpace(uri.BottomUri);
                    this.RightContentSource = uri.RightUri;
                    this.IsVisibleRightContent = false;
                    this.UpdateTarget();
                };
                return HomeViewModel;
            }(DomBehind.BizViewModel));
            Home.HomeViewModel = HomeViewModel;
        })(Home = RazorTemplate.Home || (RazorTemplate.Home = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=HomeViewModel.js.map