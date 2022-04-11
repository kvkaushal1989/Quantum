export class ListItem{
    id: number;
    text: string;
    status: boolean;
    createdBy: string;
}

export class MyException {
	status : number;
	body : any;
	constructor(status : number, body : any) {
		this.status = status;
		this.body = body;
	}
	
}