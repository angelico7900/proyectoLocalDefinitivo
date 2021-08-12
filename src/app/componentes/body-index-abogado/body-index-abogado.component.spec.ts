import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIndexAbogadoComponent } from './body-index-abogado.component';

describe('BodyIndexAbogadoComponent', () => {
  let component: BodyIndexAbogadoComponent;
  let fixture: ComponentFixture<BodyIndexAbogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyIndexAbogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIndexAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
