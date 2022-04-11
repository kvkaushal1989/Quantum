import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private router: Router
  ) { }

  /**
   * Set Item
   */
  setLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Get Item
   */
  getLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  getUserPk(): any {
    let usermasterPk: any;
    usermasterPk = JSON.parse(localStorage.getItem('userDetails'));
    if (usermasterPk) {
      return usermasterPk.usermaster_pk;
    }
    // this.router.navigate(['/login']);
  }

  getUserDetails(): any {
    let userDetails: any;
    userDetails = JSON.parse(localStorage.getItem('userDetails'));
    return userDetails;
  }

  dateObj: any = {
    fromDate: new Date(),
    toDate: new Date()
  }

  getDatePreference() {
    let userDetails: any = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      let dataRange = userDetails.date_range;
      if (dataRange) {
        if (dataRange === 1) {
          this.setSystemDefault()
        } else if (dataRange === 2) {
          this.setTodayToMonthEnd()
        } else if (dataRange === 3) {
          this.setBegningMonthToMonthEnd()
        } else if (dataRange === 4) {
          this.setBegningMonthToToday()
        } else if (dataRange === 5) {
          this.setBegningYearToToday()
        } else if (dataRange === 6) {
          this.setBegningYearToEndYear()
        }
      }
    }
    return this.dateObj;
  }

  setTodayToMonthEnd() {
    let date = new Date();
    this.dateObj.fromDate = date;
    this.dateObj.toDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  setBegningMonthToMonthEnd() {
    var date = new Date();
    this.dateObj.fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
    this.dateObj.toDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  setBegningMonthToToday() {
    var date = new Date();
    this.dateObj.fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
    this.dateObj.toDate = date;
  }

  setBegningYearToToday() {
    var currentDate = new Date();
    this.dateObj.fromDate = new Date(currentDate.getFullYear(), 0, 1);
    this.dateObj.toDate = currentDate;
  }

  setSystemDefault() {
    var currentDate = new Date();
    this.dateObj.fromDate = new Date(currentDate.getFullYear(), 0, 1);
    this.dateObj.toDate = currentDate;
  }

  setBegningYearToEndYear() {
    var currentDate = new Date();
    this.dateObj.fromDate = new Date(currentDate.getFullYear(), 0, 1);
    this.dateObj.toDate = new Date(currentDate.getFullYear(), 11, 31);
  }

  getPermittedFiles(): any {
    let usermasterPk: any;
    usermasterPk = JSON.parse(localStorage.getItem('userDetails'));
    if (usermasterPk) {
      let permitedFiles = usermasterPk.permitted_file_types;
      let fileTypeArray = [];
      if (permitedFiles) {
        let tmpFile = permitedFiles.split(',');
        for (let p of tmpFile) {
          fileTypeArray.push(p)
        }
      }
      return fileTypeArray
    }
    // this.router.navigate(['/login']);
  }

  getUserEmail(): any {
    let usermasterPk: any;
    usermasterPk = JSON.parse(localStorage.getItem('userDetails'));
    return usermasterPk.email_id;
  }

  getUserName(): any {
    let usermaster: any;
    usermaster = JSON.parse(localStorage.getItem('userDetails'));
    return usermaster.username;
  }

  getDateFormat(): any {
    let userPreference: any;
    userPreference = JSON.parse(localStorage.getItem('userPreference'));
    return userPreference.VCS_DATE_FORMAT;
  }

  /**
   * Clears All Local Storages
   */
  clearAllLocalStorages() {
    window.localStorage.clear();
  }


  // added by arunk

  setUserDetails(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStorageDetails(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  getThousandSeperator(): any {
    let thousandSeperator: any;
    thousandSeperator = JSON.parse(localStorage.getItem('userPreference'));
    return thousandSeperator.THOUSANDS_SEPARATOR;
  }

  getDecimalSeperator(): any {
    let thousandSeperator: any;
    thousandSeperator = JSON.parse(localStorage.getItem('userPreference'));
    return thousandSeperator.DECIMAL_SEPARATOR;
  }

  getCurrDate() {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    return localISOTime;
  }
  getLanguageCode(): any {
    let languageCode: any;
    languageCode = JSON.parse(localStorage.getItem('userPreference'));
    return languageCode.LANGUAGE_CODE;
  }

}
