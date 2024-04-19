import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExsangComponent } from './exsang.component';

describe('ExsangComponent', () => {
  let component: ExsangComponent;
  let fixture: ComponentFixture<ExsangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExsangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExsangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
