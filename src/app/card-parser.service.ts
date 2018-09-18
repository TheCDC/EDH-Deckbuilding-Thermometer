import { Injectable } from "@angular/core";
import { ValueTransformer } from "../../node_modules/@angular/compiler/src/util";

function hasNumber(myString) {
  return /\d/.test(myString);
}

@Injectable({
  providedIn: "root"
})
export class CardParserService {
  rawCardText: string = '';
  cards: string[];
  constructor() {}

  consumeCardText(s: string){
    this.rawCardText = s;
  }

  parseDecklist() {
    var cardLines = this.rawCardText
      .trim()
      .split("\n")
      .filter(x => {
        return x;
      });
    this.cards = [];
    cardLines.map(line => {
      var tokens = line.split(" ");
      var hasNum = false;
      var numCopies = 1;

      if (hasNumber(tokens[0])) {
        numCopies = parseInt(tokens[0]);
        var arr = Array(numCopies).fill(
          tokens.slice(1, tokens.length).join(" ")
        );
        this.cards.push(...arr);
      }
    });
    this.cards.sort();

    return this.cards;
  }
}
