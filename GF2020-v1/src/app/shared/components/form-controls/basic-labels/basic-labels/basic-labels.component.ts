import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'basic-labels',
  templateUrl: './basic-labels.component.html',
  styleUrls: ['./basic-labels.component.scss']
})
export class BasicLabelsComponent implements OnInit {
  // isBold : boolean  - specifies whether label should be bold or not.
  // isUnderline: boolean - specifies whether label should be underline or not.
  // content: string - specifiec the label content.
  // color: string - specifies the label color.
  // fontSize:  string -  specifies fontsize of the label.
  // isItalic: boolean - specifiecs label should be italic or not.
  
  @Input() isBold:boolean;
  @Input() isUnderline: boolean;
  @Input() content: any;
  @Input() color: string;
  @Input() backgroundColor: string = '#ffffff';
  @Input() fontSize: string;
  @Input() isItalic: boolean;
  
  styles: any ={};

  constructor() {  
  }

  ngOnInit() {   
    this.styles={
      'font-weight': this.isBold ? 'bold' : 'normal',
      'text-decoration': this.isUnderline ? 'underline' : 'none',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'fontSize.px': this.fontSize,
      // 'backgroundColor': this.backgroundColor,
      'color': this.color,
    }
  }

}
