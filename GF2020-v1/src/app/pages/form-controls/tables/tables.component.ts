import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  checkSwitch: boolean;

  //item: string = '3';
  item: string;

  change(value: any) {
    console.log('Selected value is: ', value);
  }


  gridData:any = {
    columnList:[{
      id:0,
      name:'id',
      isVisiable:true,
      isSortable:false,
      valueType: 'label',
      value:'id'
    }, {
      id:1,
      name:'name',
      isVisiable:true,
      isSortable:true,
      valueType: 'label',
      value:'name'
    }, {
      id:2,
      name:'flag',
      isVisiable:true,
      isSortable:false,
      valueType: 'img',
      value:'flag'
    }, {
      id:3,
      name:'area',
      isVisiable:true,
      isSortable:true,
      valueType: 'label',
      value:'area'
    }, {
      id:4,
      name:'population',
      isVisiable:true,
      isSortable:true,
      valueType: 'label',
      value:'population'
    }],
    dataList: [
      {
        id: 1,
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754
      },
      {
        id: 2,
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199
      },
      {
        id: 3,
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463
      },
      {
        id: 4,
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397
      }
    ],
    paginatorOprions: {

    }
  }

  constructor() { }

  ngOnInit() {
  }



  switchChange () {
    console.log(this.checkSwitch);
  }
}
