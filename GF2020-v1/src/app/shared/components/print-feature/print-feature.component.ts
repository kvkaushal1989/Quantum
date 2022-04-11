import { Component, OnInit } from '@angular/core';
import { PrintFeatureService } from './print-feature.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrintFeature } from './print-feature';
import { BasicDailogService } from '../basic-dailog/basic-dailog/basic-dailog.service';

@Component({
  selector: 'app-print-feature',
  templateUrl: './print-feature.component.html',
  styleUrls: ['./print-feature.component.scss']
})
export class PrintFeatureComponent implements OnInit {

  data: any;

  printForm: FormGroup;
  printObj: any = {};
  tmpPrintObj: any = {};

  constructor(
      private _service: PrintFeatureService,
      private fb: FormBuilder,
      private basicDailog: BasicDailogService
  ) { }

  ngOnInit() {
    this.initFormValidation();

    this._service.getMessage().subscribe(data => {
      this.data = data;
      if (data !== null) {
        this.initFormValidation(data.formValue);
      }
    });
  }

  initFormValidation(object?: PrintFeature) {
    let data: PrintFeature = null;
    if (object !== undefined && object !== null) {

      data = object;
    } else {
      data = this.printObj;
    }

    this.printForm = this.fb.group({
      bl_print_Format: [data.bl_print_Format, []],
      bl_status: [data.bl_status, []],
      is_org_no_of_copy: [{value: data.is_org_no_of_copy, disabled: data.bl_status === 'draft' }, []],
      org_no_of_copy: [{value: data.org_no_of_copy, disabled: data.bl_status === 'draft' }, []],
      is_non_n_no_of_copy: [{value: data.is_non_n_no_of_copy, disabled: data.bl_status === 'draft' }, []],
      non_n_no_of_copy: [{value: data.non_n_no_of_copy, disabled: data.bl_status === 'draft' }, []],
      draft: [{value: data.draft, disabled: data.bl_status !== 'draft' }, []],
      duplicate: [{value: data.duplicate, disabled: data.bl_status === 'draft' }, []],
      bl_rated: [data.bl_rated, []],
      bl_non_rated: [data.bl_non_rated, []],
      bl_dock_type: [data.bl_dock_type, []],
      pdf: [data.pdf, []],
      xml: [data.xml, []],
      created_by_fk: [data.created_by_fk, []],
      version_no: [data.version_no, []]
    });

    this.tmpPrintObj = JSON.parse(JSON.stringify(this.printForm.value));
  }

  savePrint() {
    const that = this;
    this.basicDailog.alertThis('API Not Available.', () => {
      that.data.siFn();
    });
  }
}
