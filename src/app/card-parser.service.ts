import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CardParserService {
  cards: string[];
  constructor() {}

  parseDecklist(cards: string) {
    this.cards = cards
      .trim()
      .split("\n")
      .filter(x => {
        return x;
      });
    return this.cards;
  }
}
