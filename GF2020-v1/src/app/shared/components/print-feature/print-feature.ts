export class PrintFeature {
    bl_print_Format: number = 1;
    bl_status: string = 'draft';
    is_org_no_of_copy: boolean = false;
    org_no_of_copy: number = 1;
    is_non_n_no_of_copy: boolean;
    non_n_no_of_copy: number = 1;
    draft: boolean;
    duplicate: boolean;
    bl_rated: number = 1;
    bl_non_rated: boolean;
    bl_dock_type: number = 1;
    pdf: boolean;
    xml: boolean;
    created_by_fk: string;
    version_no: number;
}

export class DocType {
    type: string;
}
