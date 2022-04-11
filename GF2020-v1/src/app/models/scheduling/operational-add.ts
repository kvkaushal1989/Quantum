import { OperationalTrnModel } from './operational-trn';

export interface OperationalAddModel {
        newTerminalPK: 0;
        position: 0;
        newPortPK: 0;
        previousPortPK: 0;
        nextPortPK: 0;
        currentDetails: OperationalTrnModel[];
        details: OperationalTrnModel[]; 
}
