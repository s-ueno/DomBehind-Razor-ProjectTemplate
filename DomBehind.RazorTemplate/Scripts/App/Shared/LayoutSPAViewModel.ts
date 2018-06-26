namespace DomBehind.RazorTemplate.Shared {
    export class LayoutSPAViewModel extends DomBehind.BizViewModel {
        public MenuList: DomBehind.Data.ListCollectionView;
        public Initialize(): void {

            this.CreateMenu();

            this.UpdateTarget();
        }

        protected CreateMenu() {
            let menuList = new Array<DomBehind.ISidebarNode>();

            let topNodes: DomBehind.ISidebarNode = {
                Title: "Sample Forms",
                IsGroup: true,
                Children: [
                    {
                        Title: "2 pane form", Icon: "fa fa-coffee", AddtionalInfo: "ContentsHoge/Main"
                    },
                    {
                        Title: "3 pane form", Icon: "fa fa-home", AddtionalInfo: ""
                    },
                ],
            };
            menuList.push(topNodes);

            this.MenuList = new DomBehind.Data.ListCollectionView(menuList);
            this.MenuList.Current = topNodes.Children.FirstOrDefault();
        }

        public SelectedMenu(args: any) {
            if (args && args.AddtionalInfo) {
                this.Navigator.Move(args.AddtionalInfo);
            }
        }

        public Reload() {
            location.reload();
        }

        public SignOut() {
            let svc = new Signin.SignoutWebService();
            return svc.ExecuteAjax(null).always(() => {
                this.Navigator.Move("Home");
            });
        }

    }
}