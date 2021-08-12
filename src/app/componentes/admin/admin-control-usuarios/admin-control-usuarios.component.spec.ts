import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlUsuariosComponent } from './admin-control-usuarios.component';

describe('AdminControlUsuariosComponent', () => {
  let component: AdminControlUsuariosComponent;
  let fixture: ComponentFixture<AdminControlUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminControlUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
