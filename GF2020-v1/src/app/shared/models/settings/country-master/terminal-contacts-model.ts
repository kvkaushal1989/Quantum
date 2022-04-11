export interface TerminalContactsModel {
  terminalcontactPk: number;
  terminalmasterFk: number;
  contactName: string;
  departmentmasterFk: number;
  departmentCode: string;
  departmentName: string;
  designationFk: number;
  designationCode: string;
  designationName: string;
  emailId: string;
  phoneNo: string;
  mobileNo: string;
  isKeycontact: boolean;
  isActive: number;
  versionNo: number;
}
