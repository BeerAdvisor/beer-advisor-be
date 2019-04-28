import { BeerListItemInput } from '../graphql.schema.generated';
import { BeerListCreateWithoutBarInput } from '../prisma/prisma.bindings.generated';

export const createBeerList = (beers: BeerListItemInput[]): BeerListCreateWithoutBarInput => {
  if (!beers || beers.length === 0) {
    return { items: null };
  }
  return { items: { create: beers.map(item => ({ price: item.price, beer: { connect: { id: item.beerId } } })) } };
};
