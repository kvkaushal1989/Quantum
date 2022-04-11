import { Component, OnInit } from '@angular/core';
import { BasicDailogService } from './basic-dailog.service';

@Component({
  selector: 'app-basic-dailog',
  templateUrl: './basic-dailog.component.html',
  styleUrls: ['./basic-dailog.component.scss']
})
export class BasicDailogComponent implements OnInit {

  message: any;
  constructor(
      private confirmDialogService: BasicDailogService
  ) { }

  ngOnInit() { 
      this.confirmDialogService.getMessage().subscribe(message => {
          this.message = message;
          console.log(this.message)
      });
  }

}
