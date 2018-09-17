import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { OpeningHandSimulationComponent } from '../opening-hand-simulation/opening-hand-simulation.component';

const appRoutes: Routes = [
  {path:'/simulate', component: OpeningHandSimulationComponent},
  
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
