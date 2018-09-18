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

  parse():void {
    this.cards = this.cardParser.parseDecklist();
    console.log('parsed');
    console.log(this.rawListText);

  }

  clearDecklist():void{
    this.cardParser.rawCardText = '';
    this.parse();
  }

  ngOnInit() {
    this.parse();
  }
}
