import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardParserService {

  constructor() { }

  parseDecklist(cards: string) {
    return cards.trim().split('\n').filter((x) => {return x});
  }
}
