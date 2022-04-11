import { Band0Model } from './band-0';
import { Band1HdrModel } from './band-1hdr';
import { Band1Model } from './band-1';
import { Band2Model } from './band-2';

export class RuleManagementModel {
    band0: Band0Model[];
    band1Hdr: Band1HdrModel;
    band1Dtl: Band1Model[];
    band2Hdr: Band2Model[];
    band2: Band2Model[];
    band0Init: Band0Model[];
    band1Init: Band1Model[];
    band2Init: Band2Model[];
    optionChange: any;
    headeroptionChange: any;
    isBand0Visible: boolean = true;
    isBand1Visible: boolean = false;
    isBand2Visible: boolean = false;
    currentBand0: Band0Model;
    currentBand1: Band1Model;
    currentTerminal: any;
    showRBLEntry = false;
    searchModel: {
        status?: number;
        PortPK?: number;
        TerPK?: number;
        CSHPK?: number;
        CustPks: string;
        BkgId: string;
        FrmDt: string;
        ToDt: string;
        LoggedInUser: number;
    } = {
            status: null,
            PortPK: null,
            TerPK: null,
            CSHPK: null,
            CustPks: null,
            BkgId: null,
            FrmDt: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
            ToDt: new Date().toISOString(),
            LoggedInUser: null
        };
    isRBLPrintVisible: boolean;
}
