import { IncludeInInput } from '../graphql.schema.generated';
import { BeerListItemCreateManyWithoutBeerInput } from '../prisma/prisma.bindings.generated';

export const mapIncludedIn = (arr: IncludeInInput[], change = false): BeerListItemCreateManyWithoutBeerInput =>
  arr &&
  arr.length && {
    create: arr.map(item => ({
      price: item.price,
      beerList: change ? { create: null } : { connect: { id: item.barId } },
    })),
  };
