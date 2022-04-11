export interface DocEntryModel {
    documentmaster_pk: number;
    is_active: number;
    document_id: string;
    document_name: string;
    documentgroup_fk: number;
    documentgroup: string;
    documenttype_fk: number;
    document_header: string;
    documenttype: string;
    document_subject: string;
    document_body: string;
    doucment_footer: string;
    messagefolder_fk: string;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}
