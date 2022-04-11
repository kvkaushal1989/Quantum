export interface RiverDraftMatrixObject {
    riverdraftmasterpk: number;
    commercialscheduletrnfk: number;
    servicemaster_pk: number;
    service_id: string;
    service_name: string;
    sailed: string;
    portmaster_pk: number;
    port_id: string;
    port_name: string;
    predicteddraft: any;
    actualdraft: any;
    projecteddraft: any;
    vslcapacity: any;
    effectivecapacity: null;
    wgtdiff: any;
    average_weight: any;
    orgteus: number;
    effectiveteus: number;
    eta: string;
    created_by_fk: number;
    created_on: string;
    timeZone: string;
    active: number;
    version_no: number;
    hiddenField: number;
}

export interface FetchSettingsObject {
    riverdraftsettingspk: number;
    effectivefrom: string;
    effectiveto: string;
    repeatannually: number;
    applyalert: number;
    navigation: number;
    startdate: string;
    enddate: string;
    departuredraft: number;
    projecteddraft: number;
    applyto: number;
    alerttoupdate: string;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    is_active: number;
    version_no: number;
    hiddenField: number;
}

export interface SaveRoutes {
    riverdraftmasterpk: number;
    commercialscheduletrnfk: number;
    predicteddraft: number;
    projecteddraft: number;
    effectivecapacity: number;
    effectiveteus: number;
    is_active: number;
    created_by_fk: number;
    // created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}

export class RDBargeList {
    draft_mts: number;
    draft_feet: number;
    dead_weight: number;
    average_weight: number;
}
