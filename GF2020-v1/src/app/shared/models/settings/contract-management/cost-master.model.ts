export interface CostMaster {
    costmasterpk: number,
    costgroup_ifk: string,
    costtype_ifk: string,
    cost_ifk: string,
    costbasis_ifk: string,
    costcode: string,
    costname: string,
    costofaccount: string,
    costapplicable_ifk: string,
    currency_fk: number,
    container_size: string,
    liquidation: string,
    is_active: number,
    revenueaccount: string,
    vat_ifk: string,
    created_by_fk: number,
    last_updated_by_fk: null,
    version_no: number;
}


