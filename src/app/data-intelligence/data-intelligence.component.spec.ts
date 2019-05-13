import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIntelligenceComponent } from './data-intelligence.component';

describe('DataIntelligenceComponent', () => {
  let component: DataIntelligenceComponent;
  let fixture: ComponentFixture<DataIntelligenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataIntelligenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
