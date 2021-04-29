// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicComponent } from './graphic/graphic.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphicComponent,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
    GraphicComponent,
    PagesComponent,
    ProgressComponent,
  ],
})
export class PagesModule { }
