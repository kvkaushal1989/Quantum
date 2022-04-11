import { CurrencyMaster } from './currency-master';

export interface CountryMaster {
  country_pk: number;
  country_code2: string;
  country_code3: string;
  numeric_code: string;
  country_name: string;
  area_mst_fk: number;
  currency_mst_fk: number;
  isd_code: string;
  flag_url: string;
  environment_fk: number;
  timezone1_val: string;
  timezone2_val: string;
  timezone3_val: string;
  timezone4_val: string;
  timezone5_val: string;
  timezone6_val: string;
  is_active: number;
  created_by_fk: number;
  created_on: any;
  last_updated_by_fk: number;
  last_updated_on: string;
  version_no: number;
  currency_code: string;
  currency_name: string;
  currency_symbol: string;
  region_pk: number;
  region_name: string;
  region_code: string;
  area_code: string;
  area_name: string;
  Currency?: CurrencyMaster[];
}
