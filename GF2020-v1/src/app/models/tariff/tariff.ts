export class Tariff {
}

export class ObjectSetting {
  tariffsettingpk: number;
  applyfreight: number;
  all_in_freight: number;
  expire_days_before: number;
  expire_notification: boolean;
  revision_notification: boolean;
  activation_notification: boolean;
  deactivation_notification: boolean;
  vatos_notification: boolean;
  advatos_notification: boolean;
  is_active: number;
  created_by_fk: number;
  created_on: string;
  last_updated_by_fk: number;
  last_updated_on: string;
  version_no: number;
  applicableCharges: [
    {
      tariffchargepreferencepk: number;
      fromportfk: number;
      toportfk: number;
      chargemasterfk: number;
      applicable_flag: boolean;
      is_active: number;
      created_by_fk: number;
      created_on: string;
      last_updated_by_fk: number;
      last_updated_on: string;
      version_no: 0
    }
  ];
}
