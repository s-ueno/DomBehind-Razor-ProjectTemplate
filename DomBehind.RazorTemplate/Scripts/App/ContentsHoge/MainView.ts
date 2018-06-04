namespace DomBehind.RazorTemplate.ContentsHoge {
    import UIElement = DomBehind.UIElement;
    import Dropdown = DomBehind.Controls.Dropdown;

    export class MainView extends DomBehind.BizView {
        BuildBinding(): void {
            let builder = this.CreateBindingBuilder<MainViewModel>();


            builder.Element('.form-hoge-main-panel input[name="RecordCount"]')
                .Binding(Dropdown.ItemsSourceProperty, x => x.RecordCountList);

            builder.Element('.form-hoge-main-panel input[name="CustomerName"]')
                .Binding(UIElement.ValueProperty, x => x.UserName);

            builder.Element("#ForwardRadio")
                .Binding(UIElement.IsCheckedProperty, x => x.IsForward);
            builder.Element("#PartialRadio")
                .Binding(UIElement.IsCheckedProperty, x => x.IsPartial);

            builder.Element('.form-hoge-main-panel input[name="ParentList"]')
                .Binding(Dropdown.ItemsSourceProperty, x => x.ParentList);
            builder.Element('.form-hoge-main-panel input[name="ChildList"]')
                .Binding(Dropdown.ItemsSourceProperty, x => x.ChildList);



            // Action Binding 
            builder.Element('.form-hoge-main-panel input[name="SearchButton"]')
                .BindingAction(UIElement.Click, x => x.FindCustomerAsync());
            // Action Binding 
            builder.Element('.form-hoge-main-panel input[name="ClearButton"]')
                .BindingAction(UIElement.Click, x => x.ClearCustomerList());


            // グリッドのデータソースとバインド定義
            let rowContext =
                builder.Element('.grid')
                    .BuildGrid<Customer>(x => x.CustomerList,
                    {
                        onSelect: (x, row) => x.OnSelectedRow(row),
                        onDoubleClick: (x, row) => x.OnGridDoubleClick(row),
                        footerOption: {
                        },
                        headerOption: {
                            add: (x, e) => x.OnAdd(e),
                            edit: (x, e) => x.OnEdit(e),
                            delete: (x, e) => x.OnDeleted(e),
                            save: (x, e) => x.OnSave(e),
                        },
                        isSpinning: x => x.IsLoadingCustomer
                    });

            rowContext
                .ColumnBinding("Customer Id", x => x.CustomerId, { size: "80px", advancedSearch: DomBehind.FieldType.Text })
                .ColumnBinding("First Name", x => x.FirstName, { size: "80px", advancedSearch: DomBehind.FieldType.Text })
                .ColumnBinding("Last Name", x => x.LastName, { size: "150px", advancedSearch: DomBehind.FieldType.Text })
                .ColumnBinding("PhoneNo", x => x.PhoneNo, { size: "150px", advancedSearch: DomBehind.FieldType.Text })
                .ColumnBinding("Address", x => x.Address, { size: "200px" })
                .ColumnBinding("City", x => x.City, { size: "200px" })
                .ColumnBinding("ZipCode", x => x.ZipCode, { size: "80px" })
                .ColumnBinding("Notes", x => x.Notes, { size: "80px" })
                .ColumnBinding("Update Date", x => x.UpdateDate, { size: "100px" })

                .CellStyleBinding(x => x.CellStyle)
                .RowCssBinding(x => x.Css)
                ;           
        }
    }
}