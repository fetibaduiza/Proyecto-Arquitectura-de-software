import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesDeTrabajoComponent } from './integrantes-de-trabajo.component';

describe('IntegrantesDeTrabajoComponent', () => {
  let component: IntegrantesDeTrabajoComponent;
  let fixture: ComponentFixture<IntegrantesDeTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantesDeTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantesDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
