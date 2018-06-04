namespace DomBehind.RazorTemplate.ContentsHoge {
    export interface Customer {
        CustomerId: string;
        FirstName?: string;
        LastName?: string;
        PhoneNo?: string;
        Address?: string;
        City?: string;
        ZipCode?: string;
        Notes?: string;
        UpdateDate?: string;
        Css?: string;
        CellStyle?: string;
    }


    export class FindCustomerWebProxy
        extends DomBehind.Web.WebService<any, Customer[]>{
        protected Url: string = "ContentsHoge/FindCustomer";
    }
}