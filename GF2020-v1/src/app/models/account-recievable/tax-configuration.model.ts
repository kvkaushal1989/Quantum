export class TaxConfigAdd {
    vatcountrysettingpk: number;
    countryfk: number;
    country_name: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    vatList: VatList[];
  }

export class VatList {
    vatsettingpk: number;
    vatcountrysettingfk: number;
    vat_id: string;
    vat_name: string;
    vat_percentage: number;
    applicable_flag: boolean;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
  }

export class RuleList {
    vatrulespk: number;
    countryfk: number;
    chargemasterfk: number;
    paymenttypefk: number;
    invoiceing: string;
    orgin: string;
    vat_name: string;
    vatlist: [
    {
      vatpercentagesettingpk: number;
      vat_name: string;
      vat_percentage: number;
    }];
  }