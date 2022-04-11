import { TerminalListModel } from './terminal-list';

export interface LoadListModel {
    polter_fk: number;
    commercial_schedule_hdr_pk: number;
    vesselmaster_pk: number;
    vessel_code: number;
    vessel_name: string;
    vessel_image: string;
    voyage: string;
    bound: string;
    portmaster_pk: number;
    port_name: string;
    service_id: string;
    service_name: string;
    terminals: [
        {
            terminal_name: string;
            status: number;
            ata_datetime: string;
            eta_datetme: string;
            atd_datetime: string;
            etd_datetme: string;
            discharge_arrival_time: string;
            dischargeconf_time: string;
            load_beforearrival_time: string;
            loadconf_afterdept_time: string;
        }
    ];
    status: number;
    containerwiseList: [{
        type: number;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number;
    }];
    totalcontainerList: [{
        type: number;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number;
    }];
    childWeightList: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
    }];
    totalweightList: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
    }];
    loaded_list: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
    }]; booked_list: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
    }];
    hiddenField1: string;
    hiddenField2: string;
    discharged: string;
    eta: string;
    atd: string;
    ata: string;
    etd: string;
    terminalDetList: TerminalListModel[];
}
