export class SupplierMasterAdd {
  suppliermasterpk: number;
  suppliername: string;
  suppliercode: string;
  sequencenumber: string;
  categoryifk: string;
  typeofoffice: string;
  companyname: string;
  agencycode: string;
  business_reg_nr: string;
  supplierimage: string;
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
  hiddenField: string;
  last_updated_by_fk: number;
  last_updated_on: string;
  version_no: number;
  documentList: DocumentList[];
  bankList: BankList[];
  selectedOperationPorts: any = [];
  operationCountryList: [];
  operationPortList: PortList[];
  operationTerminalList: TerminalList[];
  keyUserList: KeyUserList[];
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
  last_updated_by_fk: number;
  version_no: number;
  document_number: string;
  date_of_issue: string;
  date_of_expiry: string;
  place_of_issue: string;
  supplierfk: number;
  selectedType: any = [];
  fileType: string;
}

export class BankList {
     supplierbankpk: number;
     suppliermasterfk: number;
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
     last_updated_by_fk: number;
     version_no: number;
     banktype: number;
     selectedAccountType: any = [];
     selectedCurrency: any;
}

export class KeyUserList {
  supplierkeyuserpk: number;
      suppliermasterfk: number;
      username: string;
      aliasname: string;
      departmentifk: string;
      departmentfk: number;
      designationifk: string;
      email: string;
      mobilenumber: string;
      officenumber: string;
      ecommerceaccess: boolean;
      notificationflag: boolean;
      alertflag: boolean;
      is_active: number;
      created_by_fk: number;
      last_updated_by_fk: number;
      version_no: number;
      favorite_user: boolean;
      selectedDept: any = [];
      selectedDesignation: any = [];
}

export class PortList {
    supopr_port_pk: number;
    suppliermasterfk: number;
    port_mst_fk: number;
    is_active: number;
    port_id: string;
		port_name: string;
    country_pk: number;
    created_by_fk: number;
    last_updated_by_fk: number;
    version_no: number;
}

export class TerminalList {
    supopr_terminal_pk: number;
    suppliermasterfk: number;
    terminal_mst_fk: number;
    is_active: number;
    created_by_fk: number;
    terminal_id: string;
		terminal_name: string;
    last_updated_by_fk: number;
    portmaster_pk: number;
    version_no: number;
}
