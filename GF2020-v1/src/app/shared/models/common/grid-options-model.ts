export class GridOptionsModel {
  columnList: any = [];
  dataList: any = [];
  selectedList: any = [];
  frozenCol: any = [];
  tmpDataList: any = [];
  filterInput: string = '';
  filteredDataList: any = [];
  mastersSettings: any = [];
  defaultMasterSelections: any = [];
  loginUserDetails: any;
  currentItem: any;
  pageSize = 0;
  currentPage = 1;
  endRecord = 0;
  totalRecord = 0;
  status = 1;
  searchValue: null;
  isLoading: boolean = false;
  isSwitchOn: boolean = true;
  isFilterVisible: boolean;
  isPopupVisible: boolean;
  isDeleteVisible: boolean;
  isViewVisible: boolean;
  isCreateVisible: boolean;
  isEditVisible: boolean;
  isAddVisible: boolean;
  optionChange: number;
  optionChange1: number;
}