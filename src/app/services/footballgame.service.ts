import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballgameService {
  private API = 'https://v3.football.api-sports.io';
  //private apiKey = '73effe53b514fe164eb475247efecbe2';
  private apiKey = '';
  private readonly currentYear: number = new Date().getFullYear(); // Get the current year
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
  ) {
    this.prevSelectedLeague = league;
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io/fixtures',
      'x-rapidapi-key': this.apiKey,
    });
    return this.http
      .get(
        `${this.API}/standings?league=${this.gameIds[league]}&season=${season}`,
        { headers }
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getTopList(teamId: Number, season: string = this.currentYear.toString()) {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io/fixtures',
      'x-rapidapi-key': this.apiKey,
    });

    return this.http
      .get(`${this.API}/fixtures?team=${teamId}&season=${season}&last=10`, {
        headers,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
