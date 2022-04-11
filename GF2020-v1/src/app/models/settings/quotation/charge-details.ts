export interface ChargeDetailsModel {
  quotchargedetailpk: number;
  quotdetailfk: number;
  bofchargefk: number;
  chargemasterfk: number;
  tosfk: number;
  tosid: string;
  charge_id: string;
  charge_name: string;
  chargetype_ifk: string;
  currency_code_ifk: string;
  currencyfk: number;
  commoditygroupfk: number;
  chargebasisfk: number;
  rate: number;
  tariff_20_rate: number;
  tariff_40_rate: number;
  tariff_hc_rate: number;
  quot_20_rate: number;
  quot_40_rate: number;
  quot_hc_rate: number;
  is_active: number;
  created_by_fk: number;
  created_on: Date;
  last_updated_by_fk: number;
  last_updated_on: Date;
  version_no: number;
  quot_20_rate_Mod: number;
  quot_40_rate_Mod: number;
  quot_hc_rate_Mod: number;
  rate_Mod: number;
  tariffFK: number;
  commodity:any
}
