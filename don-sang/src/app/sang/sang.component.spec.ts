import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangComponent } from './sang.component';

describe('SangComponent', () => {
  let component: SangComponent;
  let fixture: ComponentFixture<SangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
