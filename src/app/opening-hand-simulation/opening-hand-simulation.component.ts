import { Component, OnInit } from "@angular/core";
import { CardParserService } from "../card-parser.service";
import { Router } from "@angular/router";

function shuffle(array) {
  //Fisher-Yates shuffle
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

class HandRecord {
  hand: string[];
  message: string;
  constructor(_hand: string[], _message: string) {
    this.hand = _hand;
    this.message = _message;
  }
}

@Component({
  selector: "app-opening-hand-simulation",
  templateUrl: "./opening-hand-simulation.component.html",
  styleUrls: ["./opening-hand-simulation.component.css"]
})
export class OpeningHandSimulationComponent implements OnInit {
  constructor(private cardParser: CardParserService, private router: Router) {}
  cards: string[] = [];
  hand: string[] = [];
  history: HandRecord[] = [];
  scoreboardByCategory: { [message: string]: number } = {};
  scoreboardByCategoryArray = [];

  scoreboardByCard: { [cardname: string]: { [message: string]: number } } = {};
  scoreboardByCardArray = [];

  handCategories = [{ name: "Good" }, { name: "Bad" }];

  ngOnInit() {
    try {
      this.cards = this.cardParser
        .parseDecklist()
        .slice(0, this.cardParser.cards.length);
    } catch (err) {
      this.router.navigate(["/"]);
    }
    this.newHand();
  }

  newHand() {
    shuffle(this.cards);
    this.hand = this.cards.slice(0, 7);
    this.hand.sort();
  }

  recordHand(hand: string[], message: string) {
    // global stats
    this.history.unshift(new HandRecord(hand, message));
    if (this.scoreboardByCategory[message] == undefined) {
      this.scoreboardByCategory[message] = 0;
    }
    this.scoreboardByCategory[message] += 1;
    var scores = Object.keys(this.scoreboardByCategory).map(k => {
      return [this.scoreboardByCategory[k], k];
    });
    scores.sort((a: number[], b: number[]) => {
      return a[0] - b[0];
    });
    scores.reverse();
    this.scoreboardByCategoryArray = scores;

    // card by card scores
    hand.forEach((cardname: string, index: number) => {
      if (this.scoreboardByCard[cardname] === undefined) {
        this.scoreboardByCard[cardname] = {};
      }
      if (this.scoreboardByCard[cardname][message] === undefined) {
        this.scoreboardByCard[cardname][message] = 0;
      }
      this.scoreboardByCard[cardname][message] += 1;

      this.scoreboardByCardArray = Object.keys(this.scoreboardByCard).map(
        (name: string) => {
          var categoryCounts = Object.keys(this.scoreboardByCard[name]).map(
            (msg: string) => {
              return [this.scoreboardByCard[name][msg], msg];
            }
          );
          categoryCounts.sort((a: number[], b: number[]) => {
            return b[0] - a[0];
          });
          return [name, categoryCounts];
        }
      );
      this.scoreboardByCardArray.sort((a: any[], b: any[]) => {
        return +(a[0] > b[0]);
      });
    });

    // new hand
    this.newHand();
  }
}
