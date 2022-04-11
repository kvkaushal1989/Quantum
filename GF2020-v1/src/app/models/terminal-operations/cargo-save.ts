export interface CargoSaveModel {
    cargosettingspk: number;
    viewpereference_ifk: string;
    listpreference_ifk: string;
    archivein_ifk: string;
    dischargelist: string;
    dischargeconfirm: string;
    loadlist: string;
    loadconfirm: string;
    defaultview: true;
    carrierreference: true;
    customerreference: true;
    boxoperator: true;
    port: true;
    terminal: true;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    alertbefore: any;
    cargoTerminal: [
        {
            cargoterminalpk: number;
            cargosettingsfk: number;
            is_active: number;
            created_by_fk: number;
            created_on: string;
            version_no: number;
            terminal_mst_fk: number;
            terminal_id: string;
            terminal_name: string;
        }
    ];
}
