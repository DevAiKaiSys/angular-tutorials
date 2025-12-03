import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationInfo } from '../housinglocation';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    const mockHousingLocations: HousingLocationInfo[] = [
      {
        id: 1,
        name: 'Test Home 1',
        city: 'Test City',
        state: 'ST',
        photo: '/assets/example.jpg',
        availableUnits: 10,
        wifi: true,
        laundry: true
      }
    ];

    const mockHousingService = {
      getAllHousingLocations: () => {
        return Promise.resolve(mockHousingLocations);
      }
    };

    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {}
            }
          }
        },
        {
          provide: HousingService,
          useValue: mockHousingService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;

    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load housing locations on init', () => {
    expect(component.housingLocationList.length).toBe(1);
    expect(component.filteredLocationList.length).toBe(1);
    expect(component.housingLocationList[0].name).toBe('Test Home 1');
  });
});
