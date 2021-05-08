import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  @Input() progressValue: number = 40;
  // tslint:disable-next-line: no-inferrable-types
  @Input() btnClass: string;
  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  setValue(value: number): void {

    if (this.progressValue >= 100 && value >= 0) {
      this.changeValue.emit(100);
      this.progressValue = 100;
      return;
    }
    else if (this.progressValue <= 0 && value <= 0) {
      this.changeValue.emit(0);
      this.progressValue = 0;
      return;
    }

    this.progressValue = this.progressValue + value;
    this.changeValue.emit(this.progressValue);
  }

  onChange(valueChanged: number): void {

    if (valueChanged >= 100) {
      this.progressValue = 100;
    } else if (valueChanged >= 0) {
      this.progressValue = 0;
    } else {
      this.progressValue = valueChanged;
    }

    this.changeValue.emit(this.progressValue);
  }

}
