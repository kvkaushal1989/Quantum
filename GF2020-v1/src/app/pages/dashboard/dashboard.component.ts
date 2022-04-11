import { Component, OnInit,ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { DashboardServiceService } from './dashboard-service.service';
import { TranslateService } from '@ngx-translate/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataList: any = {
    bookingDetails: [],
    billingList: [],
    dashboardAccessRights: []
  };
  currentPage: number=0;
  currentPage1: number=0;
  endRecord: number=0;
  totalRecords: number=0;
  param: any;
  isLoading: boolean = false;
  loaderMessage: string = 'Loading';
  scheduledList: any[];
  schduleFilterFrom: any;
  allocationList: any[];
  allocationFilterFrom: any;
  constructor(public sharedService: SharedService, 
              public dashboardServiceService: DashboardServiceService,
              public translate: TranslateService,
              private router: Router,
              public localStorageServive: LocalStorageService) { }

  public userPK: any = this.localStorageServive.getUserPk();

  mockJson: any = {
    myBookings: [{
      name: 'Total',
      count: '220'
    }, {
      name: 'Provisional',
      count: '150'
    }, {
      name: 'Confirmed',
      count: '70'
    }],
    schedules: [{
      range: '504/2010N',
      time: '11:58 pm, 13 Mar'
    }, {
      range: '501/2011N',
      time: '11:58 pm, 20 Mar'
    }, {
      range: '502/2011N',
      time: '11:58 pm, 27 Mar'
    }],
    alertAndNotification: [{
      name: 'New Notifications',
      icon: 'notifications_none',
      count: 0,
      color: '#708832',
      bgColor: '#e8f4de'
    }, {
      name: 'New Alerts',
      icon: 'error_outline',
      count: 0,
      color: '#b8494f',
      bgColor: '#ebdbdb'
    }, {
      name: 'Archives',
      icon: 'error_outline',
      count: 0,
      color: '#6d7482',
      bgColor: '#f0f0f0'
    }],
    allocations: [{
      range: '504/2010N',
      subArray: [{
        name: 'Allocation',
        count: '250'
      }, {
        name: 'Booked',
        count: '275'
      }, {
        name: 'Variance',
        count: '25'
      }]
    }, {
      range: '501/2011N',
      subArray: [{
        name: 'Allocation',
        count: '250'
      }, {
        name: 'Booked',
        count: '150'
      }, {
        name: 'Variance',
        count: '-100'
      }]
    }, {
      range: '502/2011N',
      subArray: [{
        name: 'Allocation',
        count: '250'
      }, {
        name: 'Booked',
        count: '200'
      }, {
        name: 'Variance',
        count: '-50'
      }]
    }],
    billing: [{
      name: 'Invoice Amt.',
      amount: '41,45123.11',
      overdue: ''
    }, {
      name: 'Paid amt.',
      amount: '7,24,804.00',
      overdue: ''
    },
    {
      name: 'Outstanding Amount',
      amount: '34,09,543.05',
      overdue: 'Over from 30+ days'
    }],
    documentation: [{
      name: 'New Document rcvd',
      count: 0,
      bgColor: '#f0f0f0',
      color: '#465061',
      aliasname: 'Received'
    }, {
      name: 'Pending to approve',
      count: 0,
      bgColor: '#f0f0f0',
      color: '#465061',
      aliasname: 'Approved'
    }, {
      name: 'Pending to upload',
      count: 0,
      bgColor: '#f0f0f0',
      color: '#465061',
      aliasname: 'upload'
    }]
  };

  // lineChartData: any = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  // ];

  chartData: any;

  ngOnInit() {
    console.log('allerts',this.mockJson)
    this.setBreadcrumb();
    // this.chartData = this.formatGraphData();
    this.getColumnConfig();
    this.getAllList();
  }
  public lineNboundData: ChartDataSets[] = [
    { data: [], label: 'Volume in TEU'},
  ];
  public lineSouthData: ChartDataSets[] = [
    { data: [], label: 'Volume in TEU' },
  ];
  public lineBillData: ChartDataSets[] = [
    { data: [], label: 'Invoice In USD' },
  ];
  public nBoundlineChartLabels: Label[] = [];
  public sBoundlineChartLabels: Label[] = [];
  public billHistlineChartLabels: Label[] = [];
  public lineChartOptions = {
     responsive: true,
      scales: {
           xAxes: [{
              gridLines: {
                 display: false
              }
           }],
           yAxes: [{
              gridLines: {
                 display: false,
              }
           }]
      }
  };
  public lineChartOptions1 = {
    responsive: true,
     scales: {
          xAxes: [{
             gridLines: {
                display: false
             }
          }],
          yAxes: [{
             gridLines: {
                display: false,
             },
             scaleLabel: {
               display: true,
               labelString: '(Millions)'
            }
          }]
     }
  };
  public lineChartNBColors: Color[] = [
    {
      borderColor: '#44caf4',
      backgroundColor: '#C2E8E4',
    },
  ];
  public lineChartSBColors: Color[] = [
    {
      borderColor: '#FB535A',
      backgroundColor: '#F6B8BA',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  getAllList() {
    this.getDashboardAccessRight();
    this.getBookingDetail();
    this.getChsList(false);
    this.getAlerList();
    this.getAllocationList();
    this.getBiilingList();
    this.getDocList();
    this.getNBVolList();
    this.getsbVolList();
    this.getBillHisList();
  }

  setBreadcrumb() {
    const tempObj: any = {
      navItems: [{ item: '', routeTo: '' }],
      navSubItems: [{ item: 'Welcome to Connect', isHeader: true }]
    };
    setTimeout(() => {
      this.sharedService.setNavItems(tempObj.navItems);
      this.sharedService.setNavSubItems(tempObj.navSubItems);
    }, 0);
  }

  public getColumnConfig() {
    const request = {
      UserFK: this.userPK,
      FormFK: 999
    }
    this.sharedService.getColumnConfig(request)
      .subscribe((resp: any) => {
        this.sharedService.helpObj = resp.AccessRights;
      });
  }

  getDashboardAccessRight() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getDashboardAccessRight(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.dashboardAccessRights = resp.Data;
          console.log('dashboardAccessRights',this.dataList.dashboardAccessRights);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }
  getBookingDetail() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getBookingDetail(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.bookingDetails = resp.Data;
          console.log('booking list',this.dataList.bookingDetails);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getChsList(isLoadMore: boolean = false) {
    if (isLoadMore === true) {
      this.currentPage += 1;
    } else {
      this.dataList.chsList = [];
      this.currentPage = 1;
    }
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getChsList(dataFilter,this.currentPage)
    .subscribe((resp: any) => {
      if (resp ) {
          // this.dataList.chsList = resp.Data;
          this.endRecord = resp['pagination'].endRecord;
          this.totalRecords = resp['pagination'].totalItems;
          this.dataList.chsList  =  this.dataList.chsList.concat(resp['result']['Data']);
          console.log('chsList',this.dataList.chsList);
          this.getNextSetOfRecords();
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getNextSetOfRecords() {
    // this.isLoading = true;
    this.scheduledList = [];
    if (!this.scheduledList) {
      this.schduleFilterFrom = 0;
    }
    this.scheduledList = [...this.dataList.chsList].slice(
      0,
      3 + this.schduleFilterFrom
    );
    this.schduleFilterFrom += 3;
  }

  getAlerList() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getAlerList(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.alertList = resp.Data;
          this.mockJson.alertAndNotification[0].count=this.dataList.alertList.notificationCnt;
          this.mockJson.alertAndNotification[1].count=this.dataList.alertList.alertCnt;
          if(this.dataList.alertList.archiveCnt > 999) {
            this.mockJson.alertAndNotification[2].count='999+';
          } else {
            this.mockJson.alertAndNotification[2].count=this.dataList.alertList.archiveCnt;
          }
          

          console.log('alertList',this.dataList.alertList);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getAllocationList(isLoadMore: boolean = false) {
    if (isLoadMore === true) {
      this.currentPage1 += 1;
    } else {
      this.dataList.allocationList = [];
      this.currentPage1 = 1;
    }
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getAllocationList(dataFilter,this.currentPage1)
    .subscribe((resp: any) => {
      if (resp ) {
          this.endRecord = resp['pagination'].endRecord;
          this.totalRecords = resp['pagination'].totalItems;
          this.dataList.allocationList  =  this.dataList.allocationList.concat(resp['result']['Data']);
          console.log('allocationList',this.dataList.allocationList);
          this.getNextSetOfRecords1();
          // this.dataList.allocationList = resp.Data;
          // console.log('allocationList',this.dataList.allocationList);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getNextSetOfRecords1() {
    // this.isLoading = true;
    this.allocationList = [];
    if (!this.allocationList) {
      this.allocationFilterFrom = 0;
    }
    this.allocationList = [...this.dataList.allocationList].slice(
      0,
      3 + this.allocationFilterFrom
    );
    this.allocationFilterFrom += 3;
  }

  getBiilingList() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getBiilingList(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.billingList = resp.Data;
          console.log('billingList',this.dataList.billingList);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getDocList() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getDocList(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.docList = resp.Data;
          this.mockJson.documentation[0].count=this.dataList.docList.newDocCnt;
          this.mockJson.documentation[1].count=this.dataList.docList.pendApproveCnt;
          this.mockJson.documentation[2].count=this.dataList.docList.pendUploadCnt;
          console.log('docList',this.dataList.docList);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getNBVolList() {
    this.nBoundlineChartLabels = [];
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getNBVolList(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.nboundList = resp.Data;
          // let tempArr=[];
          // tempArr=this.lineChartLabels;
            for(let x of resp.Data) {
            //   for(let m of this.dataList.nboundList){
            //   if(m.month_name === x){
            //     this.lineNboundData[0].data.push(m.teus);
            //   }
            // }

            let temp:string = '';
            if(x.monthDate){
              temp = x.monthDate.split('-')
            }
            this.nBoundlineChartLabels.push(x.month_name + ' ' + this.getYearByDate(x.monthDate));
            this.lineNboundData[0].data.push(x.teus);
          }
          // this.lineNboundData[0].data=[this.dataList.nboundList[0].teus,this.dataList.nboundList[1].teus,this.dataList.nboundList[2].teus,this.dataList.nboundList[3].teus,this.dataList.nboundList[4].teus,this.dataList.nboundList[5].teus,this.dataList.nboundList[6].teus,this.dataList.nboundList[7].teus,this.dataList.nboundList[8].teus,this.dataList.nboundList[9].teus,this.dataList.nboundList[10].teus,this.dataList.nboundList[11].teus];
          console.log('nboundList',this.lineNboundData);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getYearByDate(date:any){
    var d = new Date(date);
    var n = d.getFullYear();
    return n
  }

  getsbVolList() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getsbVolList(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.sboundList = resp.Data;
          for(let m of this.dataList.sboundList){
            let temp:string = '';
            if(m.monthDate){
              temp = m.monthDate.split('-')
            }
            this.sBoundlineChartLabels.push(m.month_name + ' ' + this.getYearByDate(m.monthDate));
            this.lineSouthData[0].data.push(m.teus);
            // this.lineSouthData[0].data.push(m.teus);
          }
          // this.lineSouthData[0].data=[this.dataList.sboundList[0].teus,this.dataList.sboundList[1].teus,this.dataList.sboundList[2].teus,this.dataList.sboundList[3].teus,this.dataList.sboundList[4].teus,this.dataList.sboundList[5].teus,this.dataList.sboundList[6].teus,this.dataList.sboundList[7].teus,this.dataList.sboundList[8].teus,this.dataList.sboundList[9].teus,this.dataList.sboundList[10].teus,this.dataList.sboundList[11].teus];
          console.log('sboundList',this.dataList.sboundList);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }
  
  getBillHisList() {
    const dataFilter = {
      UserFK: this.userPK,
    }
    this.dashboardServiceService.getBillHisList(dataFilter)
    .subscribe((resp: any) => {
      if (resp && resp.Data) {
          this.dataList.billHisList = resp.Data;
          for(let m of this.dataList.billHisList){
            // this.lineBillData[0].data.push(m.income);
            let temp:string = '';
            if(m.monthDate){
              temp = m.monthDate.split('-')
            }
            this.billHistlineChartLabels.push(m.month_name + ' ' + this.getYearByDate(m.monthDate));
            this.lineBillData[0].data.push(m.income);
          }
          // this.lineBillData[0].data=[this.dataList.billHisList[0].income,this.dataList.billHisList[1].income,this.dataList.billHisList[2].income,this.dataList.billHisList[3].income,this.dataList.billHisList[4].income,this.dataList.billHisList[5].income,this.dataList.billHisList[6].income,this.dataList.billHisList[7].income,this.dataList.billHisList[8].income,this.dataList.billHisList[9].income,this.dataList.billHisList[10].income,this.dataList.billHisList[11].income];
          console.log('billHisList',this.dataList.billHisList);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }
  navigateForm(navstatus: String){
    // this.router.navigateByUrl('/OrderManagement/DailyBookingReport');
    if(navstatus == 'Total'){
      this.router.navigate(['/OrderManagement/DailyBookingReport'] , { queryParams: {DashBoardStatus : 'Total'} });
    } else if(navstatus == 'prov'){
      this.router.navigate(['/OrderManagement/DailyBookingReport'] , { queryParams: {DashBoardStatus : 'Prov'} });
    } else if(navstatus == 'confirm'){
      this.router.navigate(['/OrderManagement/DailyBookingReport'] , { queryParams: {DashBoardStatus : 'Confirm'} });
    }
    
  }
  navigateDocumentForm(data: any){
    if(data.aliasname == 'Received') {
      this.router.navigate(['/Documentation/RuleManagement'] , { queryParams: {DashBoardStatus : 'Received'} });
    } else if(data.aliasname == 'Approved') {
      this.router.navigate(['/Documentation/RuleManagement'] , { queryParams: {DashBoardStatus : 'Approved'} });
    }else if(data.aliasname == 'upload') {
      this.router.navigate(['/Documentation/RuleManagement'] , { queryParams: {DashBoardStatus : 'upload'} });
    }
    
  }
  navigateBillingForm() {
    this.router.navigate(['/AccountReceivable/OutstandingReport'] , { queryParams: {DashBoardStatus : 'binvoice'} });
  }
  navigateAllocationForm(data: any) {
    this.router.navigate(['/CapacityManagement/CapacityManagement'] ,{ queryParams: {filterby: 'departure',searchflag: 'dashboard', CSHPK: data.cshpk} });
  }
  navigatescheduleForm(data: any) {
    this.router.navigate(['/Scheduling/CommercialSchedule'] , { queryParams: {CSHPK : data.cshpk,searchflag: 'dashboard',polpk:data.polpk,podpk:data.podpk} });
  }
  
  

}
