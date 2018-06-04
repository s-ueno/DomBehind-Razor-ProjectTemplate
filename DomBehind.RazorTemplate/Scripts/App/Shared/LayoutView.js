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
            var LayoutView = /** @class */ (function (_super) {
                __extends(LayoutView, _super);
                function LayoutView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                LayoutView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                };
                return LayoutView;
            }(DomBehind.BizView));
            Shared.LayoutView = LayoutView;
        })(Shared = RazorTemplate.Shared || (RazorTemplate.Shared = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=LayoutView.js.map