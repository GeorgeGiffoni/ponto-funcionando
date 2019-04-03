import { TestBed } from '@angular/core/testing';

import { MeupontoService } from './meuponto.service';

describe('MeupontoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeupontoService = TestBed.get(MeupontoService);
    expect(service).toBeTruthy();
  });
});
