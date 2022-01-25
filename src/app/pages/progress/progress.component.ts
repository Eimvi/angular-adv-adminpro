import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progressOne: number = 5;
  progressTwo: number = 5;

  get getPercentOne(){
    return `${ this.progressOne }%`
  }

  get getPercentTwo(){
    return `${ this.progressTwo }%`
  }

  changeValueOne(event: any){
    console.log(event)
    this.progressOne = event;
  }

  changeValueTwo(event: any){
    console.log(event)
    this.progressTwo = event;
  }
}
