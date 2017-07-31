import { TestBed, async, inject } from '@angular/core/testing';

import { MathGuard } from './math.guard';

describe('MathGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathGuard]
    });
  });

  it('should ...', inject([MathGuard], (guard: MathGuard) => {
    expect(guard).toBeTruthy();
  }));
});
