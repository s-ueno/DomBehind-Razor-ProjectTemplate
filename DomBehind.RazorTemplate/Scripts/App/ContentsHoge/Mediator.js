var DomBehind;
(function (DomBehind) {
    var RazorTemplate;
    (function (RazorTemplate) {
        var ContentsHoge;
        (function (ContentsHoge) {
            /**
             * Message mediator between different ViewModels in ContentsHoge
             */
            var Mediator = /** @class */ (function () {
                function Mediator() {
                }
                /**
                 *
                 */
                Mediator.SelectedCustomerEvent = new DomBehind.TypedEvent();
                return Mediator;
            }());
            ContentsHoge.Mediator = Mediator;
        })(ContentsHoge = RazorTemplate.ContentsHoge || (RazorTemplate.ContentsHoge = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=Mediator.js.map