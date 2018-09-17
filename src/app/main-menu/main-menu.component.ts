import { Component, OnInit } from "@angular/core";
import { CardParserService } from "../card-parser.service";
@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.css"]
})
export class MainMenuComponent implements OnInit {
  cards: string[] = [];
  rawListText: string = "";
  constructor(private cardParser: CardParserService) {}

  parse() {
    this.cards = this.cardParser.parseDecklist(this.rawListText);
  }

  ngOnInit() {
    this.parse();
  }
}
