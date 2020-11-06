import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsolicitanteComponent } from './listarsolicitante.component';

describe('ListarsolicitanteComponent', () => {
  let component: ListarsolicitanteComponent;
  let fixture: ComponentFixture<ListarsolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarsolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
