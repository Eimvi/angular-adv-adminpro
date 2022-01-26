import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: [
  ]
})
export class GraphicComponent {

  public labels1: string[] = [ 'Sabritas', 'Refrescos', 'Dulces' ];
  public data1: number[] = [ 10, 15, 40 ];
  public colors1: string[] = ['#FFC300','#BC3BF4','#3B3BF4'];

}
