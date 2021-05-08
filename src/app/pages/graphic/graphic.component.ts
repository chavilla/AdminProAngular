import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: [
  ]
})
export class GraphicComponent implements OnInit {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public data1: number[] = [350, 450, 100];

  constructor() { }

  ngOnInit(): void {
  }
}
