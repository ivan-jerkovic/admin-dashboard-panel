import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStatisticsCardComponent } from './car-statistics-card.component';

describe('CarStatisticsCardComponent', () => {
  let component: CarStatisticsCardComponent;
  let fixture: ComponentFixture<CarStatisticsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarStatisticsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarStatisticsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
