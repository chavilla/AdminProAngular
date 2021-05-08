import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DonoutComponent } from './donout/donout.component';

@NgModule({
  declarations: [IncreaserComponent, DonoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    IncreaserComponent,
    DonoutComponent,
  ]
})
export class ComponentsModule { }
