import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyResgistroProfesionalComponent } from './body-resgistro-profesional.component';

describe('BodyResgistroProfesionalComponent', () => {
  let component: BodyResgistroProfesionalComponent;
  let fixture: ComponentFixture<BodyResgistroProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyResgistroProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyResgistroProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
