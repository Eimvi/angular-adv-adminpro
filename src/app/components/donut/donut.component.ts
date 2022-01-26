import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string = 'No title'

  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  @Input('data') data: number[] = [ 40, 10, 80 ];

  @Input('colors') colors: string[] = ['#FEFCD3','#F9D3FE','#D3FBFE'];

  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [],
  };

  ngOnChanges(): void {

    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors,
          hoverBackgroundColor: ['#FEFCD3','#F9D3FE','#D3FBFE'],
          hoverBorderColor: ['#DAD681','#CA81DA','#81DAC7']
        }
      ]
    }
  }

}
