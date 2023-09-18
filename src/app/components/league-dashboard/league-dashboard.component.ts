import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FootballgameService } from 'src/app/services/footballgame.service';
import { navtabData } from './dashboard';
import { gridColumns } from './grid-columns';
import {
  LeagueData,
  StandingsData,
  responseApiObj,
} from 'src/app/models/league';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-league-dashboard',
  templateUrl: './league-dashboard.component.html',
  styleUrls: ['./league-dashboard.component.css'],
})
export class LeagueDashboardComponent {
  background: ThemePalette = undefined;
  navlinks = navtabData;
  activeLink = this.navlinks[0];
  public columnDefs: ColDef[] = gridColumns;
  public rowData: StandingsData[] = [];
  leagues: LeagueData[] = [];
  isVisible: boolean = false;
  allData: any = [];
  constructor(private footBallApi: FootballgameService) {}

  ngOnInit(): void {
    const leagueKey = this.footBallApi.prevSelectedLeague
      ? this.footBallApi.prevSelectedLeague
      : 'england';
    this.getStandings(leagueKey);
    this.navlinks.forEach((element) => {
      console.log(element);
      if (element.url == this.footBallApi.prevSelectedLeague) {
        this.activeLink = element;
      }
    });
  }

  getStandings(country: string) {
    this.footBallApi
      .getTeamStandings(country)
      .subscribe((data: responseApiObj) => {
        if (data.response.length) {
          this.allData = data.response[0].league.standings;
          this.rowData = this.allData[0];
        }
        this.allData = data.response[0];
        this.isVisible = this.rowData.length ? true : false;
      });
  }
}
