export interface DropdownSettings{
    singleSelection: boolean;
    text: string;
    placeholder: string;
    isCheckBoxVisible: boolean;
    enableCheckAll : boolean;
    selectAllText: string;
    unSelectAllText: string;
    enableSearchFilter: boolean;
    maxHeight: number;
    badgeShowLimit: number;
    classes: string;
    limitSelection?: number;
    disabled?: boolean;
    required?: boolean;
    searchPlaceholderText: string;
    groupBy?: string;
    isHintTextDisplay: boolean;
    isTagDisplay: boolean;
    taggedColumns: string;
    taggedButtonDisplay: boolean;
    dropDownIconUp: string;
    dropDownIconDown: string;
    singleName: boolean;
} 