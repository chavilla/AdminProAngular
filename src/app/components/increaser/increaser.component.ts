import { Component } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent  {

  progress: number;

  constructor() {
    this.progress = 15;
  }

  setValue(value: number): void {

    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      return;
    }
    else if (this.progress <= 0 && value <= 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
  }

}
