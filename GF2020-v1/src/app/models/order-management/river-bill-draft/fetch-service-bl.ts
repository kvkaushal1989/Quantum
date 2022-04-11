export interface FetchServiceBlModel {
    bookingmasterpk: number;
    customercode: string;
    customername: string;
    customerimage: string;
    bookingid: string;
    bookingdate: string;
    serviceblnr: string;
    servicebldate: string;
    blstatus: string;
    servicecode: string;
    servicename: string;
    voynr: string;
    poltername: string;
    poleta: string;
    poletd: string;
    podeta: string;
    podetd: string;
    podtername: string;
    shipper_fk: number;
    shipper_name: string;
    consignee_fk: number;
    consignee_name: string;
    notify_fk: string;
    notify_name: string;
    bkgteus: number;
    genteus: number;
    reeferteus: number;
    hazteus: number;
    emptyteus: number;
    bkgWgt: string;
    genWgt: string;
    reeferWgt: string;
    hazWgt: string;
    emptyWgt: string;
    regdesalidat: string;
    polname: string;
    podname: string;
    loadeddt: string;
    issuedate: string;
    ctypelist: [
        {
            cargoType: string;
            cntrsize: string;
            units: number;
            teus: number;
            wgt: number;
            preference: number;
        }
    ];
}
