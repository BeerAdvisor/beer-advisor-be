import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    bars: <T = Bar[]>(args: { where?: BarWhereInput, orderBy?: BarOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barRatings: <T = BarRating[]>(args: { where?: BarRatingWhereInput, orderBy?: BarRatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barComments: <T = BarComment[]>(args: { where?: BarCommentWhereInput, orderBy?: BarCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChanges: <T = BarChange[]>(args: { where?: BarChangeWhereInput, orderBy?: BarChangeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChangeUpvotes: <T = BarChangeUpvote[]>(args: { where?: BarChangeUpvoteWhereInput, orderBy?: BarChangeUpvoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beers: <T = Beer[]>(args: { where?: BeerWhereInput, orderBy?: BeerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerRatings: <T = BeerRating[]>(args: { where?: BeerRatingWhereInput, orderBy?: BeerRatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerComments: <T = BeerComment[]>(args: { where?: BeerCommentWhereInput, orderBy?: BeerCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChanges: <T = BeerChange[]>(args: { where?: BeerChangeWhereInput, orderBy?: BeerChangeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChangeUpvotes: <T = BeerChangeUpvote[]>(args: { where?: BeerChangeUpvoteWhereInput, orderBy?: BeerChangeUpvoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPrices: <T = BeerPrice[]>(args: { where?: BeerPriceWhereInput, orderBy?: BeerPriceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweries: <T = Brewery[]>(args: { where?: BreweryWhereInput, orderBy?: BreweryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bar: <T = Bar>(args: { where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barRating: <T = BarRating>(args: { where: BarRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barComment: <T = BarComment>(args: { where: BarCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barChange: <T = BarChange>(args: { where: BarChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barChangeUpvote: <T = BarChangeUpvote>(args: { where: BarChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beer: <T = Beer>(args: { where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerRating: <T = BeerRating>(args: { where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerComment: <T = BeerComment>(args: { where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerChange: <T = BeerChange>(args: { where: BeerChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerChangeUpvote: <T = BeerChangeUpvote>(args: { where: BeerChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerPrice: <T = BeerPrice>(args: { where: BeerPriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    brewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barsConnection: <T = BarConnection>(args: { where?: BarWhereInput, orderBy?: BarOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barRatingsConnection: <T = BarRatingConnection>(args: { where?: BarRatingWhereInput, orderBy?: BarRatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barCommentsConnection: <T = BarCommentConnection>(args: { where?: BarCommentWhereInput, orderBy?: BarCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChangesConnection: <T = BarChangeConnection>(args: { where?: BarChangeWhereInput, orderBy?: BarChangeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChangeUpvotesConnection: <T = BarChangeUpvoteConnection>(args: { where?: BarChangeUpvoteWhereInput, orderBy?: BarChangeUpvoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beersConnection: <T = BeerConnection>(args: { where?: BeerWhereInput, orderBy?: BeerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerRatingsConnection: <T = BeerRatingConnection>(args: { where?: BeerRatingWhereInput, orderBy?: BeerRatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerCommentsConnection: <T = BeerCommentConnection>(args: { where?: BeerCommentWhereInput, orderBy?: BeerCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChangesConnection: <T = BeerChangeConnection>(args: { where?: BeerChangeWhereInput, orderBy?: BeerChangeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChangeUpvotesConnection: <T = BeerChangeUpvoteConnection>(args: { where?: BeerChangeUpvoteWhereInput, orderBy?: BeerChangeUpvoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPricesConnection: <T = BeerPriceConnection>(args: { where?: BeerPriceWhereInput, orderBy?: BeerPriceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweriesConnection: <T = BreweryConnection>(args: { where?: BreweryWhereInput, orderBy?: BreweryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createBar: <T = Bar>(args: { data: BarCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBarRating: <T = BarRating>(args: { data: BarRatingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBarComment: <T = BarComment>(args: { data: BarCommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBarChange: <T = BarChange>(args: { data: BarChangeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBarChangeUpvote: <T = BarChangeUpvote>(args: { data: BarChangeUpvoteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeer: <T = Beer>(args: { data: BeerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerRating: <T = BeerRating>(args: { data: BeerRatingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerComment: <T = BeerComment>(args: { data: BeerCommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerChange: <T = BeerChange>(args: { data: BeerChangeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerChangeUpvote: <T = BeerChangeUpvote>(args: { data: BeerChangeUpvoteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerPrice: <T = BeerPrice>(args: { data: BeerPriceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBrewery: <T = Brewery>(args: { data: BreweryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBar: <T = Bar>(args: { data: BarUpdateInput, where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarRating: <T = BarRating>(args: { data: BarRatingUpdateInput, where: BarRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarComment: <T = BarComment>(args: { data: BarCommentUpdateInput, where: BarCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarChange: <T = BarChange>(args: { data: BarChangeUpdateInput, where: BarChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarChangeUpvote: <T = BarChangeUpvote>(args: { data: BarChangeUpvoteUpdateInput, where: BarChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeer: <T = Beer>(args: { data: BeerUpdateInput, where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerRating: <T = BeerRating>(args: { data: BeerRatingUpdateInput, where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerComment: <T = BeerComment>(args: { data: BeerCommentUpdateInput, where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerChange: <T = BeerChange>(args: { data: BeerChangeUpdateInput, where: BeerChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerChangeUpvote: <T = BeerChangeUpvote>(args: { data: BeerChangeUpvoteUpdateInput, where: BeerChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerPrice: <T = BeerPrice>(args: { data: BeerPriceUpdateInput, where: BeerPriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBrewery: <T = Brewery>(args: { data: BreweryUpdateInput, where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBar: <T = Bar>(args: { where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarRating: <T = BarRating>(args: { where: BarRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarComment: <T = BarComment>(args: { where: BarCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarChange: <T = BarChange>(args: { where: BarChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarChangeUpvote: <T = BarChangeUpvote>(args: { where: BarChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeer: <T = Beer>(args: { where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerRating: <T = BeerRating>(args: { where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerComment: <T = BeerComment>(args: { where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerChange: <T = BeerChange>(args: { where: BeerChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerChangeUpvote: <T = BeerChangeUpvote>(args: { where: BeerChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerPrice: <T = BeerPrice>(args: { where: BeerPriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBrewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertBar: <T = Bar>(args: { where: BarWhereUniqueInput, create: BarCreateInput, update: BarUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBarRating: <T = BarRating>(args: { where: BarRatingWhereUniqueInput, create: BarRatingCreateInput, update: BarRatingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBarComment: <T = BarComment>(args: { where: BarCommentWhereUniqueInput, create: BarCommentCreateInput, update: BarCommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBarChange: <T = BarChange>(args: { where: BarChangeWhereUniqueInput, create: BarChangeCreateInput, update: BarChangeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBarChangeUpvote: <T = BarChangeUpvote>(args: { where: BarChangeUpvoteWhereUniqueInput, create: BarChangeUpvoteCreateInput, update: BarChangeUpvoteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeer: <T = Beer>(args: { where: BeerWhereUniqueInput, create: BeerCreateInput, update: BeerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerRating: <T = BeerRating>(args: { where: BeerRatingWhereUniqueInput, create: BeerRatingCreateInput, update: BeerRatingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerComment: <T = BeerComment>(args: { where: BeerCommentWhereUniqueInput, create: BeerCommentCreateInput, update: BeerCommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerChange: <T = BeerChange>(args: { where: BeerChangeWhereUniqueInput, create: BeerChangeCreateInput, update: BeerChangeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerChangeUpvote: <T = BeerChangeUpvote>(args: { where: BeerChangeUpvoteWhereUniqueInput, create: BeerChangeUpvoteCreateInput, update: BeerChangeUpvoteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerPrice: <T = BeerPrice>(args: { where: BeerPriceWhereUniqueInput, create: BeerPriceCreateInput, update: BeerPriceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBrewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput, create: BreweryCreateInput, update: BreweryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBars: <T = BatchPayload>(args: { data: BarUpdateManyMutationInput, where?: BarWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBarRatings: <T = BatchPayload>(args: { data: BarRatingUpdateManyMutationInput, where?: BarRatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBarComments: <T = BatchPayload>(args: { data: BarCommentUpdateManyMutationInput, where?: BarCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBarChanges: <T = BatchPayload>(args: { data: BarChangeUpdateManyMutationInput, where?: BarChangeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeers: <T = BatchPayload>(args: { data: BeerUpdateManyMutationInput, where?: BeerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerRatings: <T = BatchPayload>(args: { data: BeerRatingUpdateManyMutationInput, where?: BeerRatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerComments: <T = BatchPayload>(args: { data: BeerCommentUpdateManyMutationInput, where?: BeerCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerChanges: <T = BatchPayload>(args: { data: BeerChangeUpdateManyMutationInput, where?: BeerChangeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerPrices: <T = BatchPayload>(args: { data: BeerPriceUpdateManyMutationInput, where?: BeerPriceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBreweries: <T = BatchPayload>(args: { data: BreweryUpdateManyMutationInput, where?: BreweryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBars: <T = BatchPayload>(args: { where?: BarWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarRatings: <T = BatchPayload>(args: { where?: BarRatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarComments: <T = BatchPayload>(args: { where?: BarCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarChanges: <T = BatchPayload>(args: { where?: BarChangeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarChangeUpvotes: <T = BatchPayload>(args: { where?: BarChangeUpvoteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeers: <T = BatchPayload>(args: { where?: BeerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerRatings: <T = BatchPayload>(args: { where?: BeerRatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerComments: <T = BatchPayload>(args: { where?: BeerCommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerChanges: <T = BatchPayload>(args: { where?: BeerChangeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerChangeUpvotes: <T = BatchPayload>(args: { where?: BeerChangeUpvoteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerPrices: <T = BatchPayload>(args: { where?: BeerPriceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBreweries: <T = BatchPayload>(args: { where?: BreweryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    bar: <T = BarSubscriptionPayload>(args: { where?: BarSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barRating: <T = BarRatingSubscriptionPayload>(args: { where?: BarRatingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barComment: <T = BarCommentSubscriptionPayload>(args: { where?: BarCommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barChange: <T = BarChangeSubscriptionPayload>(args: { where?: BarChangeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barChangeUpvote: <T = BarChangeUpvoteSubscriptionPayload>(args: { where?: BarChangeUpvoteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beer: <T = BeerSubscriptionPayload>(args: { where?: BeerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerRating: <T = BeerRatingSubscriptionPayload>(args: { where?: BeerRatingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerComment: <T = BeerCommentSubscriptionPayload>(args: { where?: BeerCommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerChange: <T = BeerChangeSubscriptionPayload>(args: { where?: BeerChangeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerChangeUpvote: <T = BeerChangeUpvoteSubscriptionPayload>(args: { where?: BeerChangeUpvoteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerPrice: <T = BeerPriceSubscriptionPayload>(args: { where?: BeerPriceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    brewery: <T = BrewerySubscriptionPayload>(args: { where?: BrewerySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Bar: (where?: BarWhereInput) => Promise<boolean>
  BarRating: (where?: BarRatingWhereInput) => Promise<boolean>
  BarComment: (where?: BarCommentWhereInput) => Promise<boolean>
  BarChange: (where?: BarChangeWhereInput) => Promise<boolean>
  BarChangeUpvote: (where?: BarChangeUpvoteWhereInput) => Promise<boolean>
  Beer: (where?: BeerWhereInput) => Promise<boolean>
  BeerRating: (where?: BeerRatingWhereInput) => Promise<boolean>
  BeerComment: (where?: BeerCommentWhereInput) => Promise<boolean>
  BeerChange: (where?: BeerChangeWhereInput) => Promise<boolean>
  BeerChangeUpvote: (where?: BeerChangeUpvoteWhereInput) => Promise<boolean>
  BeerPrice: (where?: BeerPriceWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Brewery: (where?: BreweryWhereInput) => Promise<boolean>
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

type AggregateBarChange {
  count: Int!
}

type AggregateBarChangeUpvote {
  count: Int!
}

type AggregateBarComment {
  count: Int!
}

type AggregateBarRating {
  count: Int!
}

type AggregateBeer {
  count: Int!
}

type AggregateBeerChange {
  count: Int!
}

type AggregateBeerChangeUpvote {
  count: Int!
}

type AggregateBeerComment {
  count: Int!
}

type AggregateBeerPrice {
  count: Int!
}

type AggregateBeerRating {
  count: Int!
}

type AggregateBrewery {
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
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: [String!]!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
  barRating(where: BarRatingWhereInput, orderBy: BarRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarRating!]
  beerPrices(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice!]
  barComments(where: BarCommentWhereInput, orderBy: BarCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarComment!]
  barChanges(where: BarChangeWhereInput, orderBy: BarChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChange!]
  createdBy: User!
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type BarChange implements Node {
  id: ID!
  price: Float!
  field: String!
  newValue: String!
  user: User!
  bar: Bar!
  upvotes(where: BarChangeUpvoteWhereInput, orderBy: BarChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChangeUpvote!]
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BarChangeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BarChangeEdge]!
  aggregate: AggregateBarChange!
}

input BarChangeCreateInput {
  price: Float!
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBarChangesInput!
  bar: BarCreateOneWithoutBarChangesInput!
  upvotes: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

input BarChangeCreateManyWithoutBarInput {
  create: [BarChangeCreateWithoutBarInput!]
  connect: [BarChangeWhereUniqueInput!]
}

input BarChangeCreateManyWithoutUserInput {
  create: [BarChangeCreateWithoutUserInput!]
  connect: [BarChangeWhereUniqueInput!]
}

input BarChangeCreateOneWithoutUpvotesInput {
  create: BarChangeCreateWithoutUpvotesInput
  connect: BarChangeWhereUniqueInput
}

input BarChangeCreateWithoutBarInput {
  price: Float!
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBarChangesInput!
  upvotes: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

input BarChangeCreateWithoutUpvotesInput {
  price: Float!
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBarChangesInput!
  bar: BarCreateOneWithoutBarChangesInput!
}

input BarChangeCreateWithoutUserInput {
  price: Float!
  field: String!
  newValue: String!
  bar: BarCreateOneWithoutBarChangesInput!
  upvotes: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

"""An edge in a connection."""
type BarChangeEdge {
  """The item at the end of the edge."""
  node: BarChange!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BarChangeOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  field_ASC
  field_DESC
  newValue_ASC
  newValue_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BarChangePreviousValues {
  id: ID!
  price: Float!
  field: String!
  newValue: String!
  createdAt: DateTime!
}

input BarChangeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BarChangeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarChangeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarChangeScalarWhereInput!]
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
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  field: String

  """All values that are not equal to given value."""
  field_not: String

  """All values that are contained in given list."""
  field_in: [String!]

  """All values that are not contained in given list."""
  field_not_in: [String!]

  """All values less than the given value."""
  field_lt: String

  """All values less than or equal the given value."""
  field_lte: String

  """All values greater than the given value."""
  field_gt: String

  """All values greater than or equal the given value."""
  field_gte: String

  """All values containing the given string."""
  field_contains: String

  """All values not containing the given string."""
  field_not_contains: String

  """All values starting with the given string."""
  field_starts_with: String

  """All values not starting with the given string."""
  field_not_starts_with: String

  """All values ending with the given string."""
  field_ends_with: String

  """All values not ending with the given string."""
  field_not_ends_with: String
  newValue: String

  """All values that are not equal to given value."""
  newValue_not: String

  """All values that are contained in given list."""
  newValue_in: [String!]

  """All values that are not contained in given list."""
  newValue_not_in: [String!]

  """All values less than the given value."""
  newValue_lt: String

  """All values less than or equal the given value."""
  newValue_lte: String

  """All values greater than the given value."""
  newValue_gt: String

  """All values greater than or equal the given value."""
  newValue_gte: String

  """All values containing the given string."""
  newValue_contains: String

  """All values not containing the given string."""
  newValue_not_contains: String

  """All values starting with the given string."""
  newValue_starts_with: String

  """All values not starting with the given string."""
  newValue_not_starts_with: String

  """All values ending with the given string."""
  newValue_ends_with: String

  """All values not ending with the given string."""
  newValue_not_ends_with: String
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

type BarChangeSubscriptionPayload {
  mutation: MutationType!
  node: BarChange
  updatedFields: [String!]
  previousValues: BarChangePreviousValues
}

input BarChangeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BarChangeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarChangeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarChangeSubscriptionWhereInput!]

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
  node: BarChangeWhereInput
}

input BarChangeUpdateInput {
  price: Float
  field: String
  newValue: String
  user: UserUpdateOneRequiredWithoutBarChangesInput
  bar: BarUpdateOneRequiredWithoutBarChangesInput
  upvotes: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

input BarChangeUpdateManyDataInput {
  price: Float
  field: String
  newValue: String
}

input BarChangeUpdateManyMutationInput {
  price: Float
  field: String
  newValue: String
}

input BarChangeUpdateManyWithoutBarInput {
  create: [BarChangeCreateWithoutBarInput!]
  connect: [BarChangeWhereUniqueInput!]
  set: [BarChangeWhereUniqueInput!]
  disconnect: [BarChangeWhereUniqueInput!]
  delete: [BarChangeWhereUniqueInput!]
  update: [BarChangeUpdateWithWhereUniqueWithoutBarInput!]
  updateMany: [BarChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BarChangeScalarWhereInput!]
  upsert: [BarChangeUpsertWithWhereUniqueWithoutBarInput!]
}

input BarChangeUpdateManyWithoutUserInput {
  create: [BarChangeCreateWithoutUserInput!]
  connect: [BarChangeWhereUniqueInput!]
  set: [BarChangeWhereUniqueInput!]
  disconnect: [BarChangeWhereUniqueInput!]
  delete: [BarChangeWhereUniqueInput!]
  update: [BarChangeUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BarChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BarChangeScalarWhereInput!]
  upsert: [BarChangeUpsertWithWhereUniqueWithoutUserInput!]
}

input BarChangeUpdateManyWithWhereNestedInput {
  where: BarChangeScalarWhereInput!
  data: BarChangeUpdateManyDataInput!
}

input BarChangeUpdateOneRequiredWithoutUpvotesInput {
  create: BarChangeCreateWithoutUpvotesInput
  connect: BarChangeWhereUniqueInput
  update: BarChangeUpdateWithoutUpvotesDataInput
  upsert: BarChangeUpsertWithoutUpvotesInput
}

input BarChangeUpdateWithoutBarDataInput {
  price: Float
  field: String
  newValue: String
  user: UserUpdateOneRequiredWithoutBarChangesInput
  upvotes: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

input BarChangeUpdateWithoutUpvotesDataInput {
  price: Float
  field: String
  newValue: String
  user: UserUpdateOneRequiredWithoutBarChangesInput
  bar: BarUpdateOneRequiredWithoutBarChangesInput
}

input BarChangeUpdateWithoutUserDataInput {
  price: Float
  field: String
  newValue: String
  bar: BarUpdateOneRequiredWithoutBarChangesInput
  upvotes: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

input BarChangeUpdateWithWhereUniqueWithoutBarInput {
  where: BarChangeWhereUniqueInput!
  data: BarChangeUpdateWithoutBarDataInput!
}

input BarChangeUpdateWithWhereUniqueWithoutUserInput {
  where: BarChangeWhereUniqueInput!
  data: BarChangeUpdateWithoutUserDataInput!
}

input BarChangeUpsertWithoutUpvotesInput {
  update: BarChangeUpdateWithoutUpvotesDataInput!
  create: BarChangeCreateWithoutUpvotesInput!
}

input BarChangeUpsertWithWhereUniqueWithoutBarInput {
  where: BarChangeWhereUniqueInput!
  update: BarChangeUpdateWithoutBarDataInput!
  create: BarChangeCreateWithoutBarInput!
}

input BarChangeUpsertWithWhereUniqueWithoutUserInput {
  where: BarChangeWhereUniqueInput!
  update: BarChangeUpdateWithoutUserDataInput!
  create: BarChangeCreateWithoutUserInput!
}

type BarChangeUpvote implements Node {
  id: ID!
  user: User!
  barChange: BarChange!
}

"""A connection to a list of items."""
type BarChangeUpvoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BarChangeUpvoteEdge]!
  aggregate: AggregateBarChangeUpvote!
}

input BarChangeUpvoteCreateInput {
  user: UserCreateOneWithoutBarChangeUpvotesInput!
  barChange: BarChangeCreateOneWithoutUpvotesInput!
}

input BarChangeUpvoteCreateManyWithoutBarChangeInput {
  create: [BarChangeUpvoteCreateWithoutBarChangeInput!]
  connect: [BarChangeUpvoteWhereUniqueInput!]
}

input BarChangeUpvoteCreateManyWithoutUserInput {
  create: [BarChangeUpvoteCreateWithoutUserInput!]
  connect: [BarChangeUpvoteWhereUniqueInput!]
}

input BarChangeUpvoteCreateWithoutBarChangeInput {
  user: UserCreateOneWithoutBarChangeUpvotesInput!
}

input BarChangeUpvoteCreateWithoutUserInput {
  barChange: BarChangeCreateOneWithoutUpvotesInput!
}

"""An edge in a connection."""
type BarChangeUpvoteEdge {
  """The item at the end of the edge."""
  node: BarChangeUpvote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BarChangeUpvoteOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BarChangeUpvotePreviousValues {
  id: ID!
}

input BarChangeUpvoteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BarChangeUpvoteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarChangeUpvoteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarChangeUpvoteScalarWhereInput!]
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
}

type BarChangeUpvoteSubscriptionPayload {
  mutation: MutationType!
  node: BarChangeUpvote
  updatedFields: [String!]
  previousValues: BarChangeUpvotePreviousValues
}

input BarChangeUpvoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BarChangeUpvoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarChangeUpvoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarChangeUpvoteSubscriptionWhereInput!]

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
  node: BarChangeUpvoteWhereInput
}

input BarChangeUpvoteUpdateInput {
  user: UserUpdateOneRequiredWithoutBarChangeUpvotesInput
  barChange: BarChangeUpdateOneRequiredWithoutUpvotesInput
}

input BarChangeUpvoteUpdateManyWithoutBarChangeInput {
  create: [BarChangeUpvoteCreateWithoutBarChangeInput!]
  connect: [BarChangeUpvoteWhereUniqueInput!]
  set: [BarChangeUpvoteWhereUniqueInput!]
  disconnect: [BarChangeUpvoteWhereUniqueInput!]
  delete: [BarChangeUpvoteWhereUniqueInput!]
  update: [BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput!]
  deleteMany: [BarChangeUpvoteScalarWhereInput!]
  upsert: [BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput!]
}

input BarChangeUpvoteUpdateManyWithoutUserInput {
  create: [BarChangeUpvoteCreateWithoutUserInput!]
  connect: [BarChangeUpvoteWhereUniqueInput!]
  set: [BarChangeUpvoteWhereUniqueInput!]
  disconnect: [BarChangeUpvoteWhereUniqueInput!]
  delete: [BarChangeUpvoteWhereUniqueInput!]
  update: [BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput!]
  deleteMany: [BarChangeUpvoteScalarWhereInput!]
  upsert: [BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput!]
}

input BarChangeUpvoteUpdateWithoutBarChangeDataInput {
  user: UserUpdateOneRequiredWithoutBarChangeUpvotesInput
}

input BarChangeUpvoteUpdateWithoutUserDataInput {
  barChange: BarChangeUpdateOneRequiredWithoutUpvotesInput
}

input BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput {
  where: BarChangeUpvoteWhereUniqueInput!
  data: BarChangeUpvoteUpdateWithoutBarChangeDataInput!
}

input BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput {
  where: BarChangeUpvoteWhereUniqueInput!
  data: BarChangeUpvoteUpdateWithoutUserDataInput!
}

input BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput {
  where: BarChangeUpvoteWhereUniqueInput!
  update: BarChangeUpvoteUpdateWithoutBarChangeDataInput!
  create: BarChangeUpvoteCreateWithoutBarChangeInput!
}

input BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput {
  where: BarChangeUpvoteWhereUniqueInput!
  update: BarChangeUpvoteUpdateWithoutUserDataInput!
  create: BarChangeUpvoteCreateWithoutUserInput!
}

input BarChangeUpvoteWhereInput {
  """Logical AND on all given filters."""
  AND: [BarChangeUpvoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarChangeUpvoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarChangeUpvoteWhereInput!]
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
  user: UserWhereInput
  barChange: BarChangeWhereInput
}

input BarChangeUpvoteWhereUniqueInput {
  id: ID
}

input BarChangeWhereInput {
  """Logical AND on all given filters."""
  AND: [BarChangeWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarChangeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarChangeWhereInput!]
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
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  field: String

  """All values that are not equal to given value."""
  field_not: String

  """All values that are contained in given list."""
  field_in: [String!]

  """All values that are not contained in given list."""
  field_not_in: [String!]

  """All values less than the given value."""
  field_lt: String

  """All values less than or equal the given value."""
  field_lte: String

  """All values greater than the given value."""
  field_gt: String

  """All values greater than or equal the given value."""
  field_gte: String

  """All values containing the given string."""
  field_contains: String

  """All values not containing the given string."""
  field_not_contains: String

  """All values starting with the given string."""
  field_starts_with: String

  """All values not starting with the given string."""
  field_not_starts_with: String

  """All values ending with the given string."""
  field_ends_with: String

  """All values not ending with the given string."""
  field_not_ends_with: String
  newValue: String

  """All values that are not equal to given value."""
  newValue_not: String

  """All values that are contained in given list."""
  newValue_in: [String!]

  """All values that are not contained in given list."""
  newValue_not_in: [String!]

  """All values less than the given value."""
  newValue_lt: String

  """All values less than or equal the given value."""
  newValue_lte: String

  """All values greater than the given value."""
  newValue_gt: String

  """All values greater than or equal the given value."""
  newValue_gte: String

  """All values containing the given string."""
  newValue_contains: String

  """All values not containing the given string."""
  newValue_not_contains: String

  """All values starting with the given string."""
  newValue_starts_with: String

  """All values not starting with the given string."""
  newValue_not_starts_with: String

  """All values ending with the given string."""
  newValue_ends_with: String

  """All values not ending with the given string."""
  newValue_not_ends_with: String
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
  user: UserWhereInput
  bar: BarWhereInput
  upvotes_every: BarChangeUpvoteWhereInput
  upvotes_some: BarChangeUpvoteWhereInput
  upvotes_none: BarChangeUpvoteWhereInput
}

input BarChangeWhereUniqueInput {
  id: ID
}

type BarComment implements Node {
  id: ID!
  comment: String!
  bar: Bar!
  user: User!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BarCommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BarCommentEdge]!
  aggregate: AggregateBarComment!
}

input BarCommentCreateInput {
  comment: String!
  bar: BarCreateOneWithoutBarCommentsInput!
  user: UserCreateOneWithoutBarCommentsInput!
}

input BarCommentCreateManyWithoutBarInput {
  create: [BarCommentCreateWithoutBarInput!]
  connect: [BarCommentWhereUniqueInput!]
}

input BarCommentCreateManyWithoutUserInput {
  create: [BarCommentCreateWithoutUserInput!]
  connect: [BarCommentWhereUniqueInput!]
}

input BarCommentCreateWithoutBarInput {
  comment: String!
  user: UserCreateOneWithoutBarCommentsInput!
}

input BarCommentCreateWithoutUserInput {
  comment: String!
  bar: BarCreateOneWithoutBarCommentsInput!
}

"""An edge in a connection."""
type BarCommentEdge {
  """The item at the end of the edge."""
  node: BarComment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BarCommentOrderByInput {
  id_ASC
  id_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BarCommentPreviousValues {
  id: ID!
  comment: String!
  createdAt: DateTime!
}

input BarCommentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BarCommentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarCommentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarCommentScalarWhereInput!]
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

type BarCommentSubscriptionPayload {
  mutation: MutationType!
  node: BarComment
  updatedFields: [String!]
  previousValues: BarCommentPreviousValues
}

input BarCommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BarCommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarCommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarCommentSubscriptionWhereInput!]

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
  node: BarCommentWhereInput
}

input BarCommentUpdateInput {
  comment: String
  bar: BarUpdateOneRequiredWithoutBarCommentsInput
  user: UserUpdateOneRequiredWithoutBarCommentsInput
}

input BarCommentUpdateManyDataInput {
  comment: String
}

input BarCommentUpdateManyMutationInput {
  comment: String
}

input BarCommentUpdateManyWithoutBarInput {
  create: [BarCommentCreateWithoutBarInput!]
  connect: [BarCommentWhereUniqueInput!]
  set: [BarCommentWhereUniqueInput!]
  disconnect: [BarCommentWhereUniqueInput!]
  delete: [BarCommentWhereUniqueInput!]
  update: [BarCommentUpdateWithWhereUniqueWithoutBarInput!]
  updateMany: [BarCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [BarCommentScalarWhereInput!]
  upsert: [BarCommentUpsertWithWhereUniqueWithoutBarInput!]
}

input BarCommentUpdateManyWithoutUserInput {
  create: [BarCommentCreateWithoutUserInput!]
  connect: [BarCommentWhereUniqueInput!]
  set: [BarCommentWhereUniqueInput!]
  disconnect: [BarCommentWhereUniqueInput!]
  delete: [BarCommentWhereUniqueInput!]
  update: [BarCommentUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BarCommentUpdateManyWithWhereNestedInput!]
  deleteMany: [BarCommentScalarWhereInput!]
  upsert: [BarCommentUpsertWithWhereUniqueWithoutUserInput!]
}

input BarCommentUpdateManyWithWhereNestedInput {
  where: BarCommentScalarWhereInput!
  data: BarCommentUpdateManyDataInput!
}

input BarCommentUpdateWithoutBarDataInput {
  comment: String
  user: UserUpdateOneRequiredWithoutBarCommentsInput
}

input BarCommentUpdateWithoutUserDataInput {
  comment: String
  bar: BarUpdateOneRequiredWithoutBarCommentsInput
}

input BarCommentUpdateWithWhereUniqueWithoutBarInput {
  where: BarCommentWhereUniqueInput!
  data: BarCommentUpdateWithoutBarDataInput!
}

input BarCommentUpdateWithWhereUniqueWithoutUserInput {
  where: BarCommentWhereUniqueInput!
  data: BarCommentUpdateWithoutUserDataInput!
}

input BarCommentUpsertWithWhereUniqueWithoutBarInput {
  where: BarCommentWhereUniqueInput!
  update: BarCommentUpdateWithoutBarDataInput!
  create: BarCommentCreateWithoutBarInput!
}

input BarCommentUpsertWithWhereUniqueWithoutUserInput {
  where: BarCommentWhereUniqueInput!
  update: BarCommentUpdateWithoutUserDataInput!
  create: BarCommentCreateWithoutUserInput!
}

input BarCommentWhereInput {
  """Logical AND on all given filters."""
  AND: [BarCommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarCommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarCommentWhereInput!]
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
  bar: BarWhereInput
  user: UserWhereInput
}

input BarCommentWhereUniqueInput {
  id: ID
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
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  barRating: BarRatingCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateManyWithoutBeersInput {
  create: [BarCreateWithoutBeersInput!]
  connect: [BarWhereUniqueInput!]
}

input BarCreateManyWithoutCreatedByInput {
  create: [BarCreateWithoutCreatedByInput!]
  connect: [BarWhereUniqueInput!]
}

input BarCreateManyWithoutLikedByInput {
  create: [BarCreateWithoutLikedByInput!]
  connect: [BarWhereUniqueInput!]
}

input BarCreateOneWithoutBarChangesInput {
  create: BarCreateWithoutBarChangesInput
  connect: BarWhereUniqueInput
}

input BarCreateOneWithoutBarCommentsInput {
  create: BarCreateWithoutBarCommentsInput
  connect: BarWhereUniqueInput
}

input BarCreateOneWithoutBarRatingInput {
  create: BarCreateWithoutBarRatingInput
  connect: BarWhereUniqueInput
}

input BarCreateOneWithoutBeerPricesInput {
  create: BarCreateWithoutBeerPricesInput
  connect: BarWhereUniqueInput
}

input BarCreatephotosInput {
  set: [String!]
}

input BarCreateWithoutBarChangesInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  barRating: BarRatingCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutBarCommentsInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  barRating: BarRatingCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutBarRatingInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutBeerPricesInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  barRating: BarRatingCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutBeersInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  barRating: BarRatingCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutCreatedByInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  barRating: BarRatingCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutLikedByInput {
  name: String!
  address: String!
  lat: String!
  long: String!
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarCreatephotosInput
  beers: BeerCreateManyWithoutBarsInput
  barRating: BarRatingCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput!
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
  phone_ASC
  phone_DESC
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
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: [String!]!
}

type BarRating implements Node {
  id: ID!
  rating: Float!
  user: User!
  bar: Bar!
}

"""A connection to a list of items."""
type BarRatingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BarRatingEdge]!
  aggregate: AggregateBarRating!
}

input BarRatingCreateInput {
  rating: Float!
  user: UserCreateOneWithoutBarRatingsInput!
  bar: BarCreateOneWithoutBarRatingInput!
}

input BarRatingCreateManyWithoutBarInput {
  create: [BarRatingCreateWithoutBarInput!]
  connect: [BarRatingWhereUniqueInput!]
}

input BarRatingCreateManyWithoutUserInput {
  create: [BarRatingCreateWithoutUserInput!]
  connect: [BarRatingWhereUniqueInput!]
}

input BarRatingCreateWithoutBarInput {
  rating: Float!
  user: UserCreateOneWithoutBarRatingsInput!
}

input BarRatingCreateWithoutUserInput {
  rating: Float!
  bar: BarCreateOneWithoutBarRatingInput!
}

"""An edge in a connection."""
type BarRatingEdge {
  """The item at the end of the edge."""
  node: BarRating!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BarRatingOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BarRatingPreviousValues {
  id: ID!
  rating: Float!
}

input BarRatingScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BarRatingScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarRatingScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarRatingScalarWhereInput!]
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
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
}

type BarRatingSubscriptionPayload {
  mutation: MutationType!
  node: BarRating
  updatedFields: [String!]
  previousValues: BarRatingPreviousValues
}

input BarRatingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BarRatingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarRatingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarRatingSubscriptionWhereInput!]

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
  node: BarRatingWhereInput
}

input BarRatingUpdateInput {
  rating: Float
  user: UserUpdateOneRequiredWithoutBarRatingsInput
  bar: BarUpdateOneRequiredWithoutBarRatingInput
}

input BarRatingUpdateManyDataInput {
  rating: Float
}

input BarRatingUpdateManyMutationInput {
  rating: Float
}

input BarRatingUpdateManyWithoutBarInput {
  create: [BarRatingCreateWithoutBarInput!]
  connect: [BarRatingWhereUniqueInput!]
  set: [BarRatingWhereUniqueInput!]
  disconnect: [BarRatingWhereUniqueInput!]
  delete: [BarRatingWhereUniqueInput!]
  update: [BarRatingUpdateWithWhereUniqueWithoutBarInput!]
  updateMany: [BarRatingUpdateManyWithWhereNestedInput!]
  deleteMany: [BarRatingScalarWhereInput!]
  upsert: [BarRatingUpsertWithWhereUniqueWithoutBarInput!]
}

input BarRatingUpdateManyWithoutUserInput {
  create: [BarRatingCreateWithoutUserInput!]
  connect: [BarRatingWhereUniqueInput!]
  set: [BarRatingWhereUniqueInput!]
  disconnect: [BarRatingWhereUniqueInput!]
  delete: [BarRatingWhereUniqueInput!]
  update: [BarRatingUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BarRatingUpdateManyWithWhereNestedInput!]
  deleteMany: [BarRatingScalarWhereInput!]
  upsert: [BarRatingUpsertWithWhereUniqueWithoutUserInput!]
}

input BarRatingUpdateManyWithWhereNestedInput {
  where: BarRatingScalarWhereInput!
  data: BarRatingUpdateManyDataInput!
}

input BarRatingUpdateWithoutBarDataInput {
  rating: Float
  user: UserUpdateOneRequiredWithoutBarRatingsInput
}

input BarRatingUpdateWithoutUserDataInput {
  rating: Float
  bar: BarUpdateOneRequiredWithoutBarRatingInput
}

input BarRatingUpdateWithWhereUniqueWithoutBarInput {
  where: BarRatingWhereUniqueInput!
  data: BarRatingUpdateWithoutBarDataInput!
}

input BarRatingUpdateWithWhereUniqueWithoutUserInput {
  where: BarRatingWhereUniqueInput!
  data: BarRatingUpdateWithoutUserDataInput!
}

input BarRatingUpsertWithWhereUniqueWithoutBarInput {
  where: BarRatingWhereUniqueInput!
  update: BarRatingUpdateWithoutBarDataInput!
  create: BarRatingCreateWithoutBarInput!
}

input BarRatingUpsertWithWhereUniqueWithoutUserInput {
  where: BarRatingWhereUniqueInput!
  update: BarRatingUpdateWithoutUserDataInput!
  create: BarRatingCreateWithoutUserInput!
}

input BarRatingWhereInput {
  """Logical AND on all given filters."""
  AND: [BarRatingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BarRatingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BarRatingWhereInput!]
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
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
  user: UserWhereInput
  bar: BarWhereInput
}

input BarRatingWhereUniqueInput {
  id: ID
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
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
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
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  barRating: BarRatingUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateManyDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
}

input BarUpdateManyMutationInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
}

input BarUpdateManyWithoutBeersInput {
  create: [BarCreateWithoutBeersInput!]
  connect: [BarWhereUniqueInput!]
  set: [BarWhereUniqueInput!]
  disconnect: [BarWhereUniqueInput!]
  delete: [BarWhereUniqueInput!]
  update: [BarUpdateWithWhereUniqueWithoutBeersInput!]
  updateMany: [BarUpdateManyWithWhereNestedInput!]
  deleteMany: [BarScalarWhereInput!]
  upsert: [BarUpsertWithWhereUniqueWithoutBeersInput!]
}

input BarUpdateManyWithoutCreatedByInput {
  create: [BarCreateWithoutCreatedByInput!]
  connect: [BarWhereUniqueInput!]
  set: [BarWhereUniqueInput!]
  disconnect: [BarWhereUniqueInput!]
  delete: [BarWhereUniqueInput!]
  update: [BarUpdateWithWhereUniqueWithoutCreatedByInput!]
  updateMany: [BarUpdateManyWithWhereNestedInput!]
  deleteMany: [BarScalarWhereInput!]
  upsert: [BarUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input BarUpdateManyWithoutLikedByInput {
  create: [BarCreateWithoutLikedByInput!]
  connect: [BarWhereUniqueInput!]
  set: [BarWhereUniqueInput!]
  disconnect: [BarWhereUniqueInput!]
  delete: [BarWhereUniqueInput!]
  update: [BarUpdateWithWhereUniqueWithoutLikedByInput!]
  updateMany: [BarUpdateManyWithWhereNestedInput!]
  deleteMany: [BarScalarWhereInput!]
  upsert: [BarUpsertWithWhereUniqueWithoutLikedByInput!]
}

input BarUpdateManyWithWhereNestedInput {
  where: BarScalarWhereInput!
  data: BarUpdateManyDataInput!
}

input BarUpdateOneRequiredWithoutBarChangesInput {
  create: BarCreateWithoutBarChangesInput
  connect: BarWhereUniqueInput
  update: BarUpdateWithoutBarChangesDataInput
  upsert: BarUpsertWithoutBarChangesInput
}

input BarUpdateOneRequiredWithoutBarCommentsInput {
  create: BarCreateWithoutBarCommentsInput
  connect: BarWhereUniqueInput
  update: BarUpdateWithoutBarCommentsDataInput
  upsert: BarUpsertWithoutBarCommentsInput
}

input BarUpdateOneRequiredWithoutBarRatingInput {
  create: BarCreateWithoutBarRatingInput
  connect: BarWhereUniqueInput
  update: BarUpdateWithoutBarRatingDataInput
  upsert: BarUpsertWithoutBarRatingInput
}

input BarUpdateOneRequiredWithoutBeerPricesInput {
  create: BarCreateWithoutBeerPricesInput
  connect: BarWhereUniqueInput
  update: BarUpdateWithoutBeerPricesDataInput
  upsert: BarUpsertWithoutBeerPricesInput
}

input BarUpdatephotosInput {
  set: [String!]
}

input BarUpdateWithoutBarChangesDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  barRating: BarRatingUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutBarCommentsDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  barRating: BarRatingUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutBarRatingDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutBeerPricesDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  barRating: BarRatingUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutBeersDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  barRating: BarRatingUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutCreatedByDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  barRating: BarRatingUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutLikedByDataInput {
  name: String
  address: String
  lat: String
  long: String
  phone: String
  openTime: DateTime
  closeTime: DateTime
  photos: BarUpdatephotosInput
  beers: BeerUpdateManyWithoutBarsInput
  barRating: BarRatingUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBarsInput
}

input BarUpdateWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput!
  data: BarUpdateWithoutBeersDataInput!
}

input BarUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BarWhereUniqueInput!
  data: BarUpdateWithoutCreatedByDataInput!
}

input BarUpdateWithWhereUniqueWithoutLikedByInput {
  where: BarWhereUniqueInput!
  data: BarUpdateWithoutLikedByDataInput!
}

input BarUpsertWithoutBarChangesInput {
  update: BarUpdateWithoutBarChangesDataInput!
  create: BarCreateWithoutBarChangesInput!
}

input BarUpsertWithoutBarCommentsInput {
  update: BarUpdateWithoutBarCommentsDataInput!
  create: BarCreateWithoutBarCommentsInput!
}

input BarUpsertWithoutBarRatingInput {
  update: BarUpdateWithoutBarRatingDataInput!
  create: BarCreateWithoutBarRatingInput!
}

input BarUpsertWithoutBeerPricesInput {
  update: BarUpdateWithoutBeerPricesDataInput!
  create: BarCreateWithoutBeerPricesInput!
}

input BarUpsertWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput!
  update: BarUpdateWithoutBeersDataInput!
  create: BarCreateWithoutBeersInput!
}

input BarUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BarWhereUniqueInput!
  update: BarUpdateWithoutCreatedByDataInput!
  create: BarCreateWithoutCreatedByInput!
}

input BarUpsertWithWhereUniqueWithoutLikedByInput {
  where: BarWhereUniqueInput!
  update: BarUpdateWithoutLikedByDataInput!
  create: BarCreateWithoutLikedByInput!
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
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
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
  barRating_every: BarRatingWhereInput
  barRating_some: BarRatingWhereInput
  barRating_none: BarRatingWhereInput
  beerPrices_every: BeerPriceWhereInput
  beerPrices_some: BeerPriceWhereInput
  beerPrices_none: BeerPriceWhereInput
  barComments_every: BarCommentWhereInput
  barComments_some: BarCommentWhereInput
  barComments_none: BarCommentWhereInput
  barChanges_every: BarChangeWhereInput
  barChanges_some: BarChangeWhereInput
  barChanges_none: BarChangeWhereInput
  createdBy: UserWhereInput
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
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
  type: String!
  strong: String
  photo: String
  brewery: Brewery
  bars(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bar!]
  beerRating(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating!]
  beerPrices(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice!]
  beerComments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment!]
  beerChanges(where: BeerChangeWhereInput, orderBy: BeerChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChange!]
  createdBy: User!
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type BeerChange implements Node {
  id: ID!
  price: Float!
  field: String!
  newValue: String!
  user: User!
  beer: Beer!
  upvotes(where: BeerChangeUpvoteWhereInput, orderBy: BeerChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChangeUpvote!]
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BeerChangeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerChangeEdge]!
  aggregate: AggregateBeerChange!
}

input BeerChangeCreateInput {
  price: Float!
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBeerChangesInput!
  beer: BeerCreateOneWithoutBeerChangesInput!
  upvotes: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

input BeerChangeCreateManyWithoutBeerInput {
  create: [BeerChangeCreateWithoutBeerInput!]
  connect: [BeerChangeWhereUniqueInput!]
}

input BeerChangeCreateManyWithoutUserInput {
  create: [BeerChangeCreateWithoutUserInput!]
  connect: [BeerChangeWhereUniqueInput!]
}

input BeerChangeCreateOneWithoutUpvotesInput {
  create: BeerChangeCreateWithoutUpvotesInput
  connect: BeerChangeWhereUniqueInput
}

input BeerChangeCreateWithoutBeerInput {
  price: Float!
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBeerChangesInput!
  upvotes: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

input BeerChangeCreateWithoutUpvotesInput {
  price: Float!
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBeerChangesInput!
  beer: BeerCreateOneWithoutBeerChangesInput!
}

input BeerChangeCreateWithoutUserInput {
  price: Float!
  field: String!
  newValue: String!
  beer: BeerCreateOneWithoutBeerChangesInput!
  upvotes: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

"""An edge in a connection."""
type BeerChangeEdge {
  """The item at the end of the edge."""
  node: BeerChange!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerChangeOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  field_ASC
  field_DESC
  newValue_ASC
  newValue_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerChangePreviousValues {
  id: ID!
  price: Float!
  field: String!
  newValue: String!
  createdAt: DateTime!
}

input BeerChangeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerChangeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerChangeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerChangeScalarWhereInput!]
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
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  field: String

  """All values that are not equal to given value."""
  field_not: String

  """All values that are contained in given list."""
  field_in: [String!]

  """All values that are not contained in given list."""
  field_not_in: [String!]

  """All values less than the given value."""
  field_lt: String

  """All values less than or equal the given value."""
  field_lte: String

  """All values greater than the given value."""
  field_gt: String

  """All values greater than or equal the given value."""
  field_gte: String

  """All values containing the given string."""
  field_contains: String

  """All values not containing the given string."""
  field_not_contains: String

  """All values starting with the given string."""
  field_starts_with: String

  """All values not starting with the given string."""
  field_not_starts_with: String

  """All values ending with the given string."""
  field_ends_with: String

  """All values not ending with the given string."""
  field_not_ends_with: String
  newValue: String

  """All values that are not equal to given value."""
  newValue_not: String

  """All values that are contained in given list."""
  newValue_in: [String!]

  """All values that are not contained in given list."""
  newValue_not_in: [String!]

  """All values less than the given value."""
  newValue_lt: String

  """All values less than or equal the given value."""
  newValue_lte: String

  """All values greater than the given value."""
  newValue_gt: String

  """All values greater than or equal the given value."""
  newValue_gte: String

  """All values containing the given string."""
  newValue_contains: String

  """All values not containing the given string."""
  newValue_not_contains: String

  """All values starting with the given string."""
  newValue_starts_with: String

  """All values not starting with the given string."""
  newValue_not_starts_with: String

  """All values ending with the given string."""
  newValue_ends_with: String

  """All values not ending with the given string."""
  newValue_not_ends_with: String
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

type BeerChangeSubscriptionPayload {
  mutation: MutationType!
  node: BeerChange
  updatedFields: [String!]
  previousValues: BeerChangePreviousValues
}

input BeerChangeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerChangeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerChangeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerChangeSubscriptionWhereInput!]

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
  node: BeerChangeWhereInput
}

input BeerChangeUpdateInput {
  price: Float
  field: String
  newValue: String
  user: UserUpdateOneRequiredWithoutBeerChangesInput
  beer: BeerUpdateOneRequiredWithoutBeerChangesInput
  upvotes: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

input BeerChangeUpdateManyDataInput {
  price: Float
  field: String
  newValue: String
}

input BeerChangeUpdateManyMutationInput {
  price: Float
  field: String
  newValue: String
}

input BeerChangeUpdateManyWithoutBeerInput {
  create: [BeerChangeCreateWithoutBeerInput!]
  connect: [BeerChangeWhereUniqueInput!]
  set: [BeerChangeWhereUniqueInput!]
  disconnect: [BeerChangeWhereUniqueInput!]
  delete: [BeerChangeWhereUniqueInput!]
  update: [BeerChangeUpdateWithWhereUniqueWithoutBeerInput!]
  updateMany: [BeerChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerChangeScalarWhereInput!]
  upsert: [BeerChangeUpsertWithWhereUniqueWithoutBeerInput!]
}

input BeerChangeUpdateManyWithoutUserInput {
  create: [BeerChangeCreateWithoutUserInput!]
  connect: [BeerChangeWhereUniqueInput!]
  set: [BeerChangeWhereUniqueInput!]
  disconnect: [BeerChangeWhereUniqueInput!]
  delete: [BeerChangeWhereUniqueInput!]
  update: [BeerChangeUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BeerChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerChangeScalarWhereInput!]
  upsert: [BeerChangeUpsertWithWhereUniqueWithoutUserInput!]
}

input BeerChangeUpdateManyWithWhereNestedInput {
  where: BeerChangeScalarWhereInput!
  data: BeerChangeUpdateManyDataInput!
}

input BeerChangeUpdateOneRequiredWithoutUpvotesInput {
  create: BeerChangeCreateWithoutUpvotesInput
  connect: BeerChangeWhereUniqueInput
  update: BeerChangeUpdateWithoutUpvotesDataInput
  upsert: BeerChangeUpsertWithoutUpvotesInput
}

input BeerChangeUpdateWithoutBeerDataInput {
  price: Float
  field: String
  newValue: String
  user: UserUpdateOneRequiredWithoutBeerChangesInput
  upvotes: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

input BeerChangeUpdateWithoutUpvotesDataInput {
  price: Float
  field: String
  newValue: String
  user: UserUpdateOneRequiredWithoutBeerChangesInput
  beer: BeerUpdateOneRequiredWithoutBeerChangesInput
}

input BeerChangeUpdateWithoutUserDataInput {
  price: Float
  field: String
  newValue: String
  beer: BeerUpdateOneRequiredWithoutBeerChangesInput
  upvotes: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

input BeerChangeUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerChangeWhereUniqueInput!
  data: BeerChangeUpdateWithoutBeerDataInput!
}

input BeerChangeUpdateWithWhereUniqueWithoutUserInput {
  where: BeerChangeWhereUniqueInput!
  data: BeerChangeUpdateWithoutUserDataInput!
}

input BeerChangeUpsertWithoutUpvotesInput {
  update: BeerChangeUpdateWithoutUpvotesDataInput!
  create: BeerChangeCreateWithoutUpvotesInput!
}

input BeerChangeUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerChangeWhereUniqueInput!
  update: BeerChangeUpdateWithoutBeerDataInput!
  create: BeerChangeCreateWithoutBeerInput!
}

input BeerChangeUpsertWithWhereUniqueWithoutUserInput {
  where: BeerChangeWhereUniqueInput!
  update: BeerChangeUpdateWithoutUserDataInput!
  create: BeerChangeCreateWithoutUserInput!
}

type BeerChangeUpvote implements Node {
  id: ID!
  user: User!
  beerChange: BeerChange!
}

"""A connection to a list of items."""
type BeerChangeUpvoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerChangeUpvoteEdge]!
  aggregate: AggregateBeerChangeUpvote!
}

input BeerChangeUpvoteCreateInput {
  user: UserCreateOneWithoutBeerChangeUpvotesInput!
  beerChange: BeerChangeCreateOneWithoutUpvotesInput!
}

input BeerChangeUpvoteCreateManyWithoutBeerChangeInput {
  create: [BeerChangeUpvoteCreateWithoutBeerChangeInput!]
  connect: [BeerChangeUpvoteWhereUniqueInput!]
}

input BeerChangeUpvoteCreateManyWithoutUserInput {
  create: [BeerChangeUpvoteCreateWithoutUserInput!]
  connect: [BeerChangeUpvoteWhereUniqueInput!]
}

input BeerChangeUpvoteCreateWithoutBeerChangeInput {
  user: UserCreateOneWithoutBeerChangeUpvotesInput!
}

input BeerChangeUpvoteCreateWithoutUserInput {
  beerChange: BeerChangeCreateOneWithoutUpvotesInput!
}

"""An edge in a connection."""
type BeerChangeUpvoteEdge {
  """The item at the end of the edge."""
  node: BeerChangeUpvote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerChangeUpvoteOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BeerChangeUpvotePreviousValues {
  id: ID!
}

input BeerChangeUpvoteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerChangeUpvoteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerChangeUpvoteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerChangeUpvoteScalarWhereInput!]
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
}

type BeerChangeUpvoteSubscriptionPayload {
  mutation: MutationType!
  node: BeerChangeUpvote
  updatedFields: [String!]
  previousValues: BeerChangeUpvotePreviousValues
}

input BeerChangeUpvoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerChangeUpvoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerChangeUpvoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerChangeUpvoteSubscriptionWhereInput!]

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
  node: BeerChangeUpvoteWhereInput
}

input BeerChangeUpvoteUpdateInput {
  user: UserUpdateOneRequiredWithoutBeerChangeUpvotesInput
  beerChange: BeerChangeUpdateOneRequiredWithoutUpvotesInput
}

input BeerChangeUpvoteUpdateManyWithoutBeerChangeInput {
  create: [BeerChangeUpvoteCreateWithoutBeerChangeInput!]
  connect: [BeerChangeUpvoteWhereUniqueInput!]
  set: [BeerChangeUpvoteWhereUniqueInput!]
  disconnect: [BeerChangeUpvoteWhereUniqueInput!]
  delete: [BeerChangeUpvoteWhereUniqueInput!]
  update: [BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput!]
  deleteMany: [BeerChangeUpvoteScalarWhereInput!]
  upsert: [BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput!]
}

input BeerChangeUpvoteUpdateManyWithoutUserInput {
  create: [BeerChangeUpvoteCreateWithoutUserInput!]
  connect: [BeerChangeUpvoteWhereUniqueInput!]
  set: [BeerChangeUpvoteWhereUniqueInput!]
  disconnect: [BeerChangeUpvoteWhereUniqueInput!]
  delete: [BeerChangeUpvoteWhereUniqueInput!]
  update: [BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput!]
  deleteMany: [BeerChangeUpvoteScalarWhereInput!]
  upsert: [BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput!]
}

input BeerChangeUpvoteUpdateWithoutBeerChangeDataInput {
  user: UserUpdateOneRequiredWithoutBeerChangeUpvotesInput
}

input BeerChangeUpvoteUpdateWithoutUserDataInput {
  beerChange: BeerChangeUpdateOneRequiredWithoutUpvotesInput
}

input BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput {
  where: BeerChangeUpvoteWhereUniqueInput!
  data: BeerChangeUpvoteUpdateWithoutBeerChangeDataInput!
}

input BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput {
  where: BeerChangeUpvoteWhereUniqueInput!
  data: BeerChangeUpvoteUpdateWithoutUserDataInput!
}

input BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput {
  where: BeerChangeUpvoteWhereUniqueInput!
  update: BeerChangeUpvoteUpdateWithoutBeerChangeDataInput!
  create: BeerChangeUpvoteCreateWithoutBeerChangeInput!
}

input BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput {
  where: BeerChangeUpvoteWhereUniqueInput!
  update: BeerChangeUpvoteUpdateWithoutUserDataInput!
  create: BeerChangeUpvoteCreateWithoutUserInput!
}

input BeerChangeUpvoteWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerChangeUpvoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerChangeUpvoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerChangeUpvoteWhereInput!]
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
  user: UserWhereInput
  beerChange: BeerChangeWhereInput
}

input BeerChangeUpvoteWhereUniqueInput {
  id: ID
}

input BeerChangeWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerChangeWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerChangeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerChangeWhereInput!]
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
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  field: String

  """All values that are not equal to given value."""
  field_not: String

  """All values that are contained in given list."""
  field_in: [String!]

  """All values that are not contained in given list."""
  field_not_in: [String!]

  """All values less than the given value."""
  field_lt: String

  """All values less than or equal the given value."""
  field_lte: String

  """All values greater than the given value."""
  field_gt: String

  """All values greater than or equal the given value."""
  field_gte: String

  """All values containing the given string."""
  field_contains: String

  """All values not containing the given string."""
  field_not_contains: String

  """All values starting with the given string."""
  field_starts_with: String

  """All values not starting with the given string."""
  field_not_starts_with: String

  """All values ending with the given string."""
  field_ends_with: String

  """All values not ending with the given string."""
  field_not_ends_with: String
  newValue: String

  """All values that are not equal to given value."""
  newValue_not: String

  """All values that are contained in given list."""
  newValue_in: [String!]

  """All values that are not contained in given list."""
  newValue_not_in: [String!]

  """All values less than the given value."""
  newValue_lt: String

  """All values less than or equal the given value."""
  newValue_lte: String

  """All values greater than the given value."""
  newValue_gt: String

  """All values greater than or equal the given value."""
  newValue_gte: String

  """All values containing the given string."""
  newValue_contains: String

  """All values not containing the given string."""
  newValue_not_contains: String

  """All values starting with the given string."""
  newValue_starts_with: String

  """All values not starting with the given string."""
  newValue_not_starts_with: String

  """All values ending with the given string."""
  newValue_ends_with: String

  """All values not ending with the given string."""
  newValue_not_ends_with: String
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
  user: UserWhereInput
  beer: BeerWhereInput
  upvotes_every: BeerChangeUpvoteWhereInput
  upvotes_some: BeerChangeUpvoteWhereInput
  upvotes_none: BeerChangeUpvoteWhereInput
}

input BeerChangeWhereUniqueInput {
  id: ID
}

type BeerComment implements Node {
  id: ID!
  comment: String!
  beer: Beer!
  user: User!
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
  beer: BeerCreateOneWithoutBeerCommentsInput!
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
  beer: BeerCreateOneWithoutBeerCommentsInput!
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
  beer: BeerUpdateOneRequiredWithoutBeerCommentsInput
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
  set: [BeerCommentWhereUniqueInput!]
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
  set: [BeerCommentWhereUniqueInput!]
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
  beer: BeerUpdateOneRequiredWithoutBeerCommentsInput
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
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateManyWithoutBarsInput {
  create: [BeerCreateWithoutBarsInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateManyWithoutBreweryInput {
  create: [BeerCreateWithoutBreweryInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateManyWithoutCreatedByInput {
  create: [BeerCreateWithoutCreatedByInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateManyWithoutLikedByInput {
  create: [BeerCreateWithoutLikedByInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateOneWithoutBeerChangesInput {
  create: BeerCreateWithoutBeerChangesInput
  connect: BeerWhereUniqueInput
}

input BeerCreateOneWithoutBeerCommentsInput {
  create: BeerCreateWithoutBeerCommentsInput
  connect: BeerWhereUniqueInput
}

input BeerCreateOneWithoutBeerPricesInput {
  create: BeerCreateWithoutBeerPricesInput
  connect: BeerWhereUniqueInput
}

input BeerCreateOneWithoutBeerRatingInput {
  create: BeerCreateWithoutBeerRatingInput
  connect: BeerWhereUniqueInput
}

input BeerCreateWithoutBarsInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerChangesInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerCommentsInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerPricesInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerRatingInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBreweryInput {
  name: String!
  type: String!
  strong: String
  photo: String
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutCreatedByInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutLikedByInput {
  name: String!
  type: String!
  strong: String
  photo: String
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput!
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
  type_ASC
  type_DESC
  strong_ASC
  strong_DESC
  photo_ASC
  photo_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BeerPreviousValues {
  id: ID!
  name: String!
  type: String!
  strong: String
  photo: String
}

type BeerPrice implements Node {
  id: ID!
  price: Float!
  user: User!
  bar: Bar!
  beer: Beer!
}

"""A connection to a list of items."""
type BeerPriceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerPriceEdge]!
  aggregate: AggregateBeerPrice!
}

input BeerPriceCreateInput {
  price: Float!
  user: UserCreateOneWithoutPricedBeersInput!
  bar: BarCreateOneWithoutBeerPricesInput!
  beer: BeerCreateOneWithoutBeerPricesInput!
}

input BeerPriceCreateManyWithoutBarInput {
  create: [BeerPriceCreateWithoutBarInput!]
  connect: [BeerPriceWhereUniqueInput!]
}

input BeerPriceCreateManyWithoutBeerInput {
  create: [BeerPriceCreateWithoutBeerInput!]
  connect: [BeerPriceWhereUniqueInput!]
}

input BeerPriceCreateManyWithoutUserInput {
  create: [BeerPriceCreateWithoutUserInput!]
  connect: [BeerPriceWhereUniqueInput!]
}

input BeerPriceCreateWithoutBarInput {
  price: Float!
  user: UserCreateOneWithoutPricedBeersInput!
  beer: BeerCreateOneWithoutBeerPricesInput!
}

input BeerPriceCreateWithoutBeerInput {
  price: Float!
  user: UserCreateOneWithoutPricedBeersInput!
  bar: BarCreateOneWithoutBeerPricesInput!
}

input BeerPriceCreateWithoutUserInput {
  price: Float!
  bar: BarCreateOneWithoutBeerPricesInput!
  beer: BeerCreateOneWithoutBeerPricesInput!
}

"""An edge in a connection."""
type BeerPriceEdge {
  """The item at the end of the edge."""
  node: BeerPrice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerPriceOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BeerPricePreviousValues {
  id: ID!
  price: Float!
}

input BeerPriceScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceScalarWhereInput!]
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
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
}

type BeerPriceSubscriptionPayload {
  mutation: MutationType!
  node: BeerPrice
  updatedFields: [String!]
  previousValues: BeerPricePreviousValues
}

input BeerPriceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceSubscriptionWhereInput!]

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
  node: BeerPriceWhereInput
}

input BeerPriceUpdateInput {
  price: Float
  user: UserUpdateOneRequiredWithoutPricedBeersInput
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
}

input BeerPriceUpdateManyDataInput {
  price: Float
}

input BeerPriceUpdateManyMutationInput {
  price: Float
}

input BeerPriceUpdateManyWithoutBarInput {
  create: [BeerPriceCreateWithoutBarInput!]
  connect: [BeerPriceWhereUniqueInput!]
  set: [BeerPriceWhereUniqueInput!]
  disconnect: [BeerPriceWhereUniqueInput!]
  delete: [BeerPriceWhereUniqueInput!]
  update: [BeerPriceUpdateWithWhereUniqueWithoutBarInput!]
  updateMany: [BeerPriceUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerPriceScalarWhereInput!]
  upsert: [BeerPriceUpsertWithWhereUniqueWithoutBarInput!]
}

input BeerPriceUpdateManyWithoutBeerInput {
  create: [BeerPriceCreateWithoutBeerInput!]
  connect: [BeerPriceWhereUniqueInput!]
  set: [BeerPriceWhereUniqueInput!]
  disconnect: [BeerPriceWhereUniqueInput!]
  delete: [BeerPriceWhereUniqueInput!]
  update: [BeerPriceUpdateWithWhereUniqueWithoutBeerInput!]
  updateMany: [BeerPriceUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerPriceScalarWhereInput!]
  upsert: [BeerPriceUpsertWithWhereUniqueWithoutBeerInput!]
}

input BeerPriceUpdateManyWithoutUserInput {
  create: [BeerPriceCreateWithoutUserInput!]
  connect: [BeerPriceWhereUniqueInput!]
  set: [BeerPriceWhereUniqueInput!]
  disconnect: [BeerPriceWhereUniqueInput!]
  delete: [BeerPriceWhereUniqueInput!]
  update: [BeerPriceUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [BeerPriceUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerPriceScalarWhereInput!]
  upsert: [BeerPriceUpsertWithWhereUniqueWithoutUserInput!]
}

input BeerPriceUpdateManyWithWhereNestedInput {
  where: BeerPriceScalarWhereInput!
  data: BeerPriceUpdateManyDataInput!
}

input BeerPriceUpdateWithoutBarDataInput {
  price: Float
  user: UserUpdateOneRequiredWithoutPricedBeersInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
}

input BeerPriceUpdateWithoutBeerDataInput {
  price: Float
  user: UserUpdateOneRequiredWithoutPricedBeersInput
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
}

input BeerPriceUpdateWithoutUserDataInput {
  price: Float
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
}

input BeerPriceUpdateWithWhereUniqueWithoutBarInput {
  where: BeerPriceWhereUniqueInput!
  data: BeerPriceUpdateWithoutBarDataInput!
}

input BeerPriceUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerPriceWhereUniqueInput!
  data: BeerPriceUpdateWithoutBeerDataInput!
}

input BeerPriceUpdateWithWhereUniqueWithoutUserInput {
  where: BeerPriceWhereUniqueInput!
  data: BeerPriceUpdateWithoutUserDataInput!
}

input BeerPriceUpsertWithWhereUniqueWithoutBarInput {
  where: BeerPriceWhereUniqueInput!
  update: BeerPriceUpdateWithoutBarDataInput!
  create: BeerPriceCreateWithoutBarInput!
}

input BeerPriceUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerPriceWhereUniqueInput!
  update: BeerPriceUpdateWithoutBeerDataInput!
  create: BeerPriceCreateWithoutBeerInput!
}

input BeerPriceUpsertWithWhereUniqueWithoutUserInput {
  where: BeerPriceWhereUniqueInput!
  update: BeerPriceUpdateWithoutUserDataInput!
  create: BeerPriceCreateWithoutUserInput!
}

input BeerPriceWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceWhereInput!]
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
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  user: UserWhereInput
  bar: BarWhereInput
  beer: BeerWhereInput
}

input BeerPriceWhereUniqueInput {
  id: ID
}

type BeerRating implements Node {
  id: ID!
  rating: Float!
  user: User!
  beer: Beer!
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
  rating: Float!
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
  rating: Float!
  user: UserCreateOneWithoutBeerRatingsInput!
}

input BeerRatingCreateWithoutUserInput {
  rating: Float!
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
  rating: Float!
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
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
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
  rating: Float
  user: UserUpdateOneRequiredWithoutBeerRatingsInput
  beer: BeerUpdateOneRequiredWithoutBeerRatingInput
}

input BeerRatingUpdateManyDataInput {
  rating: Float
}

input BeerRatingUpdateManyMutationInput {
  rating: Float
}

input BeerRatingUpdateManyWithoutBeerInput {
  create: [BeerRatingCreateWithoutBeerInput!]
  connect: [BeerRatingWhereUniqueInput!]
  set: [BeerRatingWhereUniqueInput!]
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
  set: [BeerRatingWhereUniqueInput!]
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
  rating: Float
  user: UserUpdateOneRequiredWithoutBeerRatingsInput
}

input BeerRatingUpdateWithoutUserDataInput {
  rating: Float
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
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
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
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  strong: String

  """All values that are not equal to given value."""
  strong_not: String

  """All values that are contained in given list."""
  strong_in: [String!]

  """All values that are not contained in given list."""
  strong_not_in: [String!]

  """All values less than the given value."""
  strong_lt: String

  """All values less than or equal the given value."""
  strong_lte: String

  """All values greater than the given value."""
  strong_gt: String

  """All values greater than or equal the given value."""
  strong_gte: String

  """All values containing the given string."""
  strong_contains: String

  """All values not containing the given string."""
  strong_not_contains: String

  """All values starting with the given string."""
  strong_starts_with: String

  """All values not starting with the given string."""
  strong_not_starts_with: String

  """All values ending with the given string."""
  strong_ends_with: String

  """All values not ending with the given string."""
  strong_not_ends_with: String
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
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateManyDataInput {
  name: String
  type: String
  strong: String
  photo: String
}

input BeerUpdateManyMutationInput {
  name: String
  type: String
  strong: String
  photo: String
}

input BeerUpdateManyWithoutBarsInput {
  create: [BeerCreateWithoutBarsInput!]
  connect: [BeerWhereUniqueInput!]
  set: [BeerWhereUniqueInput!]
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
  set: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  delete: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutBreweryInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerScalarWhereInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutBreweryInput!]
}

input BeerUpdateManyWithoutCreatedByInput {
  create: [BeerCreateWithoutCreatedByInput!]
  connect: [BeerWhereUniqueInput!]
  set: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  delete: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutCreatedByInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerScalarWhereInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input BeerUpdateManyWithoutLikedByInput {
  create: [BeerCreateWithoutLikedByInput!]
  connect: [BeerWhereUniqueInput!]
  set: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  delete: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutLikedByInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerScalarWhereInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutLikedByInput!]
}

input BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput!
  data: BeerUpdateManyDataInput!
}

input BeerUpdateOneRequiredWithoutBeerChangesInput {
  create: BeerCreateWithoutBeerChangesInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutBeerChangesDataInput
  upsert: BeerUpsertWithoutBeerChangesInput
}

input BeerUpdateOneRequiredWithoutBeerCommentsInput {
  create: BeerCreateWithoutBeerCommentsInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutBeerCommentsDataInput
  upsert: BeerUpsertWithoutBeerCommentsInput
}

input BeerUpdateOneRequiredWithoutBeerPricesInput {
  create: BeerCreateWithoutBeerPricesInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutBeerPricesDataInput
  upsert: BeerUpsertWithoutBeerPricesInput
}

input BeerUpdateOneRequiredWithoutBeerRatingInput {
  create: BeerCreateWithoutBeerRatingInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutBeerRatingDataInput
  upsert: BeerUpsertWithoutBeerRatingInput
}

input BeerUpdateWithoutBarsDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerChangesDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerCommentsDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerPricesDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerRatingDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBreweryDataInput {
  name: String
  type: String
  strong: String
  photo: String
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutCreatedByDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutLikedByDataInput {
  name: String
  type: String
  strong: String
  photo: String
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneRequiredWithoutCreatedBeersInput
}

input BeerUpdateWithWhereUniqueWithoutBarsInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutBarsDataInput!
}

input BeerUpdateWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutBreweryDataInput!
}

input BeerUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutCreatedByDataInput!
}

input BeerUpdateWithWhereUniqueWithoutLikedByInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutLikedByDataInput!
}

input BeerUpsertWithoutBeerChangesInput {
  update: BeerUpdateWithoutBeerChangesDataInput!
  create: BeerCreateWithoutBeerChangesInput!
}

input BeerUpsertWithoutBeerCommentsInput {
  update: BeerUpdateWithoutBeerCommentsDataInput!
  create: BeerCreateWithoutBeerCommentsInput!
}

input BeerUpsertWithoutBeerPricesInput {
  update: BeerUpdateWithoutBeerPricesDataInput!
  create: BeerCreateWithoutBeerPricesInput!
}

input BeerUpsertWithoutBeerRatingInput {
  update: BeerUpdateWithoutBeerRatingDataInput!
  create: BeerCreateWithoutBeerRatingInput!
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

input BeerUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutCreatedByDataInput!
  create: BeerCreateWithoutCreatedByInput!
}

input BeerUpsertWithWhereUniqueWithoutLikedByInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutLikedByDataInput!
  create: BeerCreateWithoutLikedByInput!
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
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  strong: String

  """All values that are not equal to given value."""
  strong_not: String

  """All values that are contained in given list."""
  strong_in: [String!]

  """All values that are not contained in given list."""
  strong_not_in: [String!]

  """All values less than the given value."""
  strong_lt: String

  """All values less than or equal the given value."""
  strong_lte: String

  """All values greater than the given value."""
  strong_gt: String

  """All values greater than or equal the given value."""
  strong_gte: String

  """All values containing the given string."""
  strong_contains: String

  """All values not containing the given string."""
  strong_not_contains: String

  """All values starting with the given string."""
  strong_starts_with: String

  """All values not starting with the given string."""
  strong_not_starts_with: String

  """All values ending with the given string."""
  strong_ends_with: String

  """All values not ending with the given string."""
  strong_not_ends_with: String
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
  brewery: BreweryWhereInput
  bars_every: BarWhereInput
  bars_some: BarWhereInput
  bars_none: BarWhereInput
  beerRating_every: BeerRatingWhereInput
  beerRating_some: BeerRatingWhereInput
  beerRating_none: BeerRatingWhereInput
  beerPrices_every: BeerPriceWhereInput
  beerPrices_some: BeerPriceWhereInput
  beerPrices_none: BeerPriceWhereInput
  beerComments_every: BeerCommentWhereInput
  beerComments_some: BeerCommentWhereInput
  beerComments_none: BeerCommentWhereInput
  beerChanges_every: BeerChangeWhereInput
  beerChanges_some: BeerChangeWhereInput
  beerChanges_none: BeerChangeWhereInput
  createdBy: UserWhereInput
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
}

input BeerWhereUniqueInput {
  id: ID
}

type Brewery implements Node {
  id: ID!
  name: String!
  country: String!
  logo: String
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
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
  country: String!
  logo: String
  beers: BeerCreateManyWithoutBreweryInput
}

input BreweryCreateOneWithoutBeersInput {
  create: BreweryCreateWithoutBeersInput
  connect: BreweryWhereUniqueInput
}

input BreweryCreateWithoutBeersInput {
  name: String!
  country: String!
  logo: String
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
  country_ASC
  country_DESC
  logo_ASC
  logo_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BreweryPreviousValues {
  id: ID!
  name: String!
  country: String!
  logo: String
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
  country: String
  logo: String
  beers: BeerUpdateManyWithoutBreweryInput
}

input BreweryUpdateManyMutationInput {
  name: String
  country: String
  logo: String
}

input BreweryUpdateOneWithoutBeersInput {
  create: BreweryCreateWithoutBeersInput
  connect: BreweryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BreweryUpdateWithoutBeersDataInput
  upsert: BreweryUpsertWithoutBeersInput
}

input BreweryUpdateWithoutBeersDataInput {
  name: String
  country: String
  logo: String
}

input BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput!
  create: BreweryCreateWithoutBeersInput!
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
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
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
  createBarRating(data: BarRatingCreateInput!): BarRating!
  createBarComment(data: BarCommentCreateInput!): BarComment!
  createBarChange(data: BarChangeCreateInput!): BarChange!
  createBarChangeUpvote(data: BarChangeUpvoteCreateInput!): BarChangeUpvote!
  createBeer(data: BeerCreateInput!): Beer!
  createBeerRating(data: BeerRatingCreateInput!): BeerRating!
  createBeerComment(data: BeerCommentCreateInput!): BeerComment!
  createBeerChange(data: BeerChangeCreateInput!): BeerChange!
  createBeerChangeUpvote(data: BeerChangeUpvoteCreateInput!): BeerChangeUpvote!
  createBeerPrice(data: BeerPriceCreateInput!): BeerPrice!
  createUser(data: UserCreateInput!): User!
  createBrewery(data: BreweryCreateInput!): Brewery!
  updateBar(data: BarUpdateInput!, where: BarWhereUniqueInput!): Bar
  updateBarRating(data: BarRatingUpdateInput!, where: BarRatingWhereUniqueInput!): BarRating
  updateBarComment(data: BarCommentUpdateInput!, where: BarCommentWhereUniqueInput!): BarComment
  updateBarChange(data: BarChangeUpdateInput!, where: BarChangeWhereUniqueInput!): BarChange
  updateBarChangeUpvote(data: BarChangeUpvoteUpdateInput!, where: BarChangeUpvoteWhereUniqueInput!): BarChangeUpvote
  updateBeer(data: BeerUpdateInput!, where: BeerWhereUniqueInput!): Beer
  updateBeerRating(data: BeerRatingUpdateInput!, where: BeerRatingWhereUniqueInput!): BeerRating
  updateBeerComment(data: BeerCommentUpdateInput!, where: BeerCommentWhereUniqueInput!): BeerComment
  updateBeerChange(data: BeerChangeUpdateInput!, where: BeerChangeWhereUniqueInput!): BeerChange
  updateBeerChangeUpvote(data: BeerChangeUpvoteUpdateInput!, where: BeerChangeUpvoteWhereUniqueInput!): BeerChangeUpvote
  updateBeerPrice(data: BeerPriceUpdateInput!, where: BeerPriceWhereUniqueInput!): BeerPrice
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateBrewery(data: BreweryUpdateInput!, where: BreweryWhereUniqueInput!): Brewery
  deleteBar(where: BarWhereUniqueInput!): Bar
  deleteBarRating(where: BarRatingWhereUniqueInput!): BarRating
  deleteBarComment(where: BarCommentWhereUniqueInput!): BarComment
  deleteBarChange(where: BarChangeWhereUniqueInput!): BarChange
  deleteBarChangeUpvote(where: BarChangeUpvoteWhereUniqueInput!): BarChangeUpvote
  deleteBeer(where: BeerWhereUniqueInput!): Beer
  deleteBeerRating(where: BeerRatingWhereUniqueInput!): BeerRating
  deleteBeerComment(where: BeerCommentWhereUniqueInput!): BeerComment
  deleteBeerChange(where: BeerChangeWhereUniqueInput!): BeerChange
  deleteBeerChangeUpvote(where: BeerChangeUpvoteWhereUniqueInput!): BeerChangeUpvote
  deleteBeerPrice(where: BeerPriceWhereUniqueInput!): BeerPrice
  deleteUser(where: UserWhereUniqueInput!): User
  deleteBrewery(where: BreweryWhereUniqueInput!): Brewery
  upsertBar(where: BarWhereUniqueInput!, create: BarCreateInput!, update: BarUpdateInput!): Bar!
  upsertBarRating(where: BarRatingWhereUniqueInput!, create: BarRatingCreateInput!, update: BarRatingUpdateInput!): BarRating!
  upsertBarComment(where: BarCommentWhereUniqueInput!, create: BarCommentCreateInput!, update: BarCommentUpdateInput!): BarComment!
  upsertBarChange(where: BarChangeWhereUniqueInput!, create: BarChangeCreateInput!, update: BarChangeUpdateInput!): BarChange!
  upsertBarChangeUpvote(where: BarChangeUpvoteWhereUniqueInput!, create: BarChangeUpvoteCreateInput!, update: BarChangeUpvoteUpdateInput!): BarChangeUpvote!
  upsertBeer(where: BeerWhereUniqueInput!, create: BeerCreateInput!, update: BeerUpdateInput!): Beer!
  upsertBeerRating(where: BeerRatingWhereUniqueInput!, create: BeerRatingCreateInput!, update: BeerRatingUpdateInput!): BeerRating!
  upsertBeerComment(where: BeerCommentWhereUniqueInput!, create: BeerCommentCreateInput!, update: BeerCommentUpdateInput!): BeerComment!
  upsertBeerChange(where: BeerChangeWhereUniqueInput!, create: BeerChangeCreateInput!, update: BeerChangeUpdateInput!): BeerChange!
  upsertBeerChangeUpvote(where: BeerChangeUpvoteWhereUniqueInput!, create: BeerChangeUpvoteCreateInput!, update: BeerChangeUpvoteUpdateInput!): BeerChangeUpvote!
  upsertBeerPrice(where: BeerPriceWhereUniqueInput!, create: BeerPriceCreateInput!, update: BeerPriceUpdateInput!): BeerPrice!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertBrewery(where: BreweryWhereUniqueInput!, create: BreweryCreateInput!, update: BreweryUpdateInput!): Brewery!
  updateManyBars(data: BarUpdateManyMutationInput!, where: BarWhereInput): BatchPayload!
  updateManyBarRatings(data: BarRatingUpdateManyMutationInput!, where: BarRatingWhereInput): BatchPayload!
  updateManyBarComments(data: BarCommentUpdateManyMutationInput!, where: BarCommentWhereInput): BatchPayload!
  updateManyBarChanges(data: BarChangeUpdateManyMutationInput!, where: BarChangeWhereInput): BatchPayload!
  updateManyBeers(data: BeerUpdateManyMutationInput!, where: BeerWhereInput): BatchPayload!
  updateManyBeerRatings(data: BeerRatingUpdateManyMutationInput!, where: BeerRatingWhereInput): BatchPayload!
  updateManyBeerComments(data: BeerCommentUpdateManyMutationInput!, where: BeerCommentWhereInput): BatchPayload!
  updateManyBeerChanges(data: BeerChangeUpdateManyMutationInput!, where: BeerChangeWhereInput): BatchPayload!
  updateManyBeerPrices(data: BeerPriceUpdateManyMutationInput!, where: BeerPriceWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyBreweries(data: BreweryUpdateManyMutationInput!, where: BreweryWhereInput): BatchPayload!
  deleteManyBars(where: BarWhereInput): BatchPayload!
  deleteManyBarRatings(where: BarRatingWhereInput): BatchPayload!
  deleteManyBarComments(where: BarCommentWhereInput): BatchPayload!
  deleteManyBarChanges(where: BarChangeWhereInput): BatchPayload!
  deleteManyBarChangeUpvotes(where: BarChangeUpvoteWhereInput): BatchPayload!
  deleteManyBeers(where: BeerWhereInput): BatchPayload!
  deleteManyBeerRatings(where: BeerRatingWhereInput): BatchPayload!
  deleteManyBeerComments(where: BeerCommentWhereInput): BatchPayload!
  deleteManyBeerChanges(where: BeerChangeWhereInput): BatchPayload!
  deleteManyBeerChangeUpvotes(where: BeerChangeUpvoteWhereInput): BatchPayload!
  deleteManyBeerPrices(where: BeerPriceWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyBreweries(where: BreweryWhereInput): BatchPayload!
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
  barRatings(where: BarRatingWhereInput, orderBy: BarRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarRating]!
  barComments(where: BarCommentWhereInput, orderBy: BarCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarComment]!
  barChanges(where: BarChangeWhereInput, orderBy: BarChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChange]!
  barChangeUpvotes(where: BarChangeUpvoteWhereInput, orderBy: BarChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChangeUpvote]!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer]!
  beerRatings(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating]!
  beerComments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment]!
  beerChanges(where: BeerChangeWhereInput, orderBy: BeerChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChange]!
  beerChangeUpvotes(where: BeerChangeUpvoteWhereInput, orderBy: BeerChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChangeUpvote]!
  beerPrices(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  breweries(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brewery]!
  bar(where: BarWhereUniqueInput!): Bar
  barRating(where: BarRatingWhereUniqueInput!): BarRating
  barComment(where: BarCommentWhereUniqueInput!): BarComment
  barChange(where: BarChangeWhereUniqueInput!): BarChange
  barChangeUpvote(where: BarChangeUpvoteWhereUniqueInput!): BarChangeUpvote
  beer(where: BeerWhereUniqueInput!): Beer
  beerRating(where: BeerRatingWhereUniqueInput!): BeerRating
  beerComment(where: BeerCommentWhereUniqueInput!): BeerComment
  beerChange(where: BeerChangeWhereUniqueInput!): BeerChange
  beerChangeUpvote(where: BeerChangeUpvoteWhereUniqueInput!): BeerChangeUpvote
  beerPrice(where: BeerPriceWhereUniqueInput!): BeerPrice
  user(where: UserWhereUniqueInput!): User
  brewery(where: BreweryWhereUniqueInput!): Brewery
  barsConnection(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BarConnection!
  barRatingsConnection(where: BarRatingWhereInput, orderBy: BarRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BarRatingConnection!
  barCommentsConnection(where: BarCommentWhereInput, orderBy: BarCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BarCommentConnection!
  barChangesConnection(where: BarChangeWhereInput, orderBy: BarChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BarChangeConnection!
  barChangeUpvotesConnection(where: BarChangeUpvoteWhereInput, orderBy: BarChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BarChangeUpvoteConnection!
  beersConnection(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerConnection!
  beerRatingsConnection(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerRatingConnection!
  beerCommentsConnection(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerCommentConnection!
  beerChangesConnection(where: BeerChangeWhereInput, orderBy: BeerChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerChangeConnection!
  beerChangeUpvotesConnection(where: BeerChangeUpvoteWhereInput, orderBy: BeerChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerChangeUpvoteConnection!
  beerPricesConnection(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerPriceConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  breweriesConnection(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BreweryConnection!

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

enum Sex {
  MALE
  FEMALE
}

type Subscription {
  bar(where: BarSubscriptionWhereInput): BarSubscriptionPayload
  barRating(where: BarRatingSubscriptionWhereInput): BarRatingSubscriptionPayload
  barComment(where: BarCommentSubscriptionWhereInput): BarCommentSubscriptionPayload
  barChange(where: BarChangeSubscriptionWhereInput): BarChangeSubscriptionPayload
  barChangeUpvote(where: BarChangeUpvoteSubscriptionWhereInput): BarChangeUpvoteSubscriptionPayload
  beer(where: BeerSubscriptionWhereInput): BeerSubscriptionPayload
  beerRating(where: BeerRatingSubscriptionWhereInput): BeerRatingSubscriptionPayload
  beerComment(where: BeerCommentSubscriptionWhereInput): BeerCommentSubscriptionPayload
  beerChange(where: BeerChangeSubscriptionWhereInput): BeerChangeSubscriptionPayload
  beerChangeUpvote(where: BeerChangeUpvoteSubscriptionWhereInput): BeerChangeUpvoteSubscriptionPayload
  beerPrice(where: BeerPriceSubscriptionWhereInput): BeerPriceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  brewery(where: BrewerySubscriptionWhereInput): BrewerySubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  role: Role!
  active: Boolean!
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment!]
  barComments(where: BarCommentWhereInput, orderBy: BarCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarComment!]
  beerRatings(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating!]
  barRatings(where: BarRatingWhereInput, orderBy: BarRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarRating!]
  beerChanges(where: BeerChangeWhereInput, orderBy: BeerChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChange!]
  barChanges(where: BarChangeWhereInput, orderBy: BarChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChange!]
  beerChangeUpvotes(where: BeerChangeUpvoteWhereInput, orderBy: BeerChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChangeUpvote!]
  barChangeUpvotes(where: BarChangeUpvoteWhereInput, orderBy: BarChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChangeUpvote!]
  pricedBeers(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice!]
  likedBeers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
  likedBars(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bar!]
  createdBeers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
  createdBars(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bar!]
  createdAt: DateTime!
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
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateManyWithoutLikedBarsInput {
  create: [UserCreateWithoutLikedBarsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutLikedBeersInput {
  create: [UserCreateWithoutLikedBeersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutBarChangesInput {
  create: UserCreateWithoutBarChangesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBarChangeUpvotesInput {
  create: UserCreateWithoutBarChangeUpvotesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBarCommentsInput {
  create: UserCreateWithoutBarCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBarRatingsInput {
  create: UserCreateWithoutBarRatingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBeerChangesInput {
  create: UserCreateWithoutBeerChangesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBeerChangeUpvotesInput {
  create: UserCreateWithoutBeerChangeUpvotesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBeerCommentsInput {
  create: UserCreateWithoutBeerCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBeerRatingsInput {
  create: UserCreateWithoutBeerRatingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedBarsInput {
  create: UserCreateWithoutCreatedBarsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedBeersInput {
  create: UserCreateWithoutCreatedBeersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPricedBeersInput {
  create: UserCreateWithoutPricedBeersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBarChangesInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBarChangeUpvotesInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBarCommentsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBarRatingsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBeerChangesInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBeerChangeUpvotesInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBeerCommentsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutBeerRatingsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutCreatedBarsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
}

input UserCreateWithoutCreatedBeersInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutLikedBarsInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutLikedBeersInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers: BeerPriceCreateManyWithoutUserInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
}

input UserCreateWithoutPricedBeersInput {
  email: String!
  password: String!
  role: Role
  active: Boolean
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  beerComments: BeerCommentCreateManyWithoutUserInput
  barComments: BarCommentCreateManyWithoutUserInput
  beerRatings: BeerRatingCreateManyWithoutUserInput
  barRatings: BarRatingCreateManyWithoutUserInput
  beerChanges: BeerChangeCreateManyWithoutUserInput
  barChanges: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteCreateManyWithoutUserInput
  likedBeers: BeerCreateManyWithoutLikedByInput
  likedBars: BarCreateManyWithoutLikedByInput
  createdBeers: BeerCreateManyWithoutCreatedByInput
  createdBars: BarCreateManyWithoutCreatedByInput
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
  nickname_ASC
  nickname_DESC
  birthdate_ASC
  birthdate_DESC
  sex_ASC
  sex_DESC
  name_ASC
  name_DESC
  surname_ASC
  surname_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  role: Role!
  active: Boolean!
  nickname: String!
  birthdate: DateTime!
  sex: Sex!
  name: String
  surname: String
  createdAt: DateTime!
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
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
  nickname: String

  """All values that are not equal to given value."""
  nickname_not: String

  """All values that are contained in given list."""
  nickname_in: [String!]

  """All values that are not contained in given list."""
  nickname_not_in: [String!]

  """All values less than the given value."""
  nickname_lt: String

  """All values less than or equal the given value."""
  nickname_lte: String

  """All values greater than the given value."""
  nickname_gt: String

  """All values greater than or equal the given value."""
  nickname_gte: String

  """All values containing the given string."""
  nickname_contains: String

  """All values not containing the given string."""
  nickname_not_contains: String

  """All values starting with the given string."""
  nickname_starts_with: String

  """All values not starting with the given string."""
  nickname_not_starts_with: String

  """All values ending with the given string."""
  nickname_ends_with: String

  """All values not ending with the given string."""
  nickname_not_ends_with: String
  birthdate: DateTime

  """All values that are not equal to given value."""
  birthdate_not: DateTime

  """All values that are contained in given list."""
  birthdate_in: [DateTime!]

  """All values that are not contained in given list."""
  birthdate_not_in: [DateTime!]

  """All values less than the given value."""
  birthdate_lt: DateTime

  """All values less than or equal the given value."""
  birthdate_lte: DateTime

  """All values greater than the given value."""
  birthdate_gt: DateTime

  """All values greater than or equal the given value."""
  birthdate_gte: DateTime
  sex: Sex

  """All values that are not equal to given value."""
  sex_not: Sex

  """All values that are contained in given list."""
  sex_in: [Sex!]

  """All values that are not contained in given list."""
  sex_not_in: [Sex!]
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
  surname: String

  """All values that are not equal to given value."""
  surname_not: String

  """All values that are contained in given list."""
  surname_in: [String!]

  """All values that are not contained in given list."""
  surname_not_in: [String!]

  """All values less than the given value."""
  surname_lt: String

  """All values less than or equal the given value."""
  surname_lte: String

  """All values greater than the given value."""
  surname_gt: String

  """All values greater than or equal the given value."""
  surname_gte: String

  """All values containing the given string."""
  surname_contains: String

  """All values not containing the given string."""
  surname_not_contains: String

  """All values starting with the given string."""
  surname_starts_with: String

  """All values not starting with the given string."""
  surname_not_starts_with: String

  """All values ending with the given string."""
  surname_ends_with: String

  """All values not ending with the given string."""
  surname_not_ends_with: String
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
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateManyDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
}

input UserUpdateManyWithoutLikedBarsInput {
  create: [UserCreateWithoutLikedBarsInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikedBarsInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikedBarsInput!]
}

input UserUpdateManyWithoutLikedBeersInput {
  create: [UserCreateWithoutLikedBeersInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikedBeersInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikedBeersInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutBarChangesInput {
  create: UserCreateWithoutBarChangesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBarChangesDataInput
  upsert: UserUpsertWithoutBarChangesInput
}

input UserUpdateOneRequiredWithoutBarChangeUpvotesInput {
  create: UserCreateWithoutBarChangeUpvotesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBarChangeUpvotesDataInput
  upsert: UserUpsertWithoutBarChangeUpvotesInput
}

input UserUpdateOneRequiredWithoutBarCommentsInput {
  create: UserCreateWithoutBarCommentsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBarCommentsDataInput
  upsert: UserUpsertWithoutBarCommentsInput
}

input UserUpdateOneRequiredWithoutBarRatingsInput {
  create: UserCreateWithoutBarRatingsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBarRatingsDataInput
  upsert: UserUpsertWithoutBarRatingsInput
}

input UserUpdateOneRequiredWithoutBeerChangesInput {
  create: UserCreateWithoutBeerChangesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBeerChangesDataInput
  upsert: UserUpsertWithoutBeerChangesInput
}

input UserUpdateOneRequiredWithoutBeerChangeUpvotesInput {
  create: UserCreateWithoutBeerChangeUpvotesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutBeerChangeUpvotesDataInput
  upsert: UserUpsertWithoutBeerChangeUpvotesInput
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

input UserUpdateOneRequiredWithoutCreatedBarsInput {
  create: UserCreateWithoutCreatedBarsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCreatedBarsDataInput
  upsert: UserUpsertWithoutCreatedBarsInput
}

input UserUpdateOneRequiredWithoutCreatedBeersInput {
  create: UserCreateWithoutCreatedBeersInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCreatedBeersDataInput
  upsert: UserUpsertWithoutCreatedBeersInput
}

input UserUpdateOneRequiredWithoutPricedBeersInput {
  create: UserCreateWithoutPricedBeersInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPricedBeersDataInput
  upsert: UserUpsertWithoutPricedBeersInput
}

input UserUpdateWithoutBarChangesDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBarChangeUpvotesDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBarCommentsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBarRatingsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBeerChangesDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBeerChangeUpvotesDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBeerCommentsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutBeerRatingsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutCreatedBarsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutCreatedBeersDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutLikedBarsDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutLikedBeersDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers: BeerPriceUpdateManyWithoutUserInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutPricedBeersDataInput {
  email: String
  password: String
  role: Role
  active: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name: String
  surname: String
  beerComments: BeerCommentUpdateManyWithoutUserInput
  barComments: BarCommentUpdateManyWithoutUserInput
  beerRatings: BeerRatingUpdateManyWithoutUserInput
  barRatings: BarRatingUpdateManyWithoutUserInput
  beerChanges: BeerChangeUpdateManyWithoutUserInput
  barChanges: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes: BarChangeUpvoteUpdateManyWithoutUserInput
  likedBeers: BeerUpdateManyWithoutLikedByInput
  likedBars: BarUpdateManyWithoutLikedByInput
  createdBeers: BeerUpdateManyWithoutCreatedByInput
  createdBars: BarUpdateManyWithoutCreatedByInput
}

input UserUpdateWithWhereUniqueWithoutLikedBarsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikedBarsDataInput!
}

input UserUpdateWithWhereUniqueWithoutLikedBeersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikedBeersDataInput!
}

input UserUpsertWithoutBarChangesInput {
  update: UserUpdateWithoutBarChangesDataInput!
  create: UserCreateWithoutBarChangesInput!
}

input UserUpsertWithoutBarChangeUpvotesInput {
  update: UserUpdateWithoutBarChangeUpvotesDataInput!
  create: UserCreateWithoutBarChangeUpvotesInput!
}

input UserUpsertWithoutBarCommentsInput {
  update: UserUpdateWithoutBarCommentsDataInput!
  create: UserCreateWithoutBarCommentsInput!
}

input UserUpsertWithoutBarRatingsInput {
  update: UserUpdateWithoutBarRatingsDataInput!
  create: UserCreateWithoutBarRatingsInput!
}

input UserUpsertWithoutBeerChangesInput {
  update: UserUpdateWithoutBeerChangesDataInput!
  create: UserCreateWithoutBeerChangesInput!
}

input UserUpsertWithoutBeerChangeUpvotesInput {
  update: UserUpdateWithoutBeerChangeUpvotesDataInput!
  create: UserCreateWithoutBeerChangeUpvotesInput!
}

input UserUpsertWithoutBeerCommentsInput {
  update: UserUpdateWithoutBeerCommentsDataInput!
  create: UserCreateWithoutBeerCommentsInput!
}

input UserUpsertWithoutBeerRatingsInput {
  update: UserUpdateWithoutBeerRatingsDataInput!
  create: UserCreateWithoutBeerRatingsInput!
}

input UserUpsertWithoutCreatedBarsInput {
  update: UserUpdateWithoutCreatedBarsDataInput!
  create: UserCreateWithoutCreatedBarsInput!
}

input UserUpsertWithoutCreatedBeersInput {
  update: UserUpdateWithoutCreatedBeersDataInput!
  create: UserCreateWithoutCreatedBeersInput!
}

input UserUpsertWithoutPricedBeersInput {
  update: UserUpdateWithoutPricedBeersDataInput!
  create: UserCreateWithoutPricedBeersInput!
}

input UserUpsertWithWhereUniqueWithoutLikedBarsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikedBarsDataInput!
  create: UserCreateWithoutLikedBarsInput!
}

input UserUpsertWithWhereUniqueWithoutLikedBeersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikedBeersDataInput!
  create: UserCreateWithoutLikedBeersInput!
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
  nickname: String

  """All values that are not equal to given value."""
  nickname_not: String

  """All values that are contained in given list."""
  nickname_in: [String!]

  """All values that are not contained in given list."""
  nickname_not_in: [String!]

  """All values less than the given value."""
  nickname_lt: String

  """All values less than or equal the given value."""
  nickname_lte: String

  """All values greater than the given value."""
  nickname_gt: String

  """All values greater than or equal the given value."""
  nickname_gte: String

  """All values containing the given string."""
  nickname_contains: String

  """All values not containing the given string."""
  nickname_not_contains: String

  """All values starting with the given string."""
  nickname_starts_with: String

  """All values not starting with the given string."""
  nickname_not_starts_with: String

  """All values ending with the given string."""
  nickname_ends_with: String

  """All values not ending with the given string."""
  nickname_not_ends_with: String
  birthdate: DateTime

  """All values that are not equal to given value."""
  birthdate_not: DateTime

  """All values that are contained in given list."""
  birthdate_in: [DateTime!]

  """All values that are not contained in given list."""
  birthdate_not_in: [DateTime!]

  """All values less than the given value."""
  birthdate_lt: DateTime

  """All values less than or equal the given value."""
  birthdate_lte: DateTime

  """All values greater than the given value."""
  birthdate_gt: DateTime

  """All values greater than or equal the given value."""
  birthdate_gte: DateTime
  sex: Sex

  """All values that are not equal to given value."""
  sex_not: Sex

  """All values that are contained in given list."""
  sex_in: [Sex!]

  """All values that are not contained in given list."""
  sex_not_in: [Sex!]
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
  surname: String

  """All values that are not equal to given value."""
  surname_not: String

  """All values that are contained in given list."""
  surname_in: [String!]

  """All values that are not contained in given list."""
  surname_not_in: [String!]

  """All values less than the given value."""
  surname_lt: String

  """All values less than or equal the given value."""
  surname_lte: String

  """All values greater than the given value."""
  surname_gt: String

  """All values greater than or equal the given value."""
  surname_gte: String

  """All values containing the given string."""
  surname_contains: String

  """All values not containing the given string."""
  surname_not_contains: String

  """All values starting with the given string."""
  surname_starts_with: String

  """All values not starting with the given string."""
  surname_not_starts_with: String

  """All values ending with the given string."""
  surname_ends_with: String

  """All values not ending with the given string."""
  surname_not_ends_with: String
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
  beerComments_every: BeerCommentWhereInput
  beerComments_some: BeerCommentWhereInput
  beerComments_none: BeerCommentWhereInput
  barComments_every: BarCommentWhereInput
  barComments_some: BarCommentWhereInput
  barComments_none: BarCommentWhereInput
  beerRatings_every: BeerRatingWhereInput
  beerRatings_some: BeerRatingWhereInput
  beerRatings_none: BeerRatingWhereInput
  barRatings_every: BarRatingWhereInput
  barRatings_some: BarRatingWhereInput
  barRatings_none: BarRatingWhereInput
  beerChanges_every: BeerChangeWhereInput
  beerChanges_some: BeerChangeWhereInput
  beerChanges_none: BeerChangeWhereInput
  barChanges_every: BarChangeWhereInput
  barChanges_some: BarChangeWhereInput
  barChanges_none: BarChangeWhereInput
  beerChangeUpvotes_every: BeerChangeUpvoteWhereInput
  beerChangeUpvotes_some: BeerChangeUpvoteWhereInput
  beerChangeUpvotes_none: BeerChangeUpvoteWhereInput
  barChangeUpvotes_every: BarChangeUpvoteWhereInput
  barChangeUpvotes_some: BarChangeUpvoteWhereInput
  barChangeUpvotes_none: BarChangeUpvoteWhereInput
  pricedBeers_every: BeerPriceWhereInput
  pricedBeers_some: BeerPriceWhereInput
  pricedBeers_none: BeerPriceWhereInput
  likedBeers_every: BeerWhereInput
  likedBeers_some: BeerWhereInput
  likedBeers_none: BeerWhereInput
  likedBars_every: BarWhereInput
  likedBars_some: BarWhereInput
  likedBars_none: BarWhereInput
  createdBeers_every: BeerWhereInput
  createdBeers_some: BeerWhereInput
  createdBeers_none: BeerWhereInput
  createdBars_every: BarWhereInput
  createdBars_some: BarWhereInput
  createdBars_none: BarWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type BarChangeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'price_ASC' |
  'price_DESC' |
  'field_ASC' |
  'field_DESC' |
  'newValue_ASC' |
  'newValue_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BarChangeUpvoteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BarCommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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
  'phone_ASC' |
  'phone_DESC' |
  'openTime_ASC' |
  'openTime_DESC' |
  'closeTime_ASC' |
  'closeTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BarRatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BeerChangeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'price_ASC' |
  'price_DESC' |
  'field_ASC' |
  'field_DESC' |
  'newValue_ASC' |
  'newValue_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerChangeUpvoteOrderByInput =   'id_ASC' |
  'id_DESC' |
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
  'type_ASC' |
  'type_DESC' |
  'strong_ASC' |
  'strong_DESC' |
  'photo_ASC' |
  'photo_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BeerPriceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'price_ASC' |
  'price_DESC' |
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

export type BreweryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'country_ASC' |
  'country_DESC' |
  'logo_ASC' |
  'logo_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Role =   'USER' |
  'ADMIN'

export type Sex =   'MALE' |
  'FEMALE'

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
  'nickname_ASC' |
  'nickname_DESC' |
  'birthdate_ASC' |
  'birthdate_DESC' |
  'sex_ASC' |
  'sex_DESC' |
  'name_ASC' |
  'name_DESC' |
  'surname_ASC' |
  'surname_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface BarChangeCreateInput {
  price: Float
  field: String
  newValue: String
  user: UserCreateOneWithoutBarChangesInput
  bar: BarCreateOneWithoutBarChangesInput
  upvotes?: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

export interface BarChangeCreateManyWithoutBarInput {
  create?: BarChangeCreateWithoutBarInput[] | BarChangeCreateWithoutBarInput
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
}

export interface BarChangeCreateManyWithoutUserInput {
  create?: BarChangeCreateWithoutUserInput[] | BarChangeCreateWithoutUserInput
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
}

export interface BarChangeCreateOneWithoutUpvotesInput {
  create?: BarChangeCreateWithoutUpvotesInput
  connect?: BarChangeWhereUniqueInput
}

export interface BarChangeCreateWithoutBarInput {
  price: Float
  field: String
  newValue: String
  user: UserCreateOneWithoutBarChangesInput
  upvotes?: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

export interface BarChangeCreateWithoutUpvotesInput {
  price: Float
  field: String
  newValue: String
  user: UserCreateOneWithoutBarChangesInput
  bar: BarCreateOneWithoutBarChangesInput
}

export interface BarChangeCreateWithoutUserInput {
  price: Float
  field: String
  newValue: String
  bar: BarCreateOneWithoutBarChangesInput
  upvotes?: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

export interface BarChangeScalarWhereInput {
  AND?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput
  OR?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput
  NOT?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  field?: String
  field_not?: String
  field_in?: String[] | String
  field_not_in?: String[] | String
  field_lt?: String
  field_lte?: String
  field_gt?: String
  field_gte?: String
  field_contains?: String
  field_not_contains?: String
  field_starts_with?: String
  field_not_starts_with?: String
  field_ends_with?: String
  field_not_ends_with?: String
  newValue?: String
  newValue_not?: String
  newValue_in?: String[] | String
  newValue_not_in?: String[] | String
  newValue_lt?: String
  newValue_lte?: String
  newValue_gt?: String
  newValue_gte?: String
  newValue_contains?: String
  newValue_not_contains?: String
  newValue_starts_with?: String
  newValue_not_starts_with?: String
  newValue_ends_with?: String
  newValue_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface BarChangeSubscriptionWhereInput {
  AND?: BarChangeSubscriptionWhereInput[] | BarChangeSubscriptionWhereInput
  OR?: BarChangeSubscriptionWhereInput[] | BarChangeSubscriptionWhereInput
  NOT?: BarChangeSubscriptionWhereInput[] | BarChangeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BarChangeWhereInput
}

export interface BarChangeUpdateInput {
  price?: Float
  field?: String
  newValue?: String
  user?: UserUpdateOneRequiredWithoutBarChangesInput
  bar?: BarUpdateOneRequiredWithoutBarChangesInput
  upvotes?: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

export interface BarChangeUpdateManyDataInput {
  price?: Float
  field?: String
  newValue?: String
}

export interface BarChangeUpdateManyMutationInput {
  price?: Float
  field?: String
  newValue?: String
}

export interface BarChangeUpdateManyWithoutBarInput {
  create?: BarChangeCreateWithoutBarInput[] | BarChangeCreateWithoutBarInput
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  set?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  disconnect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  delete?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  update?: BarChangeUpdateWithWhereUniqueWithoutBarInput[] | BarChangeUpdateWithWhereUniqueWithoutBarInput
  updateMany?: BarChangeUpdateManyWithWhereNestedInput[] | BarChangeUpdateManyWithWhereNestedInput
  deleteMany?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput
  upsert?: BarChangeUpsertWithWhereUniqueWithoutBarInput[] | BarChangeUpsertWithWhereUniqueWithoutBarInput
}

export interface BarChangeUpdateManyWithoutUserInput {
  create?: BarChangeCreateWithoutUserInput[] | BarChangeCreateWithoutUserInput
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  set?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  disconnect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  delete?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput
  update?: BarChangeUpdateWithWhereUniqueWithoutUserInput[] | BarChangeUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BarChangeUpdateManyWithWhereNestedInput[] | BarChangeUpdateManyWithWhereNestedInput
  deleteMany?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput
  upsert?: BarChangeUpsertWithWhereUniqueWithoutUserInput[] | BarChangeUpsertWithWhereUniqueWithoutUserInput
}

export interface BarChangeUpdateManyWithWhereNestedInput {
  where: BarChangeScalarWhereInput
  data: BarChangeUpdateManyDataInput
}

export interface BarChangeUpdateOneRequiredWithoutUpvotesInput {
  create?: BarChangeCreateWithoutUpvotesInput
  connect?: BarChangeWhereUniqueInput
  update?: BarChangeUpdateWithoutUpvotesDataInput
  upsert?: BarChangeUpsertWithoutUpvotesInput
}

export interface BarChangeUpdateWithoutBarDataInput {
  price?: Float
  field?: String
  newValue?: String
  user?: UserUpdateOneRequiredWithoutBarChangesInput
  upvotes?: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

export interface BarChangeUpdateWithoutUpvotesDataInput {
  price?: Float
  field?: String
  newValue?: String
  user?: UserUpdateOneRequiredWithoutBarChangesInput
  bar?: BarUpdateOneRequiredWithoutBarChangesInput
}

export interface BarChangeUpdateWithoutUserDataInput {
  price?: Float
  field?: String
  newValue?: String
  bar?: BarUpdateOneRequiredWithoutBarChangesInput
  upvotes?: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

export interface BarChangeUpdateWithWhereUniqueWithoutBarInput {
  where: BarChangeWhereUniqueInput
  data: BarChangeUpdateWithoutBarDataInput
}

export interface BarChangeUpdateWithWhereUniqueWithoutUserInput {
  where: BarChangeWhereUniqueInput
  data: BarChangeUpdateWithoutUserDataInput
}

export interface BarChangeUpsertWithoutUpvotesInput {
  update: BarChangeUpdateWithoutUpvotesDataInput
  create: BarChangeCreateWithoutUpvotesInput
}

export interface BarChangeUpsertWithWhereUniqueWithoutBarInput {
  where: BarChangeWhereUniqueInput
  update: BarChangeUpdateWithoutBarDataInput
  create: BarChangeCreateWithoutBarInput
}

export interface BarChangeUpsertWithWhereUniqueWithoutUserInput {
  where: BarChangeWhereUniqueInput
  update: BarChangeUpdateWithoutUserDataInput
  create: BarChangeCreateWithoutUserInput
}

export interface BarChangeUpvoteCreateInput {
  user: UserCreateOneWithoutBarChangeUpvotesInput
  barChange: BarChangeCreateOneWithoutUpvotesInput
}

export interface BarChangeUpvoteCreateManyWithoutBarChangeInput {
  create?: BarChangeUpvoteCreateWithoutBarChangeInput[] | BarChangeUpvoteCreateWithoutBarChangeInput
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
}

export interface BarChangeUpvoteCreateManyWithoutUserInput {
  create?: BarChangeUpvoteCreateWithoutUserInput[] | BarChangeUpvoteCreateWithoutUserInput
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
}

export interface BarChangeUpvoteCreateWithoutBarChangeInput {
  user: UserCreateOneWithoutBarChangeUpvotesInput
}

export interface BarChangeUpvoteCreateWithoutUserInput {
  barChange: BarChangeCreateOneWithoutUpvotesInput
}

export interface BarChangeUpvoteScalarWhereInput {
  AND?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput
  OR?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput
  NOT?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput
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
}

export interface BarChangeUpvoteSubscriptionWhereInput {
  AND?: BarChangeUpvoteSubscriptionWhereInput[] | BarChangeUpvoteSubscriptionWhereInput
  OR?: BarChangeUpvoteSubscriptionWhereInput[] | BarChangeUpvoteSubscriptionWhereInput
  NOT?: BarChangeUpvoteSubscriptionWhereInput[] | BarChangeUpvoteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BarChangeUpvoteWhereInput
}

export interface BarChangeUpvoteUpdateInput {
  user?: UserUpdateOneRequiredWithoutBarChangeUpvotesInput
  barChange?: BarChangeUpdateOneRequiredWithoutUpvotesInput
}

export interface BarChangeUpvoteUpdateManyWithoutBarChangeInput {
  create?: BarChangeUpvoteCreateWithoutBarChangeInput[] | BarChangeUpvoteCreateWithoutBarChangeInput
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  set?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  disconnect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  delete?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  update?: BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput[] | BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput
  deleteMany?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput
  upsert?: BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput[] | BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput
}

export interface BarChangeUpvoteUpdateManyWithoutUserInput {
  create?: BarChangeUpvoteCreateWithoutUserInput[] | BarChangeUpvoteCreateWithoutUserInput
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  set?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  disconnect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  delete?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput
  update?: BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput[] | BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput
  deleteMany?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput
  upsert?: BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput[] | BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput
}

export interface BarChangeUpvoteUpdateWithoutBarChangeDataInput {
  user?: UserUpdateOneRequiredWithoutBarChangeUpvotesInput
}

export interface BarChangeUpvoteUpdateWithoutUserDataInput {
  barChange?: BarChangeUpdateOneRequiredWithoutUpvotesInput
}

export interface BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput {
  where: BarChangeUpvoteWhereUniqueInput
  data: BarChangeUpvoteUpdateWithoutBarChangeDataInput
}

export interface BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput {
  where: BarChangeUpvoteWhereUniqueInput
  data: BarChangeUpvoteUpdateWithoutUserDataInput
}

export interface BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput {
  where: BarChangeUpvoteWhereUniqueInput
  update: BarChangeUpvoteUpdateWithoutBarChangeDataInput
  create: BarChangeUpvoteCreateWithoutBarChangeInput
}

export interface BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput {
  where: BarChangeUpvoteWhereUniqueInput
  update: BarChangeUpvoteUpdateWithoutUserDataInput
  create: BarChangeUpvoteCreateWithoutUserInput
}

export interface BarChangeUpvoteWhereInput {
  AND?: BarChangeUpvoteWhereInput[] | BarChangeUpvoteWhereInput
  OR?: BarChangeUpvoteWhereInput[] | BarChangeUpvoteWhereInput
  NOT?: BarChangeUpvoteWhereInput[] | BarChangeUpvoteWhereInput
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
  user?: UserWhereInput
  barChange?: BarChangeWhereInput
}

export interface BarChangeUpvoteWhereUniqueInput {
  id?: ID_Input
}

export interface BarChangeWhereInput {
  AND?: BarChangeWhereInput[] | BarChangeWhereInput
  OR?: BarChangeWhereInput[] | BarChangeWhereInput
  NOT?: BarChangeWhereInput[] | BarChangeWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  field?: String
  field_not?: String
  field_in?: String[] | String
  field_not_in?: String[] | String
  field_lt?: String
  field_lte?: String
  field_gt?: String
  field_gte?: String
  field_contains?: String
  field_not_contains?: String
  field_starts_with?: String
  field_not_starts_with?: String
  field_ends_with?: String
  field_not_ends_with?: String
  newValue?: String
  newValue_not?: String
  newValue_in?: String[] | String
  newValue_not_in?: String[] | String
  newValue_lt?: String
  newValue_lte?: String
  newValue_gt?: String
  newValue_gte?: String
  newValue_contains?: String
  newValue_not_contains?: String
  newValue_starts_with?: String
  newValue_not_starts_with?: String
  newValue_ends_with?: String
  newValue_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  user?: UserWhereInput
  bar?: BarWhereInput
  upvotes_every?: BarChangeUpvoteWhereInput
  upvotes_some?: BarChangeUpvoteWhereInput
  upvotes_none?: BarChangeUpvoteWhereInput
}

export interface BarChangeWhereUniqueInput {
  id?: ID_Input
}

export interface BarCommentCreateInput {
  comment: String
  bar: BarCreateOneWithoutBarCommentsInput
  user: UserCreateOneWithoutBarCommentsInput
}

export interface BarCommentCreateManyWithoutBarInput {
  create?: BarCommentCreateWithoutBarInput[] | BarCommentCreateWithoutBarInput
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
}

export interface BarCommentCreateManyWithoutUserInput {
  create?: BarCommentCreateWithoutUserInput[] | BarCommentCreateWithoutUserInput
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
}

export interface BarCommentCreateWithoutBarInput {
  comment: String
  user: UserCreateOneWithoutBarCommentsInput
}

export interface BarCommentCreateWithoutUserInput {
  comment: String
  bar: BarCreateOneWithoutBarCommentsInput
}

export interface BarCommentScalarWhereInput {
  AND?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput
  OR?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput
  NOT?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput
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

export interface BarCommentSubscriptionWhereInput {
  AND?: BarCommentSubscriptionWhereInput[] | BarCommentSubscriptionWhereInput
  OR?: BarCommentSubscriptionWhereInput[] | BarCommentSubscriptionWhereInput
  NOT?: BarCommentSubscriptionWhereInput[] | BarCommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BarCommentWhereInput
}

export interface BarCommentUpdateInput {
  comment?: String
  bar?: BarUpdateOneRequiredWithoutBarCommentsInput
  user?: UserUpdateOneRequiredWithoutBarCommentsInput
}

export interface BarCommentUpdateManyDataInput {
  comment?: String
}

export interface BarCommentUpdateManyMutationInput {
  comment?: String
}

export interface BarCommentUpdateManyWithoutBarInput {
  create?: BarCommentCreateWithoutBarInput[] | BarCommentCreateWithoutBarInput
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  set?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  disconnect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  delete?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  update?: BarCommentUpdateWithWhereUniqueWithoutBarInput[] | BarCommentUpdateWithWhereUniqueWithoutBarInput
  updateMany?: BarCommentUpdateManyWithWhereNestedInput[] | BarCommentUpdateManyWithWhereNestedInput
  deleteMany?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput
  upsert?: BarCommentUpsertWithWhereUniqueWithoutBarInput[] | BarCommentUpsertWithWhereUniqueWithoutBarInput
}

export interface BarCommentUpdateManyWithoutUserInput {
  create?: BarCommentCreateWithoutUserInput[] | BarCommentCreateWithoutUserInput
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  set?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  disconnect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  delete?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput
  update?: BarCommentUpdateWithWhereUniqueWithoutUserInput[] | BarCommentUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BarCommentUpdateManyWithWhereNestedInput[] | BarCommentUpdateManyWithWhereNestedInput
  deleteMany?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput
  upsert?: BarCommentUpsertWithWhereUniqueWithoutUserInput[] | BarCommentUpsertWithWhereUniqueWithoutUserInput
}

export interface BarCommentUpdateManyWithWhereNestedInput {
  where: BarCommentScalarWhereInput
  data: BarCommentUpdateManyDataInput
}

export interface BarCommentUpdateWithoutBarDataInput {
  comment?: String
  user?: UserUpdateOneRequiredWithoutBarCommentsInput
}

export interface BarCommentUpdateWithoutUserDataInput {
  comment?: String
  bar?: BarUpdateOneRequiredWithoutBarCommentsInput
}

export interface BarCommentUpdateWithWhereUniqueWithoutBarInput {
  where: BarCommentWhereUniqueInput
  data: BarCommentUpdateWithoutBarDataInput
}

export interface BarCommentUpdateWithWhereUniqueWithoutUserInput {
  where: BarCommentWhereUniqueInput
  data: BarCommentUpdateWithoutUserDataInput
}

export interface BarCommentUpsertWithWhereUniqueWithoutBarInput {
  where: BarCommentWhereUniqueInput
  update: BarCommentUpdateWithoutBarDataInput
  create: BarCommentCreateWithoutBarInput
}

export interface BarCommentUpsertWithWhereUniqueWithoutUserInput {
  where: BarCommentWhereUniqueInput
  update: BarCommentUpdateWithoutUserDataInput
  create: BarCommentCreateWithoutUserInput
}

export interface BarCommentWhereInput {
  AND?: BarCommentWhereInput[] | BarCommentWhereInput
  OR?: BarCommentWhereInput[] | BarCommentWhereInput
  NOT?: BarCommentWhereInput[] | BarCommentWhereInput
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
  bar?: BarWhereInput
  user?: UserWhereInput
}

export interface BarCommentWhereUniqueInput {
  id?: ID_Input
}

export interface BarCreateInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  barRating?: BarRatingCreateManyWithoutBarInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateManyWithoutBeersInput {
  create?: BarCreateWithoutBeersInput[] | BarCreateWithoutBeersInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
}

export interface BarCreateManyWithoutCreatedByInput {
  create?: BarCreateWithoutCreatedByInput[] | BarCreateWithoutCreatedByInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
}

export interface BarCreateManyWithoutLikedByInput {
  create?: BarCreateWithoutLikedByInput[] | BarCreateWithoutLikedByInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
}

export interface BarCreateOneWithoutBarChangesInput {
  create?: BarCreateWithoutBarChangesInput
  connect?: BarWhereUniqueInput
}

export interface BarCreateOneWithoutBarCommentsInput {
  create?: BarCreateWithoutBarCommentsInput
  connect?: BarWhereUniqueInput
}

export interface BarCreateOneWithoutBarRatingInput {
  create?: BarCreateWithoutBarRatingInput
  connect?: BarWhereUniqueInput
}

export interface BarCreateOneWithoutBeerPricesInput {
  create?: BarCreateWithoutBeerPricesInput
  connect?: BarWhereUniqueInput
}

export interface BarCreatephotosInput {
  set?: String[] | String
}

export interface BarCreateWithoutBarChangesInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  barRating?: BarRatingCreateManyWithoutBarInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateWithoutBarCommentsInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  barRating?: BarRatingCreateManyWithoutBarInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateWithoutBarRatingInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateWithoutBeerPricesInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  barRating?: BarRatingCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateWithoutBeersInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  barRating?: BarRatingCreateManyWithoutBarInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateWithoutCreatedByInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  barRating?: BarRatingCreateManyWithoutBarInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  likedBy?: UserCreateManyWithoutLikedBarsInput
}

export interface BarCreateWithoutLikedByInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarCreatephotosInput
  beers?: BeerCreateManyWithoutBarsInput
  barRating?: BarRatingCreateManyWithoutBarInput
  beerPrices?: BeerPriceCreateManyWithoutBarInput
  barComments?: BarCommentCreateManyWithoutBarInput
  barChanges?: BarChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
}

export interface BarRatingCreateInput {
  rating: Float
  user: UserCreateOneWithoutBarRatingsInput
  bar: BarCreateOneWithoutBarRatingInput
}

export interface BarRatingCreateManyWithoutBarInput {
  create?: BarRatingCreateWithoutBarInput[] | BarRatingCreateWithoutBarInput
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
}

export interface BarRatingCreateManyWithoutUserInput {
  create?: BarRatingCreateWithoutUserInput[] | BarRatingCreateWithoutUserInput
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
}

export interface BarRatingCreateWithoutBarInput {
  rating: Float
  user: UserCreateOneWithoutBarRatingsInput
}

export interface BarRatingCreateWithoutUserInput {
  rating: Float
  bar: BarCreateOneWithoutBarRatingInput
}

export interface BarRatingScalarWhereInput {
  AND?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput
  OR?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput
  NOT?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput
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
  rating?: Float
  rating_not?: Float
  rating_in?: Float[] | Float
  rating_not_in?: Float[] | Float
  rating_lt?: Float
  rating_lte?: Float
  rating_gt?: Float
  rating_gte?: Float
}

export interface BarRatingSubscriptionWhereInput {
  AND?: BarRatingSubscriptionWhereInput[] | BarRatingSubscriptionWhereInput
  OR?: BarRatingSubscriptionWhereInput[] | BarRatingSubscriptionWhereInput
  NOT?: BarRatingSubscriptionWhereInput[] | BarRatingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BarRatingWhereInput
}

export interface BarRatingUpdateInput {
  rating?: Float
  user?: UserUpdateOneRequiredWithoutBarRatingsInput
  bar?: BarUpdateOneRequiredWithoutBarRatingInput
}

export interface BarRatingUpdateManyDataInput {
  rating?: Float
}

export interface BarRatingUpdateManyMutationInput {
  rating?: Float
}

export interface BarRatingUpdateManyWithoutBarInput {
  create?: BarRatingCreateWithoutBarInput[] | BarRatingCreateWithoutBarInput
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  set?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  disconnect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  delete?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  update?: BarRatingUpdateWithWhereUniqueWithoutBarInput[] | BarRatingUpdateWithWhereUniqueWithoutBarInput
  updateMany?: BarRatingUpdateManyWithWhereNestedInput[] | BarRatingUpdateManyWithWhereNestedInput
  deleteMany?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput
  upsert?: BarRatingUpsertWithWhereUniqueWithoutBarInput[] | BarRatingUpsertWithWhereUniqueWithoutBarInput
}

export interface BarRatingUpdateManyWithoutUserInput {
  create?: BarRatingCreateWithoutUserInput[] | BarRatingCreateWithoutUserInput
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  set?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  disconnect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  delete?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput
  update?: BarRatingUpdateWithWhereUniqueWithoutUserInput[] | BarRatingUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BarRatingUpdateManyWithWhereNestedInput[] | BarRatingUpdateManyWithWhereNestedInput
  deleteMany?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput
  upsert?: BarRatingUpsertWithWhereUniqueWithoutUserInput[] | BarRatingUpsertWithWhereUniqueWithoutUserInput
}

export interface BarRatingUpdateManyWithWhereNestedInput {
  where: BarRatingScalarWhereInput
  data: BarRatingUpdateManyDataInput
}

export interface BarRatingUpdateWithoutBarDataInput {
  rating?: Float
  user?: UserUpdateOneRequiredWithoutBarRatingsInput
}

export interface BarRatingUpdateWithoutUserDataInput {
  rating?: Float
  bar?: BarUpdateOneRequiredWithoutBarRatingInput
}

export interface BarRatingUpdateWithWhereUniqueWithoutBarInput {
  where: BarRatingWhereUniqueInput
  data: BarRatingUpdateWithoutBarDataInput
}

export interface BarRatingUpdateWithWhereUniqueWithoutUserInput {
  where: BarRatingWhereUniqueInput
  data: BarRatingUpdateWithoutUserDataInput
}

export interface BarRatingUpsertWithWhereUniqueWithoutBarInput {
  where: BarRatingWhereUniqueInput
  update: BarRatingUpdateWithoutBarDataInput
  create: BarRatingCreateWithoutBarInput
}

export interface BarRatingUpsertWithWhereUniqueWithoutUserInput {
  where: BarRatingWhereUniqueInput
  update: BarRatingUpdateWithoutUserDataInput
  create: BarRatingCreateWithoutUserInput
}

export interface BarRatingWhereInput {
  AND?: BarRatingWhereInput[] | BarRatingWhereInput
  OR?: BarRatingWhereInput[] | BarRatingWhereInput
  NOT?: BarRatingWhereInput[] | BarRatingWhereInput
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
  rating?: Float
  rating_not?: Float
  rating_in?: Float[] | Float
  rating_not_in?: Float[] | Float
  rating_lt?: Float
  rating_lte?: Float
  rating_gt?: Float
  rating_gte?: Float
  user?: UserWhereInput
  bar?: BarWhereInput
}

export interface BarRatingWhereUniqueInput {
  id?: ID_Input
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
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
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
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateManyDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
}

export interface BarUpdateManyMutationInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
}

export interface BarUpdateManyWithoutBeersInput {
  create?: BarCreateWithoutBeersInput[] | BarCreateWithoutBeersInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  set?: BarWhereUniqueInput[] | BarWhereUniqueInput
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput
  update?: BarUpdateWithWhereUniqueWithoutBeersInput[] | BarUpdateWithWhereUniqueWithoutBeersInput
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput
  upsert?: BarUpsertWithWhereUniqueWithoutBeersInput[] | BarUpsertWithWhereUniqueWithoutBeersInput
}

export interface BarUpdateManyWithoutCreatedByInput {
  create?: BarCreateWithoutCreatedByInput[] | BarCreateWithoutCreatedByInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  set?: BarWhereUniqueInput[] | BarWhereUniqueInput
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput
  update?: BarUpdateWithWhereUniqueWithoutCreatedByInput[] | BarUpdateWithWhereUniqueWithoutCreatedByInput
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput
  upsert?: BarUpsertWithWhereUniqueWithoutCreatedByInput[] | BarUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface BarUpdateManyWithoutLikedByInput {
  create?: BarCreateWithoutLikedByInput[] | BarCreateWithoutLikedByInput
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  set?: BarWhereUniqueInput[] | BarWhereUniqueInput
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput
  update?: BarUpdateWithWhereUniqueWithoutLikedByInput[] | BarUpdateWithWhereUniqueWithoutLikedByInput
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput
  upsert?: BarUpsertWithWhereUniqueWithoutLikedByInput[] | BarUpsertWithWhereUniqueWithoutLikedByInput
}

export interface BarUpdateManyWithWhereNestedInput {
  where: BarScalarWhereInput
  data: BarUpdateManyDataInput
}

export interface BarUpdateOneRequiredWithoutBarChangesInput {
  create?: BarCreateWithoutBarChangesInput
  connect?: BarWhereUniqueInput
  update?: BarUpdateWithoutBarChangesDataInput
  upsert?: BarUpsertWithoutBarChangesInput
}

export interface BarUpdateOneRequiredWithoutBarCommentsInput {
  create?: BarCreateWithoutBarCommentsInput
  connect?: BarWhereUniqueInput
  update?: BarUpdateWithoutBarCommentsDataInput
  upsert?: BarUpsertWithoutBarCommentsInput
}

export interface BarUpdateOneRequiredWithoutBarRatingInput {
  create?: BarCreateWithoutBarRatingInput
  connect?: BarWhereUniqueInput
  update?: BarUpdateWithoutBarRatingDataInput
  upsert?: BarUpsertWithoutBarRatingInput
}

export interface BarUpdateOneRequiredWithoutBeerPricesInput {
  create?: BarCreateWithoutBeerPricesInput
  connect?: BarWhereUniqueInput
  update?: BarUpdateWithoutBeerPricesDataInput
  upsert?: BarUpsertWithoutBeerPricesInput
}

export interface BarUpdatephotosInput {
  set?: String[] | String
}

export interface BarUpdateWithoutBarChangesDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateWithoutBarCommentsDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateWithoutBarRatingDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateWithoutBeerPricesDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateWithoutBeersDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateWithoutCreatedByDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  likedBy?: UserUpdateManyWithoutLikedBarsInput
}

export interface BarUpdateWithoutLikedByDataInput {
  name?: String
  address?: String
  lat?: String
  long?: String
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos?: BarUpdatephotosInput
  beers?: BeerUpdateManyWithoutBarsInput
  barRating?: BarRatingUpdateManyWithoutBarInput
  beerPrices?: BeerPriceUpdateManyWithoutBarInput
  barComments?: BarCommentUpdateManyWithoutBarInput
  barChanges?: BarChangeUpdateManyWithoutBarInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBarsInput
}

export interface BarUpdateWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput
  data: BarUpdateWithoutBeersDataInput
}

export interface BarUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BarWhereUniqueInput
  data: BarUpdateWithoutCreatedByDataInput
}

export interface BarUpdateWithWhereUniqueWithoutLikedByInput {
  where: BarWhereUniqueInput
  data: BarUpdateWithoutLikedByDataInput
}

export interface BarUpsertWithoutBarChangesInput {
  update: BarUpdateWithoutBarChangesDataInput
  create: BarCreateWithoutBarChangesInput
}

export interface BarUpsertWithoutBarCommentsInput {
  update: BarUpdateWithoutBarCommentsDataInput
  create: BarCreateWithoutBarCommentsInput
}

export interface BarUpsertWithoutBarRatingInput {
  update: BarUpdateWithoutBarRatingDataInput
  create: BarCreateWithoutBarRatingInput
}

export interface BarUpsertWithoutBeerPricesInput {
  update: BarUpdateWithoutBeerPricesDataInput
  create: BarCreateWithoutBeerPricesInput
}

export interface BarUpsertWithWhereUniqueWithoutBeersInput {
  where: BarWhereUniqueInput
  update: BarUpdateWithoutBeersDataInput
  create: BarCreateWithoutBeersInput
}

export interface BarUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BarWhereUniqueInput
  update: BarUpdateWithoutCreatedByDataInput
  create: BarCreateWithoutCreatedByInput
}

export interface BarUpsertWithWhereUniqueWithoutLikedByInput {
  where: BarWhereUniqueInput
  update: BarUpdateWithoutLikedByDataInput
  create: BarCreateWithoutLikedByInput
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
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
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
  barRating_every?: BarRatingWhereInput
  barRating_some?: BarRatingWhereInput
  barRating_none?: BarRatingWhereInput
  beerPrices_every?: BeerPriceWhereInput
  beerPrices_some?: BeerPriceWhereInput
  beerPrices_none?: BeerPriceWhereInput
  barComments_every?: BarCommentWhereInput
  barComments_some?: BarCommentWhereInput
  barComments_none?: BarCommentWhereInput
  barChanges_every?: BarChangeWhereInput
  barChanges_some?: BarChangeWhereInput
  barChanges_none?: BarChangeWhereInput
  createdBy?: UserWhereInput
  likedBy_every?: UserWhereInput
  likedBy_some?: UserWhereInput
  likedBy_none?: UserWhereInput
}

export interface BarWhereUniqueInput {
  id?: ID_Input
}

export interface BeerChangeCreateInput {
  price: Float
  field: String
  newValue: String
  user: UserCreateOneWithoutBeerChangesInput
  beer: BeerCreateOneWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

export interface BeerChangeCreateManyWithoutBeerInput {
  create?: BeerChangeCreateWithoutBeerInput[] | BeerChangeCreateWithoutBeerInput
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
}

export interface BeerChangeCreateManyWithoutUserInput {
  create?: BeerChangeCreateWithoutUserInput[] | BeerChangeCreateWithoutUserInput
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
}

export interface BeerChangeCreateOneWithoutUpvotesInput {
  create?: BeerChangeCreateWithoutUpvotesInput
  connect?: BeerChangeWhereUniqueInput
}

export interface BeerChangeCreateWithoutBeerInput {
  price: Float
  field: String
  newValue: String
  user: UserCreateOneWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

export interface BeerChangeCreateWithoutUpvotesInput {
  price: Float
  field: String
  newValue: String
  user: UserCreateOneWithoutBeerChangesInput
  beer: BeerCreateOneWithoutBeerChangesInput
}

export interface BeerChangeCreateWithoutUserInput {
  price: Float
  field: String
  newValue: String
  beer: BeerCreateOneWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

export interface BeerChangeScalarWhereInput {
  AND?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput
  OR?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput
  NOT?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  field?: String
  field_not?: String
  field_in?: String[] | String
  field_not_in?: String[] | String
  field_lt?: String
  field_lte?: String
  field_gt?: String
  field_gte?: String
  field_contains?: String
  field_not_contains?: String
  field_starts_with?: String
  field_not_starts_with?: String
  field_ends_with?: String
  field_not_ends_with?: String
  newValue?: String
  newValue_not?: String
  newValue_in?: String[] | String
  newValue_not_in?: String[] | String
  newValue_lt?: String
  newValue_lte?: String
  newValue_gt?: String
  newValue_gte?: String
  newValue_contains?: String
  newValue_not_contains?: String
  newValue_starts_with?: String
  newValue_not_starts_with?: String
  newValue_ends_with?: String
  newValue_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface BeerChangeSubscriptionWhereInput {
  AND?: BeerChangeSubscriptionWhereInput[] | BeerChangeSubscriptionWhereInput
  OR?: BeerChangeSubscriptionWhereInput[] | BeerChangeSubscriptionWhereInput
  NOT?: BeerChangeSubscriptionWhereInput[] | BeerChangeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BeerChangeWhereInput
}

export interface BeerChangeUpdateInput {
  price?: Float
  field?: String
  newValue?: String
  user?: UserUpdateOneRequiredWithoutBeerChangesInput
  beer?: BeerUpdateOneRequiredWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

export interface BeerChangeUpdateManyDataInput {
  price?: Float
  field?: String
  newValue?: String
}

export interface BeerChangeUpdateManyMutationInput {
  price?: Float
  field?: String
  newValue?: String
}

export interface BeerChangeUpdateManyWithoutBeerInput {
  create?: BeerChangeCreateWithoutBeerInput[] | BeerChangeCreateWithoutBeerInput
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  set?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  disconnect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  delete?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  update?: BeerChangeUpdateWithWhereUniqueWithoutBeerInput[] | BeerChangeUpdateWithWhereUniqueWithoutBeerInput
  updateMany?: BeerChangeUpdateManyWithWhereNestedInput[] | BeerChangeUpdateManyWithWhereNestedInput
  deleteMany?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput
  upsert?: BeerChangeUpsertWithWhereUniqueWithoutBeerInput[] | BeerChangeUpsertWithWhereUniqueWithoutBeerInput
}

export interface BeerChangeUpdateManyWithoutUserInput {
  create?: BeerChangeCreateWithoutUserInput[] | BeerChangeCreateWithoutUserInput
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  set?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  disconnect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  delete?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput
  update?: BeerChangeUpdateWithWhereUniqueWithoutUserInput[] | BeerChangeUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BeerChangeUpdateManyWithWhereNestedInput[] | BeerChangeUpdateManyWithWhereNestedInput
  deleteMany?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput
  upsert?: BeerChangeUpsertWithWhereUniqueWithoutUserInput[] | BeerChangeUpsertWithWhereUniqueWithoutUserInput
}

export interface BeerChangeUpdateManyWithWhereNestedInput {
  where: BeerChangeScalarWhereInput
  data: BeerChangeUpdateManyDataInput
}

export interface BeerChangeUpdateOneRequiredWithoutUpvotesInput {
  create?: BeerChangeCreateWithoutUpvotesInput
  connect?: BeerChangeWhereUniqueInput
  update?: BeerChangeUpdateWithoutUpvotesDataInput
  upsert?: BeerChangeUpsertWithoutUpvotesInput
}

export interface BeerChangeUpdateWithoutBeerDataInput {
  price?: Float
  field?: String
  newValue?: String
  user?: UserUpdateOneRequiredWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

export interface BeerChangeUpdateWithoutUpvotesDataInput {
  price?: Float
  field?: String
  newValue?: String
  user?: UserUpdateOneRequiredWithoutBeerChangesInput
  beer?: BeerUpdateOneRequiredWithoutBeerChangesInput
}

export interface BeerChangeUpdateWithoutUserDataInput {
  price?: Float
  field?: String
  newValue?: String
  beer?: BeerUpdateOneRequiredWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

export interface BeerChangeUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerChangeWhereUniqueInput
  data: BeerChangeUpdateWithoutBeerDataInput
}

export interface BeerChangeUpdateWithWhereUniqueWithoutUserInput {
  where: BeerChangeWhereUniqueInput
  data: BeerChangeUpdateWithoutUserDataInput
}

export interface BeerChangeUpsertWithoutUpvotesInput {
  update: BeerChangeUpdateWithoutUpvotesDataInput
  create: BeerChangeCreateWithoutUpvotesInput
}

export interface BeerChangeUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerChangeWhereUniqueInput
  update: BeerChangeUpdateWithoutBeerDataInput
  create: BeerChangeCreateWithoutBeerInput
}

export interface BeerChangeUpsertWithWhereUniqueWithoutUserInput {
  where: BeerChangeWhereUniqueInput
  update: BeerChangeUpdateWithoutUserDataInput
  create: BeerChangeCreateWithoutUserInput
}

export interface BeerChangeUpvoteCreateInput {
  user: UserCreateOneWithoutBeerChangeUpvotesInput
  beerChange: BeerChangeCreateOneWithoutUpvotesInput
}

export interface BeerChangeUpvoteCreateManyWithoutBeerChangeInput {
  create?: BeerChangeUpvoteCreateWithoutBeerChangeInput[] | BeerChangeUpvoteCreateWithoutBeerChangeInput
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
}

export interface BeerChangeUpvoteCreateManyWithoutUserInput {
  create?: BeerChangeUpvoteCreateWithoutUserInput[] | BeerChangeUpvoteCreateWithoutUserInput
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
}

export interface BeerChangeUpvoteCreateWithoutBeerChangeInput {
  user: UserCreateOneWithoutBeerChangeUpvotesInput
}

export interface BeerChangeUpvoteCreateWithoutUserInput {
  beerChange: BeerChangeCreateOneWithoutUpvotesInput
}

export interface BeerChangeUpvoteScalarWhereInput {
  AND?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput
  OR?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput
  NOT?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput
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
}

export interface BeerChangeUpvoteSubscriptionWhereInput {
  AND?: BeerChangeUpvoteSubscriptionWhereInput[] | BeerChangeUpvoteSubscriptionWhereInput
  OR?: BeerChangeUpvoteSubscriptionWhereInput[] | BeerChangeUpvoteSubscriptionWhereInput
  NOT?: BeerChangeUpvoteSubscriptionWhereInput[] | BeerChangeUpvoteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BeerChangeUpvoteWhereInput
}

export interface BeerChangeUpvoteUpdateInput {
  user?: UserUpdateOneRequiredWithoutBeerChangeUpvotesInput
  beerChange?: BeerChangeUpdateOneRequiredWithoutUpvotesInput
}

export interface BeerChangeUpvoteUpdateManyWithoutBeerChangeInput {
  create?: BeerChangeUpvoteCreateWithoutBeerChangeInput[] | BeerChangeUpvoteCreateWithoutBeerChangeInput
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  set?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  disconnect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  delete?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  update?: BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput[] | BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput
  deleteMany?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput
  upsert?: BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput[] | BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput
}

export interface BeerChangeUpvoteUpdateManyWithoutUserInput {
  create?: BeerChangeUpvoteCreateWithoutUserInput[] | BeerChangeUpvoteCreateWithoutUserInput
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  set?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  disconnect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  delete?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput
  update?: BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput[] | BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput
  deleteMany?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput
  upsert?: BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput[] | BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput
}

export interface BeerChangeUpvoteUpdateWithoutBeerChangeDataInput {
  user?: UserUpdateOneRequiredWithoutBeerChangeUpvotesInput
}

export interface BeerChangeUpvoteUpdateWithoutUserDataInput {
  beerChange?: BeerChangeUpdateOneRequiredWithoutUpvotesInput
}

export interface BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput {
  where: BeerChangeUpvoteWhereUniqueInput
  data: BeerChangeUpvoteUpdateWithoutBeerChangeDataInput
}

export interface BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput {
  where: BeerChangeUpvoteWhereUniqueInput
  data: BeerChangeUpvoteUpdateWithoutUserDataInput
}

export interface BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput {
  where: BeerChangeUpvoteWhereUniqueInput
  update: BeerChangeUpvoteUpdateWithoutBeerChangeDataInput
  create: BeerChangeUpvoteCreateWithoutBeerChangeInput
}

export interface BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput {
  where: BeerChangeUpvoteWhereUniqueInput
  update: BeerChangeUpvoteUpdateWithoutUserDataInput
  create: BeerChangeUpvoteCreateWithoutUserInput
}

export interface BeerChangeUpvoteWhereInput {
  AND?: BeerChangeUpvoteWhereInput[] | BeerChangeUpvoteWhereInput
  OR?: BeerChangeUpvoteWhereInput[] | BeerChangeUpvoteWhereInput
  NOT?: BeerChangeUpvoteWhereInput[] | BeerChangeUpvoteWhereInput
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
  user?: UserWhereInput
  beerChange?: BeerChangeWhereInput
}

export interface BeerChangeUpvoteWhereUniqueInput {
  id?: ID_Input
}

export interface BeerChangeWhereInput {
  AND?: BeerChangeWhereInput[] | BeerChangeWhereInput
  OR?: BeerChangeWhereInput[] | BeerChangeWhereInput
  NOT?: BeerChangeWhereInput[] | BeerChangeWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  field?: String
  field_not?: String
  field_in?: String[] | String
  field_not_in?: String[] | String
  field_lt?: String
  field_lte?: String
  field_gt?: String
  field_gte?: String
  field_contains?: String
  field_not_contains?: String
  field_starts_with?: String
  field_not_starts_with?: String
  field_ends_with?: String
  field_not_ends_with?: String
  newValue?: String
  newValue_not?: String
  newValue_in?: String[] | String
  newValue_not_in?: String[] | String
  newValue_lt?: String
  newValue_lte?: String
  newValue_gt?: String
  newValue_gte?: String
  newValue_contains?: String
  newValue_not_contains?: String
  newValue_starts_with?: String
  newValue_not_starts_with?: String
  newValue_ends_with?: String
  newValue_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  user?: UserWhereInput
  beer?: BeerWhereInput
  upvotes_every?: BeerChangeUpvoteWhereInput
  upvotes_some?: BeerChangeUpvoteWhereInput
  upvotes_none?: BeerChangeUpvoteWhereInput
}

export interface BeerChangeWhereUniqueInput {
  id?: ID_Input
}

export interface BeerCommentCreateInput {
  comment: String
  beer: BeerCreateOneWithoutBeerCommentsInput
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
  beer: BeerCreateOneWithoutBeerCommentsInput
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
  beer?: BeerUpdateOneRequiredWithoutBeerCommentsInput
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
  set?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
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
  set?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput
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
  beer?: BeerUpdateOneRequiredWithoutBeerCommentsInput
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
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateManyWithoutBarsInput {
  create?: BeerCreateWithoutBarsInput[] | BeerCreateWithoutBarsInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
}

export interface BeerCreateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
}

export interface BeerCreateManyWithoutCreatedByInput {
  create?: BeerCreateWithoutCreatedByInput[] | BeerCreateWithoutCreatedByInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
}

export interface BeerCreateManyWithoutLikedByInput {
  create?: BeerCreateWithoutLikedByInput[] | BeerCreateWithoutLikedByInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
}

export interface BeerCreateOneWithoutBeerChangesInput {
  create?: BeerCreateWithoutBeerChangesInput
  connect?: BeerWhereUniqueInput
}

export interface BeerCreateOneWithoutBeerCommentsInput {
  create?: BeerCreateWithoutBeerCommentsInput
  connect?: BeerWhereUniqueInput
}

export interface BeerCreateOneWithoutBeerPricesInput {
  create?: BeerCreateWithoutBeerPricesInput
  connect?: BeerWhereUniqueInput
}

export interface BeerCreateOneWithoutBeerRatingInput {
  create?: BeerCreateWithoutBeerRatingInput
  connect?: BeerWhereUniqueInput
}

export interface BeerCreateWithoutBarsInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutBeerChangesInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutBeerCommentsInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutBeerPricesInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutBeerRatingInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutBreweryInput {
  name: String
  type: String
  strong?: String
  photo?: String
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutCreatedByInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  likedBy?: UserCreateManyWithoutLikedBeersInput
}

export interface BeerCreateWithoutLikedByInput {
  name: String
  type: String
  strong?: String
  photo?: String
  brewery?: BreweryCreateOneWithoutBeersInput
  bars?: BarCreateManyWithoutBeersInput
  beerRating?: BeerRatingCreateManyWithoutBeerInput
  beerPrices?: BeerPriceCreateManyWithoutBeerInput
  beerComments?: BeerCommentCreateManyWithoutBeerInput
  beerChanges?: BeerChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
}

export interface BeerPriceCreateInput {
  price: Float
  user: UserCreateOneWithoutPricedBeersInput
  bar: BarCreateOneWithoutBeerPricesInput
  beer: BeerCreateOneWithoutBeerPricesInput
}

export interface BeerPriceCreateManyWithoutBarInput {
  create?: BeerPriceCreateWithoutBarInput[] | BeerPriceCreateWithoutBarInput
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
}

export interface BeerPriceCreateManyWithoutBeerInput {
  create?: BeerPriceCreateWithoutBeerInput[] | BeerPriceCreateWithoutBeerInput
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
}

export interface BeerPriceCreateManyWithoutUserInput {
  create?: BeerPriceCreateWithoutUserInput[] | BeerPriceCreateWithoutUserInput
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
}

export interface BeerPriceCreateWithoutBarInput {
  price: Float
  user: UserCreateOneWithoutPricedBeersInput
  beer: BeerCreateOneWithoutBeerPricesInput
}

export interface BeerPriceCreateWithoutBeerInput {
  price: Float
  user: UserCreateOneWithoutPricedBeersInput
  bar: BarCreateOneWithoutBeerPricesInput
}

export interface BeerPriceCreateWithoutUserInput {
  price: Float
  bar: BarCreateOneWithoutBeerPricesInput
  beer: BeerCreateOneWithoutBeerPricesInput
}

export interface BeerPriceScalarWhereInput {
  AND?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput
  OR?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput
  NOT?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
}

export interface BeerPriceSubscriptionWhereInput {
  AND?: BeerPriceSubscriptionWhereInput[] | BeerPriceSubscriptionWhereInput
  OR?: BeerPriceSubscriptionWhereInput[] | BeerPriceSubscriptionWhereInput
  NOT?: BeerPriceSubscriptionWhereInput[] | BeerPriceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BeerPriceWhereInput
}

export interface BeerPriceUpdateInput {
  price?: Float
  user?: UserUpdateOneRequiredWithoutPricedBeersInput
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput
}

export interface BeerPriceUpdateManyDataInput {
  price?: Float
}

export interface BeerPriceUpdateManyMutationInput {
  price?: Float
}

export interface BeerPriceUpdateManyWithoutBarInput {
  create?: BeerPriceCreateWithoutBarInput[] | BeerPriceCreateWithoutBarInput
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  set?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  disconnect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  delete?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  update?: BeerPriceUpdateWithWhereUniqueWithoutBarInput[] | BeerPriceUpdateWithWhereUniqueWithoutBarInput
  updateMany?: BeerPriceUpdateManyWithWhereNestedInput[] | BeerPriceUpdateManyWithWhereNestedInput
  deleteMany?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput
  upsert?: BeerPriceUpsertWithWhereUniqueWithoutBarInput[] | BeerPriceUpsertWithWhereUniqueWithoutBarInput
}

export interface BeerPriceUpdateManyWithoutBeerInput {
  create?: BeerPriceCreateWithoutBeerInput[] | BeerPriceCreateWithoutBeerInput
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  set?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  disconnect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  delete?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  update?: BeerPriceUpdateWithWhereUniqueWithoutBeerInput[] | BeerPriceUpdateWithWhereUniqueWithoutBeerInput
  updateMany?: BeerPriceUpdateManyWithWhereNestedInput[] | BeerPriceUpdateManyWithWhereNestedInput
  deleteMany?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput
  upsert?: BeerPriceUpsertWithWhereUniqueWithoutBeerInput[] | BeerPriceUpsertWithWhereUniqueWithoutBeerInput
}

export interface BeerPriceUpdateManyWithoutUserInput {
  create?: BeerPriceCreateWithoutUserInput[] | BeerPriceCreateWithoutUserInput
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  set?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  disconnect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  delete?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput
  update?: BeerPriceUpdateWithWhereUniqueWithoutUserInput[] | BeerPriceUpdateWithWhereUniqueWithoutUserInput
  updateMany?: BeerPriceUpdateManyWithWhereNestedInput[] | BeerPriceUpdateManyWithWhereNestedInput
  deleteMany?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput
  upsert?: BeerPriceUpsertWithWhereUniqueWithoutUserInput[] | BeerPriceUpsertWithWhereUniqueWithoutUserInput
}

export interface BeerPriceUpdateManyWithWhereNestedInput {
  where: BeerPriceScalarWhereInput
  data: BeerPriceUpdateManyDataInput
}

export interface BeerPriceUpdateWithoutBarDataInput {
  price?: Float
  user?: UserUpdateOneRequiredWithoutPricedBeersInput
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput
}

export interface BeerPriceUpdateWithoutBeerDataInput {
  price?: Float
  user?: UserUpdateOneRequiredWithoutPricedBeersInput
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput
}

export interface BeerPriceUpdateWithoutUserDataInput {
  price?: Float
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput
}

export interface BeerPriceUpdateWithWhereUniqueWithoutBarInput {
  where: BeerPriceWhereUniqueInput
  data: BeerPriceUpdateWithoutBarDataInput
}

export interface BeerPriceUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerPriceWhereUniqueInput
  data: BeerPriceUpdateWithoutBeerDataInput
}

export interface BeerPriceUpdateWithWhereUniqueWithoutUserInput {
  where: BeerPriceWhereUniqueInput
  data: BeerPriceUpdateWithoutUserDataInput
}

export interface BeerPriceUpsertWithWhereUniqueWithoutBarInput {
  where: BeerPriceWhereUniqueInput
  update: BeerPriceUpdateWithoutBarDataInput
  create: BeerPriceCreateWithoutBarInput
}

export interface BeerPriceUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerPriceWhereUniqueInput
  update: BeerPriceUpdateWithoutBeerDataInput
  create: BeerPriceCreateWithoutBeerInput
}

export interface BeerPriceUpsertWithWhereUniqueWithoutUserInput {
  where: BeerPriceWhereUniqueInput
  update: BeerPriceUpdateWithoutUserDataInput
  create: BeerPriceCreateWithoutUserInput
}

export interface BeerPriceWhereInput {
  AND?: BeerPriceWhereInput[] | BeerPriceWhereInput
  OR?: BeerPriceWhereInput[] | BeerPriceWhereInput
  NOT?: BeerPriceWhereInput[] | BeerPriceWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  user?: UserWhereInput
  bar?: BarWhereInput
  beer?: BeerWhereInput
}

export interface BeerPriceWhereUniqueInput {
  id?: ID_Input
}

export interface BeerRatingCreateInput {
  rating: Float
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
  rating: Float
  user: UserCreateOneWithoutBeerRatingsInput
}

export interface BeerRatingCreateWithoutUserInput {
  rating: Float
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
  rating?: Float
  rating_not?: Float
  rating_in?: Float[] | Float
  rating_not_in?: Float[] | Float
  rating_lt?: Float
  rating_lte?: Float
  rating_gt?: Float
  rating_gte?: Float
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
  rating?: Float
  user?: UserUpdateOneRequiredWithoutBeerRatingsInput
  beer?: BeerUpdateOneRequiredWithoutBeerRatingInput
}

export interface BeerRatingUpdateManyDataInput {
  rating?: Float
}

export interface BeerRatingUpdateManyMutationInput {
  rating?: Float
}

export interface BeerRatingUpdateManyWithoutBeerInput {
  create?: BeerRatingCreateWithoutBeerInput[] | BeerRatingCreateWithoutBeerInput
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
  set?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
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
  set?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput
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
  rating?: Float
  user?: UserUpdateOneRequiredWithoutBeerRatingsInput
}

export interface BeerRatingUpdateWithoutUserDataInput {
  rating?: Float
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
  rating?: Float
  rating_not?: Float
  rating_in?: Float[] | Float
  rating_not_in?: Float[] | Float
  rating_lt?: Float
  rating_lte?: Float
  rating_gt?: Float
  rating_gte?: Float
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
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  strong?: String
  strong_not?: String
  strong_in?: String[] | String
  strong_not_in?: String[] | String
  strong_lt?: String
  strong_lte?: String
  strong_gt?: String
  strong_gte?: String
  strong_contains?: String
  strong_not_contains?: String
  strong_starts_with?: String
  strong_not_starts_with?: String
  strong_ends_with?: String
  strong_not_ends_with?: String
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
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateManyDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
}

export interface BeerUpdateManyMutationInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
}

export interface BeerUpdateManyWithoutBarsInput {
  create?: BeerCreateWithoutBarsInput[] | BeerCreateWithoutBarsInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
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
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  update?: BeerUpdateWithWhereUniqueWithoutBreweryInput[] | BeerUpdateWithWhereUniqueWithoutBreweryInput
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput
  upsert?: BeerUpsertWithWhereUniqueWithoutBreweryInput[] | BeerUpsertWithWhereUniqueWithoutBreweryInput
}

export interface BeerUpdateManyWithoutCreatedByInput {
  create?: BeerCreateWithoutCreatedByInput[] | BeerCreateWithoutCreatedByInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  update?: BeerUpdateWithWhereUniqueWithoutCreatedByInput[] | BeerUpdateWithWhereUniqueWithoutCreatedByInput
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput
  upsert?: BeerUpsertWithWhereUniqueWithoutCreatedByInput[] | BeerUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface BeerUpdateManyWithoutLikedByInput {
  create?: BeerCreateWithoutLikedByInput[] | BeerCreateWithoutLikedByInput
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput
  update?: BeerUpdateWithWhereUniqueWithoutLikedByInput[] | BeerUpdateWithWhereUniqueWithoutLikedByInput
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput
  upsert?: BeerUpsertWithWhereUniqueWithoutLikedByInput[] | BeerUpsertWithWhereUniqueWithoutLikedByInput
}

export interface BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput
  data: BeerUpdateManyDataInput
}

export interface BeerUpdateOneRequiredWithoutBeerChangesInput {
  create?: BeerCreateWithoutBeerChangesInput
  connect?: BeerWhereUniqueInput
  update?: BeerUpdateWithoutBeerChangesDataInput
  upsert?: BeerUpsertWithoutBeerChangesInput
}

export interface BeerUpdateOneRequiredWithoutBeerCommentsInput {
  create?: BeerCreateWithoutBeerCommentsInput
  connect?: BeerWhereUniqueInput
  update?: BeerUpdateWithoutBeerCommentsDataInput
  upsert?: BeerUpsertWithoutBeerCommentsInput
}

export interface BeerUpdateOneRequiredWithoutBeerPricesInput {
  create?: BeerCreateWithoutBeerPricesInput
  connect?: BeerWhereUniqueInput
  update?: BeerUpdateWithoutBeerPricesDataInput
  upsert?: BeerUpsertWithoutBeerPricesInput
}

export interface BeerUpdateOneRequiredWithoutBeerRatingInput {
  create?: BeerCreateWithoutBeerRatingInput
  connect?: BeerWhereUniqueInput
  update?: BeerUpdateWithoutBeerRatingDataInput
  upsert?: BeerUpsertWithoutBeerRatingInput
}

export interface BeerUpdateWithoutBarsDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutBeerChangesDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutBeerCommentsDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutBeerPricesDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutBeerRatingDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutBreweryDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutCreatedByDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  likedBy?: UserUpdateManyWithoutLikedBeersInput
}

export interface BeerUpdateWithoutLikedByDataInput {
  name?: String
  type?: String
  strong?: String
  photo?: String
  brewery?: BreweryUpdateOneWithoutBeersInput
  bars?: BarUpdateManyWithoutBeersInput
  beerRating?: BeerRatingUpdateManyWithoutBeerInput
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput
  beerComments?: BeerCommentUpdateManyWithoutBeerInput
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedBeersInput
}

export interface BeerUpdateWithWhereUniqueWithoutBarsInput {
  where: BeerWhereUniqueInput
  data: BeerUpdateWithoutBarsDataInput
}

export interface BeerUpdateWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput
  data: BeerUpdateWithoutBreweryDataInput
}

export interface BeerUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BeerWhereUniqueInput
  data: BeerUpdateWithoutCreatedByDataInput
}

export interface BeerUpdateWithWhereUniqueWithoutLikedByInput {
  where: BeerWhereUniqueInput
  data: BeerUpdateWithoutLikedByDataInput
}

export interface BeerUpsertWithoutBeerChangesInput {
  update: BeerUpdateWithoutBeerChangesDataInput
  create: BeerCreateWithoutBeerChangesInput
}

export interface BeerUpsertWithoutBeerCommentsInput {
  update: BeerUpdateWithoutBeerCommentsDataInput
  create: BeerCreateWithoutBeerCommentsInput
}

export interface BeerUpsertWithoutBeerPricesInput {
  update: BeerUpdateWithoutBeerPricesDataInput
  create: BeerCreateWithoutBeerPricesInput
}

export interface BeerUpsertWithoutBeerRatingInput {
  update: BeerUpdateWithoutBeerRatingDataInput
  create: BeerCreateWithoutBeerRatingInput
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

export interface BeerUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BeerWhereUniqueInput
  update: BeerUpdateWithoutCreatedByDataInput
  create: BeerCreateWithoutCreatedByInput
}

export interface BeerUpsertWithWhereUniqueWithoutLikedByInput {
  where: BeerWhereUniqueInput
  update: BeerUpdateWithoutLikedByDataInput
  create: BeerCreateWithoutLikedByInput
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
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  strong?: String
  strong_not?: String
  strong_in?: String[] | String
  strong_not_in?: String[] | String
  strong_lt?: String
  strong_lte?: String
  strong_gt?: String
  strong_gte?: String
  strong_contains?: String
  strong_not_contains?: String
  strong_starts_with?: String
  strong_not_starts_with?: String
  strong_ends_with?: String
  strong_not_ends_with?: String
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
  brewery?: BreweryWhereInput
  bars_every?: BarWhereInput
  bars_some?: BarWhereInput
  bars_none?: BarWhereInput
  beerRating_every?: BeerRatingWhereInput
  beerRating_some?: BeerRatingWhereInput
  beerRating_none?: BeerRatingWhereInput
  beerPrices_every?: BeerPriceWhereInput
  beerPrices_some?: BeerPriceWhereInput
  beerPrices_none?: BeerPriceWhereInput
  beerComments_every?: BeerCommentWhereInput
  beerComments_some?: BeerCommentWhereInput
  beerComments_none?: BeerCommentWhereInput
  beerChanges_every?: BeerChangeWhereInput
  beerChanges_some?: BeerChangeWhereInput
  beerChanges_none?: BeerChangeWhereInput
  createdBy?: UserWhereInput
  likedBy_every?: UserWhereInput
  likedBy_some?: UserWhereInput
  likedBy_none?: UserWhereInput
}

export interface BeerWhereUniqueInput {
  id?: ID_Input
}

export interface BreweryCreateInput {
  name: String
  country: String
  logo?: String
  beers?: BeerCreateManyWithoutBreweryInput
}

export interface BreweryCreateOneWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput
  connect?: BreweryWhereUniqueInput
}

export interface BreweryCreateWithoutBeersInput {
  name: String
  country: String
  logo?: String
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
  country?: String
  logo?: String
  beers?: BeerUpdateManyWithoutBreweryInput
}

export interface BreweryUpdateManyMutationInput {
  name?: String
  country?: String
  logo?: String
}

export interface BreweryUpdateOneWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput
  connect?: BreweryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BreweryUpdateWithoutBeersDataInput
  upsert?: BreweryUpsertWithoutBeersInput
}

export interface BreweryUpdateWithoutBeersDataInput {
  name?: String
  country?: String
  logo?: String
}

export interface BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput
  create: BreweryCreateWithoutBeersInput
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
  beers_every?: BeerWhereInput
  beers_some?: BeerWhereInput
  beers_none?: BeerWhereInput
}

export interface BreweryWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateManyWithoutLikedBarsInput {
  create?: UserCreateWithoutLikedBarsInput[] | UserCreateWithoutLikedBarsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateManyWithoutLikedBeersInput {
  create?: UserCreateWithoutLikedBeersInput[] | UserCreateWithoutLikedBeersInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateOneWithoutBarChangesInput {
  create?: UserCreateWithoutBarChangesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBarChangeUpvotesInput {
  create?: UserCreateWithoutBarChangeUpvotesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBarCommentsInput {
  create?: UserCreateWithoutBarCommentsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBarRatingsInput {
  create?: UserCreateWithoutBarRatingsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBeerChangesInput {
  create?: UserCreateWithoutBeerChangesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBeerChangeUpvotesInput {
  create?: UserCreateWithoutBeerChangeUpvotesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBeerCommentsInput {
  create?: UserCreateWithoutBeerCommentsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutBeerRatingsInput {
  create?: UserCreateWithoutBeerRatingsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutCreatedBarsInput {
  create?: UserCreateWithoutCreatedBarsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutCreatedBeersInput {
  create?: UserCreateWithoutCreatedBeersInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutPricedBeersInput {
  create?: UserCreateWithoutPricedBeersInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutBarChangesInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBarChangeUpvotesInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBarCommentsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBarRatingsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBeerChangesInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBeerChangeUpvotesInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBeerCommentsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutBeerRatingsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutCreatedBarsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutCreatedBeersInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutLikedBarsInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutLikedBeersInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  pricedBeers?: BeerPriceCreateManyWithoutUserInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserCreateWithoutPricedBeersInput {
  email: String
  password: String
  role?: Role
  active?: Boolean
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentCreateManyWithoutUserInput
  barComments?: BarCommentCreateManyWithoutUserInput
  beerRatings?: BeerRatingCreateManyWithoutUserInput
  barRatings?: BarRatingCreateManyWithoutUserInput
  beerChanges?: BeerChangeCreateManyWithoutUserInput
  barChanges?: BarChangeCreateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput
  likedBeers?: BeerCreateManyWithoutLikedByInput
  likedBars?: BarCreateManyWithoutLikedByInput
  createdBeers?: BeerCreateManyWithoutCreatedByInput
  createdBars?: BarCreateManyWithoutCreatedByInput
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput
  OR?: UserScalarWhereInput[] | UserScalarWhereInput
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput
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
  nickname?: String
  nickname_not?: String
  nickname_in?: String[] | String
  nickname_not_in?: String[] | String
  nickname_lt?: String
  nickname_lte?: String
  nickname_gt?: String
  nickname_gte?: String
  nickname_contains?: String
  nickname_not_contains?: String
  nickname_starts_with?: String
  nickname_not_starts_with?: String
  nickname_ends_with?: String
  nickname_not_ends_with?: String
  birthdate?: DateTime
  birthdate_not?: DateTime
  birthdate_in?: DateTime[] | DateTime
  birthdate_not_in?: DateTime[] | DateTime
  birthdate_lt?: DateTime
  birthdate_lte?: DateTime
  birthdate_gt?: DateTime
  birthdate_gte?: DateTime
  sex?: Sex
  sex_not?: Sex
  sex_in?: Sex[] | Sex
  sex_not_in?: Sex[] | Sex
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
  surname?: String
  surname_not?: String
  surname_in?: String[] | String
  surname_not_in?: String[] | String
  surname_lt?: String
  surname_lte?: String
  surname_gt?: String
  surname_gte?: String
  surname_contains?: String
  surname_not_contains?: String
  surname_starts_with?: String
  surname_not_starts_with?: String
  surname_ends_with?: String
  surname_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
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
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateManyDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
}

export interface UserUpdateManyMutationInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
}

export interface UserUpdateManyWithoutLikedBarsInput {
  create?: UserCreateWithoutLikedBarsInput[] | UserCreateWithoutLikedBarsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutLikedBarsInput[] | UserUpdateWithWhereUniqueWithoutLikedBarsInput
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput
  upsert?: UserUpsertWithWhereUniqueWithoutLikedBarsInput[] | UserUpsertWithWhereUniqueWithoutLikedBarsInput
}

export interface UserUpdateManyWithoutLikedBeersInput {
  create?: UserCreateWithoutLikedBeersInput[] | UserCreateWithoutLikedBeersInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutLikedBeersInput[] | UserUpdateWithWhereUniqueWithoutLikedBeersInput
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput
  upsert?: UserUpsertWithWhereUniqueWithoutLikedBeersInput[] | UserUpsertWithWhereUniqueWithoutLikedBeersInput
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredWithoutBarChangesInput {
  create?: UserCreateWithoutBarChangesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBarChangesDataInput
  upsert?: UserUpsertWithoutBarChangesInput
}

export interface UserUpdateOneRequiredWithoutBarChangeUpvotesInput {
  create?: UserCreateWithoutBarChangeUpvotesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBarChangeUpvotesDataInput
  upsert?: UserUpsertWithoutBarChangeUpvotesInput
}

export interface UserUpdateOneRequiredWithoutBarCommentsInput {
  create?: UserCreateWithoutBarCommentsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBarCommentsDataInput
  upsert?: UserUpsertWithoutBarCommentsInput
}

export interface UserUpdateOneRequiredWithoutBarRatingsInput {
  create?: UserCreateWithoutBarRatingsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBarRatingsDataInput
  upsert?: UserUpsertWithoutBarRatingsInput
}

export interface UserUpdateOneRequiredWithoutBeerChangesInput {
  create?: UserCreateWithoutBeerChangesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBeerChangesDataInput
  upsert?: UserUpsertWithoutBeerChangesInput
}

export interface UserUpdateOneRequiredWithoutBeerChangeUpvotesInput {
  create?: UserCreateWithoutBeerChangeUpvotesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutBeerChangeUpvotesDataInput
  upsert?: UserUpsertWithoutBeerChangeUpvotesInput
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

export interface UserUpdateOneRequiredWithoutCreatedBarsInput {
  create?: UserCreateWithoutCreatedBarsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutCreatedBarsDataInput
  upsert?: UserUpsertWithoutCreatedBarsInput
}

export interface UserUpdateOneRequiredWithoutCreatedBeersInput {
  create?: UserCreateWithoutCreatedBeersInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutCreatedBeersDataInput
  upsert?: UserUpsertWithoutCreatedBeersInput
}

export interface UserUpdateOneRequiredWithoutPricedBeersInput {
  create?: UserCreateWithoutPricedBeersInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutPricedBeersDataInput
  upsert?: UserUpsertWithoutPricedBeersInput
}

export interface UserUpdateWithoutBarChangesDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBarChangeUpvotesDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBarCommentsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBarRatingsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBeerChangesDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBeerChangeUpvotesDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBeerCommentsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutBeerRatingsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutCreatedBarsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutCreatedBeersDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutLikedBarsDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutLikedBeersDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithoutPricedBeersDataInput {
  email?: String
  password?: String
  role?: Role
  active?: Boolean
  nickname?: String
  birthdate?: DateTime
  sex?: Sex
  name?: String
  surname?: String
  beerComments?: BeerCommentUpdateManyWithoutUserInput
  barComments?: BarCommentUpdateManyWithoutUserInput
  beerRatings?: BeerRatingUpdateManyWithoutUserInput
  barRatings?: BarRatingUpdateManyWithoutUserInput
  beerChanges?: BeerChangeUpdateManyWithoutUserInput
  barChanges?: BarChangeUpdateManyWithoutUserInput
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput
  likedBeers?: BeerUpdateManyWithoutLikedByInput
  likedBars?: BarUpdateManyWithoutLikedByInput
  createdBeers?: BeerUpdateManyWithoutCreatedByInput
  createdBars?: BarUpdateManyWithoutCreatedByInput
}

export interface UserUpdateWithWhereUniqueWithoutLikedBarsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLikedBarsDataInput
}

export interface UserUpdateWithWhereUniqueWithoutLikedBeersInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLikedBeersDataInput
}

export interface UserUpsertWithoutBarChangesInput {
  update: UserUpdateWithoutBarChangesDataInput
  create: UserCreateWithoutBarChangesInput
}

export interface UserUpsertWithoutBarChangeUpvotesInput {
  update: UserUpdateWithoutBarChangeUpvotesDataInput
  create: UserCreateWithoutBarChangeUpvotesInput
}

export interface UserUpsertWithoutBarCommentsInput {
  update: UserUpdateWithoutBarCommentsDataInput
  create: UserCreateWithoutBarCommentsInput
}

export interface UserUpsertWithoutBarRatingsInput {
  update: UserUpdateWithoutBarRatingsDataInput
  create: UserCreateWithoutBarRatingsInput
}

export interface UserUpsertWithoutBeerChangesInput {
  update: UserUpdateWithoutBeerChangesDataInput
  create: UserCreateWithoutBeerChangesInput
}

export interface UserUpsertWithoutBeerChangeUpvotesInput {
  update: UserUpdateWithoutBeerChangeUpvotesDataInput
  create: UserCreateWithoutBeerChangeUpvotesInput
}

export interface UserUpsertWithoutBeerCommentsInput {
  update: UserUpdateWithoutBeerCommentsDataInput
  create: UserCreateWithoutBeerCommentsInput
}

export interface UserUpsertWithoutBeerRatingsInput {
  update: UserUpdateWithoutBeerRatingsDataInput
  create: UserCreateWithoutBeerRatingsInput
}

export interface UserUpsertWithoutCreatedBarsInput {
  update: UserUpdateWithoutCreatedBarsDataInput
  create: UserCreateWithoutCreatedBarsInput
}

export interface UserUpsertWithoutCreatedBeersInput {
  update: UserUpdateWithoutCreatedBeersDataInput
  create: UserCreateWithoutCreatedBeersInput
}

export interface UserUpsertWithoutPricedBeersInput {
  update: UserUpdateWithoutPricedBeersDataInput
  create: UserCreateWithoutPricedBeersInput
}

export interface UserUpsertWithWhereUniqueWithoutLikedBarsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutLikedBarsDataInput
  create: UserCreateWithoutLikedBarsInput
}

export interface UserUpsertWithWhereUniqueWithoutLikedBeersInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutLikedBeersDataInput
  create: UserCreateWithoutLikedBeersInput
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
  nickname?: String
  nickname_not?: String
  nickname_in?: String[] | String
  nickname_not_in?: String[] | String
  nickname_lt?: String
  nickname_lte?: String
  nickname_gt?: String
  nickname_gte?: String
  nickname_contains?: String
  nickname_not_contains?: String
  nickname_starts_with?: String
  nickname_not_starts_with?: String
  nickname_ends_with?: String
  nickname_not_ends_with?: String
  birthdate?: DateTime
  birthdate_not?: DateTime
  birthdate_in?: DateTime[] | DateTime
  birthdate_not_in?: DateTime[] | DateTime
  birthdate_lt?: DateTime
  birthdate_lte?: DateTime
  birthdate_gt?: DateTime
  birthdate_gte?: DateTime
  sex?: Sex
  sex_not?: Sex
  sex_in?: Sex[] | Sex
  sex_not_in?: Sex[] | Sex
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
  surname?: String
  surname_not?: String
  surname_in?: String[] | String
  surname_not_in?: String[] | String
  surname_lt?: String
  surname_lte?: String
  surname_gt?: String
  surname_gte?: String
  surname_contains?: String
  surname_not_contains?: String
  surname_starts_with?: String
  surname_not_starts_with?: String
  surname_ends_with?: String
  surname_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  beerComments_every?: BeerCommentWhereInput
  beerComments_some?: BeerCommentWhereInput
  beerComments_none?: BeerCommentWhereInput
  barComments_every?: BarCommentWhereInput
  barComments_some?: BarCommentWhereInput
  barComments_none?: BarCommentWhereInput
  beerRatings_every?: BeerRatingWhereInput
  beerRatings_some?: BeerRatingWhereInput
  beerRatings_none?: BeerRatingWhereInput
  barRatings_every?: BarRatingWhereInput
  barRatings_some?: BarRatingWhereInput
  barRatings_none?: BarRatingWhereInput
  beerChanges_every?: BeerChangeWhereInput
  beerChanges_some?: BeerChangeWhereInput
  beerChanges_none?: BeerChangeWhereInput
  barChanges_every?: BarChangeWhereInput
  barChanges_some?: BarChangeWhereInput
  barChanges_none?: BarChangeWhereInput
  beerChangeUpvotes_every?: BeerChangeUpvoteWhereInput
  beerChangeUpvotes_some?: BeerChangeUpvoteWhereInput
  beerChangeUpvotes_none?: BeerChangeUpvoteWhereInput
  barChangeUpvotes_every?: BarChangeUpvoteWhereInput
  barChangeUpvotes_some?: BarChangeUpvoteWhereInput
  barChangeUpvotes_none?: BarChangeUpvoteWhereInput
  pricedBeers_every?: BeerPriceWhereInput
  pricedBeers_some?: BeerPriceWhereInput
  pricedBeers_none?: BeerPriceWhereInput
  likedBeers_every?: BeerWhereInput
  likedBeers_some?: BeerWhereInput
  likedBeers_none?: BeerWhereInput
  likedBars_every?: BarWhereInput
  likedBars_some?: BarWhereInput
  likedBars_none?: BarWhereInput
  createdBeers_every?: BeerWhereInput
  createdBeers_some?: BeerWhereInput
  createdBeers_none?: BeerWhereInput
  createdBars_every?: BarWhereInput
  createdBars_some?: BarWhereInput
  createdBars_none?: BarWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
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

export interface AggregateBarChange {
  count: Int
}

export interface AggregateBarChangeUpvote {
  count: Int
}

export interface AggregateBarComment {
  count: Int
}

export interface AggregateBarRating {
  count: Int
}

export interface AggregateBeer {
  count: Int
}

export interface AggregateBeerChange {
  count: Int
}

export interface AggregateBeerChangeUpvote {
  count: Int
}

export interface AggregateBeerComment {
  count: Int
}

export interface AggregateBeerPrice {
  count: Int
}

export interface AggregateBeerRating {
  count: Int
}

export interface AggregateBrewery {
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
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos: String[]
  beers?: Beer[]
  barRating?: BarRating[]
  beerPrices?: BeerPrice[]
  barComments?: BarComment[]
  barChanges?: BarChange[]
  createdBy: User
  likedBy?: User[]
}

export interface BarChange extends Node {
  id: ID_Output
  price: Float
  field: String
  newValue: String
  user: User
  bar: Bar
  upvotes?: BarChangeUpvote[]
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BarChangeConnection {
  pageInfo: PageInfo
  edges: BarChangeEdge[]
  aggregate: AggregateBarChange
}

/*
 * An edge in a connection.

 */
export interface BarChangeEdge {
  node: BarChange
  cursor: String
}

export interface BarChangePreviousValues {
  id: ID_Output
  price: Float
  field: String
  newValue: String
  createdAt: DateTime
}

export interface BarChangeSubscriptionPayload {
  mutation: MutationType
  node?: BarChange
  updatedFields?: String[]
  previousValues?: BarChangePreviousValues
}

export interface BarChangeUpvote extends Node {
  id: ID_Output
  user: User
  barChange: BarChange
}

/*
 * A connection to a list of items.

 */
export interface BarChangeUpvoteConnection {
  pageInfo: PageInfo
  edges: BarChangeUpvoteEdge[]
  aggregate: AggregateBarChangeUpvote
}

/*
 * An edge in a connection.

 */
export interface BarChangeUpvoteEdge {
  node: BarChangeUpvote
  cursor: String
}

export interface BarChangeUpvotePreviousValues {
  id: ID_Output
}

export interface BarChangeUpvoteSubscriptionPayload {
  mutation: MutationType
  node?: BarChangeUpvote
  updatedFields?: String[]
  previousValues?: BarChangeUpvotePreviousValues
}

export interface BarComment extends Node {
  id: ID_Output
  comment: String
  bar: Bar
  user: User
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BarCommentConnection {
  pageInfo: PageInfo
  edges: BarCommentEdge[]
  aggregate: AggregateBarComment
}

/*
 * An edge in a connection.

 */
export interface BarCommentEdge {
  node: BarComment
  cursor: String
}

export interface BarCommentPreviousValues {
  id: ID_Output
  comment: String
  createdAt: DateTime
}

export interface BarCommentSubscriptionPayload {
  mutation: MutationType
  node?: BarComment
  updatedFields?: String[]
  previousValues?: BarCommentPreviousValues
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
  phone?: String
  openTime?: DateTime
  closeTime?: DateTime
  photos: String[]
}

export interface BarRating extends Node {
  id: ID_Output
  rating: Float
  user: User
  bar: Bar
}

/*
 * A connection to a list of items.

 */
export interface BarRatingConnection {
  pageInfo: PageInfo
  edges: BarRatingEdge[]
  aggregate: AggregateBarRating
}

/*
 * An edge in a connection.

 */
export interface BarRatingEdge {
  node: BarRating
  cursor: String
}

export interface BarRatingPreviousValues {
  id: ID_Output
  rating: Float
}

export interface BarRatingSubscriptionPayload {
  mutation: MutationType
  node?: BarRating
  updatedFields?: String[]
  previousValues?: BarRatingPreviousValues
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
  type: String
  strong?: String
  photo?: String
  brewery?: Brewery
  bars?: Bar[]
  beerRating?: BeerRating[]
  beerPrices?: BeerPrice[]
  beerComments?: BeerComment[]
  beerChanges?: BeerChange[]
  createdBy: User
  likedBy?: User[]
}

export interface BeerChange extends Node {
  id: ID_Output
  price: Float
  field: String
  newValue: String
  user: User
  beer: Beer
  upvotes?: BeerChangeUpvote[]
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerChangeConnection {
  pageInfo: PageInfo
  edges: BeerChangeEdge[]
  aggregate: AggregateBeerChange
}

/*
 * An edge in a connection.

 */
export interface BeerChangeEdge {
  node: BeerChange
  cursor: String
}

export interface BeerChangePreviousValues {
  id: ID_Output
  price: Float
  field: String
  newValue: String
  createdAt: DateTime
}

export interface BeerChangeSubscriptionPayload {
  mutation: MutationType
  node?: BeerChange
  updatedFields?: String[]
  previousValues?: BeerChangePreviousValues
}

export interface BeerChangeUpvote extends Node {
  id: ID_Output
  user: User
  beerChange: BeerChange
}

/*
 * A connection to a list of items.

 */
export interface BeerChangeUpvoteConnection {
  pageInfo: PageInfo
  edges: BeerChangeUpvoteEdge[]
  aggregate: AggregateBeerChangeUpvote
}

/*
 * An edge in a connection.

 */
export interface BeerChangeUpvoteEdge {
  node: BeerChangeUpvote
  cursor: String
}

export interface BeerChangeUpvotePreviousValues {
  id: ID_Output
}

export interface BeerChangeUpvoteSubscriptionPayload {
  mutation: MutationType
  node?: BeerChangeUpvote
  updatedFields?: String[]
  previousValues?: BeerChangeUpvotePreviousValues
}

export interface BeerComment extends Node {
  id: ID_Output
  comment: String
  beer: Beer
  user: User
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
  type: String
  strong?: String
  photo?: String
}

export interface BeerPrice extends Node {
  id: ID_Output
  price: Float
  user: User
  bar: Bar
  beer: Beer
}

/*
 * A connection to a list of items.

 */
export interface BeerPriceConnection {
  pageInfo: PageInfo
  edges: BeerPriceEdge[]
  aggregate: AggregateBeerPrice
}

/*
 * An edge in a connection.

 */
export interface BeerPriceEdge {
  node: BeerPrice
  cursor: String
}

export interface BeerPricePreviousValues {
  id: ID_Output
  price: Float
}

export interface BeerPriceSubscriptionPayload {
  mutation: MutationType
  node?: BeerPrice
  updatedFields?: String[]
  previousValues?: BeerPricePreviousValues
}

export interface BeerRating extends Node {
  id: ID_Output
  rating: Float
  user: User
  beer: Beer
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
  rating: Float
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
  country: String
  logo?: String
  beers?: Beer[]
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
  country: String
  logo?: String
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
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  beerComments?: BeerComment[]
  barComments?: BarComment[]
  beerRatings?: BeerRating[]
  barRatings?: BarRating[]
  beerChanges?: BeerChange[]
  barChanges?: BarChange[]
  beerChangeUpvotes?: BeerChangeUpvote[]
  barChangeUpvotes?: BarChangeUpvote[]
  pricedBeers?: BeerPrice[]
  likedBeers?: Beer[]
  likedBars?: Bar[]
  createdBeers?: Beer[]
  createdBars?: Bar[]
  createdAt: DateTime
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
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String
  surname?: String
  createdAt: DateTime
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
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

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