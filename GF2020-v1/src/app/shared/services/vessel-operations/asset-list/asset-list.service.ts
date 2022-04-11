import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryMasterService {

  constructor() { }  
  
  confiDataList(colList:any, dataList:any): any{
    let formatList:any[] = [];
    let datalsit1: any = JSON.parse(JSON.stringify(dataList));
    datalsit1.forEach((data, di)=>{ 
      colList.forEach((col, ci)=>{
        if(col.field !== 'HiddenField'){ 
          data[col.field] = data[col.field];
  
          if(col.field === 'flag'){
            data[col.field] = '<div class="flag-img"><img class="flag-img" src="'+data[col.field]+'" style="width: 48px; height: 48px; vertical-align: middle;border-radius: 40px;"></div>';           
          }
  
          if(col.field === 'countryName'){ 
            if(!col.isHyperLink){
              data[col.field] = "<div class='td-coll'><div class='td-label1'><a> "+data[col.field]+" </a></div> "+
                                    "<div class='table-anchor-tag'> "+
                                      "<span> "+data['countryCode2']+" </span> "+
                                      " | <span> "+data['countryCode3']+" </span>"+
                                    "</div></div>";
  
            }else{
              data[col.field] = data[col.field]
            } 
          }
  
          if(col.field === 'currencyName'){
            data[col.field] = '<div class="currency-symbol"><span class="currency-symbol">'+data["currencySymbol"]+'</span></div> <div class="table-anchor-tag"> <span class="table-anchor-tag">'+data[col.field]+'</span></div>'; 
          }        
  
          if(col.field === 'Location'){
            data[col.field] = '<div class="table-anchor-tag"><a class="table-anchor-tag" (click)="onRowSelectionEmit(lisObj)">'+data['locationList']+'</a></div>'; 
          }       
  
          if(col.field === 'areaName'){
            data[col.field] = '<div class="currency-symbol"><span class="currency-symbol">'+data[col.field]+'</span></div><div class="table-anchor-tag"><span class="table-anchor-tag">'+data['regionName']+'</span></div>'; 
          } 
  
        }        
      });

      formatList.push(data)
    });

    return dataList;
  }
}
