export interface DropdownSettings{
    singleSelection: boolean;
    text: string;
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
} 