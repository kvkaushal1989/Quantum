export interface Band0Model {
    servicemaster_pk: number;
    serviceid: string;
    service_name: string;
    commercial_schedule_hdr_pk: number;
    voyage: string;
    portpk: number;
    port: string;
    portname: string;
    bkgcnt: number;
    wipcnt: number;
    eta: string;
    etd: string;
    terdtls: [
        {
            terminalmaster_pk: number;
            tername: string;
            eta: string;
            etd: string;
            bkgcnt: number;
            rblcnt: number;
            wip: number;
            draft: number;
            micdta: number;
            print: number;
            flagType: number;
        }
    ];
}