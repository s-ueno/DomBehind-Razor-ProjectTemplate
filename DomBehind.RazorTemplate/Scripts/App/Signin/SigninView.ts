namespace DomBehind.RazorTemplate.Signin {
    import UIElement = DomBehind.UIElement;

    export class SigninView extends DomBehind.BizView {
        BuildBinding(): void {
            let builder = this.CreateBindingBuilder<SigninViewModel>();
            // Email 
            builder.Element("#EmailInput")
                .Binding(UIElement.ValueProperty, x => x.Email)
                .Required();

            // Password
            builder.Element("#PasswordInput")
                .Binding(UIElement.ValueProperty, x => x.Password)
                .Required("Password is required！");

            // Remember me
            builder.Element("#RememberMeCheckbox")
                .Binding(UIElement.ValueProperty, x => x.IsRememberMe);

            // Sign in Button
            builder.Element("#SignInButton")
                .BindingAction(UIElement.Click, x => x.SignIn());

            builder.Element("#ForgotPasswordButton")
                .BindingAction(UIElement.Click, x => x.ForgotPassword());
        }

    }
}