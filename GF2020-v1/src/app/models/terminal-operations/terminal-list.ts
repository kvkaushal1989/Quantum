export interface TerminalListModel {
    commercial_schedule_hdr_pk: number;
    terminalmaster_pk: number;
    portmaster_pk: number;
    vesselmaster_pk: number;
    terminal_name: string;
    status: string;
    ata: string;
    ata_datetime: string;
    eta_datetme: string;
    atd_datetime: string;
    etd_datetme: string;
    sent_datetime: string;
    discharge_arrival_time: string;
    dischargeconf_time: string;
    load_beforearrival_time: string;
    loadconf_afterdept_time: string;
    containerwiseList: [{
        type: string;
        total: number;
        general: number;
        reefer: number;
        hazmat: number;
        empty: number
    }];
    totalcontainerList: [
        {
            type: string;
            total: number;
            general: number;
            reefer: number;
            hazmat: number;
            empty: number
        }
    ];
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
    countTimerStatus: boolean;
    showCounter: boolean;
}
