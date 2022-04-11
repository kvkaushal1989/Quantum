export interface BookingDetails {
        bookingmasterpk: number;
        companyfk: number;
        bookingid: string;
        bookingdate: any;
        referencetype: string;
        referencefk: number;
        referencenumber: string;
        customerfk: number;
        shipperfk: any;
        consigneefk: any;
        polfk: number;
        polterfk: any;
        polagentfk: any;
        podfk: any;
        podterfk: any;
        podagentfk: any;
        tosfk: any;
        bookingtype: number;
        genteus: any;
        reeferteus: any;
        hazmatteus: any;
        ladenwgt: any;
        totalwgt: any;
        emptyteus: any;
        emptywgt: any;
        totalteus: any;
        bookingstatus: any;
        mloblnr: any;
        bkgcur: number;
        bkgamt: number;
        is_active: any;
        created_by_fk: any;
        last_updated_by_fk: any;
        version_no: any;
        // allocteus: any;
        // bkgteus: any;
        // availableteus: any;
        // overbkdteus: any;
        // customercode: string;
        // customername: string;
        // customerimage: any;
        // bkgcurid: string;
        // allocationpk: any;
        // allocationtype: any;
        // servicedefintionfk: number;
        priority: number;
        reNominatePK: number;
        commercial_schedule_hdr_fk: number;
        ctypelist: ContainerTypelist[];
        // bkgFrtList: BookingFreightList[];
        // bkgOthFrtList: BookingOtherFreightList[];
        bkgRouteList: BookingRouteList[];
        allocDtl: AllocationDetails[];
        allocationChecks: any;
}

export interface ContainerTypelist {
    bookingctypepk: number;
    bookingmasterfk: number;
    containersize: string;
    genqty: number;
    reeferqty: number;
    hazmatqty: number;
    ladenteus: any;
    ladenwgt: any;
    emptyqty: number;
    emptywgt: any;
    totalteus: any;
    totalwgt: any;
    is_active: any;
    created_by_fk: any;
    created_on: string;
    last_updated_by_fk: any;
    last_updated_on: any;
    version_no: any;
    preference: number;
}

export interface BookingFreightList {
    bookingfreightpk: number;
    bookingmasterfk: number;
    bookingctypefk: number;
    containersize: number;
    commoditygrpfk: number;
    freightelementfk: number;
    nocontainers: number;
    currencyfk: number;
    rate: number;
    totalfreight: number;
    collectflag: number;
    invoicelocationfk: number;
    invoicecustomerfk: number;
    roe: number;
    chargetype: number;
    chargebasisfk: any;
    taxreffk: any;
    taxper: any;
    taxamt: any;
    is_active: any;
    created_by_fk: any;
    created_on: string;
    last_updated_by_fk: any;
    last_updated_on: any;
    version_no: number;
    collectflagdesc: string;
    commgrpcode: string;
    customercode: string;
    customername: string;
    frtpref: number;
    chargename: string;
    referencefk: any;
    referencenumber: any;
}

export interface BookingOtherFreightList {
    bookingfreightpk: number;
    bookingmasterfk: number;
    bookingctypefk: number;
    containersize: number;
    commoditygrpfk: number;
    freightelementfk: number;
    nocontainers: number;
    currencyfk: number;
    rate: number;
    totalfreight: number;
    collectflag: number;
    invoicelocationfk: number;
    invoicecustomerfk: number;
    roe: number;
    chargetype: number;
    chargebasisfk: any;
    taxreffk: any;
    taxper: any;
    taxamt: any;
    is_active: any;
    created_by_fk: any;
    created_on: string;
    last_updated_by_fk: any;
    last_updated_on: any;
    version_no: number;
    collectflagdesc: string;
    commgrpcode: string;
    customercode: string;
    customername: string;
    frtpref: number;
    chargename: string;
    referencefk: any;
    referencenumber: any;
}

export interface BookingRouteList {
    bookingroutingpk: number;
    bookingmasterfk: number;
    slno: number;
    polfk: number;
    polterfk: number;
    podfk: number;
    podterfk: number;
    loadcstfk: number;
    dischargecstfk: number;
    orgloadcstfk: any;
    orgdiscstfk: any;
    rolloverremarks: any;
    rolloverdate: any;
    rolloverby: any;
    is_active: any;
    created_by_fk: any;
    created_on: string;
    last_updated_by_fk: any;
    last_updated_on: any;
    version_no: any;
}

export interface AllocationDetails {
    allocDesc: string;
    teu: number;
    reefer: number;
    hazmat: number;
    wgt: number;
    preference: number;
}

export class BookingSettings {
    bookingsettings_pk: number = 0;
    customerlist: number = 0;
    sectorlist: number = 0;
    lwsnavigation: number = 1;
    contractalert: number = 0;
    applytariff: number = 0;
    displayincome: number = 0;
    incomeaccess: number = 0;
    hideincome: number = 0;
    acceptbkg: number = 0;
    duplicatecontainer: number = 1;
    is_active: number = 1;
    created_by_fk: number = 1;
    // created_on: string;
    last_updated_by_fk: number = 1;
    // last_updated_on: string;
    version_no: number = 0;
    capList: any = [];
    commList: any = [];
    custList: any = [];
    operList: any = [];

    capnotify: any;
    commnotify: any;
    custnotify: any;
    oprnotify: any;

    // capList: BKGCapList[];
    // commList: BKGCommList[];
    // custList: BKGCustList[];
    // operList: BKGCustList[];
}

export class BKGCapList {
    id: number = 0;
    bkgcustnotification_pk: number = 0;
    bookingsettings_fk: number = 0;
    notificationifk: string;
    is_active: number = 0;
    created_by_fk: number = 0;
    created_on: string;
    last_updated_by_fk: number = 0;
    last_updated_on: string;
    version_no: number = 0;
}

export class BKGCommList {
    id: number = 0;
  bkgcustnotification_pk: number = 0;
  bookingsettings_fk: number = 0;
  notificationifk: string;
  is_active: number = 0;
  created_by_fk: number = 0;
  created_on: string;
  last_updated_by_fk: number = 0;
  last_updated_on: string;
  version_no: number = 0;
}

export class BKGCustList {
    id: number = 0;
  bkgcustnotification_pk: number = 0;
  bookingsettings_fk: number = 0;
  notificationifk: string;
  is_active: number = 0;
  created_by_fk: number = 0;
  created_on: string;
  last_updated_by_fk: number = 0;
  last_updated_on: string;
  version_no: number = 0;
}
