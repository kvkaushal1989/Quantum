export class RulesPreferenceObj {
    userruleconfigpk: number;
    usermasterfk: number;
    userrolefk: number;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    rules: Rules;
    preference: Preference;
}

export class Rules {
    file_storage_loc: string;
    permitted_file_types: string;
    image_file_type: string;
    max_image_size: number;
    max_upload_size: number;
    pass_cap_letter: boolean;
    pass_change_days: number;
    pass_change_remainder: number;
    pass_history: number;
    pass_max_length: number;
    pass_min_length: number;
    pass_numeric: boolean;
    pass_space_allowed: boolean;
    pass_special_char: boolean;
    pass_userid_allowed: boolean;
    ruleconfigfk: number;
    rulesettingpk: number;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}

export class Preference {
    preferencesettingpk: number;
    ruleconfigfk: number;
    preferred_language: string;
    no_of_record: number;
    date_range: number;
    default_screen: string;
    no_recent_access_menu: number;
    default_otp_type: string;
    default_download_loc: string;
    message_preference: string;
    alert_preference: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
}