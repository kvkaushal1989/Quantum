import { OperationalTrnModel } from './operational-trn';

export interface OperationalScheduleModel {
    commercial_schedule_hdr_pk: number;
    servicemaster_fk?: any;
    voynr: string;
    barge_fk?: any;
    startport_fk: number;
    endport_fk: number;
    start_date: string;
    end_date: string;
    voystatus_ifk: string;
    status: string;
    bound: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    details: OperationalTrnModel[];

}
