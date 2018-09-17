import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { OpeningHandSimulationComponent } from "../opening-hand-simulation/opening-hand-simulation.component";
import { MainMenuComponent } from "../main-menu/main-menu.component";

const appRoutes: Routes = [
  { path: "simulate", component: OpeningHandSimulationComponent },
  { path: "", component: MainMenuComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
