export interface QuoteSearchModel {
  quotmasterpk: number;
  customermasterfk: number;
  customermasterfks: string;
  commoditygroupfk: number;
  fromportfks: string;
  toportfks: string;
  fromportfk: number;
  toportfk: number;
  tosfk: number;
  containerstatusifk: string;
  is_active: number;
  validfrom: string;
  validto: string;
}
