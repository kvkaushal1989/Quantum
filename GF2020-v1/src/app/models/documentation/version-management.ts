import { RblListModel } from './rblList';
import { RblEntryModel } from './rblEntry';

export class VersionManagementModel {
    rblList: RblListModel[];
    rblEntry: RblEntryModel;
    newEntry: RblEntryModel;
    confirmEntry: RblEntryModel;
    countryList: any = [];
    panelOpenState: boolean = false;
    searchModel: {
        csh_fk?: number;
        port_mst_fk?: number;
        terminal_fk?: number;
        document_type?: number;
        document_nr: string;
        ChildBookingPk: number;
    };
    isOrgDoc: boolean = true;
    currentItem: RblListModel;
    isEntryVisible: boolean = false;
    isEntryAlert: boolean = false;
    isFinalAlert: boolean = false;
    isAfterSaveAlert: boolean = false;
    selectedIndex: number = 0;
    isEditRemarks: boolean = false;
    commGrpList: [];
    commList: [];
    voyageList: [];
    portList: [];
    terminalList: [];
    doclist: [];
    rev_Bl: any;
    rev_PK: any;
    optionChange: any=1;
    isRBLPrintVisible: boolean = false;
}
