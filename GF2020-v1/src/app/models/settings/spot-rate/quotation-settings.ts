export interface QuotationSettingsModel {
  quotsettingpk: number;
  customermasterfk: number;
  customercode: string;
  customername: string;
  containerstatusifk: string;
  quotefor: string;
  freight_type_ifk: string;
  freight: string;
  aif_ifk: string;
  quote_aif: string;
  freightpayment: string;
  localcharge_ifk: string;
  local_charge: string;
  mqc_ifk: string;
  mqc: string;
  excSurcharges: string;
  excludeSurcharges: [
    {
      quotexcludesurchargepk: number,
      quotsettingfk: number,
      chargemasterfk: number;
      charge_id: string;
    }
  ];
  hiddenfield: string;
}
