import { BasicDateTimePickerModule } from 'src/app/shared/components/form-controls/basic-date-time-picker/basic-date-time-picker.module';

export interface ContainerType {
    containertypemaster_pk: number;
    containertype_id: string;
    container_size: string;
    container_type: string;
    external_length: number;
    external_breadth: number;
    external_height: number;
    internal_length: number;
    internal_breadth: number;
    internal_height: number;
    internal_door: number;
    pay_load: number;
    tare_wgt: number;
    max_wgt: number;
    capacity: number;
    teu: number;
    preference: number;
    is_active: number;
    created_by_fk: number;
    last_updated_by_fk: number;
    version_no: number;
    hiddenField: string;
}

