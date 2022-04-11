import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { APIENDPOINT } from '../constant/api-end-points';
import { AppService } from './app.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public notifications: any;
  public sideMenuElements = new BehaviorSubject(null);
  public sideMenuContent: any = new BehaviorSubject(null);
  public deviceToken = new BehaviorSubject(null);
  public simpleNotifications = new BehaviorSubject(null);
  public statusNotifications = new BehaviorSubject(null);
  public notificationConfirmation = new BehaviorSubject(null);
  public navItems;
  public navSubItems;
  public loginUserDetails: any;
  userPK: any = this.localStorageService.getUserPk();
  helpObj: any;

  constructor(
    private http: HttpClient,
    public datepipe: DatePipe,
    public appService: AppService,
    private translate: TranslateService,
    private modalService: BsModalService,
    public localStorageService: LocalStorageService,
    private _localStorage: LocalStorageService
  ) {
    const df_lan_code = 'en';
    const lan_code = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['LANGUAGE_CODE'] : 'en';
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');
    translate.use(lan_code);

    this.notifications = new BehaviorSubject<any>({});
    this.navItems = new BehaviorSubject(null);
    this.navSubItems = new BehaviorSubject(null);
  }

  getLocale(): string {
    return 'en-US';
  }

  setLocale(lan_code: string) {
    this.translate.use(lan_code);
  }

  getLoginUserDetails(): any {
    const loginUserDetails = this._localStorage.getLocalStorage('userDetails');
    return this.loginUserDetails = {
      usermaster_pk: loginUserDetails ? loginUserDetails.usermaster_pk : 1,
      username: loginUserDetails ? loginUserDetails.username : '',
      email_id: loginUserDetails ? loginUserDetails.email_id : '',
      user_image: loginUserDetails ? loginUserDetails.user_image : '',
    };
  }

  public displayNotification(notification) {
    this.notifications.next(notification);
  }

  public getNotifications(): Observable<any> {
    return this.notifications.asObservable();
  }


  getMenuDetails(dataFilter?) {
    return this.appService.get(APIENDPOINT.MENU.FETCHMENU, dataFilter);
  }

  public getColConfig(req: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF, req);
  }

  public getSideMenuDetails() {
    const userDetails: any = JSON.parse(localStorage.getItem('userDetails'));
    console.log(userDetails);
    return this.http.get(`${environment.baseEndPoint}Menu?userpk=${userDetails.usermaster_pk}`);
  }

  public setSimpleNotifications(notification) {
    this.simpleNotifications.next({ ...notification });
  }

  public setStatusNotifications(notification) {
    this.statusNotifications.next({ ...notification });
  }

  public setNavItems(navItems) {
    this.navItems.next(navItems);
  }

  public getNavItems() {
    return this.navItems.asObservable();
  }

  public setNavSubItems(navItems) {
    this.navSubItems.next(navItems);
  }

  public getNavSubItems() {
    return this.navSubItems.asObservable();
  }

  public getConfigData() {
    const req = {
      usermasterfk: this.userPK,
      is_active: 1
    }
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCHCONFIG, req);
  }
  public getFieldCaptions(formFk) {
    // userFk needs to change later
    return this.http.get(`${environment.baseEndPoint}FormPref/FetchFieldCaption?UserFK=1&FormFK=` + formFk);
  }

  public getColumnConfig(reqInput: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF, reqInput);
  }

  public setNotificationConfirmation(key) {
    this.notificationConfirmation.next(key);
  }

  public getNotificationConfirmation() {
    return this.notificationConfirmation.asObservable();
  }

  public compareFormData(originalData: any, formData: any): boolean {
    for (const data of Object.keys(formData)) {
      if ((typeof originalData[data] === 'object') && originalData[data] !== null) {
        if (originalData[data].length > 0 && originalData[data][0].text !== formData[data][0].text) {
          return true;
        }
      } else {
        if (formData[data] !== originalData[data]) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   *
   * @param row
   * @param col1
   * @param coll2
   */
  convertIdText(row: any, col1: string, coll2: string) {
    const obj: { id: any, text: any }[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < row.length; i++) {
      obj.push({ id: row[i][col1], text: row[i][coll2] });
    }
    return obj;
  }

  convertToSqlDate(date: any): string {

    return '';
  }

  formatDate(date: any) {
    if (date !== '' && date !== undefined) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }

      return [day, month, year].join('/');
    }
  }

  countDownDateFormat(date: any) {
    return new Date(date);
  }

  formatSQLDate(date: any) {
    if (date !== '' && date !== null && date !== undefined) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }

      return [year, month, day].join('-');
    } else {
      return null;
    }
  }

  getFinancialYearFirstOrLastDate(year: any = new Date().getFullYear()): any {
    const date: any = { from: null, to: null };

    date.from = new Date(year, 0, 1);
    date.to = new Date(year, 11, 31);

    return date;
  }

  convertToNumber(value: string): number {
    // return value !== undefined && value !== null ? this.numberformat.parseToNumber(value) : 0;

    // let amount = value ? value : 0;
    // amount = amount.toString().replace(/\s/g, '');
    // amount = this.THOUSANDS_SEPARATOR === ',' ?  amount.replace(/,/g, '') : amount.replace(/\./g, '');
    // amount = this.DECIMAL_SEPARATOR === ',' ?  amount.replace(/\,/g, '.') : amount.replace(/\,/g, '.');
    // return Number(amount);
    return 0;
  }

  convertToPositiveNumber(num: number): number {
    const posNum = (num < 0) ? num * -1 : num;
    // return Math.abs(a - b);
    return posNum;
  }

  getCurrentDateTime() {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    return localISOTime;
  }

  removeNullObj(obj: any) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || !obj[propName]) {
        delete obj[propName];
      }
    }
    return obj;
  }


  uploadFile(body: any, param: any) {
    const formData: any = new FormData();
    formData.append('url', '');
    formData.append('File', body);
    formData.append('description', 'description');
    formData.append('created_on', '12/10/2020');
    formData.append('public_id', '');
    let url = 'cloudinary/' + param.refFk + '/images?' + 'refPk=' + param.userFk;
    return this.appService.post(url, formData);
  }

  public deleteUserImg(param: any): Observable<any> {
    let url = 'cloudinary/' + param.refFk + '/images?' + 'refPk=' + param.userFk;
    return this.appService.delete(url);
  }


  uploadFilestoFolder(file: FileList, params): Observable<any> {
    const formData: FormData = new FormData();
    // tslint:disable-next-line: no-shadowed-variable
    Array.from(file).forEach(file => formData.append('formFiles', file));
    return this.appService.getExcelCopy(APIENDPOINT.ATTACHMENT.FILEATTACHMENT, formData, params);
    // return this.appService.post(APIENDPOINT.EMAILMANAGEMENT.EMIALATTACHMENT, formData);
  }

}

