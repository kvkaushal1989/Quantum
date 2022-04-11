import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpParams } from '@angular/common/http';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { SaveAssignAllocation } from 'src/app/models/capacity-management/assign-allocation';

@Injectable({
  providedIn: 'root'
})
export class AssignAllocationService {
  constructor(private apiService: AppService) { }

  public fetchList(reqInput: any, page: number = 1) {
    let params = new HttpParams();

    params = params.append('servicemasterfk', reqInput.servicemasterfk);
    params = params.append('bound', reqInput.bound);
    params = params.append('customermstfk', reqInput.customermstfk);
    params = params.append('Status', reqInput.Status || 1);
    params = params.append('pageNumber', reqInput.Status || 1);
    // params = params.append('SearchValue', reqInput.SearchValue);
    // params = params.append('PageNumber', reqInput.PageNumber);
    // params = params.append('PageSize', reqInput.PageSize);
    // params = params.append('SkipRecords', reqInput.SkipRecords);
    // params = params.append('TotalRecords', reqInput.TotalRecords);
    // params = params.append('EndRecord', reqInput.EndRecord);

    return this.apiService.getMethod(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.FETCH, params, page);
  }

  public getAssignAllocationColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=44');
  }
  public fetchSettings() {
    return this.apiService.get(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.FETCHSETTINGS);
  }

  public getServiceDropdown(reqInput: any) {
    // return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN + '?searchflag=service');
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  public getBoundDropdown(reqInput: any) {
    // return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN + '?searchflag=Bound&Param3=' + reqInput);
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  public getCustomerDropdown(reqInput: any) {
    // return this.apiService.get(`${APIENDPOINT.COMMON.FETCHDROPDOWN}?searchflag=Customer`);
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  getCustomerPopupList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.FETCH_CUSTOMERS, reqInput);
  }

  public getSettingsDropdown() {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.FETCHSETTINGS);
  }

  public saveSettings(body: any) {
    return this.apiService.postMethod(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.SAVESETTINGS, body);
  }

  public getOverBookingDropdown(reqInput: any) {
    // return this.apiService.get(`${APIENDPOINT.COMMON.FETCHDROPDOWN}?searchflag=Over Booking&Param3=44 `);
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  public getShortFallDropdown(reqInput: any) {
    // return this.apiService.get(`${APIENDPOINT.COMMON.FETCHDROPDOWN}?searchflag=Short Fall&Param3=44`);
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  public saveRoutes(body: any) {
    return this.apiService.postMethod(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.SAVEROUTES, body);
  }

  public deleteCustomer(reqInput: any, selectedCust: any): any {
    console.log('deleteCustomer', reqInput);
    reqInput.forEach(v => {
      v.tablist.forEach(w => {
        selectedCust.forEach(sc => {
          w.customerList.forEach((csl, i) => {
            if (sc.customermasterpk === csl.customermasterpk) {
              if (w.customerList.length > 0) {
                w.customerList.splice(i, 1);
              }
            }
          });
        });
      });
    });
    const dataList: any = this.customizeFetchDataList(reqInput);
    return dataList;
  }

  public addCustomer(reqInput: any, tmpList: any, selectedCust: any): any {
    reqInput.forEach((v, vindex) => {
      v.tablist.forEach((w, windex) => {
        selectedCust.forEach(sc => {
          sc.portList = [];
          // let avgwgt = 0;
          const existing = w.customerList.filter(wcs => wcs.customermasterpk === sc.customermasterpk);
          if (existing.length <= 0) {
            // sc.portList = w.customerList[0].portList;
            const customerList: any = w.customerList.length > 0 ? w.customerList[0] : tmpList[vindex].tablist[windex].customerList[0];
            customerList.portList.forEach(prtlst => {
              sc.portList.push({
                portmaster_pk : prtlst.portmaster_pk,
                port_id : prtlst.port_id,
                port_name : prtlst.port_name,
                allocationdetailpk : prtlst.allocationdetailpk,
                custvalue : 0
              });
            });

            // avgwgt = this.getAverageWeight(w.customerList);
            w.customerList.push({
              // avgwgt: this.getAverageWeight(w.customerList),
              // avgwgt: this.getAverageWeight(customerList),
              avgwgt: customerList.avgwgt !== 0 && customerList.avgwgt !== undefined ? customerList.avgwgt : 0,
              customercode: sc.customercode,
              customermasterpk: sc.customermasterpk,
              customername: sc.customername,
              portList: sc.portList
            });
          }
        });
      });
    });
    const dataList: any = this.customizeFetchDataList(reqInput);
    return dataList;
  }

  getAverageWeight(customerList: any): number {
    let weight = 0;
    // customerList.forEach(v => {
    //   if (weight === 0) {
    //     weight = v.avgwgt;
    //   }
    // });

    return weight;
  }

  getSelectedCustomer(currentItem: any) {
    // currentItem
  }

  customizeFetchDataList(dataList: any): any {
    if (dataList.length > 0) {
      dataList.forEach(v => {
        v.portNameList = [];
        v.portAndCustList = [];
        let tuesList: any = null;
        v.tablist.forEach((w, tabIndex) => {
          w.portNameList = [];
          w.portAndCustList = [];
          w.isDisabled = false;

          if (w.capacityname === 'TEUs') {
            tuesList =  w;
          }

          w.customerList.forEach((x, custIndex) => {
            x.portList.forEach((prt, prtIndex) => {
              // view
              if (v.portNameList.indexOf(prt.port_id) === -1) {
                v.portNameList.push(prt.port_id);
              }

              if (w.capacityname === 'Weight') {
                prt.custvalue = Number(x.avgwgt) * Number(tuesList.customerList[custIndex].portList[prtIndex].custvalue);
              }

              if (prt.custvalue !== null && prt.custvalue > 0) {
                prt.custvalue = Number(prt.custvalue.toFixed(1));
              }

              v.portAndCustList.push({
                capacityname: w.capacityname,
                capacityvalue: w.capacityvalue,
                customermasterpk: x.customermasterpk,
                customercode: x.customercode,
                customername: x.customername,
                avgwgt: Number(x.avgwgt),
                portmaster_pk: prt.portmaster_pk,
                port_id: prt.port_id,
                port_name: prt.port_name,
                custvalue: Number(prt.custvalue)
              });

              // Edit
              if (w.portNameList.indexOf(prt.port_id) === -1) {
                w.portNameList.push(prt.port_id);
              }

              w.portAndCustList.push({
                capacityname: w.capacityname,
                capacityvalue: w.capacityvalue,
                customermasterpk: x.customermasterpk,
                customercode: x.customercode,
                customername: x.customername,
                avgwgt: Number(x.avgwgt),
                portmaster_pk: prt.portmaster_pk,
                port_id: prt.port_id,
                port_name: prt.port_name,
                custvalue: Number(prt.custvalue),
                isUpdated: true,
                created_by_fk: 0
              });
            });
          });
        });
      });
    }
    return dataList;
  }

  // portExist(list: any): boolean{
  //   let hasMatch = false;

  //   for (let index = 0; index < JSON.length; ++index) {

  //   var animal = JSON[index];

  //   if(animal.Name == "dog"){
  //     hasMatch = true;
  //     break;
  //   }
  //   }
  // }

  getAllocationInput(dataList: any, userPK: number = 1): SaveAssignAllocation {
    let reqInput: SaveAssignAllocation = null;

    if (dataList.length > 0) {
      dataList.forEach(v => {
        reqInput = {
          allocationmasterpk: v.allocationmasterpk,
          servicemasterfk: v.servicemaster_pk,
          lastdepport: v.lastdepport ? 1 : 0,
          interchangealloc: v.interchangealloc ? 1 : 0,
          lwallocwgt: v.lwallocwgt ? 1 : 0,
          lwrules: v.lwrules,
          prodatareduction: v.prodatareduction ? 1 : 0,
          reeferacceptcreteria: v.reeferacceptcreteria ? 1 : 0,
          hazacceptcreteria: v.hazacceptcreteria ? 1 : 0,
          hazgfapproval: v.hazgfapproval ? 1 : 0,
          hazclassrestrict: v.hazclassrestrict ? 1 : 0,
          bound: v.bound,
          is_active: 1,
          created_by_fk: v.isUpdated ? userPK : v.created_by_fk,
          isUpdated: true,
          // created_on: null,
          // last_updated_by_fk: 0,
          // last_updated_on: null,
          version_no: 1,
          allocDtlList: []
        };

        v.tablist.forEach(w => {
          // let portlist: any = groupBy(w.portAndCustList, 'portfk');
          // let customerlist: any = groupBy(w.portAndCustList, 'customermstfk');

          w.portAndCustList.forEach(x => {
            reqInput.allocDtlList.push({
              allocationdetailpk: 0,
              allocationmasterfk: reqInput.allocationmasterpk,
              servicemasterfk: reqInput.servicemasterfk,
              customermstfk: x.customermasterpk,
              portfk: x.portmaster_pk,
              teu: x.capacityname === 'TEUs' ? Number(x.custvalue) : 0,
              weight: x.capacityname === 'Weight' ? Number(x.custvalue) : 0,
              reefer: x.capacityname === 'Reefer' ? Number(x.custvalue) : 0,
              hazmat: x.capacityname === 'Hazmat' ? Number(x.custvalue) : 0,
              is_active: reqInput.is_active,
              created_by_fk: x.isUpdated ? userPK : reqInput.created_by_fk,
              // created_on: reqInput.created_on,
              // last_updated_by_fk: reqInput.last_updated_by_fk,
              // last_updated_on: reqInput.last_updated_on,
              version_no: reqInput.version_no
            });
          });
        });
      });
    }

    return reqInput;
  }

  // groupBy(array, key) {
  //   // Return the end result
  //   return array.reduce((result, currentValue) => {
  //     // If an array already present for key, push it to the array. Else create an array and push the object
  //     (result[currentValue[key]] = result[currentValue[key]] || []).push(
  //       currentValue
  //     );
  //     // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
  //     return result;
  //   }, {}); // empty object is the initial value for result object
  // }
}

const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};
