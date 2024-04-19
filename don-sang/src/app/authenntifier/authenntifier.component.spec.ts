import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenntifierComponent } from './authenntifier.component';

describe('AuthenntifierComponent', () => {
  let component: AuthenntifierComponent;
  let fixture: ComponentFixture<AuthenntifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenntifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenntifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
