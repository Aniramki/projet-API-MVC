import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeUserComponent } from './edite-user.component';

describe('EditeUserComponent', () => {
  let component: EditeUserComponent;
  let fixture: ComponentFixture<EditeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
