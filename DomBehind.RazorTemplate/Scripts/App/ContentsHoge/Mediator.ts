namespace DomBehind.RazorTemplate.ContentsHoge {

    /**
     * Message mediator between different ViewModels in ContentsHoge
     */
    export class Mediator {

        /**
         * 
         */
        public static SelectedCustomerEvent = new DomBehind.TypedEvent<Customer>();

    }

}