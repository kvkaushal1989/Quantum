import { DocEntryModel } from './doc-entry';
import { DocParamModel } from './doc-param';
import { FetchDocModel } from './fetch-doc';
import { WfEntryModel } from './wf-entry';
import { WfSearchModel } from './wf-search';
import { FetchWorkflowModel } from './fetch-workflow';
import { DocSearchModel } from './doc-search';
import { WfLogModel } from './wf-log';

export class WorkflowModel {
    docEntry: DocEntryModel;
    docParam: DocParamModel[];
    docSearch: DocSearchModel;
    docList: FetchDocModel[];
    wfEntry: WfEntryModel;
    wfSearch: WfSearchModel;
    wfList: FetchWorkflowModel[];
    docTypeList: any = [];
    docGroupList: any = [];
    wfLog: WfLogModel[];
    locationList: any = [];
    departmentList: any = [];
    designationList: any = [];
    userList: any = [];
    docDDList: any = [];
    copy1List: any = [];
    copy2List: any = [];
    copy3List: any = [];
    escList: any = [];
}
