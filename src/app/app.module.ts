import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AppComponent } from "./app.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { OpeningHandSimulationComponent } from "./opening-hand-simulation/opening-hand-simulation.component";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    OpeningHandSimulationComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
