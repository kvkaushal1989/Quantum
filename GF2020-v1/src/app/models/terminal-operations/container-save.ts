import { ContainerListModel } from './container-list';

export interface ContainerSaveModel {
        form_id: string;
        last_updated_by_fk: number;
        containerList: ContainerListModel[];
        validateODC?:any;
}
