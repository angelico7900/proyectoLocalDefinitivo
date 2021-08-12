import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroProfesionalComponent } from './form-registro-profesional.component';

describe('FormRegistroProfesionalComponent', () => {
  let component: FormRegistroProfesionalComponent;
  let fixture: ComponentFixture<FormRegistroProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistroProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
