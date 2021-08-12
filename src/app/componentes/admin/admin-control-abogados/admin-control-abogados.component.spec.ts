import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlAbogadosComponent } from './admin-control-abogados.component';

describe('AdminControlAbogadosComponent', () => {
  let component: AdminControlAbogadosComponent;
  let fixture: ComponentFixture<AdminControlAbogadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminControlAbogadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlAbogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
