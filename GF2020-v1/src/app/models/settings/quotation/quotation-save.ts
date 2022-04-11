import { QuoteDetailsModel } from './quote-details';

export interface QuotationSaveModel {
        quotmasterpk: number;
        quotationid: string;
        customermasterfk: number;
        containerstatusifk: string;
        currencyfk: number;
        validfrom: string;
        validto: string;
        quotationprice: number;
        status: string;
        tosfk: number;
        is_active: number;
        created_by_fk: number;
        created_on: string;
        last_updated_by_fk: number;
        last_updated_on: string;
        version_no: number;
        quotsettingpk: number;
        reject_reason: string;
        sal_header: string;
        sal_footer: string;
        quotDetails: QuoteDetailsModel[];
}
