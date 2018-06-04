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
            var Dropdown = DomBehind.Controls.Dropdown;
            var MainView = /** @class */ (function (_super) {
                __extends(MainView, _super);
                function MainView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MainView.prototype.BuildBinding = function () {
                    var builder = this.CreateBindingBuilder();
                    builder.Element('.form-hoge-main-panel input[name="RecordCount"]')
                        .Binding(Dropdown.ItemsSourceProperty, function (x) { return x.RecordCountList; });
                    builder.Element('.form-hoge-main-panel input[name="CustomerName"]')
                        .Binding(UIElement.ValueProperty, function (x) { return x.UserName; });
                    builder.Element("#ForwardRadio")
                        .Binding(UIElement.IsCheckedProperty, function (x) { return x.IsForward; });
                    builder.Element("#PartialRadio")
                        .Binding(UIElement.IsCheckedProperty, function (x) { return x.IsPartial; });
                    builder.Element('.form-hoge-main-panel input[name="ParentList"]')
                        .Binding(Dropdown.ItemsSourceProperty, function (x) { return x.ParentList; });
                    builder.Element('.form-hoge-main-panel input[name="ChildList"]')
                        .Binding(Dropdown.ItemsSourceProperty, function (x) { return x.ChildList; });
                    // Action Binding 
                    builder.Element('.form-hoge-main-panel input[name="SearchButton"]')
                        .BindingAction(UIElement.Click, function (x) { return x.FindCustomerAsync(); });
                    // Action Binding 
                    builder.Element('.form-hoge-main-panel input[name="ClearButton"]')
                        .BindingAction(UIElement.Click, function (x) { return x.ClearCustomerList(); });
                    // グリッドのデータソースとバインド定義
                    var rowContext = builder.Element('.grid')
                        .BuildGrid(function (x) { return x.CustomerList; }, {
                        onSelect: function (x, row) { return x.OnSelectedRow(row); },
                        onDoubleClick: function (x, row) { return x.OnGridDoubleClick(row); },
                        footerOption: {},
                        headerOption: {
                            add: function (x, e) { return x.OnAdd(e); },
                            edit: function (x, e) { return x.OnEdit(e); },
                            delete: function (x, e) { return x.OnDeleted(e); },
                            save: function (x, e) { return x.OnSave(e); },
                        },
                        isSpinning: function (x) { return x.IsLoadingCustomer; }
                    });
                    rowContext
                        .ColumnBinding("Customer Id", function (x) { return x.CustomerId; }, { size: "80px", advancedSearch: DomBehind.FieldType.Text })
                        .ColumnBinding("First Name", function (x) { return x.FirstName; }, { size: "80px", advancedSearch: DomBehind.FieldType.Text })
                        .ColumnBinding("Last Name", function (x) { return x.LastName; }, { size: "150px", advancedSearch: DomBehind.FieldType.Text })
                        .ColumnBinding("PhoneNo", function (x) { return x.PhoneNo; }, { size: "150px", advancedSearch: DomBehind.FieldType.Text })
                        .ColumnBinding("Address", function (x) { return x.Address; }, { size: "200px" })
                        .ColumnBinding("City", function (x) { return x.City; }, { size: "200px" })
                        .ColumnBinding("ZipCode", function (x) { return x.ZipCode; }, { size: "80px" })
                        .ColumnBinding("Notes", function (x) { return x.Notes; }, { size: "80px" })
                        .ColumnBinding("Update Date", function (x) { return x.UpdateDate; }, { size: "100px" })
                        .CellStyleBinding(function (x) { return x.CellStyle; })
                        .RowCssBinding(function (x) { return x.Css; });
                };
                return MainView;
            }(DomBehind.BizView));
            ContentsHoge.MainView = MainView;
        })(ContentsHoge = RazorTemplate.ContentsHoge || (RazorTemplate.ContentsHoge = {}));
    })(RazorTemplate = DomBehind.RazorTemplate || (DomBehind.RazorTemplate = {}));
})(DomBehind || (DomBehind = {}));
//# sourceMappingURL=MainView.js.map