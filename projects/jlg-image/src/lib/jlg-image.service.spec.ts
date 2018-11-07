import { TestBed } from '@angular/core/testing';

import { JlgImageService } from './jlg-image.service';

describe('JlgImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JlgImageService = TestBed.get(JlgImageService);
    expect(service).toBeTruthy();
  });
});
