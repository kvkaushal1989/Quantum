export interface OperationalTrnModel {
    commercial_schedule_trn_pk: number;
    commercial_schedule_hdr_fk: number;
    pol_fk: number;
    polter_fk: number;
    eta: Date;
    port_stay: string;
    etd: Date;
    transit_time: string;
    pod_fk: number;
    podter_fk: number;
    bound: string;
    callsequence: number;
    oceantug_fk: number;
}
