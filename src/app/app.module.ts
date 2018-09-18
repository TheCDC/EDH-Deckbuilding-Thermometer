import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing/app-routing.module";

import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { OpeningHandSimulationComponent } from "./opening-hand-simulation/opening-hand-simulation.component";
import { CardDisplayComponent } from "./card-display/card-display.component";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    OpeningHandSimulationComponent,
    CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
