import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningHandSimulationComponent } from './opening-hand-simulation.component';

describe('OpeningHandSimulationComponent', () => {
  let component: OpeningHandSimulationComponent;
  let fixture: ComponentFixture<OpeningHandSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningHandSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningHandSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
