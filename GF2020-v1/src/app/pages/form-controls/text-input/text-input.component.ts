import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  
  name:string;
  name1:string;
  name2:string;
  name3:string;
  label:string;
  placeholder: string;

  constructor() { }  

  // public hexadecimalValue: string;

  // public dropdownValue: string = '';

  // onSubmit(value) {
  //   alert(`Submit: ${JSON.stringify(value)}`);
  // }

  ngOnInit() {
    
    this.label="name";
    this.placeholder = "name"

  }

  /**
   * MD2 SELECT
   */
  disabled: boolean = false;

  items: Array<any> = [
      { name: 'Amsterdam', value: '1', disabled: false },
      { name: 'Birmingham', value: '2', disabled: false },
      { name: 'Dortmund', value: '3', disabled: false },
      { name: 'Gothenburg', value: '4', disabled: false },
      { name: 'London', value: '5', disabled: false },
      { name: 'Seville', value: '6', disabled: false }
  ];


  /**
 * Gets Property Group List
 */ 

  

   
  // //#region Radio Button
  // tslint:disable-next-line: member-ordering
  radioOptions: any = [{id:1, value:'x1', name:'Test121', label:'Test x1'},
                    {id:2, value:'x2', name:'Test122', label:'Test x2'},
                    {id:3, value:'x3', name:'Test123', label:'Test x3'},
                    {id:4, value:'x4', name:'Test124', label:'Test x4'}
                ]; 
  radioValue: any = 'x1';

  radioOptions2: any = [{id:11, value:'x111', name:'Test12111', label:'Test x11'},
    {id:21, value:'x23', name:'Test1222', label:'Test x22'},
    {id:31, value:'x33', name:'Test1233', label:'Test x33'},
    {id:41, value:'x43', name:'Test1244', label:'Test x44'}
  ]; 
  radioValue2: any = 'x111';
  
  radioOptions1: any = ['Test v11', 'Test v22', 'Test v33', 'Test v44']; 
  radioValue1: any = 'Test v11';

  
  radioOptions3: any = ['Test v1', 'Test v2', 'Test v3', 'Test v4']; 
  radioValue3: any = 'Test v1';

  testRadioChange(event:any){
      console.log(event);
      console.log('this.radioValue2 => ', this.radioValue2);
  }
  // //#endregion
 
  //#region check box
  checkBoxOptions: any = [{id:1, value: true, name:"check_x1", text:'Test x1'}, 
                          {id:2, value: false, name:"check_x2", text:'Test x2'}, 
                          {id:3, value: false, name:"check_x3", text:'Test x3'}, 
                          {id:4, value: false, name:"check_x4", text:'Test x4'}
                        ]; 
  checkValue: any = true;
  checkBoxOptions1: any = [{id:1, value: true, name:"check_v1", text:'Test v1'}, 
                            {id:2, value: false, name:"check_v2", text:'Test v2'}, 
                            {id:3, value: false, name:"check_v3", text:'Test v3'}, 
                            {id:4, value: false, name:"check_v4", text:'Test v4'}
                          ]; 
  checkValue1: any = false;
  //#endregion

}
