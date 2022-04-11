export class CustomerMasterAdd {
  customermasterpk: number;
  customername: string;
  customercode: string;
  sequencenumber: string;
  categoryifk: string;
  typeofoffice: string;
  companyname: string;
  agencycode: string;
  business_reg_nr: string;
  controllingoffice: string;
  agrementparty: string;
  invoiceparty: string;
  customerimage: string;
  hq_companyname: string;
  hq_addressline1: string;
  hq_addressline2: string;
  hq_city: string;
  hq_country: string;
  hq_state: string;
  hq_postalcode: string;
  hq_email: string;
  hq_phone: string;
  hq_fax: string;
  hq_website: string;
  ro_address_same_hq: boolean;
  ro_companyname: string;
  ro_addressline1: string;
  ro_addressline2: string;
  ro_city: string;
  ro_country: string;
  ro_state: string;
  ro_postalcode: string;
  ro_email: string;
  ro_phone: string;
  ro_fax: string;
  ro_website: string;
  co_address_same_ro: boolean;
  co_companyname: string;
  co_addressline1: string;
  co_addressline2: string;
  co_city: string;
  co_country: string;
  co_state: string;
  co_postalcode: string;
  co_email: string;
  co_phone: string;
  co_fax: string;
  co_website: string;
  ba_address_same_ip: boolean;
  ba_companyname: string;
  ba_addressline1: string;
  ba_addressline2: string;
  ba_city: string;
  ba_country: string;
  ba_state: string;
  ba_postalcode: string;
  ba_email: string;
  ba_phone: string;
  ba_fax: string;
  ba_website: string;
  is_active: number;
  created_by_fk: number;
  created_on: string;
  last_updated_by_fk: number;
  last_updated_on: string;
  version_no: number;
  documentList: DocumentList[];
  bankList: BankList[];
  selectedOperationCountries: any = [];
  operationCountryList: CountryList[];
  operationPortList: PortList[];
  operationTerminalList: TerminalList[];
  keyUserList: KeyUserList[];
  agentDetails: any = [];
}

export class DocumentList {
  document_pk: number;
  documenttype_ifk: string;
  filename: string;
  data: string;
  formmaster_fk: number;
  filetype_ifk: string;
  is_active: number;
  created_by_fk: number;
  created_on: string;
  last_updated_by_fk: number;
  last_updated_on: string;
  version_no: number;
  document_number: string;
  date_of_issue: string;
  date_of_expiry: string;
  place_of_issue: string;
  companyfk: number;
  userfk: number;
  customermasterfk: number;
  selectedType: any = [];
  panelOpenState: boolean;
  fileType:string;
  
}

export class BankList {
 customerbankpk: number;
     customermasterfk: number;
     bankname: string;
     bankid: string;
     accountnumber: string;
     currency_mst_fk: number;
     accounttype: string;
     bankaddress: string;
     swiftnumber: string;
     gironumber: string;
     inbannumber: string;
     is_active: number;
     created_by_fk: number;
     created_on: string;
     last_updated_by_fk: number;
     last_updated_on: string;
     version_no: number;
     banktype: number;
     selectedAccountType: any = [];
     selectedCurrency: any;
}

export class KeyUserList {
  customerkeyuserpk: number;
      customermasterfk: number;
      username: string;
      aliasname: string;
      departmentifk: string;
      designationifk: string;
      email: string;
      mobilenumber: string;
      officenumber: string;
      ecommerceaccess: boolean;
      notificationflag: boolean;
      alertflag: boolean;
      is_active: number;
      created_by_fk: number;
      created_on: string;
      last_updated_by_fk: number;
      last_updated_on: string;
      version_no: number;
      favorite_user: boolean;
      selectedDept: any = [];
      selectedDesignation: any = [];
}

export class PortList {
    customeroperation_port_pk: number;
    customermasterfk: number;
    port_mst_fk: number;
    port_id: string;
    port_name: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    country_mst_fk: number;
}

export class TerminalList {
    customeroperation_terminal_pk: number;
    customermasterfk: number;
    terminal_mst_fk: number;
    terminal_id: string;
    terminal_name: string;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number;
    port_mst_fk: number;
}

export class CountryList {
    customeroperation_country_pk: number;
    customermasterfk: number;
    country_mst_fk: number;
    is_active: number;
    created_by_fk: number;
    created_on: string;
    last_updated_by_fk: number;
    last_updated_on: string;
    version_no: number
}
