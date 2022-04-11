export interface TerminalDetailsModel {
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
    terminalmaster_pk: number;
    terminal_name: string;
    sent_datetime: string;
    status: string;
    is_status: number;
    containerwiseList: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
    }];
    totalcontainerList: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
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
    discharged_list: [{
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
    ata_datetime: string;
    atd_datetime: string;
    discharge_arrival_time: string;
    dischargeconf_time: string;
    load_beforearrival_time: string;
    loadconf_afterdept_time: string;
}
