import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donout',
  templateUrl: './donout.component.html',
  styles: [
  ]
})
export class DonoutComponent implements OnInit {

  @Input() title: string = 'Empty Title';
  // Doughnut
  @Input() labels: Label[] = [];
  @Input() data: MultiDataSet = [];
  @Input() chartType: ChartType = 'doughnut';
  @Input() colors: Color[] = [{
    backgroundColor: ['#6857E6', '#009FEE', '#F02059']
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
