export interface QuoteCommonModel {
    cmt_quotecommonsettings_pk: number;
    expiryalertdays: number;
    renewal_alert: number;
    salutationheader: string;
    salutationfooter: string;
    is_active: 1;
    created_by_fk: 1;
    created_on: string;
    last_updated_by_fk: string;
    last_updated_on: string;
    version_no: string;
}
