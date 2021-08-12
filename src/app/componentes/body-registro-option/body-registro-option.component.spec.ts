import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRegistroOptionComponent } from './body-registro-option.component';

describe('BodyRegistroOptionComponent', () => {
  let component: BodyRegistroOptionComponent;
  let fixture: ComponentFixture<BodyRegistroOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyRegistroOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRegistroOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
