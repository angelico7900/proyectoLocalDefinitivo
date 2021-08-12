import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdminControlUsuariosComponent } from './body-admin-control-usuarios.component';

describe('BodyAdminControlUsuariosComponent', () => {
  let component: BodyAdminControlUsuariosComponent;
  let fixture: ComponentFixture<BodyAdminControlUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAdminControlUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAdminControlUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
