import { TestBed } from '@angular/core/testing';

import { CoingeckoConsumerService } from './coingecko-consumer.service';

describe('CoingeckoConsumerService', () => {
  let service: CoingeckoConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoingeckoConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
