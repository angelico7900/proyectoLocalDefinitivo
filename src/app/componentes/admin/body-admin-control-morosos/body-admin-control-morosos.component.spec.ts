import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdminControlMorososComponent } from './body-admin-control-morosos.component';

describe('BodyAdminControlMorososComponent', () => {
  let component: BodyAdminControlMorososComponent;
  let fixture: ComponentFixture<BodyAdminControlMorososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAdminControlMorososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAdminControlMorososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
