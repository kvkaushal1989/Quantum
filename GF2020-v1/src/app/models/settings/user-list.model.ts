export interface UserList {
    usermaster_pk: number;
    company_fk: number;
    username: string;
    branch_fk: number;
    password: string;
    user_type_ifk: string;
    employee_fk: number;
    rolemaster_fk: number;
    is_administrator: boolean;
    wrong_pwd_count: number;
    enable_otp: boolean;
    pwd_expiry_days: number;
    is_active: number;
    created_by_fk: number;
    // created_on: string;
    last_updated_by_fk: number;
    // last_updated_on: string;
    version_no: number;
    first_name: string;
    middle_name?: any;
    last_name: string;
    alias: string;
    company_name?: any;
    location_name?: any;
    gender_ifk: string;
    marital_status_ifk: string;
    date_of_birth: any;
    email_id: string;
    mobile_number: string;
    xx_mobile_number: string;
    office_number: string;
    department_fk: number;
    department_name?: string;
    designation_fk: number;
    designation_name?: string;
    date_of_joining: any;
    relationship_ifk?: any;
    rel_first_name?: any;
    rel_middle_name?: any;
    rel_last_name?: string;
    rel_email_id?: string;
    rel_mobile_number?: string;
    address_line1: string;
    address_line2: string;
    city: string;
    country_mst_pk: number;
    country_name: string;
    state?: any;
    postal_code?: string;
    organization_typeifk: string;
    user_image: string;
    reportingmanager_fk: number;
    public_id:string;
}

export interface UserPreference {
    // notification: boolean;
    // message: boolean;
    // profile: boolean;
    // email: boolean;
    userpreference_pk: number;
    usermaster_fk: number;
    environment_ifk: string;
    regionalformat_ifk: string;
    font_color: string;
    font_size: number;
    is_notification_allowed: boolean;
    is_email_allowed: boolean;
    is_message_allowed: boolean;
    is_profile_allowed: boolean;
    is_active: number;
    version_no: number;
    created_by_fk: number;
    pref_date_format: string;
}

export interface Documents {
    filename: string;
    data: any;
    formmaster_fk: number;
    filetype_ifk: string;
    file_type: number;
    document_pk: number;
    documenttype_ifk: number;
    document_number: string;
    date_of_issue: string;
    date_of_expiry: string;
    place_of_issue: string;
    companyfk: number;
    userfk: number;
    version_no: number;
    created_by_fk: number;
}

export interface UserAccessData {
    useraccess_pk: number;
    usermaster_fk: number;
    modulemaster_fk: number;
    module_name: string;
    is_full_access: boolean;
    is_partial_access: boolean;
    is_view_access: boolean;
    role_access: string;
    is_add_allowed: boolean;
    is_del_allowed: boolean;
    is_edit_allowed: boolean;
    is_print_allowed: boolean;
    is_report_allowed: boolean;
    is_view_allowed: boolean;
    is_active: number;
    created_by_fk: number;
    created_on: Date;
    last_updated_by_fk: number;
    last_updated_on: Date;
    version_no: number;
}

export interface UserAccessDataC {
    UseraccessPk: number;
    ModulemasterFk: number;
    ModuleName: string;
    IsFullAccess: boolean;
    IsPartialAccess: boolean;
    IsViewAccess: boolean;
    RoleAccess: string;
    UsermasterFk: number;
    IsViewAllowed: boolean;
    IsAddAllowed: boolean;
    IsEditAllowed: boolean;
    IsDelAllowed: boolean;
    IsPrintAllowed: boolean;
    IsReportAllowed: boolean;
    IsActive: number;
    CreatedByFk: number;
    CreatedOn: Date;
    LastUpdatedByFk: number;
    LastUpdatedOn: Date;
    VersionNo: number;
}
