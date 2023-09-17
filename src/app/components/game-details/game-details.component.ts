import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { gamedetailsGridColumns } from './game-details';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballgameService } from 'src/app/services/footballgame.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  public columnDefs: ColDef[] = gamedetailsGridColumns;
  public rowData = [];
  public teamId: number | undefined;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public footBallAPI: FootballgameService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamId = +params['teamId'];
      this.getTeamFixtures(this.teamId);
    });
  }
  getTeamFixtures(teamId: Number) {
    this.footBallAPI.getTopList(teamId).subscribe((data: any) => {
      this.rowData = data.response;
      console.log(data);
    });
  }
}
