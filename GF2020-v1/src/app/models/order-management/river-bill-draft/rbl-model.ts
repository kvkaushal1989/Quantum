import { RblSettingsModel } from './rbl-settings';
import { RblFetchModel } from './rbl-fetch';
import { ServiceBlModel } from './service-bl';
import { SaveRbl } from './save-rbl';
import { FetchRblEntryModel } from './fetch-rbl-entry';
import { DespatchoModel } from './despatcho';

export class RblModel {
    rblList: RblFetchModel[];
    rblListInit: RblFetchModel[];
    serviceBL: ServiceBlModel;
    optionChange: any;
    rbloptionChange: any;
    despatchoList: DespatchoModel[];
    fromPage: any;
    rblEntry: FetchRblEntryModel = {
        childbookingpk: 0,
        locationfk: null,
        bookingid: null,
        bookingmasterfk: 0,
        bookingdate: null,
        referencetype: null,
        referencefk: null,
        referencenumber: null,
        customerfk: 0,
        shipperfk: null,
        consigneefk: null,
        polfk: 0,
        polterfk: 0,
        polagentfk: null,
        podfk: 0,
        podterfk: 0,
        podagentfk: null,
        tosfk: null,
        bookingtype: 0,
        ladenwgt: 0,
        bookingstatus: null,
        mloblnr: null,
        bkgcur: 0,
        bkgamt: 0,
        is_active: null,
        created_by_fk: 1,
        created_on: new Date().toISOString(),
        last_updated_by_fk: null,
        last_updated_on: null,
        version_no: null,
        commercial_schedule_hdr_fk: 0,
        blnumber: null,
        bldate: null,
        blstatus: 0,
        priority: null,
        notify_fk: null,
        shippername: null,
        shipperadd: null,
        shipperadd2: null,
        shippercity: null,
        shippercountry: null,
        shipperrucnr: null,
        consgineename: null,
        consigneeadd: null,
        consigneeadd2: null,
        consigneecity: null,
        consigneecountry: null,
        consigneerucnr: null,
        notifyname: null,
        notifyadd: null,
        notifyadd2: null,
        notifycity: null,
        notifycountry: null,
        notifyrucnr: null,
        cntrcnt: null,
        despachodenr: null,
        containernumber: null,
        customercode: null,
        customername: null,
        customerimage: null,
        servicecode: null,
        servicename: null,
        voynr: null,
        poltername: null,
        poleta: null,
        poletd: null,
        podtername: null,
        podeta: null,
        podetd: null,
        blstatusdesc: null,
        totalteus: 0,
        genteus: 0,
        reeferteus: 0,
        hazmatteus: 0,
        emptyteus: 0,
        bkgWgt: 0,
        genWgt: 0,
        reeferWgt: 0,
        hazWgt: 0,
        emptywgt: 0,
        regdesalidat: null,
        polname: null,
        podname: null,
        loaddate: null,
        sh_cntry_name: 0,
        cn_cntry_name: 0,
        np_cntry_name: 0,
        sameasconsignee: true,
        cntrlist: [
            {
                childbkgcontainerpk: 0,
                childbookingfk: 0,
                childbkgctypefk: 0,
                bookingcontainerfk: 0,
                shipper: null,
                shipperadd: '',
                consignee: null,
                consigneeadd: '',
                notifyparty: null,
                notifyadd: '',
                mothervessel: '',
                mlo: '',
                mloblnr: '',
                childbkgnr: '',
                containernumber: '',
                containertypefk: 0,
                commgrpfk: 0,
                commfk: 0,
                grossweight: 0,
                tareweight: 0,
                volume: 0,
                imdg: '',
                unnr: '',
                temp: '',
                containerseal: '',
                customsseal: '',
                packtype: '',
                packqty: 0,
                marks: '',
                description: '',
                ncmnr: null,
                remarks1: '',
                remarks2: null,
                remarks3: null,
                is_active: null,
                created_by_fk: 1,
                created_on: new Date().toISOString(),
                last_updated_by_fk: null,
                last_updated_on: null,
                version_no: null,
                hazmat_approval: 0,
                reefer_approval: 0,
                nch_file_data: null,
                containersize: null,
                loaded: false,
                load_date: null,
                load_print: null,
                discharged: false,
                discharge_date: null,
                discharge_print: null,
                dischargetime: null,
                loadtime: null,
                stowpos: null,
                haz_ref_app_date: null,
                shipperadd2: null,
                shippercity: null,
                shippercountry: null,
                shipperrucnr: null,
                consigneeadd2: null,
                consigneecity: null,
                consigneecountry: null,
                consigneerucnr: null,
                notifyadd2: null,
                notifycity: null,
                notifycountry: null,
                notifyrucnr: null,
                is_lcl: 0,
                containertype_id: null,
                cntrtype: null,
                netweight: 0,
                commoditygroup_pk: 0,
                commoditygroup_id: null,
                commodityname: null,
                cntrpref: 0
            }
        ]
    };
    saveEntry: SaveRbl;
    isRBLEdit: boolean = false;
    showCntrCntPopup: boolean = false;
    showMerchant: boolean = false;
    showContainer: boolean = false;
    panelOpenState: any;
    cntrCount: number = 0;
    isPopup: boolean;
    isDespatcho: boolean;
    rblSettings: RblSettingsModel;
    rblSettingsTemp: RblSettingsModel;
    currentBL: RblFetchModel;
    nextBL: RblFetchModel;
    activeTab = 0;
    activeCntrtab = 0;
    customerList: any;
    locationList: any = [];
    portList: any = [];
    terList: any = [];
    voyList: any = [];
    locationdefaults: any = [];
    routeList: any;
    cntrTypeList: any;
    cntrSizeList: any;
    commGrpList: any;
    commList: any;
    customerDefaults: any;
    routeDefaults: any;
    progessPercentage: any = '100%';
    shcountryDefaults: any = [];
    cncountryDefaults: any = [];
    ntcountryDefaults: any = [];
    countryList: any = [];
    commGrpDefaults: any = [];
    commDefaults: any = [];
    cntrSizeDefaults: any = [];
    cntrTypeDefaults: any = [];
    dropdownSettings: {
        singleSelection: boolean;
        text: string;
        selectAllText: string;
        unSelectAllText: string;
        enableSearchFilter: boolean;
        badgeShowLimit: number;
        disabled: boolean;
        required: boolean;
    } = {
            singleSelection: true,
            text: 'Select',
            selectAllText: 'Select',
            unSelectAllText: 'Select',
            enableSearchFilter: false,
            badgeShowLimit: 2,
            disabled: false,
            required: false
        };
    rblMoreList: any[] = rblMoreList;
    MoreList: any[] = MoreList;
    dropdownMultiSelect: {
        singleSelection: false,
        label: 'Select',
        placeholder: 'Select',
        enableCheckAll: true,
        selectAllText: 'Select All',
        unSelectAllText: 'Clear All',
        enableSearchFilter: true,
        classes: 'myclass custom-class',
        badgeShowLimit: 3,
        disabled: false,
        required: true,
        isCheckBoxVisible: true,
        isHintTextDisplay: true,
        isTagDisplay: true,
        taggedColumns: '',
        taggedButtonDisplay: true
    };
}
const rblMoreList: any[] = [{
    value: 1,
    icon: 'upload-file',
    viewValue: 'Audit Trail'
}, {
    value: 2,
    icon: 'upload-file',
    viewValue: 'Update RBL'
}, 
// {
//     value: 3,
//     icon: 'modify-booking',
//     viewValue: 'Modify Booking'
// }, {
//     value: 4,
//     icon: 're-nominate',
//     viewValue: 'Re-Nominate'
// }, 
{
    value: 5,
    icon: 'cancel-booking',
    viewValue: 'Cancel Booking'
}];
const MoreList: any[] = [{
    value: 1,
    icon: 'upload-file',
    viewValue: 'Despacho Nr.'
}, {
    value: 2,
    icon: 'upload-file',
    viewValue: 'Print'
}, {
    value: 3,
    icon: 'modify-booking',
    viewValue: 'Share'
}, {
    value: 4,
    icon: 're-nominate',
    viewValue: 'Exit'
}];

