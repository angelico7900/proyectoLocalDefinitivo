import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySoporteAdminComponent } from './body-soporte-admin.component';

describe('BodySoporteAdminComponent', () => {
  let component: BodySoporteAdminComponent;
  let fixture: ComponentFixture<BodySoporteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySoporteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySoporteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
