import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdminControlAbogadosComponent } from './body-admin-control-abogados.component';

describe('BodyAdminControlAbogadosComponent', () => {
  let component: BodyAdminControlAbogadosComponent;
  let fixture: ComponentFixture<BodyAdminControlAbogadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAdminControlAbogadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAdminControlAbogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
