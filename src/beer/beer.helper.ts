import { IncludeInInput } from '../graphql.schema.generated';
import { BeerListItemCreateManyWithoutBeerInput } from '../prisma/prisma.bindings.generated';

export interface IncludedIn extends IncludeInInput{
  beerListId: string;
}

export const mapIncludedIn = (arr: IncludedIn[]): BeerListItemCreateManyWithoutBeerInput =>
  arr &&
  arr.length && {
    create: arr.map(item => ({
      price: item.price,
      beerList: { connect: { id: item.beerListId } },
    })),
  };
