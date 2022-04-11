import { BookingDetails, ContainerTypelist, BookingFreightList, BookingOtherFreightList, BookingRouteList, AllocationDetails } from './new-booking/new-booking';

export class ManageBooking implements BookingDetails {
    bookingmasterpk: number = 0;
    companyfk: number = 0;
    bookingid: string = null;
    bookingdate: string = null;
    referencetype: string = null;
    referencefk: number = 0;
    referencenumber: string = null;
    customerfk: number = 0;
    shipperfk: any = null;
    consigneefk: any = null;
    polfk: number = 0;
    polterfk: any = null;
    polagentfk: any = null;
    podfk: any = null;
    podterfk: any = null;
    podagentfk: any = null;
    tosfk: any = null;
    bookingtype: number = 0;
    genteus: any = null;
    reeferteus: any = null;
    hazmatteus: any = null;
    ladenwgt: any = null;
    totalwgt: any = null;
    emptyteus: any = null;
    emptywgt: any = null;
    totalteus: any = null;
    bookingstatus: any = null;
    mloblnr: any = null;
    bkgcur: number = 0;
    bkgamt: number = 0;
    is_active: any = null;
    created_by_fk: any = null;
    last_updated_by_fk: any = null;
    version_no: any = null;
    // allocteus: any = null;
    // bkgteus: any = null;
    // availableteus: any = null;
    // overbkdteus: any = null;
    // customercode: string = null;
    // customername: string = null;
    // customerimage: any = null;
    // bkgcurid: string = null;
    // allocationpk: any = null;
    // allocationtype: any = null;
    // servicedefintionfk: number = 0;
    priority: number = 1;
    reNominatePK: number = 0;
    commercial_schedule_hdr_fk: number = 0;
    ctypelist: ContainerType[];
    // bkgFrtList: BookingFreight[];
    // bkgOthFrtList: BookingOtherFreight[];
    bkgRouteList: BookingRoute[];
    allocDtl: Allocation[];
    allocationChecks: any = { isSummaryChecked: false, isAutoWeightChecked: false};
    gridAllocationDetail: any;
    gridTmpAllocationDetail: any;
}

export class ContainerType implements ContainerTypelist {
    bookingctypepk: number = 0;
    bookingmasterfk: number = 0;
    containersize: string = null;
    genqty: number = 0;
    reeferqty: number = 0;
    hazmatqty: number = 0;
    ladenteus: any = null;
    ladenwgt: any = null;
    emptyqty: number = 0;
    emptywgt: any = null;
    totalteus: any = null;
    totalwgt: any = null;
    is_active: any = null;
    created_by_fk: any = null;
    created_on: string = null;
    last_updated_by_fk: any = null;
    last_updated_on: any = null;
    version_no: any = null;
    preference: number = 0;
}

export class BookingFreight implements BookingFreightList {
    bookingfreightpk: number = 0;
    bookingmasterfk: number = 0;
    bookingctypefk: number = 0;
    containersize: number = 0;
    commoditygrpfk: number = 0;
    freightelementfk: number = 0;
    nocontainers: number = 0;
    currencyfk: number = 0;
    rate: number = 0;
    totalfreight: number = 0;
    collectflag: number = 0;
    invoicelocationfk: number = 0;
    invoicecustomerfk: number = 0;
    roe: number = 0;
    chargetype: number = 0;
    chargebasisfk: any = null;
    taxreffk: any = null;
    taxper: any = null;
    taxamt: any = null;
    is_active: any = null;
    created_by_fk: any = null;
    created_on: string = null;
    last_updated_by_fk: any = null;
    last_updated_on: any = null;
    version_no: number = 0;
    collectflagdesc: string = null;
    commgrpcode: string = null;
    customercode: string = null;
    customername: string = null;
    frtpref: number = 0;
    chargename: string = null;
    referencefk: any = null;
    referencenumber: any = null;
}

export class BookingOtherFreight implements BookingOtherFreightList {
    bookingfreightpk: number = 0;
    bookingmasterfk: number = 0;
    bookingctypefk: number = 0;
    containersize: number = 0;
    commoditygrpfk: number = 0;
    freightelementfk: number = 0;
    nocontainers: number = 0;
    currencyfk: number = 0;
    rate: number = 0;
    totalfreight: number = 0;
    collectflag: number = 0;
    invoicelocationfk: number = 0;
    invoicecustomerfk: number = 0;
    roe: number = 0;
    chargetype: number = 0;
    chargebasisfk: any = null;
    taxreffk: any = null;
    taxper: any = null;
    taxamt: any = null;
    is_active: any = null;
    created_by_fk: any = null;
    created_on: string = null;
    last_updated_by_fk: any = null;
    last_updated_on: any = null;
    version_no: number = 0;
    collectflagdesc: string = null;
    commgrpcode: string = null;
    customercode: string = null;
    customername: string = null;
    frtpref: number = 0;
    chargename: string = null;
    referencefk: any = null;
    referencenumber: any = null;
}

export class BookingRoute implements BookingRouteList {
    bookingroutingpk: number = 0;
    bookingmasterfk: number = 0;
    slno: number = 0;
    polfk: number = 0;
    polterfk: number = 0;
    podfk: number = 0;
    podterfk: number = 0;
    loadcstfk: number = 0;
    dischargecstfk: number = 0;
    orgloadcstfk: any = null;
    orgdiscstfk: any = null;
    rolloverremarks: any = null;
    rolloverdate: any = null;
    rolloverby: any = null;
    is_active: any = 1;
    created_by_fk: any = 1;
    created_on: any = new Date();
    last_updated_by_fk: any = 1;
    last_updated_on: any = new Date();
    version_no: any = null;
}

export class Allocation implements AllocationDetails {
    allocDesc: string = null;
    teu: number = 0;
    reefer: number = 0;
    hazmat: number = 0;
    wgt: number = 0;
    preference: number = 0;
}
