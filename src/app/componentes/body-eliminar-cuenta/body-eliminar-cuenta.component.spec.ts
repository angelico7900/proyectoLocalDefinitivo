import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEliminarCuentaComponent } from './body-eliminar-cuenta.component';

describe('BodyEliminarCuentaComponent', () => {
  let component: BodyEliminarCuentaComponent;
  let fixture: ComponentFixture<BodyEliminarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyEliminarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEliminarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
