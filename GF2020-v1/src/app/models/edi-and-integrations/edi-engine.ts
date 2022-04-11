import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';
import { FormGroup } from '@angular/forms';

export class EDIGridOptions extends GridOptionsModel {
    loginData: any = null;
    isFileRegVisible: boolean = false;

    filterForm: FormGroup;
    ediRegForm: FormGroup;
    fileDefForm: FormGroup;
    fieldDefForm: FormGroup;
    logFilterForm: FormGroup;

    filterObj: EDIFilter = new EDIFilter();
    fileRegObj: EDIRegistration;
    fileDefObj: {
        file_structure_mst_pk: null,
        file_reg_nr: null,
        file_reg_dt: null,
        location_mst_fk: null,
        port_mst_fk: null,
        members_mst_fk: null,
        file_category: null,
        document_type: null,
        document_format: null,
        file_size: null,
        remarks: null,
        created_by_fk: null,
        created_by_dt: null,
        last_modified_by_fk: null,
        last_modified_by_dt: null,
        download_type: null,
        file_name: null,
        filestructuretransaction: [],
    };
    file_TypeDropDownList: any[] = FILE_TYPE;
    fileStatusListDropDownList: any[] = STATUS;
    definitionColumnList: any = [];
    fileDefinitionList: any[] = [];
    filteredFileDefinitionList: any[] = [];

    fieldColumnList: any = [];
    fieldList: any[] = [];
    filteredFieldList: any[] = [];

    strucMapColumnList: any = [];
    strucMapDataList: any[] = [];
    filteredStrucMapDataList: any[] = [];
    structureMappingEntryList: any[] = [];
    strucMappEntryCurrObj: any;
    strucMappEntryCurrIndex: number;
    strucMapList: any;
    strucMapObj: any;
    agentFieldDataList: any[] = [];
    agentFieldCurrObj: any;
    filteredAgentFieldDataList: any[] = [];
    isAllFieldChecked: boolean = false;
    isStrucMapEntryVisible: boolean = true;
    isStrucMapPopUpVisible: boolean = false;

    msgConfigColumnList: any = [];
    msgConfigDataList: any[] = [];
    filteredMsgConfigDataList: any[] = [];

    alertConfigColumnList: any = [];
    alertConfigDataList: any[] = [];
    filteredAlertConfigDataList: any[] = [];

    isFileDefinitionVisible: boolean = true;
    isAddFieldVisible: boolean = false;

    locationDropDownList: any[] = [];
    tmpLocationDropDownList: any[] = [];

    portDropDownList: any[] = [];
    tmpPortDropDownList: any[] = [];

    memberDropDownList: any[] = [];
    tmpMemberDropDownList: any[] = [];

    memberFileDropDownList: any[] = [];
    tmpMemberFileDropDownList: any[] = [];

    fileTypeDropDownList: any[] = FILETYPE;
    boundDropDownList: any[] = BOUND;

    categoryDropDownList: any[] = CATEGORY;
    tmpCategoryDropDownList: any[] = CATEGORY;

    docTypeDropDownList: any[] = DOCTYPE;
    tmpDocTypeDropDownList: any[] = DOCTYPE;

    fileNameDropDownList: any[] = [];
    tmpFileNameDropDownList: any[] = [];

    mappingReferenceDropdownList: any[] = []; 

    docFormatDropDownList: any[] = FORMAT;
    tmpDocFormatDropDownList: any[] = FORMAT;

    downLoadTypeDropDownList: any[] = DOWNLOADTYPE;
    tmpDownLoadTypeDropDownList: any[] = DOWNLOADTYPE;

    fieldTypeDropDownList: any[] = FIELDTYPE;
    fieldMandDropDownList: any[] = FIELDMANDATORY;
    groupDropDownList: any[] = GROUP;
    gsiTypeDropDownList: any[] = GSITYPE;

    regFileTypeDropDownList: any[];
    ediProcessType: any[] = PROCESSTYPE;
    bargeVoyageDropDownList: any[] = [];
    polDropDownList: any[] = [];
    podDropDownList: any[] = [];
}

export class EDIFilter {
    registration_id: number = 1;
    date_of_registration: any = null;
    ref_no: string = null;
    location_fk: number;
    location_name: string = null;
    port_fk: number = null;
    port_name: string = null;
    member: string = null;
    member_file: string = null;
    file_upload_type: string;
    document_type: string;
    document_format: string;
    document_name: string;
    download_type: string;
    category: string;
    file_size: number;
    remarks: string;
    file_name: string;
    from_date: string;
    to_date: string;
    container_type: string = '1';
    is_active: boolean = true;
    created_by_fk: number = 1;
    version_no: number = 0;
}

export class EDIRegistration {
    edi_registration_tbl_pk: number = 0;
    reg_date: any = new Date();
    reg_no: string = '';
    reg_email: string = '';
    edi_code: string = '';
    edi_filename: string = '';
    document_format: string = null;
    category: number = null;
    remarks: string = '';
    edi_status: number = 0;
    active_flag: number = 0;
    member: string = null;
    document_type: string = null;
    download_type: string = null;
    created_by_fk: number = 1;
    created_dt: any = new Date();
    last_modified_by_fk: number;
    last_modified_dt: any = new Date();
    version_no: number = 0;
    is_active: boolean = true;
    location_fk: number;
    port_fk: number;
    upload_type: number = null;
    upload_type_fk: number = null;
    edi_file_size: string = '';
    file_upload_type: string = '';
    file_type: any;
  bound: any;
}

export class EDIFileDefinition {
    file_structure_mst_pk: number = null;
    file_reg_nr: string = null;
    file_reg_dt: any = null;
    location_mst_fk: number = null;
    port_mst_fk: number = null;
    members_mst_fk: number = null;
    file_category: number = null;
    document_type: number = null;
    file_struct_group: number = 1;
    document_format: number = null;
    file_size: number = null;
    remarks: string = null;
    created_by_fk: number = null;
    created_by_dt: any = null;
    last_modified_by_fk: number = null;
    last_modified_by_dt: any = null;
    download_type: number = null;
    file_name: string = null;
    filestructuretransaction: FileStructureTransaction[];
}

export class EDIStructureMapping {
    ref_no: string = '';
    port_fk: number = null;
    port_name: string = null;
    member: string = null;
    member_file: string = null;
    file_upload_type: string;
    document_type: string;
    document_format: string;
    document_name: string;
    download_type: string;
    category: string;
    file_size: number;
    remarks: string;
    file_name: string;
    file_struct_name: string;
    from_date: string;
    to_date: string;
    container_type: string = '1';
    is_active: boolean = true;
    created_by_fk: number = 1;
    version_no: number = 0;
    file_structure_mst_pk: any = 0;
    file_struct_map_reg_nr: any = '';
}


export class EDIGenerator {
    edi_generator_mst_pk: number;
    process_type: number;
    document_type: number;
    barge_voyage: number;
    document_number: number;
    pol_fk: number;
    pod_fk: number;
    pol_ter_fk: number;
    pod_ter_fk: number;
    from_date: any;
    to_date: any;
    edi_status: boolean;
    is_active: boolean;
    created_by_fk: number;
    created_by_dt: any;
    last_modified_by_fk: number;
    last_modified_by_dt: any;
    version_no: number;
}

export class FileStructureTransaction {
    file_struct_trn_pk: number;
    file_struct_mst_fk: number;
    file_struct_field_id: string;
    file_struct_field_desc: string;
    file_struct_field_type: number;
    file_struct_field_length: number;
    file_struct_field_mand: number;
    file_struct_field_order: number;
    active_flag: number;
    created_by_fk: number;
    created_dt: any;
    last_modified_by_fk: number;
    last_modified_dt: any;
    version_no: number;
    file_struct_type: number;
}

export class LogViewerFilter {
    serial_number: number;
    log_number: number;
    corporate_party: string;
    application: string;
    edi_name: string;
    process: string;
    edi_share_parh: string;
    date: string;
    time: string;
    from_date: string;
    to_date: string;
    threshold_limit: string;
    iteration_limit: number;
    next_schedule: string;
    is_active: boolean;
}

export const FILETYPE = [
    {
        pk: 1,
        id: 'EDI',
        name: 'EDI',
        columnCaption: 'EDI'
    },
    {
        pk: 2,
        id: 'OCR',
        name: 'OCR',
        columnCaption: 'OCR'
    }
];

export const CATEGORY = [
    {
        pk: 1,
        id: 'Upload',
        name: 'Upload',
        columnCaption: 'Upload'
    }
];

export const DOCTYPE = [
    {
        pk: 1,
        id: 'Manifest',
        name: 'Manifest',
        columnCaption: 'Manifest'
    },
    // {
    //     pk: 2,
    //     id: 'Purchase',
    //     name: 'Purchase',
    //     columnCaption: 'Purchase'
    // },
    // {
    //     pk: 3,
    //     id: 'Booking',
    //     name: 'Booking',
    //     columnCaption: 'Booking'
    // },
    // {
    //     pk: 4,
    //     id: 'Invoice',
    //     name: 'Invoice',
    //     columnCaption: 'Invoice'
    // }
];

export const FORMAT = [
    {
        pk: 1,
        id: 'XML',
        name: 'XML',
        columnCaption: 'XML'
    },
    {
        pk: 2,
        id: 'Excel',
        name: 'Excel',
        columnCaption: 'Excel'
    },
    {
        pk: 3,
        id: 'TXT',
        name: 'TXT',
        columnCaption: 'TXT'
    },
    {
        pk: 4,
        id: 'EDI',
        name: 'EDI',
        columnCaption: 'EDI'
    },
    {
        pk: 5,
        id: 'PDF',
        name: 'PDF',
        columnCaption: 'PDF'
    }
];

export const DOWNLOADTYPE = [
    {
        pk: 1,
        id: 'Manual',
        name: 'Manual',
        columnCaption: 'Manual'
    },
    {
        pk: 2,
        id: 'Automatic',
        name: 'Automatic',
        columnCaption: 'Automatic'
    },
    // {
    //     pk: 3,
    //     id: 'CODECO',
    //     name: 'CODECO',
    //     columnCaption: 'CODECO'
    // },
    // {
    //     pk: 4,
    //     id: 'COARI',
    //     name: 'COARI',
    //     columnCaption: 'COARI'
    // }
];

export const FIELDTYPE = [
    {
        pk: 1,
        id: 'Number',
        name: 'Number',
        columnCaption: 'Number'
    },
    {
        pk: 2,
        id: 'Varchar',
        name: 'Varchar',
        columnCaption: 'Varchar'
    },
    {
        pk: 3,
        id: 'Date',
        name: 'Date',
        columnCaption: 'Date'
    }
];

export const BOUND = [
    {
        pk: 1,
        id: 'S',
        name: 'South Bound',
        columnCaption: 'South Bound'
    },
    {
        pk: 2,
        id: 'N',
        name: 'North Bound',
        columnCaption: 'South Bound'
    }
];

export const FIELDMANDATORY = [
    {
        pk: 1,
        id: 'Yes',
        name: 'Yes',
        columnCaption: 'Yes'
    },
    {
        pk: 2,
        id: 'No',
        name: 'No',
        columnCaption: 'No'
    }
];

export const GROUP = [
    {
        pk: 1,
        id: 'GF2020',
        name: 'Connect',
        columnCaption: 'Connect'
    },
    {
        pk: 2,
        id: 'Agent',
        name: 'Agent',
        columnCaption: 'Agent'
    }
];

export const GSITYPE = [
    {
        pk: 1,
        id: 'Main',
        name: 'Main',
        columnCaption: 'Main'
    }, {
        pk: 2,
        id: 'Cargo',
        name: 'Cargo',
        columnCaption: 'Cargo'
    }, {
        pk: 3,
        id: 'Freight',
        name: 'Freight',
        columnCaption: 'Freight'
    }
];

export const PROCESSTYPE = [
    {
        pk: 1,
        id: 'Export',
        name: 'Export',
        columnCaption: 'Export'
    }, {
        pk: 2,
        id: 'Import',
        name: 'Import',
        columnCaption: 'Import'
    }
];

export const FILE_TYPE = [
    {
        pk: 1,
        id: 'Export Mainfest',
        name: 'Export Mainfest',
        columnCaption: 'Export Mainfest'
		
    },
    {
        pk: 2,
        id: 'Import Maifest',
        name: 'Import Maifest',
        columnCaption: 'Import Maifest'
	
    },
	{
        pk: 3,
        id: 'Export Invoice',
        name: 'Export Invoice',
        columnCaption: 'Export Invoice'
		
    },
    {
        pk: 4,
        id: 'Import Invoice',
        name: 'Import Invoice',
        columnCaption:'Import Invoice'
		
    }
];
export const STATUS = [
    {
        pk: 1,
        id: 'UPDATED',
        name: 'UPDATED',
        columnCaption: '"UPDATED"'
    },
	{
        pk: 2,
        id: 'NEW',
        name: 'NEW',
        columnCaption: 'NEW'
    },
	{
        pk: 3,
        id: 'COMPLETED',
        name: 'COMPLETED',
        columnCaption: 'COMPLETED'
    }
	,
	{
        pk: 4,
        id: 'ERROR',
        name: 'ERROR',
        columnCaption: 'ERROR'
    }
	,
	{
        pk: 5,
        id: 'IN PROGRESS',
        name: 'IN PROGRESS',
        columnCaption: 'IN PROGRESS'
    }
];

// export const DOWNLOADTYPE = [
//     {
//         pk: 1,
//         id: 'Manual',
//         name: 'Manual',
//         columnCaption: 'Manual'
//     },
//     {
//         pk: 2,
//         id: 'Excel',
//         name: 'Excel',
//         columnCaption: 'Excel'
//     },
//     {
//         pk: 3,
//         id: 'CODECO',
//         name: 'CODECO',
//         columnCaption: 'CODECO'
//     },
//     {
//         pk: 4,
//         id: 'COARI',
//         name: 'COARI',
//         columnCaption: 'COARI'
//     }
// ];
