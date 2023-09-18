import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { responseApiObj } from '../models/league';
import { responseApiFixturesObj } from '../models/fixtures';

@Injectable({
  providedIn: 'root',
})
export class FootballgameService {
  private API = 'https://v3.football.api-sports.io';
  private readonly currentYear: number = new Date().getFullYear();
  private readonly gameIds: { [league: string]: number } = {
    england: 39,
    spain: 107,
    germany: 78,
    itlay: 71,
    france: 61,
  };
  public prevSelectedLeague = '';
  constructor(private http: HttpClient) {}

  getTeamStandings(
    league: string,
    season: string = this.currentYear.toString()
  ): Observable<responseApiObj> {
    this.prevSelectedLeague = league;

    return this.http.get<responseApiObj>(
      `${this.API}/standings?league=${this.gameIds[league]}&season=${season}`
    );
  }

  getTopList(
    teamId: Number,
    season: string = this.currentYear.toString()
  ): Observable<responseApiFixturesObj> {
    return this.http.get<responseApiFixturesObj>(
      `${this.API}/fixtures?team=${teamId}&season=${season}&last=10`
    );
  }
}
