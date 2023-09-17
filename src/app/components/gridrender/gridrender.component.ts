import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-gridrender',
  templateUrl: './gridrender.component.html',
  styleUrls: ['./gridrender.component.css'],
})
export class GridrenderComponent {
  public cellValue!: any;
  refresh(params: ICellRendererParams) {}

  agInit(params: ICellRendererParams) {
    this.cellValue = params.data;
  }
}
