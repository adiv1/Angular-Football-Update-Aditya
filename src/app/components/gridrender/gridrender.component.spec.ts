import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridrenderComponent } from './gridrender.component';

describe('GridrenderComponent', () => {
  let component: GridrenderComponent;
  let fixture: ComponentFixture<GridrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridrenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
