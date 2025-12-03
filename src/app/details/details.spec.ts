import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details } from './details';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;

  beforeEach(async () => {
    const mockHousingService = {
      getHousingLocationById: (id: number) => {
        const mockLocation: HousingLocationInfo = {
          id: id,
          name: 'Test House',
          city: 'Test City',
          state: 'TS',
          photo: '/assets/example.jpg',
          availableUnits: 10,
          wifi: true,
          laundry: false
        };
        return Promise.resolve(mockLocation);
      },
      submitApplication: (firstName: string, lastName: string, email: string) => {
        console.log(`Application submitted for ${firstName}`);
      }
    };

    await TestBed.configureTestingModule({
      imports: [Details],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '1' }
            }
          }
        }, {
          provide: HousingService,
          useValue: mockHousingService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;

    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
