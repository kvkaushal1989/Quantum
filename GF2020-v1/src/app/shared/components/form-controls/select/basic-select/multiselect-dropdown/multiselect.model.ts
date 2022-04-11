export class ListItem {
    id: number;
    text: string;
    status: boolean;
    disabled: boolean;
    name: string;
    createdBy: string;
    taggedLabel: string;
    taggedButton: string;
    isChecked: boolean = false;
}

export class MyException {
	status: number;
	body: any;
	constructor(status: number, body: any) {
		this.status = status;
		this.body = body;
	}

}
