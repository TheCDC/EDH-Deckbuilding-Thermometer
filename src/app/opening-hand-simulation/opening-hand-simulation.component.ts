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
  scoreboard: { [message: string]: number } = {};
  scoreboardArray = [];

  handCategories = [{ name: "Good" }, { name: "Bad" }];

  ngOnInit() {
    try {
      this.cards = this.cardParser.cards.slice(0, this.cardParser.cards.length);
    } catch (err) {
      this.router.navigate(["/"]);
    }
    this.newHand();
  }

  newHand() {
    shuffle(this.cards);
    this.hand = this.cards.slice(0, 7);
  }

  recordHand(hand: string[], message: string) {
    this.history.unshift(new HandRecord(hand, message));
    if (this.scoreboard[message] == undefined) {
      this.scoreboard[message] = 0;
    }
    console.log(this.scoreboard);
    this.scoreboard[message] += 1;
    let scores = Object.keys(this.scoreboard).map(k => {
      return [this.scoreboard[k], k];
    });
    scores.sort((a: number[], b: number[]) => {
      return a[0] - b[0];
    });
    scores.reverse();
    this.scoreboardArray = scores;
    this.newHand();
  }
}
