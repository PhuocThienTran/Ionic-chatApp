import { TestBed } from '@angular/core/testing';

import { ChatAppService } from './chat-app.service';

describe('ChatAppService', () => {
  let service: ChatAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
