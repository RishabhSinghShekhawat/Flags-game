import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsgameComponent } from './flagsgame.component';

describe('FlagsgameComponent', () => {
  let component: FlagsgameComponent;
  let fixture: ComponentFixture<FlagsgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagsgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
