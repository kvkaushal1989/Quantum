export interface CapacityMgmtSettings {
    capsettingspk: number;
    usermasterfk: number;
    bookingalert1: number;
    bookingalert2: number;
    bookingalert3: number;
    shortfallalert1: number;
    shortfallalert2: number;
    shortfallalert3: number;
    departurealert: string;
    projecteddeparturedraft: number;
    alerttoupdate: string;
    lwsapplyto: number;
    is_active: number;
    created_by_fk: number;
    // created_on: string;
    // last_updated_by_fk: number;
    // last_updated_on: string;
    version_no: number;
}

export class CapacityGridHeaderFilter {
    filterBy: any;
}


export class CapacitySettingsConfig {
    isSettingPopupVisible: boolean;
    isViewCutOfPopupVisible: boolean;
    viewCutOffSummary: any;
    isBookingSummaryPopupVisible: boolean;
    bookingSummary: any;
    isMOBookingPopupVisible: boolean;
    manageOverBooking: any;
    isCOProvisionalPopupVisible: boolean;
    confirmationOfProvisionalSummary: any;
}

export const bookingAlertList = [{
    value: 1, label: '80 %'
}, {
    value: 2, label: '85 %'
}, {
    value: 3, label: '90 %'
}, {
    value: 4, label: '95 %'
}];

export const shortFallAlertList = [{
    value: 1, label: '45 %'
}, {
    value: 2, label: '50 %'
}, {
    value: 3, label: '55 %'
}, {
    value: 4, label: '60 %'
}];
