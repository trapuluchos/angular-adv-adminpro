import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {

  @Input() title: string = 'No title';
  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'No option', 'No option', 'No option' ];
  
  @Input('data') dataCharts = [ { data: [350, 450, 100] } ];

  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: this.dataCharts },
  //     // { data: [ 50, 150, 120 ] },
  //     // { data: [ 250, 130, 70 ] }
  //   ]
  // };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
