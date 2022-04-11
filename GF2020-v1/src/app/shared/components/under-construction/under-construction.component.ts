import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    setTimeout(() => {
      this.sharedService.setNavItems([
        // { item: 'Capacity Management', routeTo: 'CapacityManagement' },
      ]);
      this.sharedService.setNavSubItems([{ item: 'Under Construction', isHeader: true }]);
    }, 0);
  }

}
