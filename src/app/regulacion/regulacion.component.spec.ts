import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulacionComponent } from './regulacion.component';

describe('RegulacionComponent', () => {
  let component: RegulacionComponent;
  let fixture: ComponentFixture<RegulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
