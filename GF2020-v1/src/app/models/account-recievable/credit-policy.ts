import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';
import { FormGroup } from '@angular/forms';

export class CreditPolicyGrid extends GridOptionsModel {
    filterForm: FormGroup;
    settingsForm: FormGroup;
    tmpSettingsObj: CreditPolicySettings;
    gridpolicyList: any=[];
    isEntryFormVisible: boolean = false;
    customerDropDownList: any[] = [];
    commercialStatusDropDownList: any[] = [];
    creditStatusDropDownList: any[] = [];
    financialYearDropDownList: any[] = [];
    keyContactDropDownList: any[] = [];
    requestedPeriodDropDownList: any[] = [];
    alertTypeDropDownList: any[] = [];
    alertLimitDropDownList: any[] = [];
    notificationDropDownList: any[] = [];
    renewalDropDownList: any[] = [];
    approvedPeriodDropDownList: any[] = [];
    tmpApprovedPeriodDropDownList: any[] = [];
    bsOverviewYearDropdownList: any[] = [];
    bsOverviewQuarterDropdownList: any[] = [];
    tmpBsOverviewQuarterDropdownList: any[] = [];
    bsOverviewMonthsDropdownList: any[] = [];

    selectedtab: number = 0;
    filterCreditPolicy: FilterModel = new FilterModel();
    creditPolicy: CreditPolicy = new CreditPolicy();

    filterBusinessOverview: FilterModel = new FilterModel();
    bsOvAcountStatementDataList: any;
  selectedCustomerObj: any;
  tmpCreditPolicy: any;
}

export class FilterModel {
    customermaster_fk: number = null;
    creditpolicypk: number = 0;
    creditstatus: any = null;
    commercial_status_pk: number = null;
    financial_year_pk: number = null;
    bsOVYear: any = null;
    bsOVQuater: any = null;
    bsOVMonths: any = null;
}

export class CreditPolicySettings {
    creditpolicysettingspk: number = 0;
    alertlimit_ifk: string = '';
    notification_ifk: string = '';
    renewal_ifk: string = '';
    noof_days: number = 0;
    customermaster_fk: number = 0;
    is_active: number = 0;
    created_by_fk: number = 0;
    created_on: any;
    last_updated_by_fk: number = 0;
    last_updated_on: any;
    version_no: number = 0;
  notification_list: any;
}

export class CreditPolicy {
    creditpolicypk: number = 0;
    customermaster_fk: number = 0;
    customerimage: any = null;
    customername: string = '';
    customerdetails: string = '';
    currency: string = 'USD';
    currencySymbol: string = '$';
    keyuser_fk: number = null;
    commercialstatus_ifk: string = null;
    requestedby_fk: number = 0;
    requested_user: string = '';
    approvedby_fk: number = 0;
    approved_user: string = '';
    rejectedby_fk: number = 0;
    rejected_user: string = '';
    creditstatus_ifk: string = null;
    requestedperiod_ifk: string = null;
    requesteddays: number = 0;
    requestedvalue: number = 0;
    alerttype_ifk: string = null;
    alertlimit_ifk: string = '';
    fromdate: any = new Date();
    todate: any = new Date();
    mindate: any;
    maxdate: any;
    approvedperiod_ifk: string = null;
    approveddays: number = 0;
    approvedvalue: number = 0;
    precedence: string = '';
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = new Date();
    last_updated_by_fk: number = 1;
    last_updated_on: any = new Date();
    version_no: number = 1;
}

export class filterCustomerBusinessOverview {

}
