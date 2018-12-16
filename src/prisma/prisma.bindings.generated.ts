import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    bars: <T = Bar[]>(args: { where?: BarWhereInput, orderBy?: BarOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beers: <T = Beer[]>(args: { where?: BeerWhereInput, orderBy?: BeerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerRatings: <T = BeerRating[]>(args: { where?: BeerRatingWhereInput, orderBy?: BeerRatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerComments: <T = BeerComment[]>(args: { where?: BeerCommentWhereInput, orderBy?: BeerCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweries: <T = Brewery[]>(args: { where?: BreweryWhereInput, orderBy?: BreweryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweryComments: <T = BreweryComment[]>(args: { where?: BreweryCommentWhereInput, orderBy?: BreweryCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bar: <T = Bar>(args: { where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beer: <T = Beer>(args: { where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerRating: <T = BeerRating>(args: { where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerComment: <T = BeerComment>(args: { where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    brewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    breweryComment: <T = BreweryComment>(args: { where: BreweryCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barsConnection: <T = BarConnection>(args: { where?: BarWhereInput, orderBy?: BarOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beersConnection: <T = BeerConnection>(args: { where?: BeerWhereInput, orderBy?: BeerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerRatingsConnection: <T = BeerRatingConnection>(args: { where?: BeerRatingWhereInput, orderBy?: BeerRatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerCommentsConnection: <T = BeerCommentConnection>(args: { where?: BeerCommentWhereInput, orderBy?: BeerCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweriesConnection: <T = BreweryConnection>(args: { where?: BreweryWhereInput, orderBy?: BreweryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweryCommentsConnection: <T = BreweryCommentConnection>(args: { where?: BreweryCommentWhereInput, orderBy?: BreweryCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createBar: <T = Bar>(args: { data: BarCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeer: <T = Beer>(args: { data: BeerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerRating: <T = BeerRating>(args: { data: BeerRatingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerComment: <T = BeerComment>(args: { data: BeerCommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBrewery: <T = Brewery>(args: { data: BreweryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBreweryComment: <T = BreweryComment>(args: { data: BreweryCommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBar: <T = Bar>(args: { data: BarUpdateInput, where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeer: <T = Beer>(args: { data: BeerUpdateInput, where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerRating: <T = BeerRating>(args: { data: BeerRatingUpdateInput, where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerComment: <T = BeerComment>(args: { data: BeerCommentUpdateInput, where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBrewery: <T = Brewery>(args: { data: BreweryUpdateInput, where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBreweryComment: <T = BreweryComment>(args: { data: BreweryCommentUpdateInput, where: BreweryCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBar: <T = Bar>(args: { where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeer: <T = Beer>(args: { where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerRating: <T = BeerRating>(args: { where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerComment: <T = BeerComment>(args: { where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBrewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBreweryComment: <T = BreweryComment>(args: { where: BreweryCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertBar: <T = Bar>(args: { where: BarWhereUniqueInput, create: BarCreateInput, update: BarUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeer: <T = Beer>(args: { where: BeerWhereUniqueInput, create: BeerCreateInput, update: BeerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerRating: <T = BeerRating>(args: { where: BeerRatingWhereUniqueInput, create: BeerRatingCreateInput, update: BeerRatingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerComment: <T = BeerComment>(args: { where: BeerCommentWhereUniqueInput, create: BeerCommentCreateInput, update: BeerCommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBrewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput, create: BreweryCreateInput, update: BreweryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBreweryComment: <T = BreweryComment>(args: { where: BreweryCommentWhereUniqueInput, create: BreweryCommentCreateInput, update: BreweryCommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBars: <T = BatchPayload>(args: { data: BarUpdateManyMutationInput, where?: BarWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeers: <T = BatchPayload>(args: { data: BeerUpdateManyMutationInput, where?: BeerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerRatings: <T = BatchPayload>(args: { data: BeerRatingUpdateManyMutationInput, where?: BeerRatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerComments: <T = BatchPayload>(args: { data: BeerCommentUpdateManyMutationInput, where?: BeerCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBreweries: <T = BatchPayload>(args: { data: BreweryUpdateManyMutationInput, where?: BreweryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBreweryComments: <T = BatchPayload>(args: { data: BreweryCommentUpdateManyMutationInput, where?: BreweryCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBars: <T = BatchPayload>(args: { where?: BarWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeers: <T = BatchPayload>(args: { where?: BeerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerRatings: <T = BatchPayload>(args: { where?: BeerRatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerComments: <T = BatchPayload>(args: { where?: BeerCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBreweries: <T = BatchPayload>(args: { where?: BreweryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBreweryComments: <T = BatchPayload>(args: { where?: BreweryCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    bar: <T = BarSubscriptionPayload>(args: { where?: BarSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beer: <T = BeerSubscriptionPayload>(args: { where?: BeerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerRating: <T = BeerRatingSubscriptionPayload>(args: { where?: BeerRatingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerComment: <T = BeerCommentSubscriptionPayload>(args: { where?: BeerCommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    brewery: <T = BrewerySubscriptionPayload>(args: { where?: BrewerySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    breweryComment: <T = BreweryCommentSubscriptionPayload>(args: { where?: BreweryCommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Bar: (where?: BarWhereInput) => Promise<boolean>
  Beer: (where?: BeerWhereInput) => Promise<boolean>
  BeerRating: (where?: BeerRatingWhereInput) => Promise<boolean>
  BeerComment: (where?: BeerCommentWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Brewery: (where?: BreweryWhereInput) => Promise<boolean>
  BreweryComment: (where?: BreweryCommentWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBar {
  count: Int!
}

type AggregateBeer {
  count: Int!
}

type AggregateBeerComment {
  count: Int!
}

type AggregateBeerRating {
  count: Int!
}

type AggregateBrewery {
  count: Int!
}

type AggregateBreweryComment {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Bar implements Node {
  id: ID!
  name: String!
  address: String!
  lat: String!
  long: String!
  openTime: DateTime
  closeTime: DateTime
  photos: [String!]!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
}

"""A connection to a list of items."""
type BarConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BarEdge]!
  aggregate: AggregateBar!
}

input BarCreateInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
}

input BarCreateManyWithoutBeersInput {
  create: [BarCreateWithoutBeersInput!]
  connect: [BarWhereUniqueInput!]
}

input BarCreatephotosInput {
  set: [String!]
}

input BarCreateWithoutBeersInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
}

"""An edge in a connection."""
type BarEdge {
  """The item at the end of the edge."""
  node: Bar!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BarOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  lat_ASC
  lat_DESC
  long_ASC
  long_DESC
  openTime_ASC
  openTime_DESC
  closeTime_ASC
  closeTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BarPreviousValues {
  id: ID!
  name: String!
  address: String!
  lat: String!
  long: String!
  openTime: DateTime
  closeTime: DateTime
  photos: [String!]!
}

input BarScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BarScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  lat: String

  """All values that are not equal to given value."""
  lat_not: String

  """All values that are contained in given list."""
  lat_in: [String!]

  """All values that are not contained in given list."""
  lat_not_in: [String!]

  """All values less than the given value."""
  lat_lt: String

  """All values less than or equal the given value."""
  lat_lte: String

  """All values greater than the given value."""
  lat_gt: String

  """All values greater than or equal the given value."""
  lat_gte: String

  """All values containing the given string."""
  lat_contains: String

  """All values not containing the given string."""
  lat_not_contains: String

  """All values starting with the given string."""
  lat_starts_with: String

  """All values not starting with the given string."""
  lat_not_starts_with: String

  """All values ending with the given string."""
  lat_ends_with: String

  """All values not ending with the given string."""
  lat_not_ends_with: String
  long: String

  """All values that are not equal to given value."""
  long_not: String

  """All values that are contained in given list."""
  long_in: [String!]

  """All values that are not contained in given list."""
  long_not_in: [String!]

  """All values less than the given value."""
  long_lt: String

  """All values less than or equal the given value."""
  long_lte: String

  """All values greater than the given value."""
  long_gt: String

  """All values greater than or equal the given value."""
  long_gte: String

  """All values containing the given string."""
  long_contains: String

  """All values not containing the given string."""
  long_not_contains: String

  """All values starting with the given string."""
  long_starts_with: String

  """All values not starting with the given string."""
  long_not_starts_with: String

  """All values ending with the given string."""
  long_ends_with: String

  """All values not ending with the given string."""
  long_not_ends_with: String
  openTime: DateTime

  """All values that are not equal to given value."""
  openTime_not: DateTime

  """All values that are contained in given list."""
  openTime_in: [DateTime!]

  """All values that are not contained in given list."""
  openTime_not_in: [DateTime!]

  """All values less than the given value."""
  openTime_lt: DateTime

  """All values less than or equal the given value."""
  openTime_lte: DateTime

  """All values greater than the given value."""
  openTime_gt: DateTime

  """All values greater than or equal the given value."""
  openTime_gte: DateTime
  closeTime: DateTime

  """All values that are not equal to given value."""
  closeTime_not: DateTime

  """All values that are contained in given list."""
  closeTime_in: [DateTime!]

  """All values that are not contained in given list."""
  closeTime_not_in: [DateTime!]

  """All values less than the given value."""
  closeTime_lt: DateTime

  """All values less than or equal the given value."""
  closeTime_lte: DateTime

  """All values greater than the given value."""
  closeTime_gt: DateTime

  """All values greater than or equal the given value."""
  closeTime_gte: DateTime
}

type BarSubscriptionPayload {
  mutation: MutationType!
  node: Bar
  updatedFields: [String!]
  previousValues: BarPreviousValues
}

input BarSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BarSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BarWhereInput
}

input BarUpdateInput {
  name: String
  address: String
  lat: String
  long: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
}

input BarUpdateManyDataInput {
  name: String
  address: String
  lat: String
  long: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
}

input BarUpdateManyMutationInput {
  name: String
  address: String
  lat: String
  long: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
}

input BarUpdateManyWithoutBeersInput {
  create: [BarCreateWithoutBeersInput!]
  connect: [BarWhereUniqueInput!]
  disconnect: [BarWhereUniqueInput!]
  delete: [BarWhereUniqueInput!]
  update: [BarUpdateWithWhereUniqueWithoutBeersInput!]
  updateMany: [BarUpdateManyWithWhereNestedInput!]
  deleteMany: [BarScalarWhereInput!]
  upsert: [BarUpsertWithWhereUniqueWithoutBeersInput!]
}

input BarUpdateManyWithWhereNestedInput {
  where: BarScalarWhereInput!
  data: BarUpdateManyDataInput!
}

input BarUpdatephotosInput {
  set: [String!]
}

input BarUpdateWithoutBeersDataInput {
  name: String
  address: String
  lat: String
  long: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
}

input BarUpdateWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput!
  data: BarUpdateWithoutBeersDataInput!
}

input BarUpsertWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput!
  update: BarUpdateWithoutBeersDataInput!
  create: BarCreateWithoutBeersInput!
}

input BarWhereInput {
  """Logical AND on all given filters."""
  AND: [BarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  lat: String

  """All values that are not equal to given value."""
  lat_not: String

  """All values that are contained in given list."""
  lat_in: [String!]

  """All values that are not contained in given list."""
  lat_not_in: [String!]

  """All values less than the given value."""
  lat_lt: String

  """All values less than or equal the given value."""
  lat_lte: String

  """All values greater than the given value."""
  lat_gt: String

  """All values greater than or equal the given value."""
  lat_gte: String

  """All values containing the given string."""
  lat_contains: String

  """All values not containing the given string."""
  lat_not_contains: String

  """All values starting with the given string."""
  lat_starts_with: String

  """All values not starting with the given string."""
  lat_not_starts_with: String

  """All values ending with the given string."""
  lat_ends_with: String

  """All values not ending with the given string."""
  lat_not_ends_with: String
  long: String

  """All values that are not equal to given value."""
  long_not: String

  """All values that are contained in given list."""
  long_in: [String!]

  """All values that are not contained in given list."""
  long_not_in: [String!]

  """All values less than the given value."""
  long_lt: String

  """All values less than or equal the given value."""
  long_lte: String

  """All values greater than the given value."""
  long_gt: String

  """All values greater than or equal the given value."""
  long_gte: String

  """All values containing the given string."""
  long_contains: String

  """All values not containing the given string."""
  long_not_contains: String

  """All values starting with the given string."""
  long_starts_with: String

  """All values not starting with the given string."""
  long_not_starts_with: String

  """All values ending with the given string."""
  long_ends_with: String

  """All values not ending with the given string."""
  long_not_ends_with: String
  openTime: DateTime

  """All values that are not equal to given value."""
  openTime_not: DateTime

  """All values that are contained in given list."""
  openTime_in: [DateTime!]

  """All values that are not contained in given list."""
  openTime_not_in: [DateTime!]

  """All values less than the given value."""
  openTime_lt: DateTime

  """All values less than or equal the given value."""
  openTime_lte: DateTime

  """All values greater than the given value."""
  openTime_gt: DateTime

  """All values greater than or equal the given value."""
  openTime_gte: DateTime
  closeTime: DateTime

  """All values that are not equal to given value."""
  closeTime_not: DateTime

  """All values that are contained in given list."""
  closeTime_in: [DateTime!]

  """All values that are not contained in given list."""
  closeTime_not_in: [DateTime!]

  """All values less than the given value."""
  closeTime_lt: DateTime

  """All values less than or equal the given value."""
  closeTime_lte: DateTime

  """All values greater than the given value."""
  closeTime_gt: DateTime

  """All values greater than or equal the given value."""
  closeTime_gte: DateTime
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
}

input BarWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Beer implements Node {
  id: ID!
  name: String!
  brewery: Brewery!
  photo: String
  description: String
  bars(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bar!]
  beerRating(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating!]
  comments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment!]
}

type BeerComment implements Node {
  id: ID!
  beer: Beer!
  user: User!
  comment: String!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BeerCommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerCommentEdge]!
  aggregate: AggregateBeerComment!
}

input BeerCommentCreateInput {
  comment: String!
  beer: BeerCreateOneWithoutCommentsInput!
  user: UserCreateOneWithoutBeerCommentsInput!
}

input BeerCommentCreateManyWithoutBeerInput {
  create: [BeerCommentCreateWithoutBeerInput!]
  connect: [BeerCommentWhereUniqueInput!]
}

input BeerCommentCreateManyWithoutUserInput {
  create: [BeerCommentCreateWithoutUserInput!]
  connect: [BeerCommentWhereUniqueInput!]
}

input BeerCommentCreateWithoutBeerInput {
  comment: String!
  user: UserCreateOneWithoutBeerCommentsInput!
}

input BeerCommentCreateWithoutUserInput {
  comment: String!
  beer: BeerCreateOneWithoutCommentsInput!
}

"""An edge in a connection."""
type BeerCommentEdge {
  """The item at the end of the edge."""
  node: BeerComment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerCommentOrderByInput {
  id_ASC
  id_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerCommentPreviousValues {
  id: ID!
  comment: String!
  createdAt: DateTime!
}

input BeerCommentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerCommentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerCommentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerCommentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  comment: String

  """All values that are not equal to given value."""
  comment_not: String

  """All values that are contained in given list."""
  comment_in: [String!]

  """All values that are not contained in given list."""
  comment_not_in: [String!]

  """All values less than the given value."""
  comment_lt: String

  """All values less than or equal the given value."""
  comment_lte: String

  """All values greater than the given value."""
  comment_gt: String

  """All values greater than or equal the given value."""
  comment_gte: String

  """All values containing the given string."""
  comment_contains: String

  """All values not containing the given string."""
  comment_not_contains: String

  """All values starting with the given string."""
  comment_starts_with: String

  """All values not starting with the given string."""
  comment_not_starts_with: String

  """All values ending with the given string."""
  comment_ends_with: String

  """All values not ending with the given string."""
  comment_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

type BeerCommentSubscriptionPayload {
  mutation: MutationType!
  node: BeerComment
  updatedFields: [String!]
  previousValues: BeerCommentPreviousValues
}

input BeerCommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerCommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerCommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerCommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BeerCommentWhereInput
}

input BeerCommentUpdateInput {
  comment: String
  beer: BeerUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredWithoutBeerCommentsInput
}

input BeerCommentUpdateManyDataInput {
  comment: String
}

input BeerCommentUpdateManyMutationInput {
  comment: String
}

input BeerCommentUpdateManyWithoutBeerInput {
  create: [BeerCommentCreateWithoutBeerInput!]
  connect: [BeerCommentWhereUniqueInput!]
  disconnect: [BeerCommentWhereUniqueInput!]
  delete: [BeerCommentWhereUniqueInput!]
  update: [BeerCommentUpdateWithWhereUniqueWithoutBeerInput!]
  updateMany: [BeerCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerCommentScalarWhereInput!]
  upsert: [BeerCommentUpsertWithWhereUniqueWithoutBeerInput!]
}

input BeerCommentUpdateManyWithoutUserInput {
  create: [BeerCommentCreateWithoutUserInput!]
  connect: [BeerCommentWhereUniqueInput!]
  disconnect: [BeerCommentWhereUniqueInput!]
  delete: [BeerCommentWhereUniqueInput!]
  update: [BeerCommentUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BeerCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerCommentScalarWhereInput!]
  upsert: [BeerCommentUpsertWithWhereUniqueWithoutUserInput!]
}

input BeerCommentUpdateManyWithWhereNestedInput {
  where: BeerCommentScalarWhereInput!
  data: BeerCommentUpdateManyDataInput!
}

input BeerCommentUpdateWithoutBeerDataInput {
  comment: String
  user: UserUpdateOneRequiredWithoutBeerCommentsInput
}

input BeerCommentUpdateWithoutUserDataInput {
  comment: String
  beer: BeerUpdateOneRequiredWithoutCommentsInput
}

input BeerCommentUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerCommentWhereUniqueInput!
  data: BeerCommentUpdateWithoutBeerDataInput!
}

input BeerCommentUpdateWithWhereUniqueWithoutUserInput {
  where: BeerCommentWhereUniqueInput!
  data: BeerCommentUpdateWithoutUserDataInput!
}

input BeerCommentUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerCommentWhereUniqueInput!
  update: BeerCommentUpdateWithoutBeerDataInput!
  create: BeerCommentCreateWithoutBeerInput!
}

input BeerCommentUpsertWithWhereUniqueWithoutUserInput {
  where: BeerCommentWhereUniqueInput!
  update: BeerCommentUpdateWithoutUserDataInput!
  create: BeerCommentCreateWithoutUserInput!
}

input BeerCommentWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerCommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerCommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerCommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  comment: String

  """All values that are not equal to given value."""
  comment_not: String

  """All values that are contained in given list."""
  comment_in: [String!]

  """All values that are not contained in given list."""
  comment_not_in: [String!]

  """All values less than the given value."""
  comment_lt: String

  """All values less than or equal the given value."""
  comment_lte: String

  """All values greater than the given value."""
  comment_gt: String

  """All values greater than or equal the given value."""
  comment_gte: String

  """All values containing the given string."""
  comment_contains: String

  """All values not containing the given string."""
  comment_not_contains: String

  """All values starting with the given string."""
  comment_starts_with: String

  """All values not starting with the given string."""
  comment_not_starts_with: String

  """All values ending with the given string."""
  comment_ends_with: String

  """All values not ending with the given string."""
  comment_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  beer: BeerWhereInput
  user: UserWhereInput
}

input BeerCommentWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type BeerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerEdge]!
  aggregate: AggregateBeer!
}

input BeerCreateInput {
  name: String!
  photo: String
  description: String
  brewery: BreweryCreateOneWithoutBeersInput!
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  comments: BeerCommentCreateManyWithoutBeerInput
}

input BeerCreateManyWithoutBarsInput {
  create: [BeerCreateWithoutBarsInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateManyWithoutBreweryInput {
  create: [BeerCreateWithoutBreweryInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateOneWithoutBeerRatingInput {
  create: BeerCreateWithoutBeerRatingInput
  connect: BeerWhereUniqueInput
}

input BeerCreateOneWithoutCommentsInput {
  create: BeerCreateWithoutCommentsInput
  connect: BeerWhereUniqueInput
}

input BeerCreateWithoutBarsInput {
  name: String!
  photo: String
  description: String
  brewery: BreweryCreateOneWithoutBeersInput!
  beerRating: BeerRatingCreateManyWithoutBeerInput
  comments: BeerCommentCreateManyWithoutBeerInput
}

input BeerCreateWithoutBeerRatingInput {
  name: String!
  photo: String
  description: String
  brewery: BreweryCreateOneWithoutBeersInput!
  bars: BarCreateManyWithoutBeersInput
  comments: BeerCommentCreateManyWithoutBeerInput
}

input BeerCreateWithoutBreweryInput {
  name: String!
  photo: String
  description: String
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  comments: BeerCommentCreateManyWithoutBeerInput
}

input BeerCreateWithoutCommentsInput {
  name: String!
  photo: String
  description: String
  brewery: BreweryCreateOneWithoutBeersInput!
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
}

"""An edge in a connection."""
type BeerEdge {
  """The item at the end of the edge."""
  node: Beer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  photo_ASC
  photo_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BeerPreviousValues {
  id: ID!
  name: String!
  photo: String
  description: String
}

type BeerRating implements Node {
  id: ID!
  user: User!
  beer: Beer!
  rating: Int!
}

"""A connection to a list of items."""
type BeerRatingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerRatingEdge]!
  aggregate: AggregateBeerRating!
}

input BeerRatingCreateInput {
  rating: Int!
  user: UserCreateOneWithoutBeerRatingsInput!
  beer: BeerCreateOneWithoutBeerRatingInput!
}

input BeerRatingCreateManyWithoutBeerInput {
  create: [BeerRatingCreateWithoutBeerInput!]
  connect: [BeerRatingWhereUniqueInput!]
}

input BeerRatingCreateManyWithoutUserInput {
  create: [BeerRatingCreateWithoutUserInput!]
  connect: [BeerRatingWhereUniqueInput!]
}

input BeerRatingCreateWithoutBeerInput {
  rating: Int!
  user: UserCreateOneWithoutBeerRatingsInput!
}

input BeerRatingCreateWithoutUserInput {
  rating: Int!
  beer: BeerCreateOneWithoutBeerRatingInput!
}

"""An edge in a connection."""
type BeerRatingEdge {
  """The item at the end of the edge."""
  node: BeerRating!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerRatingOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BeerRatingPreviousValues {
  id: ID!
  rating: Int!
}

input BeerRatingScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerRatingScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerRatingScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerRatingScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  rating: Int

  """All values that are not equal to given value."""
  rating_not: Int

  """All values that are contained in given list."""
  rating_in: [Int!]

  """All values that are not contained in given list."""
  rating_not_in: [Int!]

  """All values less than the given value."""
  rating_lt: Int

  """All values less than or equal the given value."""
  rating_lte: Int

  """All values greater than the given value."""
  rating_gt: Int

  """All values greater than or equal the given value."""
  rating_gte: Int
}

type BeerRatingSubscriptionPayload {
  mutation: MutationType!
  node: BeerRating
  updatedFields: [String!]
  previousValues: BeerRatingPreviousValues
}

input BeerRatingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerRatingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerRatingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerRatingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BeerRatingWhereInput
}

input BeerRatingUpdateInput {
  rating: Int
  user: UserUpdateOneRequiredWithoutBeerRatingsInput
  beer: BeerUpdateOneRequiredWithoutBeerRatingInput
}

input BeerRatingUpdateManyDataInput {
  rating: Int
}

input BeerRatingUpdateManyMutationInput {
  rating: Int
}

input BeerRatingUpdateManyWithoutBeerInput {
  create: [BeerRatingCreateWithoutBeerInput!]
  connect: [BeerRatingWhereUniqueInput!]
  disconnect: [BeerRatingWhereUniqueInput!]
  delete: [BeerRatingWhereUniqueInput!]
  update: [BeerRatingUpdateWithWhereUniqueWithoutBeerInput!]
  updateMany: [BeerRatingUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerRatingScalarWhereInput!]
  upsert: [BeerRatingUpsertWithWhereUniqueWithoutBeerInput!]
}

input BeerRatingUpdateManyWithoutUserInput {
  create: [BeerRatingCreateWithoutUserInput!]
  connect: [BeerRatingWhereUniqueInput!]
  disconnect: [BeerRatingWhereUniqueInput!]
  delete: [BeerRatingWhereUniqueInput!]
  update: [BeerRatingUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BeerRatingUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerRatingScalarWhereInput!]
  upsert: [BeerRatingUpsertWithWhereUniqueWithoutUserInput!]
}

input BeerRatingUpdateManyWithWhereNestedInput {
  where: BeerRatingScalarWhereInput!
  data: BeerRatingUpdateManyDataInput!
}

input BeerRatingUpdateWithoutBeerDataInput {
  rating: Int
  user: UserUpdateOneRequiredWithoutBeerRatingsInput
}

input BeerRatingUpdateWithoutUserDataInput {
  rating: Int
  beer: BeerUpdateOneRequiredWithoutBeerRatingInput
}

input BeerRatingUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerRatingWhereUniqueInput!
  data: BeerRatingUpdateWithoutBeerDataInput!
}

input BeerRatingUpdateWithWhereUniqueWithoutUserInput {
  where: BeerRatingWhereUniqueInput!
  data: BeerRatingUpdateWithoutUserDataInput!
}

input BeerRatingUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerRatingWhereUniqueInput!
  update: BeerRatingUpdateWithoutBeerDataInput!
  create: BeerRatingCreateWithoutBeerInput!
}

input BeerRatingUpsertWithWhereUniqueWithoutUserInput {
  where: BeerRatingWhereUniqueInput!
  update: BeerRatingUpdateWithoutUserDataInput!
  create: BeerRatingCreateWithoutUserInput!
}

input BeerRatingWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerRatingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerRatingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerRatingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  rating: Int

  """All values that are not equal to given value."""
  rating_not: Int

  """All values that are contained in given list."""
  rating_in: [Int!]

  """All values that are not contained in given list."""
  rating_not_in: [Int!]

  """All values less than the given value."""
  rating_lt: Int

  """All values less than or equal the given value."""
  rating_lte: Int

  """All values greater than the given value."""
  rating_gt: Int

  """All values greater than or equal the given value."""
  rating_gte: Int
  user: UserWhereInput
  beer: BeerWhereInput
}

input BeerRatingWhereUniqueInput {
  id: ID
}

input BeerScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  photo: String

  """All values that are not equal to given value."""
  photo_not: String

  """All values that are contained in given list."""
  photo_in: [String!]

  """All values that are not contained in given list."""
  photo_not_in: [String!]

  """All values less than the given value."""
  photo_lt: String

  """All values less than or equal the given value."""
  photo_lte: String

  """All values greater than the given value."""
  photo_gt: String

  """All values greater than or equal the given value."""
  photo_gte: String

  """All values containing the given string."""
  photo_contains: String

  """All values not containing the given string."""
  photo_not_contains: String

  """All values starting with the given string."""
  photo_starts_with: String

  """All values not starting with the given string."""
  photo_not_starts_with: String

  """All values ending with the given string."""
  photo_ends_with: String

  """All values not ending with the given string."""
  photo_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

type BeerSubscriptionPayload {
  mutation: MutationType!
  node: Beer
  updatedFields: [String!]
  previousValues: BeerPreviousValues
}

input BeerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BeerWhereInput
}

input BeerUpdateInput {
  name: String
  photo: String
  description: String
  brewery: BreweryUpdateOneRequiredWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  comments: BeerCommentUpdateManyWithoutBeerInput
}

input BeerUpdateManyDataInput {
  name: String
  photo: String
  description: String
}

input BeerUpdateManyMutationInput {
  name: String
  photo: String
  description: String
}

input BeerUpdateManyWithoutBarsInput {
  create: [BeerCreateWithoutBarsInput!]
  connect: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  delete: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutBarsInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerScalarWhereInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutBarsInput!]
}

input BeerUpdateManyWithoutBreweryInput {
  create: [BeerCreateWithoutBreweryInput!]
  connect: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  delete: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutBreweryInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerScalarWhereInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutBreweryInput!]
}

input BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput!
  data: BeerUpdateManyDataInput!
}

input BeerUpdateOneRequiredWithoutBeerRatingInput {
  create: BeerCreateWithoutBeerRatingInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutBeerRatingDataInput
  upsert: BeerUpsertWithoutBeerRatingInput
}

input BeerUpdateOneRequiredWithoutCommentsInput {
  create: BeerCreateWithoutCommentsInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutCommentsDataInput
  upsert: BeerUpsertWithoutCommentsInput
}

input BeerUpdateWithoutBarsDataInput {
  name: String
  photo: String
  description: String
  brewery: BreweryUpdateOneRequiredWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  comments: BeerCommentUpdateManyWithoutBeerInput
}

input BeerUpdateWithoutBeerRatingDataInput {
  name: String
  photo: String
  description: String
  brewery: BreweryUpdateOneRequiredWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  comments: BeerCommentUpdateManyWithoutBeerInput
}

input BeerUpdateWithoutBreweryDataInput {
  name: String
  photo: String
  description: String
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  comments: BeerCommentUpdateManyWithoutBeerInput
}

input BeerUpdateWithoutCommentsDataInput {
  name: String
  photo: String
  description: String
  brewery: BreweryUpdateOneRequiredWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
}

input BeerUpdateWithWhereUniqueWithoutBarsInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutBarsDataInput!
}

input BeerUpdateWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutBreweryDataInput!
}

input BeerUpsertWithoutBeerRatingInput {
  update: BeerUpdateWithoutBeerRatingDataInput!
  create: BeerCreateWithoutBeerRatingInput!
}

input BeerUpsertWithoutCommentsInput {
  update: BeerUpdateWithoutCommentsDataInput!
  create: BeerCreateWithoutCommentsInput!
}

input BeerUpsertWithWhereUniqueWithoutBarsInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutBarsDataInput!
  create: BeerCreateWithoutBarsInput!
}

input BeerUpsertWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutBreweryDataInput!
  create: BeerCreateWithoutBreweryInput!
}

input BeerWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  photo: String

  """All values that are not equal to given value."""
  photo_not: String

  """All values that are contained in given list."""
  photo_in: [String!]

  """All values that are not contained in given list."""
  photo_not_in: [String!]

  """All values less than the given value."""
  photo_lt: String

  """All values less than or equal the given value."""
  photo_lte: String

  """All values greater than the given value."""
  photo_gt: String

  """All values greater than or equal the given value."""
  photo_gte: String

  """All values containing the given string."""
  photo_contains: String

  """All values not containing the given string."""
  photo_not_contains: String

  """All values starting with the given string."""
  photo_starts_with: String

  """All values not starting with the given string."""
  photo_not_starts_with: String

  """All values ending with the given string."""
  photo_ends_with: String

  """All values not ending with the given string."""
  photo_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  brewery: BreweryWhereInput
  bars_every: BarWhereInput
  bars_some: BarWhereInput
  bars_none: BarWhereInput
  beerRating_every: BeerRatingWhereInput
  beerRating_some: BeerRatingWhereInput
  beerRating_none: BeerRatingWhereInput
  comments_every: BeerCommentWhereInput
  comments_some: BeerCommentWhereInput
  comments_none: BeerCommentWhereInput
}

input BeerWhereUniqueInput {
  id: ID
}

type Brewery implements Node {
  id: ID!
  name: String!
  logo: String
  country: String
  description: String
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
  comments(where: BreweryCommentWhereInput, orderBy: BreweryCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BreweryComment!]
}

type BreweryComment implements Node {
  id: ID!
  brewery: Brewery!
  user: User!
  comment: String!
  timestamp: DateTime!
}

"""A connection to a list of items."""
type BreweryCommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BreweryCommentEdge]!
  aggregate: AggregateBreweryComment!
}

input BreweryCommentCreateInput {
  comment: String!
  timestamp: DateTime!
  brewery: BreweryCreateOneWithoutCommentsInput!
  user: UserCreateOneWithoutBreweryCommentsInput!
}

input BreweryCommentCreateManyWithoutBreweryInput {
  create: [BreweryCommentCreateWithoutBreweryInput!]
  connect: [BreweryCommentWhereUniqueInput!]
}

input BreweryCommentCreateManyWithoutUserInput {
  create: [BreweryCommentCreateWithoutUserInput!]
  connect: [BreweryCommentWhereUniqueInput!]
}

input BreweryCommentCreateWithoutBreweryInput {
  comment: String!
  timestamp: DateTime!
  user: UserCreateOneWithoutBreweryCommentsInput!
}

input BreweryCommentCreateWithoutUserInput {
  comment: String!
  timestamp: DateTime!
  brewery: BreweryCreateOneWithoutCommentsInput!
}

"""An edge in a connection."""
type BreweryCommentEdge {
  """The item at the end of the edge."""
  node: BreweryComment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BreweryCommentOrderByInput {
  id_ASC
  id_DESC
  comment_ASC
  comment_DESC
  timestamp_ASC
  timestamp_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BreweryCommentPreviousValues {
  id: ID!
  comment: String!
  timestamp: DateTime!
}

input BreweryCommentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BreweryCommentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BreweryCommentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BreweryCommentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  comment: String

  """All values that are not equal to given value."""
  comment_not: String

  """All values that are contained in given list."""
  comment_in: [String!]

  """All values that are not contained in given list."""
  comment_not_in: [String!]

  """All values less than the given value."""
  comment_lt: String

  """All values less than or equal the given value."""
  comment_lte: String

  """All values greater than the given value."""
  comment_gt: String

  """All values greater than or equal the given value."""
  comment_gte: String

  """All values containing the given string."""
  comment_contains: String

  """All values not containing the given string."""
  comment_not_contains: String

  """All values starting with the given string."""
  comment_starts_with: String

  """All values not starting with the given string."""
  comment_not_starts_with: String

  """All values ending with the given string."""
  comment_ends_with: String

  """All values not ending with the given string."""
  comment_not_ends_with: String
  timestamp: DateTime

  """All values that are not equal to given value."""
  timestamp_not: DateTime

  """All values that are contained in given list."""
  timestamp_in: [DateTime!]

  """All values that are not contained in given list."""
  timestamp_not_in: [DateTime!]

  """All values less than the given value."""
  timestamp_lt: DateTime

  """All values less than or equal the given value."""
  timestamp_lte: DateTime

  """All values greater than the given value."""
  timestamp_gt: DateTime

  """All values greater than or equal the given value."""
  timestamp_gte: DateTime
}

type BreweryCommentSubscriptionPayload {
  mutation: MutationType!
  node: BreweryComment
  updatedFields: [String!]
  previousValues: BreweryCommentPreviousValues
}

input BreweryCommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BreweryCommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BreweryCommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BreweryCommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BreweryCommentWhereInput
}

input BreweryCommentUpdateInput {
  comment: String
  timestamp: DateTime
  brewery: BreweryUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredWithoutBreweryCommentsInput
}

input BreweryCommentUpdateManyDataInput {
  comment: String
  timestamp: DateTime
}

input BreweryCommentUpdateManyMutationInput {
  comment: String
  timestamp: DateTime
}

input BreweryCommentUpdateManyWithoutBreweryInput {
  create: [BreweryCommentCreateWithoutBreweryInput!]
  connect: [BreweryCommentWhereUniqueInput!]
  disconnect: [BreweryCommentWhereUniqueInput!]
  delete: [BreweryCommentWhereUniqueInput!]
  update: [BreweryCommentUpdateWithWhereUniqueWithoutBreweryInput!]
  updateMany: [BreweryCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [BreweryCommentScalarWhereInput!]
  upsert: [BreweryCommentUpsertWithWhereUniqueWithoutBreweryInput!]
}

input BreweryCommentUpdateManyWithoutUserInput {
  create: [BreweryCommentCreateWithoutUserInput!]
  connect: [BreweryCommentWhereUniqueInput!]
  disconnect: [BreweryCommentWhereUniqueInput!]
  delete: [BreweryCommentWhereUniqueInput!]
  update: [BreweryCommentUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BreweryCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [BreweryCommentScalarWhereInput!]
  upsert: [BreweryCommentUpsertWithWhereUniqueWithoutUserInput!]
}

input BreweryCommentUpdateManyWithWhereNestedInput {
  where: BreweryCommentScalarWhereInput!
  data: BreweryCommentUpdateManyDataInput!
}

input BreweryCommentUpdateWithoutBreweryDataInput {
  comment: String
  timestamp: DateTime
  user: UserUpdateOneRequiredWithoutBreweryCommentsInput
}

input BreweryCommentUpdateWithoutUserDataInput {
  comment: String
  timestamp: DateTime
  brewery: BreweryUpdateOneRequiredWithoutCommentsInput
}

input BreweryCommentUpdateWithWhereUniqueWithoutBreweryInput {
  where: BreweryCommentWhereUniqueInput!
  data: BreweryCommentUpdateWithoutBreweryDataInput!
}

input BreweryCommentUpdateWithWhereUniqueWithoutUserInput {
  where: BreweryCommentWhereUniqueInput!
  data: BreweryCommentUpdateWithoutUserDataInput!
}

input BreweryCommentUpsertWithWhereUniqueWithoutBreweryInput {
  where: BreweryCommentWhereUniqueInput!
  update: BreweryCommentUpdateWithoutBreweryDataInput!
  create: BreweryCommentCreateWithoutBreweryInput!
}

input BreweryCommentUpsertWithWhereUniqueWithoutUserInput {
  where: BreweryCommentWhereUniqueInput!
  update: BreweryCommentUpdateWithoutUserDataInput!
  create: BreweryCommentCreateWithoutUserInput!
}

input BreweryCommentWhereInput {
  """Logical AND on all given filters."""
  AND: [BreweryCommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [BreweryCommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BreweryCommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  comment: String

  """All values that are not equal to given value."""
  comment_not: String

  """All values that are contained in given list."""
  comment_in: [String!]

  """All values that are not contained in given list."""
  comment_not_in: [String!]

  """All values less than the given value."""
  comment_lt: String

  """All values less than or equal the given value."""
  comment_lte: String

  """All values greater than the given value."""
  comment_gt: String

  """All values greater than or equal the given value."""
  comment_gte: String

  """All values containing the given string."""
  comment_contains: String

  """All values not containing the given string."""
  comment_not_contains: String

  """All values starting with the given string."""
  comment_starts_with: String

  """All values not starting with the given string."""
  comment_not_starts_with: String

  """All values ending with the given string."""
  comment_ends_with: String

  """All values not ending with the given string."""
  comment_not_ends_with: String
  timestamp: DateTime

  """All values that are not equal to given value."""
  timestamp_not: DateTime

  """All values that are contained in given list."""
  timestamp_in: [DateTime!]

  """All values that are not contained in given list."""
  timestamp_not_in: [DateTime!]

  """All values less than the given value."""
  timestamp_lt: DateTime

  """All values less than or equal the given value."""
  timestamp_lte: DateTime

  """All values greater than the given value."""
  timestamp_gt: DateTime

  """All values greater than or equal the given value."""
  timestamp_gte: DateTime
  brewery: BreweryWhereInput
  user: UserWhereInput
}

input BreweryCommentWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type BreweryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BreweryEdge]!
  aggregate: AggregateBrewery!
}

input BreweryCreateInput {
  name: String!
  logo: String
  country: String
  description: String
  beers: BeerCreateManyWithoutBreweryInput
  comments: BreweryCommentCreateManyWithoutBreweryInput
}

input BreweryCreateOneWithoutBeersInput {
  create: BreweryCreateWithoutBeersInput
  connect: BreweryWhereUniqueInput
}

input BreweryCreateOneWithoutCommentsInput {
  create: BreweryCreateWithoutCommentsInput
  connect: BreweryWhereUniqueInput
}

input BreweryCreateWithoutBeersInput {
  name: String!
  logo: String
  country: String
  description: String
  comments: BreweryCommentCreateManyWithoutBreweryInput
}

input BreweryCreateWithoutCommentsInput {
  name: String!
  logo: String
  country: String
  description: String
  beers: BeerCreateManyWithoutBreweryInput
}

"""An edge in a connection."""
type BreweryEdge {
  """The item at the end of the edge."""
  node: Brewery!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BreweryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  logo_ASC
  logo_DESC
  country_ASC
  country_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BreweryPreviousValues {
  id: ID!
  name: String!
  logo: String
  country: String
  description: String
}

type BrewerySubscriptionPayload {
  mutation: MutationType!
  node: Brewery
  updatedFields: [String!]
  previousValues: BreweryPreviousValues
}

input BrewerySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BrewerySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BrewerySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BrewerySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BreweryWhereInput
}

input BreweryUpdateInput {
  name: String
  logo: String
  country: String
  description: String
  beers: BeerUpdateManyWithoutBreweryInput
  comments: BreweryCommentUpdateManyWithoutBreweryInput
}

input BreweryUpdateManyMutationInput {
  name: String
  logo: String
  country: String
  description: String
}

input BreweryUpdateOneRequiredWithoutBeersInput {
  create: BreweryCreateWithoutBeersInput
  connect: BreweryWhereUniqueInput
  update: BreweryUpdateWithoutBeersDataInput
  upsert: BreweryUpsertWithoutBeersInput
}

input BreweryUpdateOneRequiredWithoutCommentsInput {
  create: BreweryCreateWithoutCommentsInput
  connect: BreweryWhereUniqueInput
  update: BreweryUpdateWithoutCommentsDataInput
  upsert: BreweryUpsertWithoutCommentsInput
}

input BreweryUpdateWithoutBeersDataInput {
  name: String
  logo: String
  country: String
  description: String
  comments: BreweryCommentUpdateManyWithoutBreweryInput
}

input BreweryUpdateWithoutCommentsDataInput {
  name: String
  logo: String
  country: String
  description: String
  beers: BeerUpdateManyWithoutBreweryInput
}

input BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput!
  create: BreweryCreateWithoutBeersInput!
}

input BreweryUpsertWithoutCommentsInput {
  update: BreweryUpdateWithoutCommentsDataInput!
  create: BreweryCreateWithoutCommentsInput!
}

input BreweryWhereInput {
  """Logical AND on all given filters."""
  AND: [BreweryWhereInput!]

  """Logical OR on all given filters."""
  OR: [BreweryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BreweryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  logo: String

  """All values that are not equal to given value."""
  logo_not: String

  """All values that are contained in given list."""
  logo_in: [String!]

  """All values that are not contained in given list."""
  logo_not_in: [String!]

  """All values less than the given value."""
  logo_lt: String

  """All values less than or equal the given value."""
  logo_lte: String

  """All values greater than the given value."""
  logo_gt: String

  """All values greater than or equal the given value."""
  logo_gte: String

  """All values containing the given string."""
  logo_contains: String

  """All values not containing the given string."""
  logo_not_contains: String

  """All values starting with the given string."""
  logo_starts_with: String

  """All values not starting with the given string."""
  logo_not_starts_with: String

  """All values ending with the given string."""
  logo_ends_with: String

  """All values not ending with the given string."""
  logo_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
  comments_every: BreweryCommentWhereInput
  comments_some: BreweryCommentWhereInput
  comments_none: BreweryCommentWhereInput
}

input BreweryWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createBar(data: BarCreateInput!): Bar!
  createBeer(data: BeerCreateInput!): Beer!
  createBeerRating(data: BeerRatingCreateInput!): BeerRating!
  createBeerComment(data: BeerCommentCreateInput!): BeerComment!
  createUser(data: UserCreateInput!): User!
  createBrewery(data: BreweryCreateInput!): Brewery!
  createBreweryComment(data: BreweryCommentCreateInput!): BreweryComment!
  updateBar(data: BarUpdateInput!, where: BarWhereUniqueInput!): Bar
  updateBeer(data: BeerUpdateInput!, where: BeerWhereUniqueInput!): Beer
  updateBeerRating(data: BeerRatingUpdateInput!, where: BeerRatingWhereUniqueInput!): BeerRating
  updateBeerComment(data: BeerCommentUpdateInput!, where: BeerCommentWhereUniqueInput!): BeerComment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateBrewery(data: BreweryUpdateInput!, where: BreweryWhereUniqueInput!): Brewery
  updateBreweryComment(data: BreweryCommentUpdateInput!, where: BreweryCommentWhereUniqueInput!): BreweryComment
  deleteBar(where: BarWhereUniqueInput!): Bar
  deleteBeer(where: BeerWhereUniqueInput!): Beer
  deleteBeerRating(where: BeerRatingWhereUniqueInput!): BeerRating
  deleteBeerComment(where: BeerCommentWhereUniqueInput!): BeerComment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteBrewery(where: BreweryWhereUniqueInput!): Brewery
  deleteBreweryComment(where: BreweryCommentWhereUniqueInput!): BreweryComment
  upsertBar(where: BarWhereUniqueInput!, create: BarCreateInput!, update: BarUpdateInput!): Bar!
  upsertBeer(where: BeerWhereUniqueInput!, create: BeerCreateInput!, update: BeerUpdateInput!): Beer!
  upsertBeerRating(where: BeerRatingWhereUniqueInput!, create: BeerRatingCreateInput!, update: BeerRatingUpdateInput!): BeerRating!
  upsertBeerComment(where: BeerCommentWhereUniqueInput!, create: BeerCommentCreateInput!, update: BeerCommentUpdateInput!): BeerComment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertBrewery(where: BreweryWhereUniqueInput!, create: BreweryCreateInput!, update: BreweryUpdateInput!): Brewery!
  upsertBreweryComment(where: BreweryCommentWhereUniqueInput!, create: BreweryCommentCreateInput!, update: BreweryCommentUpdateInput!): BreweryComment!
  updateManyBars(data: BarUpdateManyMutationInput!, where: BarWhereInput): BatchPayload!
  updateManyBeers(data: BeerUpdateManyMutationInput!, where: BeerWhereInput): BatchPayload!
  updateManyBeerRatings(data: BeerRatingUpdateManyMutationInput!, where: BeerRatingWhereInput): BatchPayload!
  updateManyBeerComments(data: BeerCommentUpdateManyMutationInput!, where: BeerCommentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyBreweries(data: BreweryUpdateManyMutationInput!, where: BreweryWhereInput): BatchPayload!
  updateManyBreweryComments(data: BreweryCommentUpdateManyMutationInput!, where: BreweryCommentWhereInput): BatchPayload!
  deleteManyBars(where: BarWhereInput): BatchPayload!
  deleteManyBeers(where: BeerWhereInput): BatchPayload!
  deleteManyBeerRatings(where: BeerRatingWhereInput): BatchPayload!
  deleteManyBeerComments(where: BeerCommentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyBreweries(where: BreweryWhereInput): BatchPayload!
  deleteManyBreweryComments(where: BreweryCommentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  bars(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bar]!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer]!
  beerRatings(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating]!
  beerComments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  breweries(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brewery]!
  breweryComments(where: BreweryCommentWhereInput, orderBy: BreweryCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BreweryComment]!
  bar(where: BarWhereUniqueInput!): Bar
  beer(where: BeerWhereUniqueInput!): Beer
  beerRating(where: BeerRatingWhereUniqueInput!): BeerRating
  beerComment(where: BeerCommentWhereUniqueInput!): BeerComment
  user(where: UserWhereUniqueInput!): User
  brewery(where: BreweryWhereUniqueInput!): Brewery
  breweryComment(where: BreweryCommentWhereUniqueInput!): BreweryComment
  barsConnection(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BarConnection!
  beersConnection(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerConnection!
  beerRatingsConnection(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerRatingConnection!
  beerCommentsConnection(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerCommentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  breweriesConnection(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BreweryConnection!
  breweryCommentsConnection(where: BreweryCommentWhereInput, orderBy: BreweryCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BreweryCommentConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  USER
  ADMIN
}

type Subscription {
  bar(where: BarSubscriptionWhereInput): BarSubscriptionPayload
  beer(where: BeerSubscriptionWhereInput): BeerSubscriptionPayload
  beerRating(where: BeerRatingSubscriptionWhereInput): BeerRatingSubscriptionPayload
  beerComment(where: BeerCommentSubscriptionWhereInput): BeerCommentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  brewery(where: BrewerySubscriptionWhereInput): BrewerySubscriptionPayload
  breweryComment(where: BreweryCommentSubscriptionWhereInput): BreweryCommentSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  role: Role!
  active: Boolean!
  name: String
  beerComments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment!]
  breweryComments(where: BreweryCommentWhereInput, orderBy: BreweryCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BreweryComment!]
  beerRatings(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  name: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  breweryComments: BreweryCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
}

input UserCreateOneWithoutBeerCommentsInput {
  create: UserCreateWithoutBeerCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBeerRatingsInput {
  create: UserCreateWithoutBeerRatingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBreweryCommentsInput {
  create: UserCreateWithoutBreweryCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBeerCommentsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  name: String
  breweryComments: BreweryCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
}

input UserCreateWithoutBeerRatingsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  name: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  breweryComments: BreweryCommentCreateManyWithoutUserInput
}

input UserCreateWithoutBreweryCommentsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  name: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  active_ASC
  active_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  role: Role!
  active: Boolean!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  role: Role
  active: Boolean
  name: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  breweryComments: BreweryCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  role: Role
  active: Boolean
  name: String
}

input UserUpdateOneRequiredWithoutBeerCommentsInput {
  create: UserCreateWithoutBeerCommentsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBeerCommentsDataInput
  upsert: UserUpsertWithoutBeerCommentsInput
}

input UserUpdateOneRequiredWithoutBeerRatingsInput {
  create: UserCreateWithoutBeerRatingsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBeerRatingsDataInput
  upsert: UserUpsertWithoutBeerRatingsInput
}

input UserUpdateOneRequiredWithoutBreweryCommentsInput {
  create: UserCreateWithoutBreweryCommentsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBreweryCommentsDataInput
  upsert: UserUpsertWithoutBreweryCommentsInput
}

input UserUpdateWithoutBeerCommentsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  name: String
  breweryComments: BreweryCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
}

input UserUpdateWithoutBeerRatingsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  name: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  breweryComments: BreweryCommentUpdateManyWithoutUserInput
}

input UserUpdateWithoutBreweryCommentsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  name: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
}

input UserUpsertWithoutBeerCommentsInput {
  update: UserUpdateWithoutBeerCommentsDataInput!
  create: UserCreateWithoutBeerCommentsInput!
}

input UserUpsertWithoutBeerRatingsInput {
  update: UserUpdateWithoutBeerRatingsDataInput!
  create: UserCreateWithoutBeerRatingsInput!
}

input UserUpsertWithoutBreweryCommentsInput {
  update: UserUpdateWithoutBreweryCommentsDataInput!
  create: UserCreateWithoutBreweryCommentsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  active: Boolean

  """All values that are not equal to given value."""
  active_not: Boolean
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  beerComments_every: BeerCommentWhereInput
  beerComments_some: BeerCommentWhereInput
  beerComments_none: BeerCommentWhereInput
  breweryComments_every: BreweryCommentWhereInput
  breweryComments_some: BreweryCommentWhereInput
  breweryComments_none: BreweryCommentWhereInput
  beerRatings_every: BeerRatingWhereInput
  beerRatings_some: BeerRatingWhereInput
  beerRatings_none: BeerRatingWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type BarOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'address_ASC' |
  'address_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'long_ASC' |
  'long_DESC' |
  'openTime_ASC' |
  'openTime_DESC' |
  'closeTime_ASC' |
  'closeTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BeerCommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'photo_ASC' |
  'photo_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BeerRatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BreweryCommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'timestamp_ASC' |
  'timestamp_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BreweryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'logo_ASC' |
  'logo_DESC' |
  'country_ASC' |
  'country_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Role =   'USER' |
  'ADMIN'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC' |
  'active_ASC' |
  'active_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface BarCreateInput {
  name: String
  address: String
  lat: String
  long: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
}

export interface BarCreateManyWithoutBeersInput {
  create?: BarCreateWithoutBeersInput[] | BarCreateWithoutBeersInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
}

export interface BarCreatephotosInput {
  set?: String[] | String
}

export interface BarCreateWithoutBeersInput {
  name: String
  address: String
  lat: String
  long: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
}

export interface BarScalarWhereInput {
  AND?: BarScalarWhereInput[] | BarScalarWhereInput
  OR?: BarScalarWhereInput[] | BarScalarWhereInput
  NOT?: BarScalarWhereInput[] | BarScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  lat?: String
  lat_not?: String
  lat_in?: String[] | String
  lat_not_in?: String[] | String
  lat_lt?: String
  lat_lte?: String
  lat_gt?: String
  lat_gte?: String
  lat_contains?: String
  lat_not_contains?: String
  lat_starts_with?: String
  lat_not_starts_with?: String
  lat_ends_with?: String
  lat_not_ends_with?: String
  long?: String
  long_not?: String
  long_in?: String[] | String
  long_not_in?: String[] | String
  long_lt?: String
  long_lte?: String
  long_gt?: String
  long_gte?: String
  long_contains?: String
  long_not_contains?: String
  long_starts_with?: String
  long_not_starts_with?: String
  long_ends_with?: String
  long_not_ends_with?: String
  openTime?: DateTime
  openTime_not?: DateTime
  openTime_in?: DateTime[] | DateTime
  openTime_not_in?: DateTime[] | DateTime
  openTime_lt?: DateTime
  openTime_lte?: DateTime
  openTime_gt?: DateTime
  openTime_gte?: DateTime
  closeTime?: DateTime
  closeTime_not?: DateTime
  closeTime_in?: DateTime[] | DateTime
  closeTime_not_in?: DateTime[] | DateTime
  closeTime_lt?: DateTime
  closeTime_lte?: DateTime
  closeTime_gt?: DateTime
  closeTime_gte?: DateTime
}

export interface BarSubscriptionWhereInput {
  AND?: BarSubscriptionWhereInput[] | BarSubscriptionWhereInput
  OR?: BarSubscriptionWhereInput[] | BarSubscriptionWhereInput
  NOT?: BarSubscriptionWhereInput[] | BarSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BarWhereInput
}

export interface BarUpdateInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
}

export interface BarUpdateManyDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
}

export interface BarUpdateManyMutationInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
}

export interface BarUpdateManyWithoutBeersInput {
  create?: BarCreateWithoutBeersInput[] | BarCreateWithoutBeersInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput
  update?: BarUpdateWithWhereUniqueWithoutBeersInput[] | BarUpdateWithWhereUniqueWithoutBeersInput
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput
  upsert?: BarUpsertWithWhereUniqueWithoutBeersInput[] | BarUpsertWithWhereUniqueWithoutBeersInput
}

export interface BarUpdateManyWithWhereNestedInput {
  where: BarScalarWhereInput
  data: BarUpdateManyDataInput
}

export interface BarUpdatephotosInput {
  set?: String[] | String
}

export interface BarUpdateWithoutBeersDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
}

export interface BarUpdateWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput
  data: BarUpdateWithoutBeersDataInput
}

export interface BarUpsertWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput
  update: BarUpdateWithoutBeersDataInput
  create: BarCreateWithoutBeersInput
}

export interface BarWhereInput {
  AND?: BarWhereInput[] | BarWhereInput
  OR?: BarWhereInput[] | BarWhereInput
  NOT?: BarWhereInput[] | BarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  lat?: String
  lat_not?: String
  lat_in?: String[] | String
  lat_not_in?: String[] | String
  lat_lt?: String
  lat_lte?: String
  lat_gt?: String
  lat_gte?: String
  lat_contains?: String
  lat_not_contains?: String
  lat_starts_with?: String
  lat_not_starts_with?: String
  lat_ends_with?: String
  lat_not_ends_with?: String
  long?: String
  long_not?: String
  long_in?: String[] | String
  long_not_in?: String[] | String
  long_lt?: String
  long_lte?: String
  long_gt?: String
  long_gte?: String
  long_contains?: String
  long_not_contains?: String
  long_starts_with?: String
  long_not_starts_with?: String
  long_ends_with?: String
  long_not_ends_with?: String
  openTime?: DateTime
  openTime_not?: DateTime
  openTime_in?: DateTime[] | DateTime
  openTime_not_in?: DateTime[] | DateTime
  openTime_lt?: DateTime
  openTime_lte?: DateTime
  openTime_gt?: DateTime
  openTime_gte?: DateTime
  closeTime?: DateTime
  closeTime_not?: DateTime
  closeTime_in?: DateTime[] | DateTime
  closeTime_not_in?: DateTime[] | DateTime
  closeTime_lt?: DateTime
  closeTime_lte?: DateTime
  closeTime_gt?: DateTime
  closeTime_gte?: DateTime
  beers_every?: BeerWhereInput
  beers_some?: BeerWhereInput
  beers_none?: BeerWhereInput
}

export interface BarWhereUniqueInput {
  id?: ID_Input
}

export interface BeerCommentCreateInput {
  comment: String
  beer: BeerCreateOneWithoutCommentsInput
  user: UserCreateOneWithoutBeerCommentsInput
}

export interface BeerCommentCreateManyWithoutBeerInput {
  create?: BeerCommentCreateWithoutBeerInput[] | BeerCommentCreateWithoutBeerInput
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
}

export interface BeerCommentCreateManyWithoutUserInput {
  create?: BeerCommentCreateWithoutUserInput[] | BeerCommentCreateWithoutUserInput
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
}

export interface BeerCommentCreateWithoutBeerInput {
  comment: String
  user: UserCreateOneWithoutBeerCommentsInput
}

export interface BeerCommentCreateWithoutUserInput {
  comment: String
  beer: BeerCreateOneWithoutCommentsInput
}

export interface BeerCommentScalarWhereInput {
  AND?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput
  OR?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput
  NOT?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface BeerCommentSubscriptionWhereInput {
  AND?: BeerCommentSubscriptionWhereInput[] | BeerCommentSubscriptionWhereInput
  OR?: BeerCommentSubscriptionWhereInput[] | BeerCommentSubscriptionWhereInput
  NOT?: BeerCommentSubscriptionWhereInput[] | BeerCommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BeerCommentWhereInput
}

export interface BeerCommentUpdateInput {
  comment?: String
  beer?: BeerUpdateOneRequiredWithoutCommentsInput
  user?: UserUpdateOneRequiredWithoutBeerCommentsInput
}

export interface BeerCommentUpdateManyDataInput {
  comment?: String
}

export interface BeerCommentUpdateManyMutationInput {
  comment?: String
}

export interface BeerCommentUpdateManyWithoutBeerInput {
  create?: BeerCommentCreateWithoutBeerInput[] | BeerCommentCreateWithoutBeerInput
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
  disconnect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
  delete?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
  update?: BeerCommentUpdateWithWhereUniqueWithoutBeerInput[] | BeerCommentUpdateWithWhereUniqueWithoutBeerInput
  updateMany?: BeerCommentUpdateManyWithWhereNestedInput[] | BeerCommentUpdateManyWithWhereNestedInput
  deleteMany?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput
  upsert?: BeerCommentUpsertWithWhereUniqueWithoutBeerInput[] | BeerCommentUpsertWithWhereUniqueWithoutBeerInput
}

export interface BeerCommentUpdateManyWithoutUserInput {
  create?: BeerCommentCreateWithoutUserInput[] | BeerCommentCreateWithoutUserInput
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
  disconnect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
  delete?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
  update?: BeerCommentUpdateWithWhereUniqueWithoutUserInput[] | BeerCommentUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BeerCommentUpdateManyWithWhereNestedInput[] | BeerCommentUpdateManyWithWhereNestedInput
  deleteMany?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput
  upsert?: BeerCommentUpsertWithWhereUniqueWithoutUserInput[] | BeerCommentUpsertWithWhereUniqueWithoutUserInput
}

export interface BeerCommentUpdateManyWithWhereNestedInput {
  where: BeerCommentScalarWhereInput
  data: BeerCommentUpdateManyDataInput
}

export interface BeerCommentUpdateWithoutBeerDataInput {
  comment?: String
  user?: UserUpdateOneRequiredWithoutBeerCommentsInput
}

export interface BeerCommentUpdateWithoutUserDataInput {
  comment?: String
  beer?: BeerUpdateOneRequiredWithoutCommentsInput
}

export interface BeerCommentUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerCommentWhereUniqueInput
  data: BeerCommentUpdateWithoutBeerDataInput
}

export interface BeerCommentUpdateWithWhereUniqueWithoutUserInput {
  where: BeerCommentWhereUniqueInput
  data: BeerCommentUpdateWithoutUserDataInput
}

export interface BeerCommentUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerCommentWhereUniqueInput
  update: BeerCommentUpdateWithoutBeerDataInput
  create: BeerCommentCreateWithoutBeerInput
}

export interface BeerCommentUpsertWithWhereUniqueWithoutUserInput {
  where: BeerCommentWhereUniqueInput
  update: BeerCommentUpdateWithoutUserDataInput
  create: BeerCommentCreateWithoutUserInput
}

export interface BeerCommentWhereInput {
  AND?: BeerCommentWhereInput[] | BeerCommentWhereInput
  OR?: BeerCommentWhereInput[] | BeerCommentWhereInput
  NOT?: BeerCommentWhereInput[] | BeerCommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  beer?: BeerWhereInput
  user?: UserWhereInput
}

export interface BeerCommentWhereUniqueInput {
  id?: ID_Input
}

export interface BeerCreateInput {
  name: String
  photo?: String
  description?: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  comments?: BeerCommentCreateManyWithoutBeerInput
}

export interface BeerCreateManyWithoutBarsInput {
  create?: BeerCreateWithoutBarsInput[] | BeerCreateWithoutBarsInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
}

export interface BeerCreateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
}

export interface BeerCreateOneWithoutBeerRatingInput {
  create?: BeerCreateWithoutBeerRatingInput
  connect?: BeerWhereUniqueInput
}

export interface BeerCreateOneWithoutCommentsInput {
  create?: BeerCreateWithoutCommentsInput
  connect?: BeerWhereUniqueInput
}

export interface BeerCreateWithoutBarsInput {
  name: String
  photo?: String
  description?: String
  brewery: BreweryCreateOneWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  comments?: BeerCommentCreateManyWithoutBeerInput
}

export interface BeerCreateWithoutBeerRatingInput {
  name: String
  photo?: String
  description?: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  comments?: BeerCommentCreateManyWithoutBeerInput
}

export interface BeerCreateWithoutBreweryInput {
  name: String
  photo?: String
  description?: String
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  comments?: BeerCommentCreateManyWithoutBeerInput
}

export interface BeerCreateWithoutCommentsInput {
  name: String
  photo?: String
  description?: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
}

export interface BeerRatingCreateInput {
  rating: Int
  user: UserCreateOneWithoutBeerRatingsInput
  beer: BeerCreateOneWithoutBeerRatingInput
}

export interface BeerRatingCreateManyWithoutBeerInput {
  create?: BeerRatingCreateWithoutBeerInput[] | BeerRatingCreateWithoutBeerInput
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
}

export interface BeerRatingCreateManyWithoutUserInput {
  create?: BeerRatingCreateWithoutUserInput[] | BeerRatingCreateWithoutUserInput
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
}

export interface BeerRatingCreateWithoutBeerInput {
  rating: Int
  user: UserCreateOneWithoutBeerRatingsInput
}

export interface BeerRatingCreateWithoutUserInput {
  rating: Int
  beer: BeerCreateOneWithoutBeerRatingInput
}

export interface BeerRatingScalarWhereInput {
  AND?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput
  OR?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput
  NOT?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  rating?: Int
  rating_not?: Int
  rating_in?: Int[] | Int
  rating_not_in?: Int[] | Int
  rating_lt?: Int
  rating_lte?: Int
  rating_gt?: Int
  rating_gte?: Int
}

export interface BeerRatingSubscriptionWhereInput {
  AND?: BeerRatingSubscriptionWhereInput[] | BeerRatingSubscriptionWhereInput
  OR?: BeerRatingSubscriptionWhereInput[] | BeerRatingSubscriptionWhereInput
  NOT?: BeerRatingSubscriptionWhereInput[] | BeerRatingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BeerRatingWhereInput
}

export interface BeerRatingUpdateInput {
  rating?: Int
  user?: UserUpdateOneRequiredWithoutBeerRatingsInput
  beer?: BeerUpdateOneRequiredWithoutBeerRatingInput
}

export interface BeerRatingUpdateManyDataInput {
  rating?: Int
}

export interface BeerRatingUpdateManyMutationInput {
  rating?: Int
}

export interface BeerRatingUpdateManyWithoutBeerInput {
  create?: BeerRatingCreateWithoutBeerInput[] | BeerRatingCreateWithoutBeerInput
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  disconnect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  delete?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  update?: BeerRatingUpdateWithWhereUniqueWithoutBeerInput[] | BeerRatingUpdateWithWhereUniqueWithoutBeerInput
  updateMany?: BeerRatingUpdateManyWithWhereNestedInput[] | BeerRatingUpdateManyWithWhereNestedInput
  deleteMany?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput
  upsert?: BeerRatingUpsertWithWhereUniqueWithoutBeerInput[] | BeerRatingUpsertWithWhereUniqueWithoutBeerInput
}

export interface BeerRatingUpdateManyWithoutUserInput {
  create?: BeerRatingCreateWithoutUserInput[] | BeerRatingCreateWithoutUserInput
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  disconnect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  delete?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  update?: BeerRatingUpdateWithWhereUniqueWithoutUserInput[] | BeerRatingUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BeerRatingUpdateManyWithWhereNestedInput[] | BeerRatingUpdateManyWithWhereNestedInput
  deleteMany?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput
  upsert?: BeerRatingUpsertWithWhereUniqueWithoutUserInput[] | BeerRatingUpsertWithWhereUniqueWithoutUserInput
}

export interface BeerRatingUpdateManyWithWhereNestedInput {
  where: BeerRatingScalarWhereInput
  data: BeerRatingUpdateManyDataInput
}

export interface BeerRatingUpdateWithoutBeerDataInput {
  rating?: Int
  user?: UserUpdateOneRequiredWithoutBeerRatingsInput
}

export interface BeerRatingUpdateWithoutUserDataInput {
  rating?: Int
  beer?: BeerUpdateOneRequiredWithoutBeerRatingInput
}

export interface BeerRatingUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerRatingWhereUniqueInput
  data: BeerRatingUpdateWithoutBeerDataInput
}

export interface BeerRatingUpdateWithWhereUniqueWithoutUserInput {
  where: BeerRatingWhereUniqueInput
  data: BeerRatingUpdateWithoutUserDataInput
}

export interface BeerRatingUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerRatingWhereUniqueInput
  update: BeerRatingUpdateWithoutBeerDataInput
  create: BeerRatingCreateWithoutBeerInput
}

export interface BeerRatingUpsertWithWhereUniqueWithoutUserInput {
  where: BeerRatingWhereUniqueInput
  update: BeerRatingUpdateWithoutUserDataInput
  create: BeerRatingCreateWithoutUserInput
}

export interface BeerRatingWhereInput {
  AND?: BeerRatingWhereInput[] | BeerRatingWhereInput
  OR?: BeerRatingWhereInput[] | BeerRatingWhereInput
  NOT?: BeerRatingWhereInput[] | BeerRatingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  rating?: Int
  rating_not?: Int
  rating_in?: Int[] | Int
  rating_not_in?: Int[] | Int
  rating_lt?: Int
  rating_lte?: Int
  rating_gt?: Int
  rating_gte?: Int
  user?: UserWhereInput
  beer?: BeerWhereInput
}

export interface BeerRatingWhereUniqueInput {
  id?: ID_Input
}

export interface BeerScalarWhereInput {
  AND?: BeerScalarWhereInput[] | BeerScalarWhereInput
  OR?: BeerScalarWhereInput[] | BeerScalarWhereInput
  NOT?: BeerScalarWhereInput[] | BeerScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  photo?: String
  photo_not?: String
  photo_in?: String[] | String
  photo_not_in?: String[] | String
  photo_lt?: String
  photo_lte?: String
  photo_gt?: String
  photo_gte?: String
  photo_contains?: String
  photo_not_contains?: String
  photo_starts_with?: String
  photo_not_starts_with?: String
  photo_ends_with?: String
  photo_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface BeerSubscriptionWhereInput {
  AND?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput
  OR?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput
  NOT?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BeerWhereInput
}

export interface BeerUpdateInput {
  name?: String
  photo?: String
  description?: String
  brewery?: BreweryUpdateOneRequiredWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  comments?: BeerCommentUpdateManyWithoutBeerInput
}

export interface BeerUpdateManyDataInput {
  name?: String
  photo?: String
  description?: String
}

export interface BeerUpdateManyMutationInput {
  name?: String
  photo?: String
  description?: String
}

export interface BeerUpdateManyWithoutBarsInput {
  create?: BeerCreateWithoutBarsInput[] | BeerCreateWithoutBarsInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  update?: BeerUpdateWithWhereUniqueWithoutBarsInput[] | BeerUpdateWithWhereUniqueWithoutBarsInput
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput
  upsert?: BeerUpsertWithWhereUniqueWithoutBarsInput[] | BeerUpsertWithWhereUniqueWithoutBarsInput
}

export interface BeerUpdateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  update?: BeerUpdateWithWhereUniqueWithoutBreweryInput[] | BeerUpdateWithWhereUniqueWithoutBreweryInput
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput
  upsert?: BeerUpsertWithWhereUniqueWithoutBreweryInput[] | BeerUpsertWithWhereUniqueWithoutBreweryInput
}

export interface BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput
  data: BeerUpdateManyDataInput
}

export interface BeerUpdateOneRequiredWithoutBeerRatingInput {
  create?: BeerCreateWithoutBeerRatingInput
  connect?: BeerWhereUniqueInput
  update?: BeerUpdateWithoutBeerRatingDataInput
  upsert?: BeerUpsertWithoutBeerRatingInput
}

export interface BeerUpdateOneRequiredWithoutCommentsInput {
  create?: BeerCreateWithoutCommentsInput
  connect?: BeerWhereUniqueInput
  update?: BeerUpdateWithoutCommentsDataInput
  upsert?: BeerUpsertWithoutCommentsInput
}

export interface BeerUpdateWithoutBarsDataInput {
  name?: String
  photo?: String
  description?: String
  brewery?: BreweryUpdateOneRequiredWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  comments?: BeerCommentUpdateManyWithoutBeerInput
}

export interface BeerUpdateWithoutBeerRatingDataInput {
  name?: String
  photo?: String
  description?: String
  brewery?: BreweryUpdateOneRequiredWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  comments?: BeerCommentUpdateManyWithoutBeerInput
}

export interface BeerUpdateWithoutBreweryDataInput {
  name?: String
  photo?: String
  description?: String
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  comments?: BeerCommentUpdateManyWithoutBeerInput
}

export interface BeerUpdateWithoutCommentsDataInput {
  name?: String
  photo?: String
  description?: String
  brewery?: BreweryUpdateOneRequiredWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
}

export interface BeerUpdateWithWhereUniqueWithoutBarsInput {
  where: BeerWhereUniqueInput
  data: BeerUpdateWithoutBarsDataInput
}

export interface BeerUpdateWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput
  data: BeerUpdateWithoutBreweryDataInput
}

export interface BeerUpsertWithoutBeerRatingInput {
  update: BeerUpdateWithoutBeerRatingDataInput
  create: BeerCreateWithoutBeerRatingInput
}

export interface BeerUpsertWithoutCommentsInput {
  update: BeerUpdateWithoutCommentsDataInput
  create: BeerCreateWithoutCommentsInput
}

export interface BeerUpsertWithWhereUniqueWithoutBarsInput {
  where: BeerWhereUniqueInput
  update: BeerUpdateWithoutBarsDataInput
  create: BeerCreateWithoutBarsInput
}

export interface BeerUpsertWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput
  update: BeerUpdateWithoutBreweryDataInput
  create: BeerCreateWithoutBreweryInput
}

export interface BeerWhereInput {
  AND?: BeerWhereInput[] | BeerWhereInput
  OR?: BeerWhereInput[] | BeerWhereInput
  NOT?: BeerWhereInput[] | BeerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  photo?: String
  photo_not?: String
  photo_in?: String[] | String
  photo_not_in?: String[] | String
  photo_lt?: String
  photo_lte?: String
  photo_gt?: String
  photo_gte?: String
  photo_contains?: String
  photo_not_contains?: String
  photo_starts_with?: String
  photo_not_starts_with?: String
  photo_ends_with?: String
  photo_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  brewery?: BreweryWhereInput
  bars_every?: BarWhereInput
  bars_some?: BarWhereInput
  bars_none?: BarWhereInput
  beerRating_every?: BeerRatingWhereInput
  beerRating_some?: BeerRatingWhereInput
  beerRating_none?: BeerRatingWhereInput
  comments_every?: BeerCommentWhereInput
  comments_some?: BeerCommentWhereInput
  comments_none?: BeerCommentWhereInput
}

export interface BeerWhereUniqueInput {
  id?: ID_Input
}

export interface BreweryCommentCreateInput {
  comment: String
  timestamp: DateTime
  brewery: BreweryCreateOneWithoutCommentsInput
  user: UserCreateOneWithoutBreweryCommentsInput
}

export interface BreweryCommentCreateManyWithoutBreweryInput {
  create?: BreweryCommentCreateWithoutBreweryInput[] | BreweryCommentCreateWithoutBreweryInput
  connect?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
}

export interface BreweryCommentCreateManyWithoutUserInput {
  create?: BreweryCommentCreateWithoutUserInput[] | BreweryCommentCreateWithoutUserInput
  connect?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
}

export interface BreweryCommentCreateWithoutBreweryInput {
  comment: String
  timestamp: DateTime
  user: UserCreateOneWithoutBreweryCommentsInput
}

export interface BreweryCommentCreateWithoutUserInput {
  comment: String
  timestamp: DateTime
  brewery: BreweryCreateOneWithoutCommentsInput
}

export interface BreweryCommentScalarWhereInput {
  AND?: BreweryCommentScalarWhereInput[] | BreweryCommentScalarWhereInput
  OR?: BreweryCommentScalarWhereInput[] | BreweryCommentScalarWhereInput
  NOT?: BreweryCommentScalarWhereInput[] | BreweryCommentScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  timestamp?: DateTime
  timestamp_not?: DateTime
  timestamp_in?: DateTime[] | DateTime
  timestamp_not_in?: DateTime[] | DateTime
  timestamp_lt?: DateTime
  timestamp_lte?: DateTime
  timestamp_gt?: DateTime
  timestamp_gte?: DateTime
}

export interface BreweryCommentSubscriptionWhereInput {
  AND?: BreweryCommentSubscriptionWhereInput[] | BreweryCommentSubscriptionWhereInput
  OR?: BreweryCommentSubscriptionWhereInput[] | BreweryCommentSubscriptionWhereInput
  NOT?: BreweryCommentSubscriptionWhereInput[] | BreweryCommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BreweryCommentWhereInput
}

export interface BreweryCommentUpdateInput {
  comment?: String
  timestamp?: DateTime
  brewery?: BreweryUpdateOneRequiredWithoutCommentsInput
  user?: UserUpdateOneRequiredWithoutBreweryCommentsInput
}

export interface BreweryCommentUpdateManyDataInput {
  comment?: String
  timestamp?: DateTime
}

export interface BreweryCommentUpdateManyMutationInput {
  comment?: String
  timestamp?: DateTime
}

export interface BreweryCommentUpdateManyWithoutBreweryInput {
  create?: BreweryCommentCreateWithoutBreweryInput[] | BreweryCommentCreateWithoutBreweryInput
  connect?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
  disconnect?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
  delete?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
  update?: BreweryCommentUpdateWithWhereUniqueWithoutBreweryInput[] | BreweryCommentUpdateWithWhereUniqueWithoutBreweryInput
  updateMany?: BreweryCommentUpdateManyWithWhereNestedInput[] | BreweryCommentUpdateManyWithWhereNestedInput
  deleteMany?: BreweryCommentScalarWhereInput[] | BreweryCommentScalarWhereInput
  upsert?: BreweryCommentUpsertWithWhereUniqueWithoutBreweryInput[] | BreweryCommentUpsertWithWhereUniqueWithoutBreweryInput
}

export interface BreweryCommentUpdateManyWithoutUserInput {
  create?: BreweryCommentCreateWithoutUserInput[] | BreweryCommentCreateWithoutUserInput
  connect?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
  disconnect?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
  delete?: BreweryCommentWhereUniqueInput[] | BreweryCommentWhereUniqueInput
  update?: BreweryCommentUpdateWithWhereUniqueWithoutUserInput[] | BreweryCommentUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BreweryCommentUpdateManyWithWhereNestedInput[] | BreweryCommentUpdateManyWithWhereNestedInput
  deleteMany?: BreweryCommentScalarWhereInput[] | BreweryCommentScalarWhereInput
  upsert?: BreweryCommentUpsertWithWhereUniqueWithoutUserInput[] | BreweryCommentUpsertWithWhereUniqueWithoutUserInput
}

export interface BreweryCommentUpdateManyWithWhereNestedInput {
  where: BreweryCommentScalarWhereInput
  data: BreweryCommentUpdateManyDataInput
}

export interface BreweryCommentUpdateWithoutBreweryDataInput {
  comment?: String
  timestamp?: DateTime
  user?: UserUpdateOneRequiredWithoutBreweryCommentsInput
}

export interface BreweryCommentUpdateWithoutUserDataInput {
  comment?: String
  timestamp?: DateTime
  brewery?: BreweryUpdateOneRequiredWithoutCommentsInput
}

export interface BreweryCommentUpdateWithWhereUniqueWithoutBreweryInput {
  where: BreweryCommentWhereUniqueInput
  data: BreweryCommentUpdateWithoutBreweryDataInput
}

export interface BreweryCommentUpdateWithWhereUniqueWithoutUserInput {
  where: BreweryCommentWhereUniqueInput
  data: BreweryCommentUpdateWithoutUserDataInput
}

export interface BreweryCommentUpsertWithWhereUniqueWithoutBreweryInput {
  where: BreweryCommentWhereUniqueInput
  update: BreweryCommentUpdateWithoutBreweryDataInput
  create: BreweryCommentCreateWithoutBreweryInput
}

export interface BreweryCommentUpsertWithWhereUniqueWithoutUserInput {
  where: BreweryCommentWhereUniqueInput
  update: BreweryCommentUpdateWithoutUserDataInput
  create: BreweryCommentCreateWithoutUserInput
}

export interface BreweryCommentWhereInput {
  AND?: BreweryCommentWhereInput[] | BreweryCommentWhereInput
  OR?: BreweryCommentWhereInput[] | BreweryCommentWhereInput
  NOT?: BreweryCommentWhereInput[] | BreweryCommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  timestamp?: DateTime
  timestamp_not?: DateTime
  timestamp_in?: DateTime[] | DateTime
  timestamp_not_in?: DateTime[] | DateTime
  timestamp_lt?: DateTime
  timestamp_lte?: DateTime
  timestamp_gt?: DateTime
  timestamp_gte?: DateTime
  brewery?: BreweryWhereInput
  user?: UserWhereInput
}

export interface BreweryCommentWhereUniqueInput {
  id?: ID_Input
}

export interface BreweryCreateInput {
  name: String
  logo?: String
  country?: String
  description?: String
  beers?: BeerCreateManyWithoutBreweryInput
  comments?: BreweryCommentCreateManyWithoutBreweryInput
}

export interface BreweryCreateOneWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput
  connect?: BreweryWhereUniqueInput
}

export interface BreweryCreateOneWithoutCommentsInput {
  create?: BreweryCreateWithoutCommentsInput
  connect?: BreweryWhereUniqueInput
}

export interface BreweryCreateWithoutBeersInput {
  name: String
  logo?: String
  country?: String
  description?: String
  comments?: BreweryCommentCreateManyWithoutBreweryInput
}

export interface BreweryCreateWithoutCommentsInput {
  name: String
  logo?: String
  country?: String
  description?: String
  beers?: BeerCreateManyWithoutBreweryInput
}

export interface BrewerySubscriptionWhereInput {
  AND?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput
  OR?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput
  NOT?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BreweryWhereInput
}

export interface BreweryUpdateInput {
  name?: String
  logo?: String
  country?: String
  description?: String
  beers?: BeerUpdateManyWithoutBreweryInput
  comments?: BreweryCommentUpdateManyWithoutBreweryInput
}

export interface BreweryUpdateManyMutationInput {
  name?: String
  logo?: String
  country?: String
  description?: String
}

export interface BreweryUpdateOneRequiredWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput
  connect?: BreweryWhereUniqueInput
  update?: BreweryUpdateWithoutBeersDataInput
  upsert?: BreweryUpsertWithoutBeersInput
}

export interface BreweryUpdateOneRequiredWithoutCommentsInput {
  create?: BreweryCreateWithoutCommentsInput
  connect?: BreweryWhereUniqueInput
  update?: BreweryUpdateWithoutCommentsDataInput
  upsert?: BreweryUpsertWithoutCommentsInput
}

export interface BreweryUpdateWithoutBeersDataInput {
  name?: String
  logo?: String
  country?: String
  description?: String
  comments?: BreweryCommentUpdateManyWithoutBreweryInput
}

export interface BreweryUpdateWithoutCommentsDataInput {
  name?: String
  logo?: String
  country?: String
  description?: String
  beers?: BeerUpdateManyWithoutBreweryInput
}

export interface BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput
  create: BreweryCreateWithoutBeersInput
}

export interface BreweryUpsertWithoutCommentsInput {
  update: BreweryUpdateWithoutCommentsDataInput
  create: BreweryCreateWithoutCommentsInput
}

export interface BreweryWhereInput {
  AND?: BreweryWhereInput[] | BreweryWhereInput
  OR?: BreweryWhereInput[] | BreweryWhereInput
  NOT?: BreweryWhereInput[] | BreweryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  logo?: String
  logo_not?: String
  logo_in?: String[] | String
  logo_not_in?: String[] | String
  logo_lt?: String
  logo_lte?: String
  logo_gt?: String
  logo_gte?: String
  logo_contains?: String
  logo_not_contains?: String
  logo_starts_with?: String
  logo_not_starts_with?: String
  logo_ends_with?: String
  logo_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  beers_every?: BeerWhereInput
  beers_some?: BeerWhereInput
  beers_none?: BeerWhereInput
  comments_every?: BreweryCommentWhereInput
  comments_some?: BreweryCommentWhereInput
  comments_none?: BreweryCommentWhereInput
}

export interface BreweryWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  name?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  breweryComments?: BreweryCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
}

export interface UserCreateOneWithoutBeerCommentsInput {
  create?: UserCreateWithoutBeerCommentsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBeerRatingsInput {
  create?: UserCreateWithoutBeerRatingsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBreweryCommentsInput {
  create?: UserCreateWithoutBreweryCommentsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutBeerCommentsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  name?: String
  breweryComments?: BreweryCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
}

export interface UserCreateWithoutBeerRatingsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  name?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  breweryComments?: BreweryCommentCreateManyWithoutUserInput
}

export interface UserCreateWithoutBreweryCommentsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  name?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  name?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  breweryComments?: BreweryCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
}

export interface UserUpdateManyMutationInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  name?: String
}

export interface UserUpdateOneRequiredWithoutBeerCommentsInput {
  create?: UserCreateWithoutBeerCommentsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBeerCommentsDataInput
  upsert?: UserUpsertWithoutBeerCommentsInput
}

export interface UserUpdateOneRequiredWithoutBeerRatingsInput {
  create?: UserCreateWithoutBeerRatingsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBeerRatingsDataInput
  upsert?: UserUpsertWithoutBeerRatingsInput
}

export interface UserUpdateOneRequiredWithoutBreweryCommentsInput {
  create?: UserCreateWithoutBreweryCommentsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBreweryCommentsDataInput
  upsert?: UserUpsertWithoutBreweryCommentsInput
}

export interface UserUpdateWithoutBeerCommentsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  name?: String
  breweryComments?: BreweryCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
}

export interface UserUpdateWithoutBeerRatingsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  name?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  breweryComments?: BreweryCommentUpdateManyWithoutUserInput
}

export interface UserUpdateWithoutBreweryCommentsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  name?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
}

export interface UserUpsertWithoutBeerCommentsInput {
  update: UserUpdateWithoutBeerCommentsDataInput
  create: UserCreateWithoutBeerCommentsInput
}

export interface UserUpsertWithoutBeerRatingsInput {
  update: UserUpdateWithoutBeerRatingsDataInput
  create: UserCreateWithoutBeerRatingsInput
}

export interface UserUpsertWithoutBreweryCommentsInput {
  update: UserUpdateWithoutBreweryCommentsDataInput
  create: UserCreateWithoutBreweryCommentsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  active?: Boolean
  active_not?: Boolean
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  beerComments_every?: BeerCommentWhereInput
  beerComments_some?: BeerCommentWhereInput
  beerComments_none?: BeerCommentWhereInput
  breweryComments_every?: BreweryCommentWhereInput
  breweryComments_some?: BreweryCommentWhereInput
  breweryComments_none?: BreweryCommentWhereInput
  beerRatings_every?: BeerRatingWhereInput
  beerRatings_some?: BeerRatingWhereInput
  beerRatings_none?: BeerRatingWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateBar {
  count: Int
}

export interface AggregateBeer {
  count: Int
}

export interface AggregateBeerComment {
  count: Int
}

export interface AggregateBeerRating {
  count: Int
}

export interface AggregateBrewery {
  count: Int
}

export interface AggregateBreweryComment {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface Bar extends Node {
  id: ID_Output
  name: String
  address: String
  lat: String
  long: String
  openTime?: DateTime
  closeTime?: DateTime
  photos: String[]
  beers?: Beer[]
}

/*
 * A connection to a list of items.

 */
export interface BarConnection {
  pageInfo: PageInfo
  edges: BarEdge[]
  aggregate: AggregateBar
}

/*
 * An edge in a connection.

 */
export interface BarEdge {
  node: Bar
  cursor: String
}

export interface BarPreviousValues {
  id: ID_Output
  name: String
  address: String
  lat: String
  long: String
  openTime?: DateTime
  closeTime?: DateTime
  photos: String[]
}

export interface BarSubscriptionPayload {
  mutation: MutationType
  node?: Bar
  updatedFields?: String[]
  previousValues?: BarPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface Beer extends Node {
  id: ID_Output
  name: String
  brewery: Brewery
  photo?: String
  description?: String
  bars?: Bar[]
  beerRating?: BeerRating[]
  comments?: BeerComment[]
}

export interface BeerComment extends Node {
  id: ID_Output
  beer: Beer
  user: User
  comment: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerCommentConnection {
  pageInfo: PageInfo
  edges: BeerCommentEdge[]
  aggregate: AggregateBeerComment
}

/*
 * An edge in a connection.

 */
export interface BeerCommentEdge {
  node: BeerComment
  cursor: String
}

export interface BeerCommentPreviousValues {
  id: ID_Output
  comment: String
  createdAt: DateTime
}

export interface BeerCommentSubscriptionPayload {
  mutation: MutationType
  node?: BeerComment
  updatedFields?: String[]
  previousValues?: BeerCommentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BeerConnection {
  pageInfo: PageInfo
  edges: BeerEdge[]
  aggregate: AggregateBeer
}

/*
 * An edge in a connection.

 */
export interface BeerEdge {
  node: Beer
  cursor: String
}

export interface BeerPreviousValues {
  id: ID_Output
  name: String
  photo?: String
  description?: String
}

export interface BeerRating extends Node {
  id: ID_Output
  user: User
  beer: Beer
  rating: Int
}

/*
 * A connection to a list of items.

 */
export interface BeerRatingConnection {
  pageInfo: PageInfo
  edges: BeerRatingEdge[]
  aggregate: AggregateBeerRating
}

/*
 * An edge in a connection.

 */
export interface BeerRatingEdge {
  node: BeerRating
  cursor: String
}

export interface BeerRatingPreviousValues {
  id: ID_Output
  rating: Int
}

export interface BeerRatingSubscriptionPayload {
  mutation: MutationType
  node?: BeerRating
  updatedFields?: String[]
  previousValues?: BeerRatingPreviousValues
}

export interface BeerSubscriptionPayload {
  mutation: MutationType
  node?: Beer
  updatedFields?: String[]
  previousValues?: BeerPreviousValues
}

export interface Brewery extends Node {
  id: ID_Output
  name: String
  logo?: String
  country?: String
  description?: String
  beers?: Beer[]
  comments?: BreweryComment[]
}

export interface BreweryComment extends Node {
  id: ID_Output
  brewery: Brewery
  user: User
  comment: String
  timestamp: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BreweryCommentConnection {
  pageInfo: PageInfo
  edges: BreweryCommentEdge[]
  aggregate: AggregateBreweryComment
}

/*
 * An edge in a connection.

 */
export interface BreweryCommentEdge {
  node: BreweryComment
  cursor: String
}

export interface BreweryCommentPreviousValues {
  id: ID_Output
  comment: String
  timestamp: DateTime
}

export interface BreweryCommentSubscriptionPayload {
  mutation: MutationType
  node?: BreweryComment
  updatedFields?: String[]
  previousValues?: BreweryCommentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BreweryConnection {
  pageInfo: PageInfo
  edges: BreweryEdge[]
  aggregate: AggregateBrewery
}

/*
 * An edge in a connection.

 */
export interface BreweryEdge {
  node: Brewery
  cursor: String
}

export interface BreweryPreviousValues {
  id: ID_Output
  name: String
  logo?: String
  country?: String
  description?: String
}

export interface BrewerySubscriptionPayload {
  mutation: MutationType
  node?: Brewery
  updatedFields?: String[]
  previousValues?: BreweryPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  role: Role
  active: Boolean
  name?: String
  beerComments?: BeerComment[]
  breweryComments?: BreweryComment[]
  beerRatings?: BeerRating[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  role: Role
  active: Boolean
  name?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string