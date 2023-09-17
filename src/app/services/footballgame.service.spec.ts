import { TestBed } from '@angular/core/testing';

import { FootballgameService } from './footballgame.service';

describe('FootballgameService', () => {
  let service: FootballgameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballgameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
