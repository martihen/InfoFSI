import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraOpinionComponent } from './nuestra-opinion.component';

describe('NuestraOpinionComponent', () => {
  let component: NuestraOpinionComponent;
  let fixture: ComponentFixture<NuestraOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestraOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
