import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdminControlComponent } from './body-admin-control.component';

describe('BodyAdminControlComponent', () => {
  let component: BodyAdminControlComponent;
  let fixture: ComponentFixture<BodyAdminControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAdminControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAdminControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
