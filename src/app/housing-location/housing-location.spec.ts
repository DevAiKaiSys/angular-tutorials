import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocation } from './housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { ActivatedRoute } from '@angular/router';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {}
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    component = fixture.componentInstance;

    const mockHousingLocation: HousingLocationInfo = {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      state: 'ST',
      photo: '/assets/example.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    };

    fixture.componentRef.setInput('housingLocation', mockHousingLocation);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
