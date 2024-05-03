import { TestBed } from '@angular/core/testing';

import { PlantPlusFormService } from './plant-plus-form.service';

describe('PlantPlusFormService', () => {
  let service: PlantPlusFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantPlusFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
