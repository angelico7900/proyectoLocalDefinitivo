import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySoporteComponent } from './body-soporte.component';

describe('BodySoporteComponent', () => {
  let component: BodySoporteComponent;
  let fixture: ComponentFixture<BodySoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
