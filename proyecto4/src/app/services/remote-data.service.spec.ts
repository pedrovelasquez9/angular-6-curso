import { TestBed } from '@angular/core/testing';

import { RemoteDataService } from './remote-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('RemoteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
	  imports:[ HttpClientModule],
	  providers:[RemoteDataService]
  }));

  it('should be created', () => {
    const service: RemoteDataService = TestBed.get(RemoteDataService);
    expect(service).toBeTruthy();
  });
});
