export interface QuoteClauseModel {
    cmt_quoteclause_pk: number;
    quotation_pk: number;
    clause_pk: number;
    clause_name: string;
    clause_description: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}
