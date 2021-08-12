import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteAdminComponent } from './soporte-admin.component';

describe('SoporteAdminComponent', () => {
  let component: SoporteAdminComponent;
  let fixture: ComponentFixture<SoporteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
