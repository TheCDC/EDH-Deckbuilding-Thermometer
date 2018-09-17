import { TestBed } from '@angular/core/testing';

import { CardParserService } from './card-parser.service';

describe('CardParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardParserService = TestBed.get(CardParserService);
    expect(service).toBeTruthy();
  });
});
