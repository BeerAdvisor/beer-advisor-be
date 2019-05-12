import { IncludeInInput } from '../graphql.schema.generated';
import { BeerListItemCreateManyWithoutBeerInput } from '../prisma/prisma.bindings.generated';
import { GraphQLResolveInfo } from 'graphql';
import { addFragmentToInfo } from 'graphql-binding';

export interface IncludedIn extends IncludeInInput {
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

export const addBarFragmentToInfo = (info: GraphQLResolveInfo): GraphQLResolveInfo => {
  const fragment = `fragment BarCoordinates on Beer
  {
  includedIn {
      beerList {
        bar {
          lat
          long
        }
      }
    }
    }`;
  return addFragmentToInfo(info, fragment);
};
