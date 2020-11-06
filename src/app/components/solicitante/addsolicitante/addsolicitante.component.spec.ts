import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsolicitanteComponent } from './addsolicitante.component';

describe('AddsolicitanteComponent', () => {
  let component: AddsolicitanteComponent;
  let fixture: ComponentFixture<AddsolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
