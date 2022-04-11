import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class TerminalOperationalReportService {

constructor(private apiService: AppService) { }

public getTerminalReports() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.FETCH);
}
public getTerminalColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=72');
}
public getTerminalInPortReports() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.FETCHINPORT);
}

public getTerminalInSeaReports() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.FETCHINSEA);
}

public getTerminalHistoryReports() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.FETCHHISTORY);
}
public getTerminalArchieveReports() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.FETCHARCHIEVE);
}
public printTOR(body: any) {
  return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.PRINT.PRINTTOR, body);
}
public printSOF(body: any) {
  return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.PRINT.PRINTSOF,body);
}
public getTORDetails(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.FETCHDETAILS, params);
}


public getCargoSummary(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETDISCHARGEPORTLIST, params);
}

public getSummaryCargoByPort(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETSUMMARYCARGOBYPORT, params);
}
public getSummaryCargoByTerminal(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETSUMMARYCARGOBYTERMINAL, params);
}

public getCargoSummaryByTerminal(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETTERMINALSUMMARY, params);
}

public getBunkerDetails(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETBUNKERS, params);
}

public getHarbourTugList() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETHARBOURTUG);
}

public getSupplierList() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETSUPPLIER);
}

public getTerminalList(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETTERMINAL, params);
}

public saveTerminalReport(params: any) {
  return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.SAVETERMINALREPORT, params);
}

public saveBunkerReport(params: any) {
  return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.SAVEBUNKER, params);
}

public saveTimeSheet(params: any) {
  return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.SAVETIMESHEET, params);
}

public approveFunction(params: any) {
  return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.APPROVE_TOR, params);
}

public getTORSummary(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETTORSUMMARY, params);
}

public getVoyageInfo(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETVOYAGE, params);
}

public defaultObject() {
  const obj = {
    tdrentrypk: 0,
    commercialscheduletrnfk: 0,
    actualdraft: 0,
    is_active: 0,
    created_by_fk: 0,
    created_on: new Date().toISOString(),
    last_updated_by_fk: 0,
    last_updated_on: new Date().toISOString(),
    version_no: 0,
    ata: new Date().toISOString(),
    atd: new Date().toISOString(),
    portstay: '',
    transittime: '',
    grossweight: 0,
    arr_mdo: 0,
    arr_lo: 0,
    arr_fw: 0,
    arr_fwd_draft: 0,
    dep_mdo: 0,
    dep_lo: 0,
    dep_fw: 0,
    dep_npc: '',
    dep_master: '',
    dep_tug_number: '',
    dep_barge_number: '',
    dis_start_dt: new Date().toISOString(),
    dis_end_dt: new Date().toISOString(),
    load_start_dt: new Date().toISOString(),
    load_end_dt: new Date().toISOString(),
    master: '',
    tugfk: 0,
    bargefk: 0,
    last_port_pk: 0,
    last_port_atd: new Date().toISOString(),
    mdo: 0,
    lo: 0,
    fw: 0,
    fwd_draft: 0,
    aft_draft: 0,
    arr_aft_draft: 0,
    arr_ata: new Date().toISOString(),
    dep_fwd_draft: 0,
    dep_aft_draft: 0,
    dep_eta: new Date().toISOString(),
    dep_atd: new Date().toISOString(),
    dep_npc_eta: new Date().toISOString(),
    ter_arr_fwd_draft: 0,
    ter_arr_aft_draft: 0,
    arr_harbour_tugfk: 0,
    dep_harbour_tugfk: 0,
    ter_dep_fwd_draft: 0,
    ter_dep_aft_draft: 0,
    portmasterfk: 0,
    next_port_fk: 0,
    next_port_eta: new Date().toISOString()
  };
  return obj;
}

checkIsApprover(params: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.ISAPPROVER, params);
}


}
