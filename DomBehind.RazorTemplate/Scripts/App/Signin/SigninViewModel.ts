﻿namespace DomBehind.RazorTemplate.Signin {
    export class SigninViewModel extends DomBehind.BizViewModel {
        public Email: string;
        public Password: string;
        public IsRememberMe: boolean;

        Initialize(): void {

        }

        /**
         * Sign in process
         */
        public SignIn() {
            // Validation is executed, and processing is terminated in case of error
            if (!this.Validate()) return;

            // Display overlay for long processing
            this.WaitingOverlay(() => this.SignInRaw());
        }

        /**
         * I will try to sign in to the server
         */
        protected SignInRaw() {
            let svc = new SigninWebService();
            return svc.ExecuteAjax({
                Email: this.Email,
                Password: this.Password
            }).done(x => {
                if (x && x.AllowSignin) {
                    this.Navigator.Move('Home');
                } else {
                    this.ShowWarning(`failed to sign in.\n${x.Message}`);
                }
            });
        }

        public ForgotPassword() {
            // Even if you forget your password, your user name is required
            if (!this.Validate("Email")) return;


        }
    }
}