import { Component, OnInit } from "@angular/core";
import { ShareFeatureService } from "./share-feature.service";
import { BasicDailogService } from "../basic-dailog/basic-dailog/basic-dailog.service";
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from "@angular/forms";
import { ShareFeature } from "./share-feature";
import { CustomResponse } from "../../models/response";
import { AlertifyService } from "../../_services/alertify.service";
// import { CommercialScheduleService } from "src/app/services/scheduling/commercial-schedule/commercial-schedule.service";
import { Subscription } from 'rxjs/internal/Subscription';
// import { AgeingReportService } from 'src/app/services/account-receivable/ageing-report/ageing-report.service';
// import { OutstandingReportService } from 'src/app/services/account-receivable/outstanding-report/outstanding-report.service';
// import { RevenueReportService } from 'src/app/services/account-receivable/revenue-report/revenue-report.service';
// import { DailySalesReportService } from 'src/app/services/account-receivable/daily-sales-report/daily-sales-report.service';
// import { CollectionsService } from 'src/app/services/account-receivable/collections/collections.service';
// import { InvoicingService } from 'src/app/pages/account-receivable/invoicing/invoicing.service';
// import { StatementOfAccountService } from 'src/app/services/account-receivable/statement-of-account/statement-of-account.service';
// import { FixedCostService } from 'src/app/services/vessel-operations/fixed-cost/fixed-cost.service';
// import { QuotationService } from 'src/app/services/settings/quotation/quotation.service';
// import { ReportService } from 'src/app/services/order-management/report-status/report.service';
// // // import { CargoListService } from 'src/app/services/terminal-operations/cargo-list.service';
// // import { BunkerReportService } from 'src/app/services/terminal-operations/bunker-report.service';
// // import { TugInterchangeService } from 'src/app/services/terminal-operations/tug-interchange.service';
// // import { RBLService } from 'src/app/services/order-management/rbl/rbl-service.service';
// // import { AgeingReportPayableService } from 'src/app/services/account-payable/ageing-report-payable.service';
// // import { StatementAccountPayableService } from 'src/app/services/account-payable/statement-account-payable.service';
// // import { DeliveryOrderService } from 'src/app/services/documentation/delivery-order.service';
// // import { PreArrivalService } from 'src/app/services/documentation/pre-arrival.service';
// // import { ReeferApprovalService } from 'src/app/services/order-management/reefer-approval/reefer-approval.service';
// // import { HazmatApprovalService } from 'src/app/services/order-management/hazmat-approval/hazmat-approval.service';
// // import { DisbursementAccountPortcostService } from 'src/app/pages/account-payable/disbursement-account-portcost/disbursement-account-portcost.service';
// // import { DisbursementaccountBunkerService } from 'src/app/services/account-payable/disbursementaccount-bunker.service';
// // import { DisbursementAccountService } from 'src/app/pages/account-payable/disbursement-account/disbursement-account.service';
// // import { TerminalOperationalReportService } from 'src/app/services/terminal-operations/terminal-operational-report.service';
// // import { TrackandtraceService } from 'src/app/pages/mis/track-and-trace/trackandtrace.service';
// // import { PortCallReportService } from 'src/app/services/terminal-operations/port-call-report.service';
// // import { WorkOrderBunkerService } from 'src/app/services/terminal-operations/work-order-bunker.service';
// // import { ViewScheduleService } from 'src/app/services/scheduling/view-schedule/view-schedule.service';
// // import { VoyageLedgerService } from 'src/app/services/mis/voyage-ledger/voyage-ledger.service';
// // import { SupplimentaryInvoiceService } from 'src/app/pages/account-receivable/supplementary-invoice/supplimentary-invoice.service';
// import { CreditNoteService } from 'src/app/pages/account-receivable/credit-note/credit-note.service';
// import { SettlementStevedoringService } from 'src/app/services/account-payable/settlement-stevedoring.service';
// import { SpotRateService } from 'src/app/services/settings/spot-rate/spot-rate.service';
// import { PurchaseOrderlistService } from 'src/app/pages/account-receivable/purchase-orderlist/purchase-orderlist/purchase-orderlist.service';

@Component({
  selector: "app-share-feature",
  templateUrl: "./share-feature.component.html",
  styleUrls: ["./share-feature.component.scss"],
})
export class ShareFeatureComponent implements OnInit {
  MAX_LENGTH = 250;
  data: any;
  shareForm: FormGroup;
  shareObj: ShareFeature = new ShareFeature();
  tmpShareObj: ShareFeature = new ShareFeature();
  subscription: Subscription;
  isDisabled: boolean;

  constructor(
    private _service: ShareFeatureService,
    private fb: FormBuilder,
    private basicDailog: BasicDailogService,
    private alertify: AlertifyService,
    private commercialScheduleService: any,
    private ageingReportService: any,
    private outstandingService: any,
    private revenueReportService: any,
    private dailySalesReportService: any,
    private collectionsService: any,
    // public invoicingService: any,
    private statementOfAccountService: any,
    private fixedCostService: any,
    private quotationService: any,
    private bookingService: any,
    private cargoService: any,
    private bunkerReportService: any,
    private tugInterchangeService: any,
    private rblService: any,
    private ageingReportPayableService: any,
    private statemenofAccountService: any,
    private _deliveryOrderService: any,
    private _preArrivalService: any,
    private reeferService: any,
    private hazmatService: any,
    private disbursementAccountPortcostService: any,
    private disbursementaccountBunkerService: any,
    private disbursementAccountService: any,
    private terminalOperationalReportService: any,
    private tracandtraceService: any,
    private portCallReportService: any,
    private workOrderBunkerService: any,
    private viewScheduleService: any,
    public voyageLedgerService: any,
    public supplimentaryService: any,
    public creditnoteservice: any,
    public settlementService: any,
    private quotationservice: any,
    private purchaseOrderlistService: any
  ) { }

  ngOnInit() {     
    this.isDisabled = false;
  }

  // initFormValidation(object?: ShareFeature) {
  //   let data: ShareFeature = null;
  //   if (object !== undefined && object !== null) {
  //     data = object;
  //   } else {
  //     data = this.shareObj;
  //   }

  //   this.shareForm = this.fb.group({
  //     from: [data.from, []],
  //     // to: [data.tomail, [Validators.required]],
  //     to: ['', [Validators.required, this.commaSepEmail]],
  //     cc: [{ value: data.ccmail, disabled: false }, []],
  //     bcc: [{ value: data.bcc, disabled: false }, []],
  //     subject: [{ value: data.subject, disabled: false }, [Validators.maxLength(500)]],
  //     attachmentPath: [{ value: data.rptfilename, disabled: false }, []],
  //     attachmentfile: [{ value: data.rptfilename, disabled: false }, []],
  //     isBodyHtml: [{ value: false, disabled: false }, []],
  //     body: [{ value: data.msgbody, disabled: false }, []],
  //     created_by_fk: [data.created_by_fk, []],
  //     version_no: [data.version_no, []],

  //     // from: [data.from, []],
  //     // to: [data.to, []],
  //     // cc: [{ value: data.cc, disabled: false }, []],
  //     // bcc: [{ value: data.bcc, disabled: false }, []],
  //     // subject: [{ value: data.subject, disabled: false }, []],
  //     // attachmentPath: [{ value: data.attachmentPath, disabled: false }, []],
  //     // attachmentfile: [{ value: data.attachmentfile, disabled: false }, []],
  //     // isBodyHtml: [{ value: false, disabled: false }, []],
  //     // body: [{ value: data.body, disabled: false }, []],
  //     // created_by_fk: [data.created_by_fk, []],
  //     // version_no: [data.version_no, []],
  //   });

  //   this.tmpShareObj = JSON.parse(JSON.stringify(this.shareForm.value));
  // }
  // commaSepEmail = (control: AbstractControl): { [key: string]: any } | null => {
  //   const emails = control.value.split(',').map(e => e.trim());
  //   const forbidden = emails.some(email => Validators.email(new FormControl(email)));
  //   return forbidden ? { 'to': { value: control.value } } : null;
  // };
  // get toEmail() {
  //   return this.shareForm.get('to');
  // }
  // get ccEmail() {
  //   return this.shareForm.get('cc');
  // }

  // send() {
  //   //this.isDisabled = true;
  //   if (this.shareForm.value.subject === 'Commercial Schedule Report') {
  //     const reqInputForCommercialRpt: any = {
  //       CSHPK: this.data.shareInfo.CSHPK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       POLPK: this.data.shareInfo.POLPK,
  //       PODPK: this.data.shareInfo.PODPK,
  //       StartDT: this.data.shareInfo.StartDT,
  //       EndDT: this.data.shareInfo.EndDT,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.commercialScheduleService.printPDF(reqInputForCommercialRpt).subscribe(
  //       (res: any) => {
  //         if (res) {
  //           this.alertify.success('File Shared Successfully.');
  //           this.data.noFn();
  //         } else {
  //           this.alertify.error('Mail Not Sent!');
  //         }
  //       },
  //       (error) => {
  //         this.alertify.error('Internal Server Error!');
  //       }
  //     );
  //   } else if (this.shareForm.value.subject === 'Ageing Report') {
  //     const reqInputForAgeingRpt: any = {
  //       cshfk: this.data.shareInfo.cshfk,
  //       customer_mst_fk: this.data.shareInfo.customer_mst_fk,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.ageingReportService.downloadFile(reqInputForAgeingRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Outstanding Report') {
  //     const reqInputForOutstandingRpt: any = {
  //       cshfk: this.data.shareInfo.cshfk,
  //       CustomerFK: this.data.shareInfo.CustomerFK,
  //       FrtType: this.data.shareInfo.FrtType,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.outstandingService.printPDFSummary(reqInputForOutstandingRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Ap Outstanding Report') {
  //     const reqInputForOutstandingRpt: any = {
  //       cshfk: this.data.shareInfo.cshfk,
  //       supplierfk: this.data.shareInfo.supplierfk,
  //       VouNr: this.data.shareInfo.VouNr,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.outstandingService.printPDFSummaryAP(reqInputForOutstandingRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Day Expense Report') {
  //     console.log(this.data.shareInfo)
  //     const reqInputForOutstandingRpt: any = {
  //       cshfk: this.data.shareInfo.cshfk,
  //       supplierfk: this.data.shareInfo.SupplierFK,
  //       VouNr: this.data.shareInfo.VouNr,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.outstandingService.printPDFSummaryAP(reqInputForOutstandingRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Revenue Report') {
  //     const reqInputForRevenueRpt: any = {
  //       cshfk: this.data.shareInfo.cshfk,
  //       CustomerFK: this.data.shareInfo.CustomerFK,
  //       FrtType: this.data.shareInfo.FrtType,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Revenue Inputs =>', reqInputForRevenueRpt);
  //     this.revenueReportService.printPDFSummary(reqInputForRevenueRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Daily Sales Report') {
  //     const reqInputForDailySalesRpt: any = {
  //       cshfk: this.data.shareInfo.cshfk,
  //       CustomerFK: this.data.shareInfo.CustomerFK,
  //       FrtType: this.data.shareInfo.FrtType,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Daily Sales Inputs =>', reqInputForDailySalesRpt);
  //     this.dailySalesReportService.printPDFSummary(reqInputForDailySalesRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Collections Report') {
  //     const reqInputForCollectionsRpt: any = {
  //       Collpk: this.data.shareInfo.Collpk,
  //       UserFK: this.data.shareInfo.UserFK,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Collections Inputs =>', reqInputForCollectionsRpt);
  //     this.collectionsService.downloadFile(reqInputForCollectionsRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Collection Details Report') {
  //     const reqInputForCollectionsRpt: any = {
  //       Collpk: this.data.shareInfo.Collpk,
  //       UserFK: this.data.shareInfo.UserFK,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.collectionsService.downloadFile(reqInputForCollectionsRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'InvoicingReport') {
  //     const reqInputForInvoicingRpt: any = {
  //       InvoiceMstPk: this.data.shareInfo.InvoiceMstPk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       // InvoiceType: this.data.shareInfo.InvoiceType,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Invoice Inputs =>', reqInputForInvoicingRpt);
  //     const queryParam = `?InvoiceMstPk=${this.data.shareInfo.InvoiceMstPk}&UserPK=${this.data.shareInfo.UserPK}&Thou_Sep=${this.data.shareInfo.Thou_Sep}&Dec_Sep=${this.data.shareInfo.Dec_Sep}&mailFlag=${this.data.shareInfo.mailFlag}&tomail=${this.shareForm.value.to}&ccmail=${this.shareForm.value.cc}&subject=${this.shareForm.value.subject}&msgbody=${this.shareForm.value.body}&rptfilename=${this.shareForm.value.attachmentPath}&IsBodyHtml=false`
  //     this.invoicingService.printInvoiceDetail(queryParam).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Statement Of Account Report') {
  //     const reqInputForAcStatementRpt: any = {
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Ac Statement =>', reqInputForAcStatementRpt);
  //     this.statementOfAccountService.printPDFSummary(reqInputForAcStatementRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Fixed Cost Report') {
  //     const reqInputForFixedCostRpt: any = {
  //       SER_DEF_PK: this.data.shareInfo.SER_DEF_PK,
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       LEG: this.data.shareInfo.LEG,
  //       FROM_DT: this.data.shareInfo.FROM_DT,
  //       TO_DT: this.data.shareInfo,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.fixedCostService.printServiceSummaryPDF(reqInputForFixedCostRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Contracts Report') {
  //     const reqInputForContractsRpt: any = {
  //       QuotationPk: this.data.shareInfo.QuotationPk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.quotationService.downloadFile(reqInputForContractsRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Booking Status Report') {
  //     const reqInputForBkgStatusRpt: any = {
  //       usermasterfk: this.data.shareInfo.usermasterfk,
  //       reportflag: this.data.shareInfo.reportflag,
  //       portmasterfks: this.data.shareInfo.portmasterfks,
  //       terminalmasterfks: this.data.shareInfo.terminalmasterfks,
  //       servicedefinitionfk: this.data.shareInfo.servicedefinitionfk,
  //       cshfks: this.data.shareInfo.cshfks,
  //       customermasterfks: this.data.shareInfo.customermasterfks,
  //       reporttype: this.data.shareInfo.reporttype,
  //       booking_date: this.data.shareInfo.booking_date,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.bookingService.downloadFile(reqInputForBkgStatusRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Daily Booking Status Report') {
  //     const reqInputForDlBkgStatusRpt: any = {
  //       usermasterfk: this.data.shareInfo.usermasterfk,
  //       reportflag: this.data.shareInfo.reportflag,
  //       portmasterfks: this.data.shareInfo.portmasterfks,
  //       terminalmasterfks: this.data.shareInfo.terminalmasterfks,
  //       servicedefinitionfk: this.data.shareInfo.servicedefinitionfk,
  //       cshfks: this.data.shareInfo.cshfks,
  //       customermasterfks: this.data.shareInfo.customermasterfks,
  //       reporttype: this.data.shareInfo.reporttype,
  //       booking_date: this.data.shareInfo.booking_date,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Daily Booking Status Report =>', reqInputForDlBkgStatusRpt);
  //     this.bookingService.downloadFile(reqInputForDlBkgStatusRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Cargo Discharge List Report') {
  //     const reqInputForCargoListRpt: any = {
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       PORT_PK: this.data.shareInfo.PORT_PK,
  //       TERM_PK: this.data.shareInfo.TERM_PK,
  //       USERPK: this.data.shareInfo.USERPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.cargoService.downloadFile(reqInputForCargoListRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Cargo Load List Report') {
  //     const reqInputForCargoLoadListRpt: any = {
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       PORT_PK: this.data.shareInfo.PORT_PK,
  //       TERM_PK: this.data.shareInfo.TERM_PK,
  //       UserPk: this.data.shareInfo.UserPk,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false
  //     };
  //     this.cargoService.downloadFilForLoadList(reqInputForCargoLoadListRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Cargo load confirmation Report') {
  //     const reqInputForCargoLoadConfirmListRpt: any = {
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       PORT_PK: this.data.shareInfo.PORT_PK,
  //       TERM_PK: this.data.shareInfo.TERM_PK,
  //       UserPk: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false
  //     };
  //     this.cargoService.downloadFilForLoadConfirmList(reqInputForCargoLoadConfirmListRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Cargo Discharge confirmation Report') {
  //     console.log(this.data.shareInfo)
  //     const reqInputForCargoDischargeConfirmListRpt: any = {
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       PORT_PK: this.data.shareInfo.PORT_PK,
  //       TERM_PK: this.data.shareInfo.TERM_PK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false
  //     };
  //     this.cargoService.downloadFilForDischargeConfirmList(reqInputForCargoDischargeConfirmListRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Payable Ageing Report') {
  //     const reqInputForAgeingRpt: any = {
  //       cshfks: this.data.shareInfo.cshfks,
  //       suppliermasterfks: this.data.shareInfo.suppliermasterfks,
  //       startdate: this.data.shareInfo.startdate,
  //       enddate: this.data.shareInfo.enddate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.ageingReportPayableService.printPDFSummary(reqInputForAgeingRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });

  //   } else if (this.shareForm.value.subject === 'Bunker Consumption Report') {
  //     const reqInputForBnkrConsumptionRpt: any = {
  //       servicedefinitionfk: this.data.shareInfo.servicedefinitionfk,
  //       cshfk: this.data.shareInfo.cshfk,
  //       tugfk: this.data.shareInfo.tugfk,
  //       from_port_fk: this.data.shareInfo.from_port_fk,
  //       to_port_fk: this.data.shareInfo.to_port_fk,
  //       bound: this.data.shareInfo.bound,
  //       fromdate: this.data.shareInfo.fromdate,
  //       todate: this.data.shareInfo.todate,
  //       month: this.data.shareInfo.month,
  //       year: this.data.shareInfo.year,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Bunker Consumption Report =>', reqInputForBnkrConsumptionRpt);
  //     this.bunkerReportService.printPDF(reqInputForBnkrConsumptionRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Thug Interchange Report') {
  //     const reqInputForThugInterchangeRpt: any = {
  //       TUG_InterChange_Dtl_PK: this.data.shareInfo.TUG_InterChange_Dtl_PK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Thug Interchange Report =>', reqInputForThugInterchangeRpt);
  //     this.tugInterchangeService.printSOF(reqInputForThugInterchangeRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Service BL Report') {
  //     const reqInputForServiceBLRpt: any = {
  //       Booking_Mst_FK: this.data.shareInfo.Booking_Mst_FK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Service BL Report =>', reqInputForServiceBLRpt);
  //     this.rblService.printForServiceBL(reqInputForServiceBLRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Statement of Account') {
  //     console.log('subjectval', this.data.shareInfo);
  //     const reqInputForStatementRpt: any = {
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.statemenofAccountService.printPDFSummary(reqInputForStatementRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Delivery Order') {
  //     const reqInputForDeliveryOrderRpt: any = {
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       CST_PK: this.data.shareInfo.CST_PK,
  //       PORT_PK: this.data.shareInfo.PORT_PK,
  //       TERMINAL_PK: this.data.shareInfo.TERMINAL_PK,
  //       BKG_PK: this.data.shareInfo.BKG_PK,
  //       User_PK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       includeContainer: this.data.shareInfo.includeContainer,
  //       includeBL: this.data.shareInfo.includeBL,
  //       flag: this.data.shareInfo.flag,
  //       mailflag: this.data.shareInfo.mailflag,
  //       do_print: this.data.shareInfo.do_print,
  //       mailFlags: this.data.shareInfo.mailFlags,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this._deliveryOrderService.printPDF(reqInputForDeliveryOrderRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Pre Arrival Report') {
  //     const reqInputForPreArrivalRpt: any = {
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       CST_PK: this.data.shareInfo.CST_PK,
  //       PORT_PK: this.data.shareInfo.PORT_PK,
  //       TERMINAL_PK: this.data.shareInfo.TERMINAL_PK,
  //       BKG_PK: this.data.shareInfo.BKG_PK,
  //       User_PK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       includeBL: this.data.shareInfo.includeBL,
  //       includeContainer: this.data.shareInfo.includeContainer,
  //       flag: this.data.shareInfo.flag,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       mailFlags: this.data.shareInfo.mailFlags,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this._preArrivalService.printPDF(reqInputForPreArrivalRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'BL Report Booking Wise') {
  //     const reqInputForBLRptBookingWise: any = {
  //       BookingPK: this.data.shareInfo.BookingPK,
  //       Preprint: this.data.shareInfo.Preprint,
  //       FormatType: this.data.shareInfo.FormatType,
  //       WaterMark: this.data.shareInfo.WaterMark,
  //       Copies: this.data.shareInfo.Copies,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.rblService.printForRBL(reqInputForBLRptBookingWise).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Reefer Approval Report') {
  //     const reqInputForReeferRpt: any = {
  //       commercialSchPk: this.data.shareInfo.commercialSchPk,
  //       PortPk: this.data.shareInfo.PortPk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     console.log('Reefer Inputs =>', reqInputForReeferRpt);
  //     this.reeferService.downloadFile(reqInputForReeferRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Hazmat Approval Report') {
  //     const reqInputHazmatRpt: any = {
  //       commercialSchPk: this.data.shareInfo.commercialSchPk,
  //       PortPk: this.data.shareInfo.PortPk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false
  //     };
  //     console.log('Hazmat Inputs =>', reqInputHazmatRpt);
  //     this.hazmatService.downloadFile(reqInputHazmatRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'DAPortcost') {
  //     const reqInputForOutstandingRpt: any = {
  //       DAHdrPK: this.data.shareInfo.DAHdrPK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.disbursementAccountPortcostService.printSummary(reqInputForOutstandingRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'DA Bunker') {
  //     const reqInputForDAbunkerRpt: any = {
  //       DAHdrPK: this.data.shareInfo.DAHdrPK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.disbursementaccountBunkerService.printPDFSummary(reqInputForDAbunkerRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'DAStevedoring') {
  //     const reqInputForDAstevedoringRpt: any = {
  //       DAHdrPK: this.data.shareInfo.DAHdrPK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.disbursementAccountService.printPDFSummary(reqInputForDAstevedoringRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Terminal Operation Report') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForTerminalRpt: any = {
  //       UserPK: this.data.shareInfo.UserPK,
  //       PortPK: this.data.shareInfo.PortPK,
  //       TerminalPK: this.data.shareInfo.TerminalPK,
  //       CSH_PK: this.data.shareInfo.CSH_PK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.terminalOperationalReportService.printTOR(reqInputForTerminalRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Vessel Perfomance Report') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForVesselRtp: any = {
  //       servicedefinitionfk: this.data.shareInfo.servicedefinitionfk,
  //       cshfks: this.data.shareInfo.cshfks,
  //       vslstatus: this.data.shareInfo.vslstatus,
  //       fromdate: this.data.shareInfo.fromdate,
  //       todate: this.data.shareInfo.todate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.bookingService.printPDFSummary(reqInputForVesselRtp).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   }
  //   else if (this.shareForm.value.subject === 'Track an Trace Report') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForTerminalRpt: any = {
  //       docid: this.data.shareInfo.docid,
  //       bookingmasterfk: this.data.shareInfo.bookingmasterfk,
  //       doc_ref_no: this.data.shareInfo.doc_ref_no,
  //       UserPK: this.data.shareInfo.UserPK,
  //       inc_columns: this.data.shareInfo.inc_columns,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.tracandtraceService.printPDFSummary(reqInputForTerminalRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Port Call Report') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForPortcallRpt: any = {
  //       servicedefinitionfk: this.data.shareInfo.servicedefinitionfk,
  //       cshfk: this.data.shareInfo.cshfk,
  //       port_mst_fk: this.data.shareInfo.port_mst_fk,
  //       terminal_mst_fk: this.data.shareInfo.terminal_mst_fk,
  //       fromdate: this.data.shareInfo.fromdate,
  //       todate: this.data.shareInfo.todate,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.portCallReportService.printPDFSummary(reqInputForPortcallRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'WO Bunker Report') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForPortcallRpt: any = {
  //       wo_master_fk: this.data.shareInfo.wo_master_fk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.workOrderBunkerService.printPDFSummary(reqInputForPortcallRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Schedule Report') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForPortcallRpt: any = {
  //       CSHPK: this.data.shareInfo.CSHPK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       POLPK: this.data.shareInfo.POLPK,
  //       PODPK: this.data.shareInfo.PODPK,
  //       StartDT: this.data.shareInfo.StartDT,
  //       EndDT: this.data.shareInfo.EndDT,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.viewScheduleService.printPDFSummary(reqInputForPortcallRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Voayge Ledger') {
  //     console.log('share', this.data.shareInfo)
  //     const reqInputForPortcallRpt: any = {
  //       UserPK: this.data.shareInfo.UserPK,
  //       servicemaster_pk: this.data.shareInfo.servicemaster_pk,
  //       CSHPK: this.data.shareInfo.CSHPK,
  //       fromport_pk: this.data.shareInfo.fromport_pk,
  //       toport_pk: this.data.shareInfo.toport_pk,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.voyageLedgerService.printPDFSummary(reqInputForPortcallRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'rblversionreport') {
  //     const reqInputForPortcallRpt: any = {
  //       // UserPK: this.data.shareInfo.UserPK,
  //       BLPK: this.data.shareInfo.BLPK,
  //       PrePrint: this.data.shareInfo.PrePrint,
  //       FormatType: this.data.shareInfo.FormatType,
  //       WaterMark: this.data.shareInfo.WaterMark,
  //       Copies: this.data.shareInfo.Copies,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.rblService.printRBL(reqInputForPortcallRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'Supplementary Invoice') {
  //     const reqInputForPortcallRpt: any = {
  //       UserPK: this.data.shareInfo.UserPK,
  //       InvoiceMstPk: this.data.shareInfo.InvoiceMstPk,
  //       // PrePrint: this.data.shareInfo.PrePrint,
  //       // FormatType: this.data.shareInfo.FormatType,
  //       // WaterMark: this.data.shareInfo.WaterMark,
  //       // Copies: this.data.shareInfo.Copies,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.supplimentaryService.printRBL(reqInputForPortcallRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'CreditNoteReport') {
  //     const reqInputForPortcallRpt: any = {
  //       CreditTrnPk: this.data.shareInfo.CreditTrnPk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     const queryParam = `?CreditTrnPk=${this.data.shareInfo.CreditTrnPk}&UserPK=${this.data.shareInfo.UserPK}&Thou_Sep=${this.data.shareInfo.Thou_Sep}&Dec_Sep=${this.data.shareInfo.Dec_Sep}&mailFlag=${this.data.shareInfo.mailFlag}&tomail=${this.shareForm.value.to}&ccmail=${this.shareForm.value.cc}&subject=${this.shareForm.value.subject}&msgbody=${this.shareForm.value.body}&rptfilename=${this.shareForm.value.attachmentPath}&IsBodyHtml=false`
  //     this.creditnoteservice.printInvoiceDetail(queryParam).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   }  else if (this.shareForm.value.subject === 'SettlementReport') {
  //     const reqInputForreqpayment: any = {
  //       DAHdrPK: this.data.shareInfo.DAHdrPK,
  //       PaymentPK:this.data.shareInfo.PaymentPK,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: 1,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.settlementService.printPDFSummary(reqInputForreqpayment).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   } else if (this.shareForm.value.subject === 'SpotRateReport') {
  //     const reqInputForContractsRpt: any = {
  //       QuotationPk: this.data.shareInfo.QuotationPk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.quotationservice.downloadFile(reqInputForContractsRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   }
  //   else if (this.shareForm.value.subject === 'PurchaseOrderReport') {
  //     const reqInputForContractsRpt: any = {
  //       PO_mst_pk: this.data.shareInfo.PO_mst_pk,
  //       UserPK: this.data.shareInfo.UserPK,
  //       Thou_Sep: this.data.shareInfo.Thou_Sep,
  //       Dec_Sep: this.data.shareInfo.Dec_Sep,
  //       mailFlag: this.data.shareInfo.mailFlag,
  //       tomail: this.shareForm.value.to,
  //       ccmail: this.shareForm.value.cc,
  //       subject: this.shareForm.value.subject,
  //       msgbody: this.shareForm.value.body,
  //       rptfilename: this.shareForm.value.attachmentPath,
  //       IsBodyHtml: false,
  //     };
  //     this.purchaseOrderlistService.printPDFSummary(reqInputForContractsRpt).subscribe((res: any) => {
  //       if (res) {
  //         this.alertify.success('File Shared Successfully.');
  //         this.data.noFn();
  //       } else {
  //         this.alertify.error('Mail Not Sent!');
  //       }
  //     }, (error: any) => {
  //       this.alertify.error(error);
  //     }, () => { });
  //   }
    
  // }
}
