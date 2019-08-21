import { map } from 'ramda';

export const mapFoursquareVenues = map(({ id, name, location: { address = '', lat, lng } }) => ({
  id,
  name,
  address,
  lat,
  long: lng,
  photos: [''],
  beerList: {
    id: '12',
    bar: null,
    items: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
}));
