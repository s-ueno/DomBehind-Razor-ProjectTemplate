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
            var UIElement = DomBehind.UIElement;
            var DetailView = /** @class */ (function (_super) {
                __extends(DetailView, _super);
                function DetailView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DetailView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    builder.Element('.form-hoge-detail-panel input[name="CustomerId"]')
                        .Binding(UIElement.ValueProperty, function (x) { return x.Row.CustomerId; });
                    builder.Element('.form-hoge-detail-input-field-group input[name="FirstName"]')
                        .Binding(UIElement.ValueProperty, function (x) { return x.Row.FirstName; });
                    builder.Element('.form-hoge-detail-input-field-group input[name="LastName"]')
                        .Binding(UIElement.ValueProperty, function (x) { return x.Row.LastName; });
                    builder.Element('.form-hoge-detail-panel > input[name="CloseButton"]')
                        .BindingAction(UIElement.Click, function (x) { return x.Hide(); });
                    builder.Element('.form-hoge-detail-panel > input[name="SaveButton"]')
                        .BindingAction(UIElement.Click, function (x) { return x.Save(); });
                };
                return DetailView;
            }(DomBehind.BizView));
            ContentsHoge.DetailView = DetailView;
        })(ContentsHoge = RazorTemplate.ContentsHoge || (RazorTemplate.ContentsHoge = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=DetailView.js.map