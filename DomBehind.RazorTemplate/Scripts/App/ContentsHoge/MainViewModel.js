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
            var MainViewModel = /** @class */ (function (_super) {
                __extends(MainViewModel, _super);
                function MainViewModel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.CustomerList = new DomBehind.Data.ListCollectionView([]);
                    _this.IsForward = true;
                    _this.IsPartial = false;
                    return _this;
                }
                MainViewModel.prototype.Initialize = function () {
                    var _this = this;
                    this.RecordCountList = new DomBehind.Data.ListCollectionView([
                        { Id: 0, Text: "1,000 record", Value: 1000 },
                        { Id: 1, Text: "5,000 record", Value: 5000 },
                        { Id: 2, Text: "10,000 record", Value: 10000 },
                        { Id: 3, Text: "100,000 record", Value: 100000 },
                    ], "Text");
                    this.RecordCountList.MoveFirst();
                    this.ParentList = new DomBehind.Data.ListCollectionView([
                        { Id: 0, Title: "Parent - 1" },
                        { Id: 1, Title: "Parent - 2" },
                        { Id: 2, Title: "Parent - 3" },
                    ], "Title");
                    this.ParentList.MoveFirst();
                    this.ParentList.CurrentChanged.AddHandler(function (sender, e) { return _this.ChildList.Refresh(); });
                    this.ChildList = new DomBehind.Data.ListCollectionView([
                        { ParentId: 0, ChildId: 0, Title: "Parent 1- Child 1" },
                        { ParentId: 0, ChildId: 1, Title: "Parent 1- Child 2" },
                        { ParentId: 0, ChildId: 2, Title: "Parent 1- Child 3" },
                        { ParentId: 1, ChildId: 0, Title: "Parent 2- Child 1" },
                        { ParentId: 1, ChildId: 1, Title: "Parent 2- Child 2" },
                        { ParentId: 1, ChildId: 2, Title: "Parent 2- Child 3" },
                        { ParentId: 2, ChildId: 0, Title: "Parent 3- Child 1" },
                        { ParentId: 2, ChildId: 1, Title: "Parent 3- Child 2" },
                        { ParentId: 2, ChildId: 2, Title: "Parent 3- Child 3" },
                    ], "Title");
                    this.ChildList.MoveFirst();
                    this.ChildList.Filter = function (x) { return _this.PredicateChildFilter(x); };
                    this.UpdateTarget();
                };
                MainViewModel.prototype.PredicateChildFilter = function (obj) {
                    if (!obj)
                        return false;
                    var parent = this.ParentList.Current;
                    if (!parent)
                        return false;
                    return obj.ParentId === parent.Id;
                };
                MainViewModel.prototype.FindCustomerAsync = function () {
                    var _this = this;
                    this.IsLoadingCustomer = true;
                    this.UpdateTarget();
                    var svc = new ContentsHoge.FindCustomerWebProxy();
                    return svc.ExecuteAjax({
                        RecordCount: this.RecordCountList.Current.Value,
                        Name: this.UserName,
                    }).done(function (x) {
                        _this.CustomerList = new DomBehind.Data.ListCollectionView(x);
                    }).fail(function (error) {
                        _this.ShowError(error.ToString());
                    }).always(function () {
                        _this.IsLoadingCustomer = false;
                        _this.UpdateTarget();
                    });
                };
                MainViewModel.prototype.ClearCustomerList = function () {
                    this.CustomerList = new DomBehind.Data.ListCollectionView([]);
                    this.UpdateTarget();
                    this.NotifyEvent(RazorTemplate.AppMediator.ShowHideRightMenu, false);
                };
                MainViewModel.prototype.OnSelectedRow = function (e) {
                    var row = e;
                    if (row) {
                        this.NotifyEvent(ContentsHoge.Mediator.SelectedCustomerEvent, row);
                    }
                };
                MainViewModel.prototype.OnGridDoubleClick = function (e) {
                    this.ShowDetailContent();
                };
                MainViewModel.prototype.ShowDetailContent = function () {
                    this.NotifyEvent(RazorTemplate.AppMediator.ShowHideRightMenu, true);
                };
                MainViewModel.prototype.OnAdd = function (e) {
                    var _this = this;
                    var newRow = {
                        CustomerId: "(New)",
                        FirstName: " - ",
                        LastName: " - ",
                        Css: "form-twopane-rowstyle-sample",
                        CellStyle: '{ "CustomerId": "color: red", "FirstName": "color: red" }',
                    };
                    setTimeout(function () {
                        _this.OnEdit(newRow);
                    }, 16);
                    return newRow;
                };
                MainViewModel.prototype.OnEdit = function (row) {
                    this.OnSelectedRow(row);
                    this.ShowDetailContent();
                };
                MainViewModel.prototype.OnDeleted = function (row) {
                };
                MainViewModel.prototype.OnSave = function (row) {
                };
                return MainViewModel;
            }(DomBehind.BizViewModel));
            ContentsHoge.MainViewModel = MainViewModel;
        })(ContentsHoge = RazorTemplate.ContentsHoge || (RazorTemplate.ContentsHoge = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=MainViewModel.js.map