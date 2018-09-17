import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OpeningHandSimulationComponent } from './opening-hand-simulation/opening-hand-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    OpeningHandSimulationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
