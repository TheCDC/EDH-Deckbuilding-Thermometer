import { Component, OnInit, Input } from "@angular/core";
import { Headers, Http } from "@angular/http";

@Component({
  selector: "app-card-display",
  templateUrl: "./card-display.component.html",
  styleUrls: ["./card-display.component.css"]
})
export class CardDisplayComponent implements OnInit {
  @Input()
  cardname: string;
  cardJSON;
  objstr;
  loading: boolean = true;
  constructor(private http: Http) {}

  ngOnInit() {
    this.http
      .get("https://api.scryfall.com/cards/named?fuzzy=" + this.cardname)
      .toPromise()
      .then(response => {
        this.cardJSON = response.json();
        this.objstr = JSON.stringify(this.cardJSON);
        this.loading = false;
      });
  }
}
