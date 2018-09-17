import { Component, OnInit } from "@angular/core";
import { CardParserService } from "../card-parser.service";
@Component({
  selector: "app-opening-hand-simulation",
  templateUrl: "./opening-hand-simulation.component.html",
  styleUrls: ["./opening-hand-simulation.component.css"]
})
export class OpeningHandSimulationComponent implements OnInit {
  constructor(private cardParser: CardParserService) {}

  ngOnInit() {}
}
