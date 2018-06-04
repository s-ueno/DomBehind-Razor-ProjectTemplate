namespace DomBehind.RazorTemplate {
    // Interaction of common dialogue such as interaction with application portal
    export class AppMediator {
        public static ShowHideRightMenu = new DomBehind.TypedEvent<boolean>();
        public static ShowHideBottomMenu = new DomBehind.TypedEvent<boolean>();
        public static SelectedMenu = new DomBehind.TypedEvent<{ MainUri: string, BottomUri: string, RightUri: string }>();
    }
}