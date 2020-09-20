import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina9Component } from './pagina9.component';

describe('Pagina9Component', () => {
  let component: Pagina9Component;
  let fixture: ComponentFixture<Pagina9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
