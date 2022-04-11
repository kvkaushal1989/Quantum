import { ChargeDetailsModel } from './charge-details';

export interface QuoteDetailsModel {
  quotdetailpk: number;
  quotmasterfk: number;
  quotationid: string;
  fromportfk: number;
  toportfk: number;
  fromportID: string;
  toportID: string;
  charge_id: string;
  charge_name: string;
  commoditygroupfk: number;
  customerimage: string;
  currencyfk: number;
  currency_code_ifk: string;
  tariff_20_rate: number;
  tariff_40_rate: number;
  tariff_hc_rate: number;
  quot_20_rate: number;
  quot_40_rate: number;
  quot_hc_rate: number;
  tosfk: number;
  tosid: string;
  is_active: number;
  created_by_fk: number;
  created_on: Date;
  last_updated_by_fk: number;
  last_updated_on: Date;
  version_no: number;
  containerstatusifk: string;
  validfrom: string;
  validto: string;
  customername: string;
  customermasterfk: number;
  status: string;
  quotsettingpk: number;
  sal_header: string;
  sal_footer: string;
  contract_type: string,
  locationfk: number;
  chargeDetails: ChargeDetailsModel[];
  voyageDetails: any []
}
