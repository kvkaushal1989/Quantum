import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';

export class VoyageControlSettings {
    isSettingGridVisible: boolean;
    isSettingPopUpVisible: boolean;
    isAmendSettingVisible: boolean;
}

export class VoyageGridControl extends GridOptionsModel {
    serviceDropDownList: any[] = [];
    vesselDropDownList: any[] = [];
    voyageDropDownList: any[] = [];
    portDropDownList: any[] = [];

    filterData: VCSFilter = new VCSFilter();
}

export class VCSFilter {
    fromDate: any = null;
    toDate: any = null;
    service_pks: any = null;
    vessel_pks: any = null;
    voyage_pks: any = null;
    port_pks: any = null;
    pageNumber: number = 0;
    pageSize: number = 0;
    skipRecords: number = 0;
    totalRecords: number = 0;
    endRecord: number = 0;
    is_active: number = 0;
}
