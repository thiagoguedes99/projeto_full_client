import { TestBed, inject } from '@angular/core/testing';
import { HttpEndPointsService } from './http-end-points.service';

describe('HttpEndPointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpEndPointsService]
    });
  });

  it('should ...', inject([HttpEndPointsService], (service: HttpEndPointsService) => {
    expect(service).toBeTruthy();
  }));
});
