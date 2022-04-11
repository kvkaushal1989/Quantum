export interface SequenceType {
    sequencemasterpk: number;
    sequencecatgoryfk: number;
    sequencecategoryname: string;
    sequenceprefix: string;
    prefixseparatorifk: string;
    digittype: number;
    seqstartnr: number;
    digitseparatorifk: string;
    suffixtype: number;
    suffix: string;
    suffixseparatorifk: string;
    seqoptvalueifk: string;
    seqoptvalueid: string;
    seqoptvaluename: string;
    defaultvalue: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    hiddenField: string;
}

