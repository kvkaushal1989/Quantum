export interface OperationalTrnModel {
    commercial_schedule_trn_pk: number;
    commercial_schedule_hdr_fk: number;
    pol_fk: number;
    polter_fk: number;
    eta: Date;
    org_eta: Date;
    port_stay: string;
    etd: Date;
    org_etd: Date;
    ata: Date;
    transit_time: string;
    pod_fk: number;
    podter_fk: number;
    bound: string;
    callsequence: number;
    oceantug_fk: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    isedited: number;
    variance: string;
    pS_Display: any;
}
