import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesBoardComponent } from './themes-board.component';

describe('ThemesBoardComponent', () => {
  let component: ThemesBoardComponent;
  let fixture: ComponentFixture<ThemesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
