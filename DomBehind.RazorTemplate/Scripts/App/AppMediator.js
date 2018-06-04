var DomBehind;
(function (DomBehind) {
    var RazorTemplate;
    (function (RazorTemplate) {
        // Interaction of common dialogue such as interaction with application portal
        var AppMediator = /** @class */ (function () {
            function AppMediator() {
            }
            AppMediator.ShowHideRightMenu = new DomBehind.TypedEvent();
            AppMediator.ShowHideBottomMenu = new DomBehind.TypedEvent();
            AppMediator.SelectedMenu = new DomBehind.TypedEvent();
            return AppMediator;
        }());
        RazorTemplate.AppMediator = AppMediator;
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=AppMediator.js.map