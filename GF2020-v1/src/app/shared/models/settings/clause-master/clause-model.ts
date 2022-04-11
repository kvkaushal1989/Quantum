export interface ClauseModel {
  clausemaster_pk: number;
  clause_name: string;
  clause_description: string;
  clause_sequence_number: string;
  clausecategory_ifk: string;
  clauseapplicable_ifk: string;
  clause_hierarchy: string;
  clauseusage_ifk: string;
  customer_ifk: string;
  commoditygroup_ifk: string;
  pol_fk: string;
  pod_fk: string;
  is_active: number;
  created_by_fk: number;
  last_updated_by_fk: number;
  version_no: number;
  created_on: Date;
}
