import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContactarComponent } from './body-contactar.component';

describe('BodyContactarComponent', () => {
  let component: BodyContactarComponent;
  let fixture: ComponentFixture<BodyContactarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContactarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContactarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
