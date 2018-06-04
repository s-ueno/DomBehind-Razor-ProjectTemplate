namespace DomBehind.RazorTemplate.Home {
    export class SideMenuView extends DomBehind.BizView {
        BuildBinding(): void {
            let builder = this.CreateBindingBuilder<SideMenuViewModel>();

            builder.Element("#SideMenubar")
                .BuildSidebar(x => x.MenuList, (x, args) => x.SideMenuAction(args));
        }

    }
}