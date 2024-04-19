import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExdonComponent } from './exdon.component';

describe('ExdonComponent', () => {
  let component: ExdonComponent;
  let fixture: ComponentFixture<ExdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
