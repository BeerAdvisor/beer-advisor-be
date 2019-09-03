import { BeerListItemInput } from '../graphql.schema.generated';
import { BeerListCreateWithoutBarInput } from '../prisma/prisma.bindings.generated';

export const createBeerList = (beers: BeerListItemInput[]): BeerListCreateWithoutBarInput => {
  if (!beers || beers.length === 0) {
    return { items: null };
  }
  return { items: { create: beers.map(item => ({ price: item.price, beer: { connect: { id: item.beerId } } })) } };
};

export const normalizeTime = (date: Date) => {
  const normalizedDateTime = new Date();
  normalizedDateTime.setTime(0);
  normalizedDateTime.setUTCHours(new Date(date).getUTCHours());
  normalizedDateTime.setUTCMinutes(new Date(date).getUTCMinutes());
  return normalizedDateTime;
};

export const mapFoursquareVenue = ({ id, name, location: { address = '', lat, lng } }) => ({
  name,
  address,
  foursquareId: id,
  lat: lat.toString(),
  long: lng.toString(),
});
