export interface PostCostCardList {
    port_cost_card_mst_pk: number;
    expense_agrmt_mst_fk: number;
    cost_type: string;
    port_mst_fk: number;
    terminal_mst_fk: number;
    status: string;
    validfrom: string;
    validto: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
containerwiseList: [{
  port_cost_card_dtl_pk: number;
  port_cost_card_mst_fk: number;
  expense_agrmt_dtl_fk: number;
  sel_flag: boolean;
  costmasterfk: number;
  currencyfk: number;
  rate: number;
  costbasis_ifk: number;
  quantity: number;
  charge: number;
  vat_fk: number;
  vat_percentage: number;
  is_active: number;
  created_by_fk: number;
  created_on: string;
  last_updated_by_fk: number;
  last_updated_on: string;
  version_no: number;
}];
}
