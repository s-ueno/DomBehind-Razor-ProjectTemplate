namespace DomBehind.RazorTemplate.ContentsHoge {
    export class DetailViewModel extends DomBehind.BizViewModel {
        Initialize(): void {
            Mediator.SelectedCustomerEvent.AddHandler((sender, e) => this.OnSelectedCustomer(e));
        }
        public Row: Customer;
        protected OnSelectedCustomer(row: Customer) {
            this.Row = row;
            this.UpdateTarget();
        }


        public Save() {
            this.ShowMessage(`${this.Row.CustomerId} saved.`);
            this.Hide();
        }

        public Hide() {
            AppMediator.ShowHideRightMenu.Raise(this, false);
        }
    }
}