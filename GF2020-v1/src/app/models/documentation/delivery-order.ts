import { FormGroup } from '@angular/forms';
import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';

export class DeliveryOrderGrid extends GridOptionsModel {
    currentDODtlsItem: any;

    serviceDropDownList: any[] = [];
    portDropDownList: any[] = [];
    terminalDropDownList: any[] = [];
    voyageDropDownList: any[] = [];
    customerDropDownList: any[] = [];

    settingsForm: FormGroup;
    settingsObject: DeliveryOrderSettings = new DeliveryOrderSettings();
    tmpSettingsObject: DeliveryOrderSettings = new DeliveryOrderSettings();

    filterGrid: FilterDeliveryOrder = new FilterDeliveryOrder();

    selectedTab: number = 0;

    isBookingVisible: boolean = false;
    bookingGridDataList: any[] = [];
    tmpBookingGridDataList: any[] = [];

    isSendPopUpVisible: boolean = false;
    sendModel: DeliveryOrderSend = new DeliveryOrderSend();

    isPreviewVisible: boolean = false;
    previewData: boolean = false;

}

export class FilterDeliveryOrder {
    servive_pk: any = null;
    port_pk: any = null;
    terminal_pk: any = null;
    voyage_pk: any = null;
    customer_pk: any = null;
    from_date: any = null; // new Date();
    to_date: any = null; // new Date();
}

export class DeliveryOrderSettings {
    deliveryorderpk: number = 0;
    send_management: any = 1;
    do_content: number = 1;
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

export class DeliveryOrderSend {
    cstfk: number = 0;
    commercial_schedule_trn_pk: number = 0;
    commercial_schedule_hdr_pk: number = 0;
    portmaster_pk: number = 0;
    terminalmaster_pk: number = 0;
    voynr: string = '';
    terminal_name: string = '';
    eta: any = null;
    rbl_cnt: number = 0;
    tot_cnt: number  = 0;
    reg_de_entrda: string = '';
    temaflu_no: string = '';
    can_flag: number = 0;
}

export const SEND_MANAGEMENT: any[] = [{ value: 1, name: 'Automatic' }, { value: 2, name: 'Review and Send'}];
