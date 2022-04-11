import { Component, OnInit } from '@angular/core';
import { PrintFeatureService } from 'src/app/shared/components/print-feature/print-feature.service';
import { PrintFeature } from 'src/app/shared/components/print-feature/print-feature';
import { ShareFeatureService } from 'src/app/shared/components/share-feature/share-feature.service';

@Component({
  selector: 'app-print-test',
  templateUrl: './print-test.component.html',
  styleUrls: ['./print-test.component.scss']
})
export class PrintTestComponent implements OnInit {
  printFeature: PrintFeature = new PrintFeature();
  shareObject: any;
  constructor(
    private print: PrintFeatureService,
    private _share: ShareFeatureService
  ) { }

  ngOnInit() {
  }

  printFn() {
    this.printFeature.bl_status = 'draft'; // other
    this.printFeature.is_org_no_of_copy = false; // other
    this.printFeature.org_no_of_copy = 1; // other
    this.printFeature.is_non_n_no_of_copy = false; // other
    this.printFeature.non_n_no_of_copy = 1; // other
    this.printFeature.draft = true; // other
    this.printFeature.duplicate = false; // other
    this.print.print(this.printFeature, 'print', () => {
      this._share.getMessage();
    }, () => {
    });
  }

  openShare() {
    const reqInput: any = {
      to: 'kaushal@quantum-bso.com',
      cc: null,
      subject: 'Subject Share Feature',
      attachmentPath: 'test.txt',
      body: 'Hi PFA'
    };

    this.shareObject = reqInput;

    this._share.openShare(this.shareObject, () => { });
  }

  showComposeModal() {
    const tempModal = document.getElementById('composeModal');
    tempModal.style.display = 'block';
    // this.makeComposeObjEmpty();
  }
}
