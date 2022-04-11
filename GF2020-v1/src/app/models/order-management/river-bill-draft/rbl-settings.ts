export interface RblSettingsModel {
    blsettingspk: number;
    openbefore: string;
    wipbefore: string;
    draftbefore: string;
    micdtabefore: string;
    printbefore: string;
    closebefore: string;
    issuebefore: string;
    riverblgen: number;
    draftblnr: number;
    loaddtpref: string;
    issueplacepref: string;
    timerbaseline: string;
    printerlocfk: number;
    locationname: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    custList: [
        {
            blsetcustomerpk: number;
            blsettingsfk: number;
            customerfk: number;
            customercode: string;
            customerimage: string;
            customername: string;
            is_active: number;
            created_by_fk: number;
            created_on: string;
            last_updated_by_fk: number;
            last_updated_on: string;
            version_no: number,
            routeList: [
                {
                    blsetroutepk: number;
                    customerfk: number;
                    routefk: number;
                    route_code: string;
                    is_active: number;
                    created_by_fk: number;
                    created_on: string;
                    last_updated_by_fk: number;
                    last_updated_on: string;
                    version_no: number
                }
            ]
        }
    ];
    clauseList: [];
    // clauseList: [{
    //     blsettingsfk: number;
    //     clausemasterfk: number;
    //     clausesettingspk: number;
    //     created_by_fk: string;
    //     is_active: number;
    // }];
}
