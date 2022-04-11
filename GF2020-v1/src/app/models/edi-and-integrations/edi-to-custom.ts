import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model'

export class EdiToCustomGrid extends GridOptionsModel {
    voyageDropDownList: any[] = [];
    polTerDropDownList: any[] = [];
    podTerDropDownList: any[] = [];
    statusDropDownList: any[] = [];

    filterEDIToCustom: FilterEDIToCustom = new FilterEDIToCustom();

    exportEdiHeader: any[] = COLHEADER;
}


export class FilterEDIToCustom {
    voyage_pk: any = null;
    pol_ter_pk: any = null;
    pod_ter_pk: any = null;
    from_date: any = null;
    to_date: any = null;
    status: any = '2';
}

export const COLHEADER = [
    {
        columnName: 'company_name',
        columnCaption: 'Company Name',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 1
    },
    {
        columnName: 'comm_address_line1',
        columnCaption: 'comm_address_line1',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 20,
        displayOrder: 2
    },
    {
        columnName: 'comm_address_line2',
        columnCaption: 'comm_address_line2',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 3
    },
    {
        columnName: 'comm_address_line3',
        columnCaption: 'comm_address_line3',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 10,
        displayOrder: 4
    },
    {
        columnName: 'comm_city_name',
        columnCaption: 'comm_city_name',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 5
    },
    {
        columnName: 'comm_state_name',
        columnCaption: 'comm_state_name',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 6
    },
    {
        columnName: 'comm_post_code',
        columnCaption: 'comm_post_code',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'country_name',
        columnCaption: 'country_name',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 8
    },
    {
        columnName: 'comm_fax',
        columnCaption: 'comm_fax',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 9
    },
    {
        columnName: 'comm_email',
        columnCaption: 'comm_email',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'manifest_type',
        columnCaption: 'manifest_type',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'vessel_code',
        columnCaption: 'vessel_code',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'vessel_name',
        columnCaption: 'vessel_name',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'voynr',
        columnCaption: 'voynr',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'blnumber',
        columnCaption: 'blnumber',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'bldate',
        columnCaption: 'bldate',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'polid',
        columnCaption: 'polid',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'polterid',
        columnCaption: 'polterid',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'podid',
        columnCaption: 'podid',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'podterid',
        columnCaption: 'podterid',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'frtTerms',
        columnCaption: 'frtTerms',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shipper',
        columnCaption: 'shipper',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shipperadd',
        columnCaption: 'shipperadd',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shipperadd2',
        columnCaption: 'shipperadd2',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shippercity',
        columnCaption: 'shippercity',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shippercnountry',
        columnCaption: 'shippercnountry',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shipperph',
        columnCaption: 'shipperph',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'shipperfax',
        columnCaption: 'shipperfax',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consignee',
        columnCaption: 'consignee',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consigneeadd',
        columnCaption: 'consigneeadd',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consigneeadd2',
        columnCaption: 'consigneeadd2',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consigneecity',
        columnCaption: 'consigneecity',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consigneecnountry',
        columnCaption: 'consigneecnountry',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consigneeph',
        columnCaption: 'consigneeph',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'consgineefax',
        columnCaption: 'consgineefax',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifyparty',
        columnCaption: 'notifyparty',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifyadd',
        columnCaption: 'notifyadd',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifyadd2',
        columnCaption: 'notifyadd2',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifycity',
        columnCaption: 'notifycity',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifycnountry',
        columnCaption: 'notifycnountry',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifyph',
        columnCaption: 'notifyph',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'notifyfax',
        columnCaption: 'notifyfax',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'pfd',
        columnCaption: 'pfd',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'containernumber',
        columnCaption: 'containernumber',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'containertype',
        columnCaption: 'containertype',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'containerstatus',
        columnCaption: 'containerstatus',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'containerseal',
        columnCaption: 'containerseal',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 7
    },
    {
        columnName: 'packtype',
        columnCaption: 'packtype',
        dataType: 'integer',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 10
    },
    {
        columnName: 'packqty',
        columnCaption: 'packqty',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 11
    },
    {
        columnName: 'grossweight',
        columnCaption: 'Gross Weight',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 15,
        displayOrder: 12
    },
    {
        columnName: 'netwgt',
        columnCaption: 'netwgt',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'tareweight',
        columnCaption: 'tareweight',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'volume',
        columnCaption: 'volume',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'remarks',
        columnCaption: 'remarks',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'marks',
        columnCaption: 'marks',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'description',
        columnCaption: 'description',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'imdg',
        columnCaption: 'imdg',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'unnr',
        columnCaption: 'unnr',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'flashpoint',
        columnCaption: 'flashpoint',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'temp_max',
        columnCaption: 'temp_max',
        dataType: 'integer',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'temp_min',
        columnCaption: 'temp_min',
        dataType: 'integer',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'ncmnr',
        columnCaption: 'NCM Nr.',
        dataType: 'integer',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'remarks1',
        columnCaption: 'Remarks 1',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'remarks2',
        columnCaption: 'Remarks 2',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'remarks3',
        columnCaption: 'Remarks 3',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    },
    {
        columnName: 'mloblnr',
        columnCaption: 'Mobile Nr.',
        dataType: 'String',
        columnAlign: 'left',
        columnWidth: 25,
        displayOrder: 13
    }
];
