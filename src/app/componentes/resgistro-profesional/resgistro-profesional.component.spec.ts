import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroProfesionalComponent } from './resgistro-profesional.component';

describe('ResgistroProfesionalComponent', () => {
  let component: ResgistroProfesionalComponent;
  let fixture: ComponentFixture<ResgistroProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistroProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistroProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
