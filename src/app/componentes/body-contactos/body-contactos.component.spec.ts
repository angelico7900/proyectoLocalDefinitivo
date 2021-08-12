import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContactosComponent } from './body-contactos.component';

describe('BodyContactosComponent', () => {
  let component: BodyContactosComponent;
  let fixture: ComponentFixture<BodyContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
