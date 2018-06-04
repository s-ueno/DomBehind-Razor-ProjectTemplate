namespace DomBehind.RazorTemplate.Home {
    export class HomeView extends DomBehind.BizView {
        BuildBinding(): void {
            let builder = this.CreateBindingBuilder<HomeViewModel>();

            builder.Element("#SPALayout")
                .BuildLayout()
                .Top("Home/Titlebar", { size: 50, resizable: false })
                .Left("Home/SideMenu", { size: 220, resizable: true })
                .Preview(x => x.BottomContentSource, { size: 475, resizable: true }, x => x.IsVisibleBottomContent)
                .Right(x => x.RightContentSource, { size: 350, resizable: true }, x => x.IsVisibleRightContent)
                .Main(x => x.MainContentSource, { style: `overflow-x:auto;` });

        }

    }
}