import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  @Input() progress:number = 10;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }
  changeProgress(value: number){
    if(this.progress >= 100 && value >= 0){
      this.valueChanged.emit(100);
      this.progress = 100;
    }

    if(this.progress <= 0 && value <= 0){
      this.valueChanged.emit(0);
      this.progress = 0;
    }

    this.progress += value;
    this.valueChanged.emit(this.progress);
  }

  onChange( newValue: number){
    if(newValue >= 100){
      this.progress = 100;
    }else if(newValue <= 0){
      this.progress = 0;
    }else{
      this.progress = newValue;
    }

    this.valueChanged.emit(newValue);
  }

}
