export interface QuoteFetchModel {
    quotmasterpk: number;
    quotationid: string;
    status: string;
    customermasterpk: number;
    customername: string;
    customerimage: string;
    created_by_fk: number;
    createdby: string;
    created_on: string;
    username: string;
    user_image: string;
    quotefor: string;
    polList: string;
    podList: string;
    validfrom: Date;
    validto: Date;
    expireIn: string;
    reject_reason: string;
}
