export interface VesselIntakeModel {
  vesselintake_pk: number;
        vesselmaster_fk: number;
        draft_mts: number;
        draft_feet: number;
         dead_weight: number;
         average_weight: number;
         intake: number;
         is_active: number;
         created_by_fk: number;
         created_on: string;
         last_updated_by_fk: number;
         last_updated_on: string;
         version_no: number;
}
