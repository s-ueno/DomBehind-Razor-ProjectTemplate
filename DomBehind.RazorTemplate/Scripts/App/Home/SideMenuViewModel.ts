namespace DomBehind.RazorTemplate.Home {
    export class SideMenuViewModel extends DomBehind.BizViewModel {
        public MenuList: DomBehind.Data.ListCollectionView;
        Initialize(): void {
            let menuList = new Array<DomBehind.ISidebarNode>();

            let topNodes: DomBehind.ISidebarNode = {
                Title: "Sample Forms",
                IsGroup: true,
                Children: [
                    {
                        Title: "2 pane form", Icon: "fa fa-coffee", AddtionalInfo: {
                            MainUri: "ContentsHoge/Main",
                            BottomUri: "",
                            RightUri: "ContentsHoge/Detail",
                        }
                    },
                    {
                        Title: "3 pane form", Icon: "fa fa-home", AddtionalInfo: {
                            MainUri: "",
                            BottomUri: "",
                            RightUri: "",
                        }
                    },
                ],
            };
            menuList.push(topNodes);

            let gridNodes: DomBehind.ISidebarNode = {
                Title: "Other",
                IsGroup: true,
                Children: [
                    {
                        Title: "Other - 1", Icon: "fa fa-table", AddtionalInfo: {
                            MainUri: "",
                            BottomUri: "",
                            RightUri: "",
                        }
                    },
                    {
                        Title: "Other - 2", Icon: "fa fa-list", AddtionalInfo: {
                            MainUri: "",
                            BottomUri: "",
                            RightUri: "",
                        }
                    },
                ],
            };
            menuList.push(gridNodes);


            this.MenuList = new DomBehind.Data.ListCollectionView(menuList);
            this.MenuList.Current = topNodes.Children.FirstOrDefault();

            this.UpdateTarget();
        }

        public SideMenuAction(args: any) {
            let node: DomBehind.ISidebarNode = args;

            this.NotifyEvent(AppMediator.SelectedMenu, node.AddtionalInfo);
        }
    }
}