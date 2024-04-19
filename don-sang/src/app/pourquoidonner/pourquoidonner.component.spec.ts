import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoidonnerComponent } from './pourquoidonner.component';

describe('PourquoidonnerComponent', () => {
  let component: PourquoidonnerComponent;
  let fixture: ComponentFixture<PourquoidonnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PourquoidonnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PourquoidonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
