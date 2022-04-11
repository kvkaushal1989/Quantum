import { OperationalTrnModel } from './operational-trn';

export interface OperationalScheduleModel {
    commercial_schedule_hdr_pk: number;
    servicemaster_fk: number;
    voynr: string;
    barge_fk: number;
    startport_fk: number;
    endport_fk: number;
    start_date: Date;
    end_date: Date;
    voystatus_ifk: string;
    bound: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    details: OperationalTrnModel[];

}
