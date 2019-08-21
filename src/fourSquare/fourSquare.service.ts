import { ErrorService } from '../error/error.service';
import { Injectable } from '@nestjs/common';
import { FindBarInput } from '../graphql.schema.generated';
import { mapFoursquareVenues } from './fourSquare.helper';
import {
  FOURSQUARE_API_URL,
  FOURSQUARE_LIMIT,
  FOURSQUARE_CATEGORIES_IDS,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
  FOURSQUARE_DEFAULT_LAT_LON,
  FOURSQUARE_VERSION,
  FOURSQUARE_INTENT,
  FOURSQUARE_RADIUS,
} from './fourSquare.constants';

@Injectable()
export class FourSquareService {
  constructor(private readonly errorService: ErrorService) {}

  async findBars({ distance, name }: FindBarInput): Promise<any[]> {
    // TODO: find user location by IP if no provided
    const query = name ? `query=${name}` : '';
    const latLon = distance ? `ll=${distance.lat},${distance.long}` : FOURSQUARE_DEFAULT_LAT_LON;
    const result = await fetch(
      // tslint:disable-next-line:max-line-length
      `${FOURSQUARE_API_URL}/search?${latLon}&${query}&${FOURSQUARE_LIMIT}&${FOURSQUARE_CATEGORIES_IDS}&${FOURSQUARE_CLIENT_ID}&${FOURSQUARE_CLIENT_SECRET}&${FOURSQUARE_RADIUS}&${FOURSQUARE_INTENT}&${FOURSQUARE_VERSION}`,
    ).then(res => res.json());

    return mapFoursquareVenues(result.response.venues);
  }
}
