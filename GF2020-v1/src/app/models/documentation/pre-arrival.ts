import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';
import { FormGroup } from '@angular/forms';

export class PreArrivalGrid extends GridOptionsModel {
    serviceDropDownList: any[] = [];
    portDropDownList: any[] = [];
    terminalDropDownList: any[] = [];
    voyageDropDownList: any[] = [];
    customerDropDownList: any[] = [];

    settingsForm: FormGroup;
    settingsObject: PreArrivalSettings = new PreArrivalSettings();
    tmpSettingsObject: PreArrivalSettings = new PreArrivalSettings();

    filterGrid: FilterEDIPrevArrival = new FilterEDIPrevArrival();

    selectedTab: number = 0;

    isBookingVisible: boolean = false;
    bookingGridDataList: any[] = [];
    tmpBookingGridDataList: any[] = [];

    isSendPopUpVisible: boolean = false;
    sendModel: PreArrivalSend = new PreArrivalSend();

    isPreviewVisible: boolean = false;
    previewData: boolean = false;
}

export class FilterEDIPrevArrival {
    servive_pk: any = null;
    port_pk: any = null;
    terminal_pk: any = null;
    voyage_pk: any = null;
    customer_pk: any = null;
    from_date: any = null; // new Date();
    to_date: any = null; // new Date();
}

export class PreArrivalSettings {
    prearrivalsettingpk: number = 0;
    send_management: any = 1;
    can_content: any = 1;
    prearrival_flag: boolean = false;
    prearrival_days: string;
    onarrival_flag: boolean = false;
    onarrival_days: string = '00:00:00';
    postarrival_flag: boolean = false;
    postarrival_days: string;
    archive_days: number;
    do_content: number;
    post_discharge_flag: boolean = false;
    hours_after_discharge: string;
    archive_sent_after: string;
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = new Date();
    last_updated_by_fk: number = 1;
    last_updated_on: any = new Date();
    version_no: number = 0;
}

export class PreArrivalSend {
    cstfk: number = 0;
    commercial_schedule_trn_pk: number = 0;
    commercial_schedule_hdr_pk: number = 0;
    portmaster_pk: number = 0;
    terminalmaster_pk: number = 0;
    includeContainer: number = 0;
    includeBL: number = 0;
    port_id: number = 0;
    port_name: string = '';
    voynr: string = '';
    terminal_name: string = '';
    eta: any = null;
    rbl_cnt: number = 0;
    tot_cnt: number  = 0;
    reg_de_entrda: string = '';
    temaflu_no: string = '';
    can_flag: number = 0;
    mailflag: number = 0;
}

export const SEND_MANAGEMENT: any[] = [{ value: 1, name: 'Automatic' }, { value: 2, name: 'Review and Send'}];
