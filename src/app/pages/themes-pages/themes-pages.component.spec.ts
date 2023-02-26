import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesPagesComponent } from './themes-pages.component';

describe('ThemesPagesComponent', () => {
  let component: ThemesPagesComponent;
  let fixture: ComponentFixture<ThemesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
