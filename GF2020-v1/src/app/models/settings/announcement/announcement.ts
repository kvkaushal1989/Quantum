import { FormGroup } from '@angular/forms';
import { GridOptionsModel } from 'src/app/shared/models/common/grid-options-model';

export class AnnouncementGrid extends GridOptionsModel {
    currentDate: any = new Date();
    dfDateUnitsDropDownList: any[] = DATERANGEUINITS;
    audienceDropDownList: any[] = [];
    groupDropDownList: any[] = [];
    categoryDropDownList: any[] = [];
    priorityDropDownList: any[] = [];
    customerDropDownList: any[] = [];
    guestDropDownList: any[] = [];
    msgStatusDropDownList: any[] = [];
    noOfLinesDropDownList: any[] = NOOFLLINES;
    filteredCollList: any[] = [];

    tmpAnnouncementSettings: AnnouncementSettings = new AnnouncementSettings();
    announcementSettings: AnnouncementSettings = new AnnouncementSettings();
    announcementFilter: AnnouncementFilter = new AnnouncementFilter();
    announcement: AnnouncementModel = new AnnouncementModel();
    tmpAnnouncement: AnnouncementModel = new AnnouncementModel();

    settingsForm: FormGroup;

    decimalSeperator: any;
    thousandSeperator: any;
    created_by_fk: number = 1;
    selectdCustomer: any[] = [];
    selectdCategory: any[] = [];
    isCustomerVisible: boolean = false;
    isCommentVisible: boolean = false;
    isTableFilterVisible: boolean = false;

    comments: CommentModel = new CommentModel();
    likes: LikeModel = new LikeModel();

    commentsList: any[] = null;
    likesList: any[] = null;

    guest: AnnouncementGuestModel = new AnnouncementGuestModel();
    isGuestVisible: boolean = false;
}

export class AnnouncementFilter {
    audience: string;
    aud_group: string;
    category: string;
    priority: string;
    customer: string;
    from_date: any = null; // new Date();
    to_date: any = null; // new Date();
}

export class AnnouncementModel {
    announcement_pk: number = 0;
    audience: string;
    aud_group: string;
    category: string;
    priority: string;
    msg_date: any = null;
    posted_by_id: number;
    posted_by_name: string;
    posted_by_image: string;
    message_id: string;
    priority_flag: string;
    subject: string = '';
    message_body: string = '';
    comments_ids: any;
    likes_ids: any;
    message_status: string;
    valid_from: any = null;
    valid_to: any = null;
    members_id: string;
    is_active: number = 0;
    created_by_fk: number;
    created_on: any = null;
    last_updated_by_fk: number;
    last_updated_on: any = null;
    searchValue: string;
    status: number;
    announcementMember: AnnouncementMembersModel[];
}

export class AnnouncementMembersModel {
    announcement_members_pk: number = 0;
    announcement_fk: number = 0;
    user_fk: number = null;
    user_name: string = '';
    user_group: string = '';
    user_type: string = '';
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = null;
    last_updated_by_fk: number = 1;
    last_updated_on: any = null;
    version_no: number = 0;
}

export class AnnouncementGuestModel {
    announcement_guest_mst_pk: number = 0;
    user_fk: number = null;
    user_name: string = '';
    user_email: string = '';
    user_image: string = '';
    user_type: string = 'Guest';
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = null;
    last_updated_by_fk: number = 1;
    last_updated_on: any = null;
    version_no: number = 0;
}

export class AnnouncementSettings {
    announcement_settings_pk: number = 0;
    default_dt_units: number = 1;
    default_dt_number: number = null;
    display_line_nr: number = null;
    posted_by: boolean = true;
    message_id: boolean = true;
    priority_flag: boolean = true;
    subject: boolean = true;
    category: boolean = true;
    message_body: boolean = true;
    audience: boolean = false;
    annc_group: boolean = false;
    validity: boolean = false;
    msg_status: boolean = false;
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = null;
    last_updated_by_fk: number = 1;
    last_updated_on: any = null;
    version_no: number = 0;
}

export class CommentModel {
    announcement_cmt_pk: number = 0;
    announcement_fk: number = 1;
    user_fk: number = null;
    message_body: string = '';
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = null;
    last_updated_by_fk: number = 1;
    last_updated_on: any = null;
    version_no: number = 0;
}

export class LikeModel {
    announcement_like_pk: number = 0;
    announcement_fk: number = 1;
    user_fk: number = null;
    message_body: string = '';
    is_active: number = 1;
    created_by_fk: number = 1;
    created_on: any = null;
    last_updated_by_fk: number = 1;
    last_updated_on: any = null;
    version_no: number = 0;
}

export const DATERANGEUINITS: any[] = [
    { id: 1, name: 'Days' },
    { id: 2, name: 'Week' },
    { id: 3, name: 'Month' }
];

export const NOOFLLINES: any[] = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
];
