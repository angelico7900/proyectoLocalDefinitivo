import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlMorososComponent } from './admin-control-morosos.component';

describe('AdminControlMorososComponent', () => {
  let component: AdminControlMorososComponent;
  let fixture: ComponentFixture<AdminControlMorososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminControlMorososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlMorososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
