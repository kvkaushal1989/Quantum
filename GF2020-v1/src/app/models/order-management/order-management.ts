import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';
import { CustomResponse } from 'src/app/shared/models/response';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BookingSettings } from './new-booking/new-booking';

export interface OrderManagement {
    bookingmasterpk: number;
}

export class OMGridHeader extends GridOptionsModel {
    customerDrpDwnList: any = [];
    selectedCustomer: string = null;
    selectedCustomerObj: null;
    originDrpDwnList: [];
    selectedOrigin: null;
    selectedOriginObj: null;
    destinationDrpDwnList: [];
    selectedDestination: null;
    selectedDestinationObj: null;
    departureDate: null;
    formDate: any = new Date();
    minDate: any = new Date();
    isAllocation: false;
    recentBookingList: [];
    isrecentBookingVisible: boolean = false;
    isModifyVisible: boolean = false;

    fetchChargesList: any[] = [];

    bookingList: any[] = [];
    filteredBookingList: any[] = [];
    bookingBillList: any[] = [];
    filteredBookingBillList: any[] = [];

    bookingIncomeSummary: any = null;
    bookingBillSummary: any = null;

    currentVslVoyItem: any;
    currentBookingItem: any;
    currentBookingBillItem: any;

    isVesselBookingVisible: boolean = true;
    vesseleBookingList: any[] = [];
    filteredVesseleBookingList: any[] = [];
    currentVesseleBookingItem: any = null;

    isPortBookinglVisible: boolean = false;
    portBookingList: any[] = [];
    filteredPortBookingList: any[] = [];
    currentPortBookingItem: any = null;

    isTerminalBookingVisible: boolean = false;
    terminalBookingList: any[] = [];
    filteredTerminalBookingList: any[] = [];
    currentTerminalBookingItem: any = null;

    isBookingVisible: boolean = false;
    isBookingDetailsVisible: boolean = false;
    isManageBookingVisible: boolean = false;
    isCancleBookingVisible: boolean = false;
    isReNoMinateBookingVisible: boolean = false;
    isBookingModifyVisible: boolean = false;
    isBookingSummaryVisible: boolean = false;
    isIncomeSummaryVisible: boolean = false;
    isBookingFileUploadVisible: boolean = false;
    //#region RBL Added by Jyothi
    isRBLVisible: boolean = false;
    isRBLManual: boolean = false;
    isRBLManualEntry: boolean = false;
    rblManualCount: number = 0;
    isServiceBLVisible: boolean = false;
    isRBLEntryVisible: boolean = false;
    //#endregion Till here
    isBillListVisible: boolean = false;
    isBillSummaryVisible: boolean = false;

    isFileUploadPopupVisible: boolean = false;
    // isReNominatePopupVisible: boolean = false;

    bookingMoreList: any[] = moreList;
    isBookingMoreDisabled: boolean = false;
    allocationChecks: any = { isSummaryChecked: false, isAutoWeightChecked: false };

    settingObj: BookingSettings = new BookingSettings();

    created_by_fk: any = 1;
    isChangeDestinationFlag: boolean = false;
    isFrieghtRevisionFlag: boolean = false;
}


const moreList: any[] = [{
    value: 1,
    icon: '../../../../assets/images/MenuIcons/upload-file.png',
    viewValue: 'Upload File'
}, {
    value: 5,
    icon: '../../../../assets/images/MenuIcons/manual-entry.png',
    viewValue: 'Manual Entry'
}, {
    value: 2,
    icon: '../../../../assets/images/MenuIcons/Edit.png',
    viewValue: 'Modify Booking'
}, {
    value: 3,
    icon: '../../../../assets/images/MenuIcons/Calender.png',
    viewValue: 'Re-Nominate'
}, {
    value: 4,
    icon: '../../../../assets/images/MenuIcons/cancel.png',
    viewValue: 'Cancel Booking'
}, {
    value: 6,
    icon: '../../../../assets/images/MenuIcons/document.png',
    viewValue: 'Service BL'
},
{
    value: 7,
    icon: '../../../../assets/images/green-tick.png',
    viewValue: 'Approve Booking',
  }];
