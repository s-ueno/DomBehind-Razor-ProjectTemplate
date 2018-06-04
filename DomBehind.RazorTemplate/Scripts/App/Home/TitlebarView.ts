namespace DomBehind.RazorTemplate.Home {
    import UIElement = DomBehind.UIElement;

    export class TitlebarView extends DomBehind.BizView {
        BuildBinding(): void {
            let builder = this.CreateBindingBuilder<TitlebarViewModel>();

            builder.Element("#AppBrand")
                .BindingAction(UIElement.Click, x => x.BrowserReflesh());

            builder.Element("#ContactButton")
                .BindingAction(UIElement.Click, x => x.ShowContact());
            builder.Element("#SignOutButton")
                .BindingAction(UIElement.Click, x => x.SignOut());
        }
    }
}