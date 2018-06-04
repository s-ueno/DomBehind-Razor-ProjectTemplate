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
        var ContentsHoge;
        (function (ContentsHoge) {
            var DetailViewModel = /** @class */ (function (_super) {
                __extends(DetailViewModel, _super);
                function DetailViewModel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DetailViewModel.prototype.Initialize = function () {
                    var _this = this;
                    ContentsHoge.Mediator.SelectedCustomerEvent.AddHandler(function (sender, e) { return _this.OnSelectedCustomer(e); });
                };
                DetailViewModel.prototype.OnSelectedCustomer = function (row) {
                    this.Row = row;
                    this.UpdateTarget();
                };
                DetailViewModel.prototype.Save = function () {
                    this.ShowMessage(this.Row.CustomerId + " saved.");
                    this.Hide();
                };
                DetailViewModel.prototype.Hide = function () {
                    RazorTemplate.AppMediator.ShowHideRightMenu.Raise(this, false);
                };
                return DetailViewModel;
            }(DomBehind.BizViewModel));
            ContentsHoge.DetailViewModel = DetailViewModel;
        })(ContentsHoge = RazorTemplate.ContentsHoge || (RazorTemplate.ContentsHoge = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=DetailViewModel.js.map