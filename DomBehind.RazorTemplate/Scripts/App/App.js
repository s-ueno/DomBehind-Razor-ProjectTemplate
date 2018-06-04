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
        var BizApplication = /** @class */ (function (_super) {
            __extends(BizApplication, _super);
            function BizApplication() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BizApplication.prototype.UnhandledException = function (error) {
                var errorMessage = "Unknown exception";
                if (!Object.IsNullOrUndefined(error)) {
                    if (error instanceof DomBehind.AjaxException) {
                        var ajaxError = error;
                        errorMessage = ajaxError.ToString();
                    }
                    else if (error instanceof DomBehind.Exception) {
                        errorMessage = error.ToString();
                    }
                    else if (error instanceof Error) {
                        errorMessage = error.name + ":" + error.message;
                    }
                }
                console.error(errorMessage);
                DomBehind.MessaageBox.ShowWarning(errorMessage);
            };
            Object.defineProperty(BizApplication.prototype, "DefaultActionPolicy", {
                get: function () {
                    return [
                        new DomBehind.Data.SuppressDuplicateActionPolicy(),
                        new DomBehind.Data.ExceptionHandlingActionPolicy(),
                        new DomBehind.Data.ValidationExceptionHandlingActionPolicy(),
                    ];
                },
                enumerable: true,
                configurable: true
            });
            BizApplication.prototype.OnBrowserBack = function () {
                DomBehind.MessaageBox.ShowWarning("The back button can not be used.");
            };
            return BizApplication;
        }(DomBehind.Application));
        RazorTemplate.BizApplication = BizApplication;
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=App.js.map