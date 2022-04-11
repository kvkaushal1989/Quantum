import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';


let identifier = new Date().getUTCMilliseconds();

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss']
})
export class LineChartsComponent implements OnInit {
  @Input() id: any = 0;
  @Input() graphData: any = null;

  @Input() lineChartData: ChartDataSets[] = [
    // { data: [495, 495, 495, 495, 495, 495, 495], borderWidth: 0, pointRadius: 0 },
    // { data: [400, 400, 400, 400, 400, 400, 400],  borderWidth: 0, pointRadius: 0 },
    // { data: [0, 0, 100, 500, 300, 55, 460],  borderWidth: 0, pointRadius: 0 }
  ];

  // @Input() lineChartData: ChartDataSets[] = [{
  //   label: "My First Dataset",
  //   data: [20, 25, 22, 19, 31, 40],
  //   // fill: true,
  //   borderColor: "rgb(75, 192, 192)",
  //   backgroundColor: "rgba(0,0,0,0.1)",
  //   borderWidth: 0,
  //   lineTension: 0,
  //   /* point options */
  //   pointBorderColor: "blue", // blue point border
  //   pointBackgroundColor: "white", // wite point fill
  //   pointBorderWidth: 0, // point border width
  //   borderJoinStyle: 'miter',
  //   pointRadius: 0 
  // }];

  @Input() lineChartLabels: any = [];

  @Input() lineChartOptions: ChartOptions = {};

  @Input() lineChartColors: any = [];

  @Input() lineChartLegend = false;
  @Input() lineChartType = 'line';
  @Input() lineChartPlugins = [];

  isChartVisible: boolean = true;
  constructor() {
  }

  ngOnInit() {
    if (this.graphData !== null) {
      // this.lineChartOptions.scales.yAxes[0].ticks.max = this.graphData.max;
      // this.lineChartOptions.scales.yAxes[0].ticks.min = this.graphData.min;
      setTimeout(() => {
        this.isChartVisible = true;
      }, 500);
    }
  }
}
