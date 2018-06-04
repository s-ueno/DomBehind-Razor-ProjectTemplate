namespace DomBehind.RazorTemplate.Home {
    export class TitlebarViewModel extends DomBehind.BizViewModel {
        Initialize(): void {
            
        }
        public BrowserReflesh() {
            this.Navigator.Move("Home");
        }

        public ShowContact() {

        }

        public SignOut() {
            let svc = new Signin.SignoutWebService();
            return svc.ExecuteAjax(null).always(() => {
                this.Navigator.Move("Signin");
            });
        }
    }
}