/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlickrFeedService } from './flickrFeed.service';

describe('Service: FlickrFeed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrFeedService]
    });
  });

  it('should ...', inject([FlickrFeedService], (service: FlickrFeedService) => {
    expect(service).toBeTruthy();
  }));
});
