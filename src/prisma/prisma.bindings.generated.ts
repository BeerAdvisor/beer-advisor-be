import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    bars: <T = Array<Bar | null>>(args: { where?: BarWhereInput | null, orderBy?: BarOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barRatings: <T = Array<BarRating | null>>(args: { where?: BarRatingWhereInput | null, orderBy?: BarRatingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barComments: <T = Array<BarComment | null>>(args: { where?: BarCommentWhereInput | null, orderBy?: BarCommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChanges: <T = Array<BarChange | null>>(args: { where?: BarChangeWhereInput | null, orderBy?: BarChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChangeUpvotes: <T = Array<BarChangeUpvote | null>>(args: { where?: BarChangeUpvoteWhereInput | null, orderBy?: BarChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beers: <T = Array<Beer | null>>(args: { where?: BeerWhereInput | null, orderBy?: BeerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerRatings: <T = Array<BeerRating | null>>(args: { where?: BeerRatingWhereInput | null, orderBy?: BeerRatingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerComments: <T = Array<BeerComment | null>>(args: { where?: BeerCommentWhereInput | null, orderBy?: BeerCommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChanges: <T = Array<BeerChange | null>>(args: { where?: BeerChangeWhereInput | null, orderBy?: BeerChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChangeUpvotes: <T = Array<BeerChangeUpvote | null>>(args: { where?: BeerChangeUpvoteWhereInput | null, orderBy?: BeerChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweries: <T = Array<Brewery | null>>(args: { where?: BreweryWhereInput | null, orderBy?: BreweryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerBarConnectionChanges: <T = Array<BeerBarConnectionChange | null>>(args: { where?: BeerBarConnectionChangeWhereInput | null, orderBy?: BeerBarConnectionChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerBarConnectionChangeUpvotes: <T = Array<BeerBarConnectionChangeUpvote | null>>(args: { where?: BeerBarConnectionChangeUpvoteWhereInput | null, orderBy?: BeerBarConnectionChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPrices: <T = Array<BeerPrice | null>>(args: { where?: BeerPriceWhereInput | null, orderBy?: BeerPriceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPriceChanges: <T = Array<BeerPriceChange | null>>(args: { where?: BeerPriceChangeWhereInput | null, orderBy?: BeerPriceChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPriceChangeUpvotes: <T = Array<BeerPriceChangeUpvote | null>>(args: { where?: BeerPriceChangeUpvoteWhereInput | null, orderBy?: BeerPriceChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bar: <T = Bar | null>(args: { where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barRating: <T = BarRating | null>(args: { where: BarRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barComment: <T = BarComment | null>(args: { where: BarCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barChange: <T = BarChange | null>(args: { where: BarChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barChangeUpvote: <T = BarChangeUpvote | null>(args: { where: BarChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beer: <T = Beer | null>(args: { where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerRating: <T = BeerRating | null>(args: { where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerComment: <T = BeerComment | null>(args: { where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerChange: <T = BeerChange | null>(args: { where: BeerChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerChangeUpvote: <T = BeerChangeUpvote | null>(args: { where: BeerChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    brewery: <T = Brewery | null>(args: { where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerBarConnectionChange: <T = BeerBarConnectionChange | null>(args: { where: BeerBarConnectionChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerBarConnectionChangeUpvote: <T = BeerBarConnectionChangeUpvote | null>(args: { where: BeerBarConnectionChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerPrice: <T = BeerPrice | null>(args: { where: BeerPriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerPriceChange: <T = BeerPriceChange | null>(args: { where: BeerPriceChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    beerPriceChangeUpvote: <T = BeerPriceChangeUpvote | null>(args: { where: BeerPriceChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    barsConnection: <T = BarConnection>(args: { where?: BarWhereInput | null, orderBy?: BarOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barRatingsConnection: <T = BarRatingConnection>(args: { where?: BarRatingWhereInput | null, orderBy?: BarRatingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barCommentsConnection: <T = BarCommentConnection>(args: { where?: BarCommentWhereInput | null, orderBy?: BarCommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChangesConnection: <T = BarChangeConnection>(args: { where?: BarChangeWhereInput | null, orderBy?: BarChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    barChangeUpvotesConnection: <T = BarChangeUpvoteConnection>(args: { where?: BarChangeUpvoteWhereInput | null, orderBy?: BarChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beersConnection: <T = BeerConnection>(args: { where?: BeerWhereInput | null, orderBy?: BeerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerRatingsConnection: <T = BeerRatingConnection>(args: { where?: BeerRatingWhereInput | null, orderBy?: BeerRatingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerCommentsConnection: <T = BeerCommentConnection>(args: { where?: BeerCommentWhereInput | null, orderBy?: BeerCommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChangesConnection: <T = BeerChangeConnection>(args: { where?: BeerChangeWhereInput | null, orderBy?: BeerChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerChangeUpvotesConnection: <T = BeerChangeUpvoteConnection>(args: { where?: BeerChangeUpvoteWhereInput | null, orderBy?: BeerChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    breweriesConnection: <T = BreweryConnection>(args: { where?: BreweryWhereInput | null, orderBy?: BreweryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerBarConnectionChangesConnection: <T = BeerBarConnectionChangeConnection>(args: { where?: BeerBarConnectionChangeWhereInput | null, orderBy?: BeerBarConnectionChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerBarConnectionChangeUpvotesConnection: <T = BeerBarConnectionChangeUpvoteConnection>(args: { where?: BeerBarConnectionChangeUpvoteWhereInput | null, orderBy?: BeerBarConnectionChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPricesConnection: <T = BeerPriceConnection>(args: { where?: BeerPriceWhereInput | null, orderBy?: BeerPriceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPriceChangesConnection: <T = BeerPriceChangeConnection>(args: { where?: BeerPriceChangeWhereInput | null, orderBy?: BeerPriceChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    beerPriceChangeUpvotesConnection: <T = BeerPriceChangeUpvoteConnection>(args: { where?: BeerPriceChangeUpvoteWhereInput | null, orderBy?: BeerPriceChangeUpvoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
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
    createBrewery: <T = Brewery>(args: { data: BreweryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerBarConnectionChange: <T = BeerBarConnectionChange>(args: { data: BeerBarConnectionChangeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerBarConnectionChangeUpvote: <T = BeerBarConnectionChangeUpvote>(args: { data: BeerBarConnectionChangeUpvoteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerPrice: <T = BeerPrice>(args: { data: BeerPriceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerPriceChange: <T = BeerPriceChange>(args: { data: BeerPriceChangeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBeerPriceChangeUpvote: <T = BeerPriceChangeUpvote>(args: { data: BeerPriceChangeUpvoteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBar: <T = Bar | null>(args: { data: BarUpdateInput, where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarRating: <T = BarRating | null>(args: { data: BarRatingUpdateInput, where: BarRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarComment: <T = BarComment | null>(args: { data: BarCommentUpdateInput, where: BarCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarChange: <T = BarChange | null>(args: { data: BarChangeUpdateInput, where: BarChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBarChangeUpvote: <T = BarChangeUpvote | null>(args: { data: BarChangeUpvoteUpdateInput, where: BarChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeer: <T = Beer | null>(args: { data: BeerUpdateInput, where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerRating: <T = BeerRating | null>(args: { data: BeerRatingUpdateInput, where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerComment: <T = BeerComment | null>(args: { data: BeerCommentUpdateInput, where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerChange: <T = BeerChange | null>(args: { data: BeerChangeUpdateInput, where: BeerChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerChangeUpvote: <T = BeerChangeUpvote | null>(args: { data: BeerChangeUpvoteUpdateInput, where: BeerChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBrewery: <T = Brewery | null>(args: { data: BreweryUpdateInput, where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerBarConnectionChange: <T = BeerBarConnectionChange | null>(args: { data: BeerBarConnectionChangeUpdateInput, where: BeerBarConnectionChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerBarConnectionChangeUpvote: <T = BeerBarConnectionChangeUpvote | null>(args: { data: BeerBarConnectionChangeUpvoteUpdateInput, where: BeerBarConnectionChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerPrice: <T = BeerPrice | null>(args: { data: BeerPriceUpdateInput, where: BeerPriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerPriceChange: <T = BeerPriceChange | null>(args: { data: BeerPriceChangeUpdateInput, where: BeerPriceChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBeerPriceChangeUpvote: <T = BeerPriceChangeUpvote | null>(args: { data: BeerPriceChangeUpvoteUpdateInput, where: BeerPriceChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBar: <T = Bar | null>(args: { where: BarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarRating: <T = BarRating | null>(args: { where: BarRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarComment: <T = BarComment | null>(args: { where: BarCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarChange: <T = BarChange | null>(args: { where: BarChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBarChangeUpvote: <T = BarChangeUpvote | null>(args: { where: BarChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeer: <T = Beer | null>(args: { where: BeerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerRating: <T = BeerRating | null>(args: { where: BeerRatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerComment: <T = BeerComment | null>(args: { where: BeerCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerChange: <T = BeerChange | null>(args: { where: BeerChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerChangeUpvote: <T = BeerChangeUpvote | null>(args: { where: BeerChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBrewery: <T = Brewery | null>(args: { where: BreweryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerBarConnectionChange: <T = BeerBarConnectionChange | null>(args: { where: BeerBarConnectionChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerBarConnectionChangeUpvote: <T = BeerBarConnectionChangeUpvote | null>(args: { where: BeerBarConnectionChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerPrice: <T = BeerPrice | null>(args: { where: BeerPriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerPriceChange: <T = BeerPriceChange | null>(args: { where: BeerPriceChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBeerPriceChangeUpvote: <T = BeerPriceChangeUpvote | null>(args: { where: BeerPriceChangeUpvoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
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
    upsertBrewery: <T = Brewery>(args: { where: BreweryWhereUniqueInput, create: BreweryCreateInput, update: BreweryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerBarConnectionChange: <T = BeerBarConnectionChange>(args: { where: BeerBarConnectionChangeWhereUniqueInput, create: BeerBarConnectionChangeCreateInput, update: BeerBarConnectionChangeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerBarConnectionChangeUpvote: <T = BeerBarConnectionChangeUpvote>(args: { where: BeerBarConnectionChangeUpvoteWhereUniqueInput, create: BeerBarConnectionChangeUpvoteCreateInput, update: BeerBarConnectionChangeUpvoteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerPrice: <T = BeerPrice>(args: { where: BeerPriceWhereUniqueInput, create: BeerPriceCreateInput, update: BeerPriceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerPriceChange: <T = BeerPriceChange>(args: { where: BeerPriceChangeWhereUniqueInput, create: BeerPriceChangeCreateInput, update: BeerPriceChangeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBeerPriceChangeUpvote: <T = BeerPriceChangeUpvote>(args: { where: BeerPriceChangeUpvoteWhereUniqueInput, create: BeerPriceChangeUpvoteCreateInput, update: BeerPriceChangeUpvoteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBars: <T = BatchPayload>(args: { data: BarUpdateManyMutationInput, where?: BarWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBarRatings: <T = BatchPayload>(args: { data: BarRatingUpdateManyMutationInput, where?: BarRatingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBarComments: <T = BatchPayload>(args: { data: BarCommentUpdateManyMutationInput, where?: BarCommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBarChanges: <T = BatchPayload>(args: { data: BarChangeUpdateManyMutationInput, where?: BarChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeers: <T = BatchPayload>(args: { data: BeerUpdateManyMutationInput, where?: BeerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerRatings: <T = BatchPayload>(args: { data: BeerRatingUpdateManyMutationInput, where?: BeerRatingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerComments: <T = BatchPayload>(args: { data: BeerCommentUpdateManyMutationInput, where?: BeerCommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerChanges: <T = BatchPayload>(args: { data: BeerChangeUpdateManyMutationInput, where?: BeerChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBreweries: <T = BatchPayload>(args: { data: BreweryUpdateManyMutationInput, where?: BreweryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerBarConnectionChanges: <T = BatchPayload>(args: { data: BeerBarConnectionChangeUpdateManyMutationInput, where?: BeerBarConnectionChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerPrices: <T = BatchPayload>(args: { data: BeerPriceUpdateManyMutationInput, where?: BeerPriceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBeerPriceChanges: <T = BatchPayload>(args: { data: BeerPriceChangeUpdateManyMutationInput, where?: BeerPriceChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBars: <T = BatchPayload>(args: { where?: BarWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarRatings: <T = BatchPayload>(args: { where?: BarRatingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarComments: <T = BatchPayload>(args: { where?: BarCommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarChanges: <T = BatchPayload>(args: { where?: BarChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBarChangeUpvotes: <T = BatchPayload>(args: { where?: BarChangeUpvoteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeers: <T = BatchPayload>(args: { where?: BeerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerRatings: <T = BatchPayload>(args: { where?: BeerRatingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerComments: <T = BatchPayload>(args: { where?: BeerCommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerChanges: <T = BatchPayload>(args: { where?: BeerChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerChangeUpvotes: <T = BatchPayload>(args: { where?: BeerChangeUpvoteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBreweries: <T = BatchPayload>(args: { where?: BreweryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerBarConnectionChanges: <T = BatchPayload>(args: { where?: BeerBarConnectionChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerBarConnectionChangeUpvotes: <T = BatchPayload>(args: { where?: BeerBarConnectionChangeUpvoteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerPrices: <T = BatchPayload>(args: { where?: BeerPriceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerPriceChanges: <T = BatchPayload>(args: { where?: BeerPriceChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBeerPriceChangeUpvotes: <T = BatchPayload>(args: { where?: BeerPriceChangeUpvoteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    bar: <T = BarSubscriptionPayload | null>(args: { where?: BarSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barRating: <T = BarRatingSubscriptionPayload | null>(args: { where?: BarRatingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barComment: <T = BarCommentSubscriptionPayload | null>(args: { where?: BarCommentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barChange: <T = BarChangeSubscriptionPayload | null>(args: { where?: BarChangeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    barChangeUpvote: <T = BarChangeUpvoteSubscriptionPayload | null>(args: { where?: BarChangeUpvoteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beer: <T = BeerSubscriptionPayload | null>(args: { where?: BeerSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerRating: <T = BeerRatingSubscriptionPayload | null>(args: { where?: BeerRatingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerComment: <T = BeerCommentSubscriptionPayload | null>(args: { where?: BeerCommentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerChange: <T = BeerChangeSubscriptionPayload | null>(args: { where?: BeerChangeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerChangeUpvote: <T = BeerChangeUpvoteSubscriptionPayload | null>(args: { where?: BeerChangeUpvoteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    brewery: <T = BrewerySubscriptionPayload | null>(args: { where?: BrewerySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerBarConnectionChange: <T = BeerBarConnectionChangeSubscriptionPayload | null>(args: { where?: BeerBarConnectionChangeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerBarConnectionChangeUpvote: <T = BeerBarConnectionChangeUpvoteSubscriptionPayload | null>(args: { where?: BeerBarConnectionChangeUpvoteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerPrice: <T = BeerPriceSubscriptionPayload | null>(args: { where?: BeerPriceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerPriceChange: <T = BeerPriceChangeSubscriptionPayload | null>(args: { where?: BeerPriceChangeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    beerPriceChangeUpvote: <T = BeerPriceChangeUpvoteSubscriptionPayload | null>(args: { where?: BeerPriceChangeUpvoteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
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
  Brewery: (where?: BreweryWhereInput) => Promise<boolean>
  BeerBarConnectionChange: (where?: BeerBarConnectionChangeWhereInput) => Promise<boolean>
  BeerBarConnectionChangeUpvote: (where?: BeerBarConnectionChangeUpvoteWhereInput) => Promise<boolean>
  BeerPrice: (where?: BeerPriceWhereInput) => Promise<boolean>
  BeerPriceChange: (where?: BeerPriceChangeWhereInput) => Promise<boolean>
  BeerPriceChangeUpvote: (where?: BeerPriceChangeUpvoteWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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

type AggregateBeerBarConnectionChange {
  count: Int!
}

type AggregateBeerBarConnectionChangeUpvote {
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

type AggregateBeerPriceChange {
  count: Int!
}

type AggregateBeerPriceChangeUpvote {
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
  barComments(where: BarCommentWhereInput, orderBy: BarCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarComment!]
  barChanges(where: BarChangeWhereInput, orderBy: BarChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChange!]
  beerPrices(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice!]
  beerConnections(where: BeerBarConnectionChangeWhereInput, orderBy: BeerBarConnectionChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerBarConnectionChange!]
  createdBy: User
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BarChange implements Node {
  id: ID!
  field: String!
  newValue: String!
  user: User
  bar: Bar!
  upvotes(where: BarChangeUpvoteWhereInput, orderBy: BarChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BarChangeUpvote!]
  createdAt: DateTime!
  updatedAt: DateTime!
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
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBarChangesInput
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
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBarChangesInput
  upvotes: BarChangeUpvoteCreateManyWithoutBarChangeInput
}

input BarChangeCreateWithoutUpvotesInput {
  field: String!
  newValue: String!
  user: UserCreateOneWithoutBarChangesInput
  bar: BarCreateOneWithoutBarChangesInput!
}

input BarChangeCreateWithoutUserInput {
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
  field: String!
  newValue: String!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  field: String
  newValue: String
  user: UserUpdateOneWithoutBarChangesInput
  bar: BarUpdateOneRequiredWithoutBarChangesInput
  upvotes: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

input BarChangeUpdateManyDataInput {
  field: String
  newValue: String
}

input BarChangeUpdateManyMutationInput {
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
  field: String
  newValue: String
  user: UserUpdateOneWithoutBarChangesInput
  upvotes: BarChangeUpvoteUpdateManyWithoutBarChangeInput
}

input BarChangeUpdateWithoutUpvotesDataInput {
  field: String
  newValue: String
  user: UserUpdateOneWithoutBarChangesInput
  bar: BarUpdateOneRequiredWithoutBarChangesInput
}

input BarChangeUpdateWithoutUserDataInput {
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
  user: User
  barChange: BarChange!
  createdAt: DateTime!
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
  user: UserCreateOneWithoutBarChangeUpvotesInput
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
  user: UserCreateOneWithoutBarChangeUpvotesInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BarChangeUpvotePreviousValues {
  id: ID!
  createdAt: DateTime!
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
  user: UserUpdateOneWithoutBarChangeUpvotesInput
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
  user: UserUpdateOneWithoutBarChangeUpvotesInput
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: User
  createdAt: DateTime!
  updatedAt: DateTime!
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
  user: UserCreateOneWithoutBarCommentsInput
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
  user: UserCreateOneWithoutBarCommentsInput
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
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: UserUpdateOneWithoutBarCommentsInput
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
  user: UserUpdateOneWithoutBarCommentsInput
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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

input BarCreateOneWithoutBeerConnectionsInput {
  create: BarCreateWithoutBeerConnectionsInput
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
  barComments: BarCommentCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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
  barChanges: BarChangeCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
  likedBy: UserCreateManyWithoutLikedBarsInput
}

input BarCreateWithoutBeerConnectionsInput {
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
  beerPrices: BeerPriceCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
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
  barComments: BarCommentCreateManyWithoutBarInput
  barChanges: BarChangeCreateManyWithoutBarInput
  beerPrices: BeerPriceCreateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeCreateManyWithoutBarInput
  createdBy: UserCreateOneWithoutCreatedBarsInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BarRating implements Node {
  id: ID!
  rating: Float!
  user: User
  bar: Bar!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  user: UserCreateOneWithoutBarRatingsInput
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
  user: UserCreateOneWithoutBarRatingsInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BarRatingPreviousValues {
  id: ID!
  rating: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: UserUpdateOneWithoutBarRatingsInput
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
  user: UserUpdateOneWithoutBarRatingsInput
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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

input BarUpdateOneRequiredWithoutBeerConnectionsInput {
  create: BarCreateWithoutBeerConnectionsInput
  connect: BarWhereUniqueInput
  update: BarUpdateWithoutBeerConnectionsDataInput
  upsert: BarUpsertWithoutBeerConnectionsInput
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
  barComments: BarCommentUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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
  barChanges: BarChangeUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
  likedBy: UserUpdateManyWithoutLikedBarsInput
}

input BarUpdateWithoutBeerConnectionsDataInput {
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
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
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
  barComments: BarCommentUpdateManyWithoutBarInput
  barChanges: BarChangeUpdateManyWithoutBarInput
  beerPrices: BeerPriceUpdateManyWithoutBarInput
  beerConnections: BeerBarConnectionChangeUpdateManyWithoutBarInput
  createdBy: UserUpdateOneWithoutCreatedBarsInput
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

input BarUpsertWithoutBeerConnectionsInput {
  update: BarUpdateWithoutBeerConnectionsDataInput!
  create: BarCreateWithoutBeerConnectionsInput!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
  barRating_every: BarRatingWhereInput
  barRating_some: BarRatingWhereInput
  barRating_none: BarRatingWhereInput
  barComments_every: BarCommentWhereInput
  barComments_some: BarCommentWhereInput
  barComments_none: BarCommentWhereInput
  barChanges_every: BarChangeWhereInput
  barChanges_some: BarChangeWhereInput
  barChanges_none: BarChangeWhereInput
  beerPrices_every: BeerPriceWhereInput
  beerPrices_some: BeerPriceWhereInput
  beerPrices_none: BeerPriceWhereInput
  beerConnections_every: BeerBarConnectionChangeWhereInput
  beerConnections_some: BeerBarConnectionChangeWhereInput
  beerConnections_none: BeerBarConnectionChangeWhereInput
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
  avgRating: Float
  brewery: Brewery
  bars(where: BarWhereInput, orderBy: BarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bar!]
  beerRating(where: BeerRatingWhereInput, orderBy: BeerRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerRating!]
  beerComments(where: BeerCommentWhereInput, orderBy: BeerCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerComment!]
  beerChanges(where: BeerChangeWhereInput, orderBy: BeerChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChange!]
  beerPrices(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice!]
  barConnections(where: BeerBarConnectionChangeWhereInput, orderBy: BeerBarConnectionChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerBarConnectionChange!]
  createdBy: User
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BeerBarConnectionChange implements Node {
  id: ID!
  type: ConnectionChangeType!
  user: User
  beer: Beer!
  bar: Bar!
  upvotes(where: BeerBarConnectionChangeUpvoteWhereInput, orderBy: BeerBarConnectionChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerBarConnectionChangeUpvote!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type BeerBarConnectionChangeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerBarConnectionChangeEdge]!
  aggregate: AggregateBeerBarConnectionChange!
}

input BeerBarConnectionChangeCreateInput {
  type: ConnectionChangeType!
  user: UserCreateOneInput
  beer: BeerCreateOneWithoutBarConnectionsInput!
  bar: BarCreateOneWithoutBeerConnectionsInput!
  upvotes: BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput
}

input BeerBarConnectionChangeCreateManyWithoutBarInput {
  create: [BeerBarConnectionChangeCreateWithoutBarInput!]
  connect: [BeerBarConnectionChangeWhereUniqueInput!]
}

input BeerBarConnectionChangeCreateManyWithoutBeerInput {
  create: [BeerBarConnectionChangeCreateWithoutBeerInput!]
  connect: [BeerBarConnectionChangeWhereUniqueInput!]
}

input BeerBarConnectionChangeCreateOneWithoutUpvotesInput {
  create: BeerBarConnectionChangeCreateWithoutUpvotesInput
  connect: BeerBarConnectionChangeWhereUniqueInput
}

input BeerBarConnectionChangeCreateWithoutBarInput {
  type: ConnectionChangeType!
  user: UserCreateOneInput
  beer: BeerCreateOneWithoutBarConnectionsInput!
  upvotes: BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput
}

input BeerBarConnectionChangeCreateWithoutBeerInput {
  type: ConnectionChangeType!
  user: UserCreateOneInput
  bar: BarCreateOneWithoutBeerConnectionsInput!
  upvotes: BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput
}

input BeerBarConnectionChangeCreateWithoutUpvotesInput {
  type: ConnectionChangeType!
  user: UserCreateOneInput
  beer: BeerCreateOneWithoutBarConnectionsInput!
  bar: BarCreateOneWithoutBeerConnectionsInput!
}

"""An edge in a connection."""
type BeerBarConnectionChangeEdge {
  """The item at the end of the edge."""
  node: BeerBarConnectionChange!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerBarConnectionChangeOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerBarConnectionChangePreviousValues {
  id: ID!
  type: ConnectionChangeType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BeerBarConnectionChangeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerBarConnectionChangeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerBarConnectionChangeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerBarConnectionChangeScalarWhereInput!]
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
  type: ConnectionChangeType

  """All values that are not equal to given value."""
  type_not: ConnectionChangeType

  """All values that are contained in given list."""
  type_in: [ConnectionChangeType!]

  """All values that are not contained in given list."""
  type_not_in: [ConnectionChangeType!]
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type BeerBarConnectionChangeSubscriptionPayload {
  mutation: MutationType!
  node: BeerBarConnectionChange
  updatedFields: [String!]
  previousValues: BeerBarConnectionChangePreviousValues
}

input BeerBarConnectionChangeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerBarConnectionChangeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerBarConnectionChangeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerBarConnectionChangeSubscriptionWhereInput!]

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
  node: BeerBarConnectionChangeWhereInput
}

input BeerBarConnectionChangeUpdateInput {
  type: ConnectionChangeType
  user: UserUpdateOneInput
  beer: BeerUpdateOneRequiredWithoutBarConnectionsInput
  bar: BarUpdateOneRequiredWithoutBeerConnectionsInput
  upvotes: BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput
}

input BeerBarConnectionChangeUpdateManyDataInput {
  type: ConnectionChangeType
}

input BeerBarConnectionChangeUpdateManyMutationInput {
  type: ConnectionChangeType
}

input BeerBarConnectionChangeUpdateManyWithoutBarInput {
  create: [BeerBarConnectionChangeCreateWithoutBarInput!]
  connect: [BeerBarConnectionChangeWhereUniqueInput!]
  set: [BeerBarConnectionChangeWhereUniqueInput!]
  disconnect: [BeerBarConnectionChangeWhereUniqueInput!]
  delete: [BeerBarConnectionChangeWhereUniqueInput!]
  update: [BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBarInput!]
  updateMany: [BeerBarConnectionChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerBarConnectionChangeScalarWhereInput!]
  upsert: [BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBarInput!]
}

input BeerBarConnectionChangeUpdateManyWithoutBeerInput {
  create: [BeerBarConnectionChangeCreateWithoutBeerInput!]
  connect: [BeerBarConnectionChangeWhereUniqueInput!]
  set: [BeerBarConnectionChangeWhereUniqueInput!]
  disconnect: [BeerBarConnectionChangeWhereUniqueInput!]
  delete: [BeerBarConnectionChangeWhereUniqueInput!]
  update: [BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBeerInput!]
  updateMany: [BeerBarConnectionChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerBarConnectionChangeScalarWhereInput!]
  upsert: [BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBeerInput!]
}

input BeerBarConnectionChangeUpdateManyWithWhereNestedInput {
  where: BeerBarConnectionChangeScalarWhereInput!
  data: BeerBarConnectionChangeUpdateManyDataInput!
}

input BeerBarConnectionChangeUpdateOneRequiredWithoutUpvotesInput {
  create: BeerBarConnectionChangeCreateWithoutUpvotesInput
  connect: BeerBarConnectionChangeWhereUniqueInput
  update: BeerBarConnectionChangeUpdateWithoutUpvotesDataInput
  upsert: BeerBarConnectionChangeUpsertWithoutUpvotesInput
}

input BeerBarConnectionChangeUpdateWithoutBarDataInput {
  type: ConnectionChangeType
  user: UserUpdateOneInput
  beer: BeerUpdateOneRequiredWithoutBarConnectionsInput
  upvotes: BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput
}

input BeerBarConnectionChangeUpdateWithoutBeerDataInput {
  type: ConnectionChangeType
  user: UserUpdateOneInput
  bar: BarUpdateOneRequiredWithoutBeerConnectionsInput
  upvotes: BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput
}

input BeerBarConnectionChangeUpdateWithoutUpvotesDataInput {
  type: ConnectionChangeType
  user: UserUpdateOneInput
  beer: BeerUpdateOneRequiredWithoutBarConnectionsInput
  bar: BarUpdateOneRequiredWithoutBeerConnectionsInput
}

input BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBarInput {
  where: BeerBarConnectionChangeWhereUniqueInput!
  data: BeerBarConnectionChangeUpdateWithoutBarDataInput!
}

input BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerBarConnectionChangeWhereUniqueInput!
  data: BeerBarConnectionChangeUpdateWithoutBeerDataInput!
}

input BeerBarConnectionChangeUpsertWithoutUpvotesInput {
  update: BeerBarConnectionChangeUpdateWithoutUpvotesDataInput!
  create: BeerBarConnectionChangeCreateWithoutUpvotesInput!
}

input BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBarInput {
  where: BeerBarConnectionChangeWhereUniqueInput!
  update: BeerBarConnectionChangeUpdateWithoutBarDataInput!
  create: BeerBarConnectionChangeCreateWithoutBarInput!
}

input BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerBarConnectionChangeWhereUniqueInput!
  update: BeerBarConnectionChangeUpdateWithoutBeerDataInput!
  create: BeerBarConnectionChangeCreateWithoutBeerInput!
}

type BeerBarConnectionChangeUpvote implements Node {
  id: ID!
  user: User
  beerBarConnectionChange: BeerBarConnectionChange!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BeerBarConnectionChangeUpvoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerBarConnectionChangeUpvoteEdge]!
  aggregate: AggregateBeerBarConnectionChangeUpvote!
}

input BeerBarConnectionChangeUpvoteCreateInput {
  user: UserCreateOneInput
  beerBarConnectionChange: BeerBarConnectionChangeCreateOneWithoutUpvotesInput!
}

input BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput {
  create: [BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput!]
  connect: [BeerBarConnectionChangeUpvoteWhereUniqueInput!]
}

input BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput {
  user: UserCreateOneInput
}

"""An edge in a connection."""
type BeerBarConnectionChangeUpvoteEdge {
  """The item at the end of the edge."""
  node: BeerBarConnectionChangeUpvote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerBarConnectionChangeUpvoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerBarConnectionChangeUpvotePreviousValues {
  id: ID!
  createdAt: DateTime!
}

input BeerBarConnectionChangeUpvoteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerBarConnectionChangeUpvoteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerBarConnectionChangeUpvoteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerBarConnectionChangeUpvoteScalarWhereInput!]
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

type BeerBarConnectionChangeUpvoteSubscriptionPayload {
  mutation: MutationType!
  node: BeerBarConnectionChangeUpvote
  updatedFields: [String!]
  previousValues: BeerBarConnectionChangeUpvotePreviousValues
}

input BeerBarConnectionChangeUpvoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerBarConnectionChangeUpvoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerBarConnectionChangeUpvoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerBarConnectionChangeUpvoteSubscriptionWhereInput!]

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
  node: BeerBarConnectionChangeUpvoteWhereInput
}

input BeerBarConnectionChangeUpvoteUpdateInput {
  user: UserUpdateOneInput
  beerBarConnectionChange: BeerBarConnectionChangeUpdateOneRequiredWithoutUpvotesInput
}

input BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput {
  create: [BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput!]
  connect: [BeerBarConnectionChangeUpvoteWhereUniqueInput!]
  set: [BeerBarConnectionChangeUpvoteWhereUniqueInput!]
  disconnect: [BeerBarConnectionChangeUpvoteWhereUniqueInput!]
  delete: [BeerBarConnectionChangeUpvoteWhereUniqueInput!]
  update: [BeerBarConnectionChangeUpvoteUpdateWithWhereUniqueWithoutBeerBarConnectionChangeInput!]
  deleteMany: [BeerBarConnectionChangeUpvoteScalarWhereInput!]
  upsert: [BeerBarConnectionChangeUpvoteUpsertWithWhereUniqueWithoutBeerBarConnectionChangeInput!]
}

input BeerBarConnectionChangeUpvoteUpdateWithoutBeerBarConnectionChangeDataInput {
  user: UserUpdateOneInput
}

input BeerBarConnectionChangeUpvoteUpdateWithWhereUniqueWithoutBeerBarConnectionChangeInput {
  where: BeerBarConnectionChangeUpvoteWhereUniqueInput!
  data: BeerBarConnectionChangeUpvoteUpdateWithoutBeerBarConnectionChangeDataInput!
}

input BeerBarConnectionChangeUpvoteUpsertWithWhereUniqueWithoutBeerBarConnectionChangeInput {
  where: BeerBarConnectionChangeUpvoteWhereUniqueInput!
  update: BeerBarConnectionChangeUpvoteUpdateWithoutBeerBarConnectionChangeDataInput!
  create: BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput!
}

input BeerBarConnectionChangeUpvoteWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerBarConnectionChangeUpvoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerBarConnectionChangeUpvoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerBarConnectionChangeUpvoteWhereInput!]
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
  beerBarConnectionChange: BeerBarConnectionChangeWhereInput
}

input BeerBarConnectionChangeUpvoteWhereUniqueInput {
  id: ID
}

input BeerBarConnectionChangeWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerBarConnectionChangeWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerBarConnectionChangeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerBarConnectionChangeWhereInput!]
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
  type: ConnectionChangeType

  """All values that are not equal to given value."""
  type_not: ConnectionChangeType

  """All values that are contained in given list."""
  type_in: [ConnectionChangeType!]

  """All values that are not contained in given list."""
  type_not_in: [ConnectionChangeType!]
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  beer: BeerWhereInput
  bar: BarWhereInput
  upvotes_every: BeerBarConnectionChangeUpvoteWhereInput
  upvotes_some: BeerBarConnectionChangeUpvoteWhereInput
  upvotes_none: BeerBarConnectionChangeUpvoteWhereInput
}

input BeerBarConnectionChangeWhereUniqueInput {
  id: ID
}

type BeerChange implements Node {
  id: ID!
  field: BeerField!
  newValue: String!
  user: User
  beer: Beer!
  upvotes(where: BeerChangeUpvoteWhereInput, orderBy: BeerChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerChangeUpvote!]
  createdAt: DateTime!
  updatedAt: DateTime!
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
  field: BeerField!
  newValue: String!
  user: UserCreateOneWithoutBeerChangesInput
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
  field: BeerField!
  newValue: String!
  user: UserCreateOneWithoutBeerChangesInput
  upvotes: BeerChangeUpvoteCreateManyWithoutBeerChangeInput
}

input BeerChangeCreateWithoutUpvotesInput {
  field: BeerField!
  newValue: String!
  user: UserCreateOneWithoutBeerChangesInput
  beer: BeerCreateOneWithoutBeerChangesInput!
}

input BeerChangeCreateWithoutUserInput {
  field: BeerField!
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
  field: BeerField!
  newValue: String!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  field: BeerField

  """All values that are not equal to given value."""
  field_not: BeerField

  """All values that are contained in given list."""
  field_in: [BeerField!]

  """All values that are not contained in given list."""
  field_not_in: [BeerField!]
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  field: BeerField
  newValue: String
  user: UserUpdateOneWithoutBeerChangesInput
  beer: BeerUpdateOneRequiredWithoutBeerChangesInput
  upvotes: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

input BeerChangeUpdateManyDataInput {
  field: BeerField
  newValue: String
}

input BeerChangeUpdateManyMutationInput {
  field: BeerField
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
  field: BeerField
  newValue: String
  user: UserUpdateOneWithoutBeerChangesInput
  upvotes: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput
}

input BeerChangeUpdateWithoutUpvotesDataInput {
  field: BeerField
  newValue: String
  user: UserUpdateOneWithoutBeerChangesInput
  beer: BeerUpdateOneRequiredWithoutBeerChangesInput
}

input BeerChangeUpdateWithoutUserDataInput {
  field: BeerField
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
  user: User
  beerChange: BeerChange!
  createdAt: DateTime!
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
  user: UserCreateOneWithoutBeerChangeUpvotesInput
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
  user: UserCreateOneWithoutBeerChangeUpvotesInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerChangeUpvotePreviousValues {
  id: ID!
  createdAt: DateTime!
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
  user: UserUpdateOneWithoutBeerChangeUpvotesInput
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
  user: UserUpdateOneWithoutBeerChangeUpvotesInput
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
  field: BeerField

  """All values that are not equal to given value."""
  field_not: BeerField

  """All values that are contained in given list."""
  field_in: [BeerField!]

  """All values that are not contained in given list."""
  field_not_in: [BeerField!]
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: User
  createdAt: DateTime!
  updatedAt: DateTime!
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
  user: UserCreateOneWithoutBeerCommentsInput
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
  user: UserCreateOneWithoutBeerCommentsInput
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
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: UserUpdateOneWithoutBeerCommentsInput
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
  user: UserUpdateOneWithoutBeerCommentsInput
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
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

input BeerCreateOneWithoutBarConnectionsInput {
  create: BeerCreateWithoutBarConnectionsInput
  connect: BeerWhereUniqueInput
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

input BeerCreateWithoutBarConnectionsInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBarsInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerChangesInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerCommentsInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerPricesInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBeerRatingInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutBreweryInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutCreatedByInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  likedBy: UserCreateManyWithoutLikedBeersInput
}

input BeerCreateWithoutLikedByInput {
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryCreateOneWithoutBeersInput
  bars: BarCreateManyWithoutBeersInput
  beerRating: BeerRatingCreateManyWithoutBeerInput
  beerComments: BeerCommentCreateManyWithoutBeerInput
  beerChanges: BeerChangeCreateManyWithoutBeerInput
  beerPrices: BeerPriceCreateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeCreateManyWithoutBeerInput
  createdBy: UserCreateOneWithoutCreatedBeersInput
}

"""An edge in a connection."""
type BeerEdge {
  """The item at the end of the edge."""
  node: Beer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerField {
  NAME
  TYPE
  STRONG
  PHOTO
  BREWERY
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
  avgRating_ASC
  avgRating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPreviousValues {
  id: ID!
  name: String!
  type: String!
  strong: String
  photo: String
  avgRating: Float
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BeerPrice implements Node {
  id: ID!
  price: Float!
  user: User
  bar: Bar!
  beer: Beer!
  changes(where: BeerPriceChangeWhereInput, orderBy: BeerPriceChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPriceChange!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BeerPriceChange implements Node {
  id: ID!
  newPrice: Float!
  beerPrice: BeerPrice!
  user: User
  upvotes(where: BeerPriceChangeUpvoteWhereInput, orderBy: BeerPriceChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPriceChangeUpvote!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type BeerPriceChangeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerPriceChangeEdge]!
  aggregate: AggregateBeerPriceChange!
}

input BeerPriceChangeCreateInput {
  newPrice: Float!
  beerPrice: BeerPriceCreateOneWithoutChangesInput!
  user: UserCreateOneInput
  upvotes: BeerPriceChangeUpvoteCreateManyWithoutBeerPriceChangeInput
}

input BeerPriceChangeCreateManyWithoutBeerPriceInput {
  create: [BeerPriceChangeCreateWithoutBeerPriceInput!]
  connect: [BeerPriceChangeWhereUniqueInput!]
}

input BeerPriceChangeCreateOneWithoutUpvotesInput {
  create: BeerPriceChangeCreateWithoutUpvotesInput
  connect: BeerPriceChangeWhereUniqueInput
}

input BeerPriceChangeCreateWithoutBeerPriceInput {
  newPrice: Float!
  user: UserCreateOneInput
  upvotes: BeerPriceChangeUpvoteCreateManyWithoutBeerPriceChangeInput
}

input BeerPriceChangeCreateWithoutUpvotesInput {
  newPrice: Float!
  beerPrice: BeerPriceCreateOneWithoutChangesInput!
  user: UserCreateOneInput
}

"""An edge in a connection."""
type BeerPriceChangeEdge {
  """The item at the end of the edge."""
  node: BeerPriceChange!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerPriceChangeOrderByInput {
  id_ASC
  id_DESC
  newPrice_ASC
  newPrice_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPriceChangePreviousValues {
  id: ID!
  newPrice: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BeerPriceChangeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceChangeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceChangeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceChangeScalarWhereInput!]
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
  newPrice: Float

  """All values that are not equal to given value."""
  newPrice_not: Float

  """All values that are contained in given list."""
  newPrice_in: [Float!]

  """All values that are not contained in given list."""
  newPrice_not_in: [Float!]

  """All values less than the given value."""
  newPrice_lt: Float

  """All values less than or equal the given value."""
  newPrice_lte: Float

  """All values greater than the given value."""
  newPrice_gt: Float

  """All values greater than or equal the given value."""
  newPrice_gte: Float
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type BeerPriceChangeSubscriptionPayload {
  mutation: MutationType!
  node: BeerPriceChange
  updatedFields: [String!]
  previousValues: BeerPriceChangePreviousValues
}

input BeerPriceChangeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceChangeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceChangeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceChangeSubscriptionWhereInput!]

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
  node: BeerPriceChangeWhereInput
}

input BeerPriceChangeUpdateInput {
  newPrice: Float
  beerPrice: BeerPriceUpdateOneRequiredWithoutChangesInput
  user: UserUpdateOneInput
  upvotes: BeerPriceChangeUpvoteUpdateManyWithoutBeerPriceChangeInput
}

input BeerPriceChangeUpdateManyDataInput {
  newPrice: Float
}

input BeerPriceChangeUpdateManyMutationInput {
  newPrice: Float
}

input BeerPriceChangeUpdateManyWithoutBeerPriceInput {
  create: [BeerPriceChangeCreateWithoutBeerPriceInput!]
  connect: [BeerPriceChangeWhereUniqueInput!]
  set: [BeerPriceChangeWhereUniqueInput!]
  disconnect: [BeerPriceChangeWhereUniqueInput!]
  delete: [BeerPriceChangeWhereUniqueInput!]
  update: [BeerPriceChangeUpdateWithWhereUniqueWithoutBeerPriceInput!]
  updateMany: [BeerPriceChangeUpdateManyWithWhereNestedInput!]
  deleteMany: [BeerPriceChangeScalarWhereInput!]
  upsert: [BeerPriceChangeUpsertWithWhereUniqueWithoutBeerPriceInput!]
}

input BeerPriceChangeUpdateManyWithWhereNestedInput {
  where: BeerPriceChangeScalarWhereInput!
  data: BeerPriceChangeUpdateManyDataInput!
}

input BeerPriceChangeUpdateOneRequiredWithoutUpvotesInput {
  create: BeerPriceChangeCreateWithoutUpvotesInput
  connect: BeerPriceChangeWhereUniqueInput
  update: BeerPriceChangeUpdateWithoutUpvotesDataInput
  upsert: BeerPriceChangeUpsertWithoutUpvotesInput
}

input BeerPriceChangeUpdateWithoutBeerPriceDataInput {
  newPrice: Float
  user: UserUpdateOneInput
  upvotes: BeerPriceChangeUpvoteUpdateManyWithoutBeerPriceChangeInput
}

input BeerPriceChangeUpdateWithoutUpvotesDataInput {
  newPrice: Float
  beerPrice: BeerPriceUpdateOneRequiredWithoutChangesInput
  user: UserUpdateOneInput
}

input BeerPriceChangeUpdateWithWhereUniqueWithoutBeerPriceInput {
  where: BeerPriceChangeWhereUniqueInput!
  data: BeerPriceChangeUpdateWithoutBeerPriceDataInput!
}

input BeerPriceChangeUpsertWithoutUpvotesInput {
  update: BeerPriceChangeUpdateWithoutUpvotesDataInput!
  create: BeerPriceChangeCreateWithoutUpvotesInput!
}

input BeerPriceChangeUpsertWithWhereUniqueWithoutBeerPriceInput {
  where: BeerPriceChangeWhereUniqueInput!
  update: BeerPriceChangeUpdateWithoutBeerPriceDataInput!
  create: BeerPriceChangeCreateWithoutBeerPriceInput!
}

type BeerPriceChangeUpvote implements Node {
  id: ID!
  user: User
  beerPriceChange: BeerPriceChange!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BeerPriceChangeUpvoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BeerPriceChangeUpvoteEdge]!
  aggregate: AggregateBeerPriceChangeUpvote!
}

input BeerPriceChangeUpvoteCreateInput {
  user: UserCreateOneInput
  beerPriceChange: BeerPriceChangeCreateOneWithoutUpvotesInput!
}

input BeerPriceChangeUpvoteCreateManyWithoutBeerPriceChangeInput {
  create: [BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput!]
  connect: [BeerPriceChangeUpvoteWhereUniqueInput!]
}

input BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput {
  user: UserCreateOneInput
}

"""An edge in a connection."""
type BeerPriceChangeUpvoteEdge {
  """The item at the end of the edge."""
  node: BeerPriceChangeUpvote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BeerPriceChangeUpvoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPriceChangeUpvotePreviousValues {
  id: ID!
  createdAt: DateTime!
}

input BeerPriceChangeUpvoteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceChangeUpvoteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceChangeUpvoteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceChangeUpvoteScalarWhereInput!]
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

type BeerPriceChangeUpvoteSubscriptionPayload {
  mutation: MutationType!
  node: BeerPriceChangeUpvote
  updatedFields: [String!]
  previousValues: BeerPriceChangeUpvotePreviousValues
}

input BeerPriceChangeUpvoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceChangeUpvoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceChangeUpvoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceChangeUpvoteSubscriptionWhereInput!]

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
  node: BeerPriceChangeUpvoteWhereInput
}

input BeerPriceChangeUpvoteUpdateInput {
  user: UserUpdateOneInput
  beerPriceChange: BeerPriceChangeUpdateOneRequiredWithoutUpvotesInput
}

input BeerPriceChangeUpvoteUpdateManyWithoutBeerPriceChangeInput {
  create: [BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput!]
  connect: [BeerPriceChangeUpvoteWhereUniqueInput!]
  set: [BeerPriceChangeUpvoteWhereUniqueInput!]
  disconnect: [BeerPriceChangeUpvoteWhereUniqueInput!]
  delete: [BeerPriceChangeUpvoteWhereUniqueInput!]
  update: [BeerPriceChangeUpvoteUpdateWithWhereUniqueWithoutBeerPriceChangeInput!]
  deleteMany: [BeerPriceChangeUpvoteScalarWhereInput!]
  upsert: [BeerPriceChangeUpvoteUpsertWithWhereUniqueWithoutBeerPriceChangeInput!]
}

input BeerPriceChangeUpvoteUpdateWithoutBeerPriceChangeDataInput {
  user: UserUpdateOneInput
}

input BeerPriceChangeUpvoteUpdateWithWhereUniqueWithoutBeerPriceChangeInput {
  where: BeerPriceChangeUpvoteWhereUniqueInput!
  data: BeerPriceChangeUpvoteUpdateWithoutBeerPriceChangeDataInput!
}

input BeerPriceChangeUpvoteUpsertWithWhereUniqueWithoutBeerPriceChangeInput {
  where: BeerPriceChangeUpvoteWhereUniqueInput!
  update: BeerPriceChangeUpvoteUpdateWithoutBeerPriceChangeDataInput!
  create: BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput!
}

input BeerPriceChangeUpvoteWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceChangeUpvoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceChangeUpvoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceChangeUpvoteWhereInput!]
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
  beerPriceChange: BeerPriceChangeWhereInput
}

input BeerPriceChangeUpvoteWhereUniqueInput {
  id: ID
}

input BeerPriceChangeWhereInput {
  """Logical AND on all given filters."""
  AND: [BeerPriceChangeWhereInput!]

  """Logical OR on all given filters."""
  OR: [BeerPriceChangeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BeerPriceChangeWhereInput!]
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
  newPrice: Float

  """All values that are not equal to given value."""
  newPrice_not: Float

  """All values that are contained in given list."""
  newPrice_in: [Float!]

  """All values that are not contained in given list."""
  newPrice_not_in: [Float!]

  """All values less than the given value."""
  newPrice_lt: Float

  """All values less than or equal the given value."""
  newPrice_lte: Float

  """All values greater than the given value."""
  newPrice_gt: Float

  """All values greater than or equal the given value."""
  newPrice_gte: Float
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  beerPrice: BeerPriceWhereInput
  user: UserWhereInput
  upvotes_every: BeerPriceChangeUpvoteWhereInput
  upvotes_some: BeerPriceChangeUpvoteWhereInput
  upvotes_none: BeerPriceChangeUpvoteWhereInput
}

input BeerPriceChangeWhereUniqueInput {
  id: ID
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
  user: UserCreateOneWithoutPricedBeersInput
  bar: BarCreateOneWithoutBeerPricesInput!
  beer: BeerCreateOneWithoutBeerPricesInput!
  changes: BeerPriceChangeCreateManyWithoutBeerPriceInput
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

input BeerPriceCreateOneWithoutChangesInput {
  create: BeerPriceCreateWithoutChangesInput
  connect: BeerPriceWhereUniqueInput
}

input BeerPriceCreateWithoutBarInput {
  price: Float!
  user: UserCreateOneWithoutPricedBeersInput
  beer: BeerCreateOneWithoutBeerPricesInput!
  changes: BeerPriceChangeCreateManyWithoutBeerPriceInput
}

input BeerPriceCreateWithoutBeerInput {
  price: Float!
  user: UserCreateOneWithoutPricedBeersInput
  bar: BarCreateOneWithoutBeerPricesInput!
  changes: BeerPriceChangeCreateManyWithoutBeerPriceInput
}

input BeerPriceCreateWithoutChangesInput {
  price: Float!
  user: UserCreateOneWithoutPricedBeersInput
  bar: BarCreateOneWithoutBeerPricesInput!
  beer: BeerCreateOneWithoutBeerPricesInput!
}

input BeerPriceCreateWithoutUserInput {
  price: Float!
  bar: BarCreateOneWithoutBeerPricesInput!
  beer: BeerCreateOneWithoutBeerPricesInput!
  changes: BeerPriceChangeCreateManyWithoutBeerPriceInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPricePreviousValues {
  id: ID!
  price: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: UserUpdateOneWithoutPricedBeersInput
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
  changes: BeerPriceChangeUpdateManyWithoutBeerPriceInput
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

input BeerPriceUpdateOneRequiredWithoutChangesInput {
  create: BeerPriceCreateWithoutChangesInput
  connect: BeerPriceWhereUniqueInput
  update: BeerPriceUpdateWithoutChangesDataInput
  upsert: BeerPriceUpsertWithoutChangesInput
}

input BeerPriceUpdateWithoutBarDataInput {
  price: Float
  user: UserUpdateOneWithoutPricedBeersInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
  changes: BeerPriceChangeUpdateManyWithoutBeerPriceInput
}

input BeerPriceUpdateWithoutBeerDataInput {
  price: Float
  user: UserUpdateOneWithoutPricedBeersInput
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
  changes: BeerPriceChangeUpdateManyWithoutBeerPriceInput
}

input BeerPriceUpdateWithoutChangesDataInput {
  price: Float
  user: UserUpdateOneWithoutPricedBeersInput
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
}

input BeerPriceUpdateWithoutUserDataInput {
  price: Float
  bar: BarUpdateOneRequiredWithoutBeerPricesInput
  beer: BeerUpdateOneRequiredWithoutBeerPricesInput
  changes: BeerPriceChangeUpdateManyWithoutBeerPriceInput
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

input BeerPriceUpsertWithoutChangesInput {
  update: BeerPriceUpdateWithoutChangesDataInput!
  create: BeerPriceCreateWithoutChangesInput!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  bar: BarWhereInput
  beer: BeerWhereInput
  changes_every: BeerPriceChangeWhereInput
  changes_some: BeerPriceChangeWhereInput
  changes_none: BeerPriceChangeWhereInput
}

input BeerPriceWhereUniqueInput {
  id: ID
}

type BeerRating implements Node {
  id: ID!
  rating: Int!
  user: User
  beer: Beer!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  user: UserCreateOneWithoutBeerRatingsInput
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
  user: UserCreateOneWithoutBeerRatingsInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerRatingPreviousValues {
  id: ID!
  rating: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  user: UserUpdateOneWithoutBeerRatingsInput
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
  rating: Int
  user: UserUpdateOneWithoutBeerRatingsInput
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  avgRating: Float

  """All values that are not equal to given value."""
  avgRating_not: Float

  """All values that are contained in given list."""
  avgRating_in: [Float!]

  """All values that are not contained in given list."""
  avgRating_not_in: [Float!]

  """All values less than the given value."""
  avgRating_lt: Float

  """All values less than or equal the given value."""
  avgRating_lte: Float

  """All values greater than the given value."""
  avgRating_gt: Float

  """All values greater than or equal the given value."""
  avgRating_gte: Float
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateManyDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
}

input BeerUpdateManyMutationInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
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

input BeerUpdateOneRequiredWithoutBarConnectionsInput {
  create: BeerCreateWithoutBarConnectionsInput
  connect: BeerWhereUniqueInput
  update: BeerUpdateWithoutBarConnectionsDataInput
  upsert: BeerUpsertWithoutBarConnectionsInput
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

input BeerUpdateWithoutBarConnectionsDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBarsDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerChangesDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerCommentsDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerPricesDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBeerRatingDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutBreweryDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutCreatedByDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  likedBy: UserUpdateManyWithoutLikedBeersInput
}

input BeerUpdateWithoutLikedByDataInput {
  name: String
  type: String
  strong: String
  photo: String
  avgRating: Float
  brewery: BreweryUpdateOneWithoutBeersInput
  bars: BarUpdateManyWithoutBeersInput
  beerRating: BeerRatingUpdateManyWithoutBeerInput
  beerComments: BeerCommentUpdateManyWithoutBeerInput
  beerChanges: BeerChangeUpdateManyWithoutBeerInput
  beerPrices: BeerPriceUpdateManyWithoutBeerInput
  barConnections: BeerBarConnectionChangeUpdateManyWithoutBeerInput
  createdBy: UserUpdateOneWithoutCreatedBeersInput
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

input BeerUpsertWithoutBarConnectionsInput {
  update: BeerUpdateWithoutBarConnectionsDataInput!
  create: BeerCreateWithoutBarConnectionsInput!
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
  avgRating: Float

  """All values that are not equal to given value."""
  avgRating_not: Float

  """All values that are contained in given list."""
  avgRating_in: [Float!]

  """All values that are not contained in given list."""
  avgRating_not_in: [Float!]

  """All values less than the given value."""
  avgRating_lt: Float

  """All values less than or equal the given value."""
  avgRating_lte: Float

  """All values greater than the given value."""
  avgRating_gt: Float

  """All values greater than or equal the given value."""
  avgRating_gte: Float
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  brewery: BreweryWhereInput
  bars_every: BarWhereInput
  bars_some: BarWhereInput
  bars_none: BarWhereInput
  beerRating_every: BeerRatingWhereInput
  beerRating_some: BeerRatingWhereInput
  beerRating_none: BeerRatingWhereInput
  beerComments_every: BeerCommentWhereInput
  beerComments_some: BeerCommentWhereInput
  beerComments_none: BeerCommentWhereInput
  beerChanges_every: BeerChangeWhereInput
  beerChanges_some: BeerChangeWhereInput
  beerChanges_none: BeerChangeWhereInput
  beerPrices_every: BeerPriceWhereInput
  beerPrices_some: BeerPriceWhereInput
  beerPrices_none: BeerPriceWhereInput
  barConnections_every: BeerBarConnectionChangeWhereInput
  barConnections_some: BeerBarConnectionChangeWhereInput
  barConnections_none: BeerBarConnectionChangeWhereInput
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
  createdAt: DateTime!
  updatedAt: DateTime!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BreweryPreviousValues {
  id: ID!
  name: String!
  country: String!
  logo: String
  createdAt: DateTime!
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
}

input BreweryWhereUniqueInput {
  id: ID
}

enum ConnectionChangeType {
  ADD
  REMOVE
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
  createBrewery(data: BreweryCreateInput!): Brewery!
  createBeerBarConnectionChange(data: BeerBarConnectionChangeCreateInput!): BeerBarConnectionChange!
  createBeerBarConnectionChangeUpvote(data: BeerBarConnectionChangeUpvoteCreateInput!): BeerBarConnectionChangeUpvote!
  createBeerPrice(data: BeerPriceCreateInput!): BeerPrice!
  createBeerPriceChange(data: BeerPriceChangeCreateInput!): BeerPriceChange!
  createBeerPriceChangeUpvote(data: BeerPriceChangeUpvoteCreateInput!): BeerPriceChangeUpvote!
  createUser(data: UserCreateInput!): User!
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
  updateBrewery(data: BreweryUpdateInput!, where: BreweryWhereUniqueInput!): Brewery
  updateBeerBarConnectionChange(data: BeerBarConnectionChangeUpdateInput!, where: BeerBarConnectionChangeWhereUniqueInput!): BeerBarConnectionChange
  updateBeerBarConnectionChangeUpvote(data: BeerBarConnectionChangeUpvoteUpdateInput!, where: BeerBarConnectionChangeUpvoteWhereUniqueInput!): BeerBarConnectionChangeUpvote
  updateBeerPrice(data: BeerPriceUpdateInput!, where: BeerPriceWhereUniqueInput!): BeerPrice
  updateBeerPriceChange(data: BeerPriceChangeUpdateInput!, where: BeerPriceChangeWhereUniqueInput!): BeerPriceChange
  updateBeerPriceChangeUpvote(data: BeerPriceChangeUpvoteUpdateInput!, where: BeerPriceChangeUpvoteWhereUniqueInput!): BeerPriceChangeUpvote
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
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
  deleteBrewery(where: BreweryWhereUniqueInput!): Brewery
  deleteBeerBarConnectionChange(where: BeerBarConnectionChangeWhereUniqueInput!): BeerBarConnectionChange
  deleteBeerBarConnectionChangeUpvote(where: BeerBarConnectionChangeUpvoteWhereUniqueInput!): BeerBarConnectionChangeUpvote
  deleteBeerPrice(where: BeerPriceWhereUniqueInput!): BeerPrice
  deleteBeerPriceChange(where: BeerPriceChangeWhereUniqueInput!): BeerPriceChange
  deleteBeerPriceChangeUpvote(where: BeerPriceChangeUpvoteWhereUniqueInput!): BeerPriceChangeUpvote
  deleteUser(where: UserWhereUniqueInput!): User
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
  upsertBrewery(where: BreweryWhereUniqueInput!, create: BreweryCreateInput!, update: BreweryUpdateInput!): Brewery!
  upsertBeerBarConnectionChange(where: BeerBarConnectionChangeWhereUniqueInput!, create: BeerBarConnectionChangeCreateInput!, update: BeerBarConnectionChangeUpdateInput!): BeerBarConnectionChange!
  upsertBeerBarConnectionChangeUpvote(where: BeerBarConnectionChangeUpvoteWhereUniqueInput!, create: BeerBarConnectionChangeUpvoteCreateInput!, update: BeerBarConnectionChangeUpvoteUpdateInput!): BeerBarConnectionChangeUpvote!
  upsertBeerPrice(where: BeerPriceWhereUniqueInput!, create: BeerPriceCreateInput!, update: BeerPriceUpdateInput!): BeerPrice!
  upsertBeerPriceChange(where: BeerPriceChangeWhereUniqueInput!, create: BeerPriceChangeCreateInput!, update: BeerPriceChangeUpdateInput!): BeerPriceChange!
  upsertBeerPriceChangeUpvote(where: BeerPriceChangeUpvoteWhereUniqueInput!, create: BeerPriceChangeUpvoteCreateInput!, update: BeerPriceChangeUpvoteUpdateInput!): BeerPriceChangeUpvote!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyBars(data: BarUpdateManyMutationInput!, where: BarWhereInput): BatchPayload!
  updateManyBarRatings(data: BarRatingUpdateManyMutationInput!, where: BarRatingWhereInput): BatchPayload!
  updateManyBarComments(data: BarCommentUpdateManyMutationInput!, where: BarCommentWhereInput): BatchPayload!
  updateManyBarChanges(data: BarChangeUpdateManyMutationInput!, where: BarChangeWhereInput): BatchPayload!
  updateManyBeers(data: BeerUpdateManyMutationInput!, where: BeerWhereInput): BatchPayload!
  updateManyBeerRatings(data: BeerRatingUpdateManyMutationInput!, where: BeerRatingWhereInput): BatchPayload!
  updateManyBeerComments(data: BeerCommentUpdateManyMutationInput!, where: BeerCommentWhereInput): BatchPayload!
  updateManyBeerChanges(data: BeerChangeUpdateManyMutationInput!, where: BeerChangeWhereInput): BatchPayload!
  updateManyBreweries(data: BreweryUpdateManyMutationInput!, where: BreweryWhereInput): BatchPayload!
  updateManyBeerBarConnectionChanges(data: BeerBarConnectionChangeUpdateManyMutationInput!, where: BeerBarConnectionChangeWhereInput): BatchPayload!
  updateManyBeerPrices(data: BeerPriceUpdateManyMutationInput!, where: BeerPriceWhereInput): BatchPayload!
  updateManyBeerPriceChanges(data: BeerPriceChangeUpdateManyMutationInput!, where: BeerPriceChangeWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
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
  deleteManyBreweries(where: BreweryWhereInput): BatchPayload!
  deleteManyBeerBarConnectionChanges(where: BeerBarConnectionChangeWhereInput): BatchPayload!
  deleteManyBeerBarConnectionChangeUpvotes(where: BeerBarConnectionChangeUpvoteWhereInput): BatchPayload!
  deleteManyBeerPrices(where: BeerPriceWhereInput): BatchPayload!
  deleteManyBeerPriceChanges(where: BeerPriceChangeWhereInput): BatchPayload!
  deleteManyBeerPriceChangeUpvotes(where: BeerPriceChangeUpvoteWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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
  breweries(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brewery]!
  beerBarConnectionChanges(where: BeerBarConnectionChangeWhereInput, orderBy: BeerBarConnectionChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerBarConnectionChange]!
  beerBarConnectionChangeUpvotes(where: BeerBarConnectionChangeUpvoteWhereInput, orderBy: BeerBarConnectionChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerBarConnectionChangeUpvote]!
  beerPrices(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPrice]!
  beerPriceChanges(where: BeerPriceChangeWhereInput, orderBy: BeerPriceChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPriceChange]!
  beerPriceChangeUpvotes(where: BeerPriceChangeUpvoteWhereInput, orderBy: BeerPriceChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BeerPriceChangeUpvote]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
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
  brewery(where: BreweryWhereUniqueInput!): Brewery
  beerBarConnectionChange(where: BeerBarConnectionChangeWhereUniqueInput!): BeerBarConnectionChange
  beerBarConnectionChangeUpvote(where: BeerBarConnectionChangeUpvoteWhereUniqueInput!): BeerBarConnectionChangeUpvote
  beerPrice(where: BeerPriceWhereUniqueInput!): BeerPrice
  beerPriceChange(where: BeerPriceChangeWhereUniqueInput!): BeerPriceChange
  beerPriceChangeUpvote(where: BeerPriceChangeUpvoteWhereUniqueInput!): BeerPriceChangeUpvote
  user(where: UserWhereUniqueInput!): User
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
  breweriesConnection(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BreweryConnection!
  beerBarConnectionChangesConnection(where: BeerBarConnectionChangeWhereInput, orderBy: BeerBarConnectionChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerBarConnectionChangeConnection!
  beerBarConnectionChangeUpvotesConnection(where: BeerBarConnectionChangeUpvoteWhereInput, orderBy: BeerBarConnectionChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerBarConnectionChangeUpvoteConnection!
  beerPricesConnection(where: BeerPriceWhereInput, orderBy: BeerPriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerPriceConnection!
  beerPriceChangesConnection(where: BeerPriceChangeWhereInput, orderBy: BeerPriceChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerPriceChangeConnection!
  beerPriceChangeUpvotesConnection(where: BeerPriceChangeUpvoteWhereInput, orderBy: BeerPriceChangeUpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerPriceChangeUpvoteConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

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
  brewery(where: BrewerySubscriptionWhereInput): BrewerySubscriptionPayload
  beerBarConnectionChange(where: BeerBarConnectionChangeSubscriptionWhereInput): BeerBarConnectionChangeSubscriptionPayload
  beerBarConnectionChangeUpvote(where: BeerBarConnectionChangeUpvoteSubscriptionWhereInput): BeerBarConnectionChangeUpvoteSubscriptionPayload
  beerPrice(where: BeerPriceSubscriptionWhereInput): BeerPriceSubscriptionPayload
  beerPriceChange(where: BeerPriceChangeSubscriptionWhereInput): BeerPriceChangeSubscriptionPayload
  beerPriceChangeUpvote(where: BeerPriceChangeUpvoteSubscriptionWhereInput): BeerPriceChangeUpvoteSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
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
  updatedAt: DateTime!
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

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
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
  updatedAt: DateTime!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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

input UserUpdateDataInput {
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

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutBarChangesInput {
  create: UserCreateWithoutBarChangesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBarChangesDataInput
  upsert: UserUpsertWithoutBarChangesInput
}

input UserUpdateOneWithoutBarChangeUpvotesInput {
  create: UserCreateWithoutBarChangeUpvotesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBarChangeUpvotesDataInput
  upsert: UserUpsertWithoutBarChangeUpvotesInput
}

input UserUpdateOneWithoutBarCommentsInput {
  create: UserCreateWithoutBarCommentsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBarCommentsDataInput
  upsert: UserUpsertWithoutBarCommentsInput
}

input UserUpdateOneWithoutBarRatingsInput {
  create: UserCreateWithoutBarRatingsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBarRatingsDataInput
  upsert: UserUpsertWithoutBarRatingsInput
}

input UserUpdateOneWithoutBeerChangesInput {
  create: UserCreateWithoutBeerChangesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBeerChangesDataInput
  upsert: UserUpsertWithoutBeerChangesInput
}

input UserUpdateOneWithoutBeerChangeUpvotesInput {
  create: UserCreateWithoutBeerChangeUpvotesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBeerChangeUpvotesDataInput
  upsert: UserUpsertWithoutBeerChangeUpvotesInput
}

input UserUpdateOneWithoutBeerCommentsInput {
  create: UserCreateWithoutBeerCommentsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBeerCommentsDataInput
  upsert: UserUpsertWithoutBeerCommentsInput
}

input UserUpdateOneWithoutBeerRatingsInput {
  create: UserCreateWithoutBeerRatingsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBeerRatingsDataInput
  upsert: UserUpsertWithoutBeerRatingsInput
}

input UserUpdateOneWithoutCreatedBarsInput {
  create: UserCreateWithoutCreatedBarsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedBarsDataInput
  upsert: UserUpsertWithoutCreatedBarsInput
}

input UserUpdateOneWithoutCreatedBeersInput {
  create: UserCreateWithoutCreatedBeersInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedBeersDataInput
  upsert: UserUpsertWithoutCreatedBeersInput
}

input UserUpdateOneWithoutPricedBeersInput {
  create: UserCreateWithoutPricedBeersInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
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

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
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
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BarRatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerBarConnectionChangeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerBarConnectionChangeUpvoteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerChangeOrderByInput =   'id_ASC' |
  'id_DESC' |
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
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerCommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerField =   'NAME' |
  'TYPE' |
  'STRONG' |
  'PHOTO' |
  'BREWERY'

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
  'avgRating_ASC' |
  'avgRating_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerPriceChangeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'newPrice_ASC' |
  'newPrice_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerPriceChangeUpvoteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerPriceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'price_ASC' |
  'price_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BeerRatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BreweryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'country_ASC' |
  'country_DESC' |
  'logo_ASC' |
  'logo_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ConnectionChangeType =   'ADD' |
  'REMOVE'

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
  field: String
  newValue: String
  user?: UserCreateOneWithoutBarChangesInput | null
  bar: BarCreateOneWithoutBarChangesInput
  upvotes?: BarChangeUpvoteCreateManyWithoutBarChangeInput | null
}

export interface BarChangeCreateManyWithoutBarInput {
  create?: BarChangeCreateWithoutBarInput[] | BarChangeCreateWithoutBarInput | null
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
}

export interface BarChangeCreateManyWithoutUserInput {
  create?: BarChangeCreateWithoutUserInput[] | BarChangeCreateWithoutUserInput | null
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
}

export interface BarChangeCreateOneWithoutUpvotesInput {
  create?: BarChangeCreateWithoutUpvotesInput | null
  connect?: BarChangeWhereUniqueInput | null
}

export interface BarChangeCreateWithoutBarInput {
  field: String
  newValue: String
  user?: UserCreateOneWithoutBarChangesInput | null
  upvotes?: BarChangeUpvoteCreateManyWithoutBarChangeInput | null
}

export interface BarChangeCreateWithoutUpvotesInput {
  field: String
  newValue: String
  user?: UserCreateOneWithoutBarChangesInput | null
  bar: BarCreateOneWithoutBarChangesInput
}

export interface BarChangeCreateWithoutUserInput {
  field: String
  newValue: String
  bar: BarCreateOneWithoutBarChangesInput
  upvotes?: BarChangeUpvoteCreateManyWithoutBarChangeInput | null
}

export interface BarChangeScalarWhereInput {
  AND?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput | null
  OR?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput | null
  NOT?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  field?: String | null
  field_not?: String | null
  field_in?: String[] | String | null
  field_not_in?: String[] | String | null
  field_lt?: String | null
  field_lte?: String | null
  field_gt?: String | null
  field_gte?: String | null
  field_contains?: String | null
  field_not_contains?: String | null
  field_starts_with?: String | null
  field_not_starts_with?: String | null
  field_ends_with?: String | null
  field_not_ends_with?: String | null
  newValue?: String | null
  newValue_not?: String | null
  newValue_in?: String[] | String | null
  newValue_not_in?: String[] | String | null
  newValue_lt?: String | null
  newValue_lte?: String | null
  newValue_gt?: String | null
  newValue_gte?: String | null
  newValue_contains?: String | null
  newValue_not_contains?: String | null
  newValue_starts_with?: String | null
  newValue_not_starts_with?: String | null
  newValue_ends_with?: String | null
  newValue_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BarChangeSubscriptionWhereInput {
  AND?: BarChangeSubscriptionWhereInput[] | BarChangeSubscriptionWhereInput | null
  OR?: BarChangeSubscriptionWhereInput[] | BarChangeSubscriptionWhereInput | null
  NOT?: BarChangeSubscriptionWhereInput[] | BarChangeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BarChangeWhereInput | null
}

export interface BarChangeUpdateInput {
  field?: String | null
  newValue?: String | null
  user?: UserUpdateOneWithoutBarChangesInput | null
  bar?: BarUpdateOneRequiredWithoutBarChangesInput | null
  upvotes?: BarChangeUpvoteUpdateManyWithoutBarChangeInput | null
}

export interface BarChangeUpdateManyDataInput {
  field?: String | null
  newValue?: String | null
}

export interface BarChangeUpdateManyMutationInput {
  field?: String | null
  newValue?: String | null
}

export interface BarChangeUpdateManyWithoutBarInput {
  create?: BarChangeCreateWithoutBarInput[] | BarChangeCreateWithoutBarInput | null
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  set?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  disconnect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  delete?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  update?: BarChangeUpdateWithWhereUniqueWithoutBarInput[] | BarChangeUpdateWithWhereUniqueWithoutBarInput | null
  updateMany?: BarChangeUpdateManyWithWhereNestedInput[] | BarChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput | null
  upsert?: BarChangeUpsertWithWhereUniqueWithoutBarInput[] | BarChangeUpsertWithWhereUniqueWithoutBarInput | null
}

export interface BarChangeUpdateManyWithoutUserInput {
  create?: BarChangeCreateWithoutUserInput[] | BarChangeCreateWithoutUserInput | null
  connect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  set?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  disconnect?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  delete?: BarChangeWhereUniqueInput[] | BarChangeWhereUniqueInput | null
  update?: BarChangeUpdateWithWhereUniqueWithoutUserInput[] | BarChangeUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BarChangeUpdateManyWithWhereNestedInput[] | BarChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BarChangeScalarWhereInput[] | BarChangeScalarWhereInput | null
  upsert?: BarChangeUpsertWithWhereUniqueWithoutUserInput[] | BarChangeUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BarChangeUpdateManyWithWhereNestedInput {
  where: BarChangeScalarWhereInput
  data: BarChangeUpdateManyDataInput
}

export interface BarChangeUpdateOneRequiredWithoutUpvotesInput {
  create?: BarChangeCreateWithoutUpvotesInput | null
  connect?: BarChangeWhereUniqueInput | null
  update?: BarChangeUpdateWithoutUpvotesDataInput | null
  upsert?: BarChangeUpsertWithoutUpvotesInput | null
}

export interface BarChangeUpdateWithoutBarDataInput {
  field?: String | null
  newValue?: String | null
  user?: UserUpdateOneWithoutBarChangesInput | null
  upvotes?: BarChangeUpvoteUpdateManyWithoutBarChangeInput | null
}

export interface BarChangeUpdateWithoutUpvotesDataInput {
  field?: String | null
  newValue?: String | null
  user?: UserUpdateOneWithoutBarChangesInput | null
  bar?: BarUpdateOneRequiredWithoutBarChangesInput | null
}

export interface BarChangeUpdateWithoutUserDataInput {
  field?: String | null
  newValue?: String | null
  bar?: BarUpdateOneRequiredWithoutBarChangesInput | null
  upvotes?: BarChangeUpvoteUpdateManyWithoutBarChangeInput | null
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
  user?: UserCreateOneWithoutBarChangeUpvotesInput | null
  barChange: BarChangeCreateOneWithoutUpvotesInput
}

export interface BarChangeUpvoteCreateManyWithoutBarChangeInput {
  create?: BarChangeUpvoteCreateWithoutBarChangeInput[] | BarChangeUpvoteCreateWithoutBarChangeInput | null
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
}

export interface BarChangeUpvoteCreateManyWithoutUserInput {
  create?: BarChangeUpvoteCreateWithoutUserInput[] | BarChangeUpvoteCreateWithoutUserInput | null
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
}

export interface BarChangeUpvoteCreateWithoutBarChangeInput {
  user?: UserCreateOneWithoutBarChangeUpvotesInput | null
}

export interface BarChangeUpvoteCreateWithoutUserInput {
  barChange: BarChangeCreateOneWithoutUpvotesInput
}

export interface BarChangeUpvoteScalarWhereInput {
  AND?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput | null
  OR?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput | null
  NOT?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface BarChangeUpvoteSubscriptionWhereInput {
  AND?: BarChangeUpvoteSubscriptionWhereInput[] | BarChangeUpvoteSubscriptionWhereInput | null
  OR?: BarChangeUpvoteSubscriptionWhereInput[] | BarChangeUpvoteSubscriptionWhereInput | null
  NOT?: BarChangeUpvoteSubscriptionWhereInput[] | BarChangeUpvoteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BarChangeUpvoteWhereInput | null
}

export interface BarChangeUpvoteUpdateInput {
  user?: UserUpdateOneWithoutBarChangeUpvotesInput | null
  barChange?: BarChangeUpdateOneRequiredWithoutUpvotesInput | null
}

export interface BarChangeUpvoteUpdateManyWithoutBarChangeInput {
  create?: BarChangeUpvoteCreateWithoutBarChangeInput[] | BarChangeUpvoteCreateWithoutBarChangeInput | null
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  set?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  disconnect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  delete?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  update?: BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput[] | BarChangeUpvoteUpdateWithWhereUniqueWithoutBarChangeInput | null
  deleteMany?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput | null
  upsert?: BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput[] | BarChangeUpvoteUpsertWithWhereUniqueWithoutBarChangeInput | null
}

export interface BarChangeUpvoteUpdateManyWithoutUserInput {
  create?: BarChangeUpvoteCreateWithoutUserInput[] | BarChangeUpvoteCreateWithoutUserInput | null
  connect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  set?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  disconnect?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  delete?: BarChangeUpvoteWhereUniqueInput[] | BarChangeUpvoteWhereUniqueInput | null
  update?: BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput[] | BarChangeUpvoteUpdateWithWhereUniqueWithoutUserInput | null
  deleteMany?: BarChangeUpvoteScalarWhereInput[] | BarChangeUpvoteScalarWhereInput | null
  upsert?: BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput[] | BarChangeUpvoteUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BarChangeUpvoteUpdateWithoutBarChangeDataInput {
  user?: UserUpdateOneWithoutBarChangeUpvotesInput | null
}

export interface BarChangeUpvoteUpdateWithoutUserDataInput {
  barChange?: BarChangeUpdateOneRequiredWithoutUpvotesInput | null
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
  AND?: BarChangeUpvoteWhereInput[] | BarChangeUpvoteWhereInput | null
  OR?: BarChangeUpvoteWhereInput[] | BarChangeUpvoteWhereInput | null
  NOT?: BarChangeUpvoteWhereInput[] | BarChangeUpvoteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  user?: UserWhereInput | null
  barChange?: BarChangeWhereInput | null
}

export interface BarChangeUpvoteWhereUniqueInput {
  id?: ID_Input | null
}

export interface BarChangeWhereInput {
  AND?: BarChangeWhereInput[] | BarChangeWhereInput | null
  OR?: BarChangeWhereInput[] | BarChangeWhereInput | null
  NOT?: BarChangeWhereInput[] | BarChangeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  field?: String | null
  field_not?: String | null
  field_in?: String[] | String | null
  field_not_in?: String[] | String | null
  field_lt?: String | null
  field_lte?: String | null
  field_gt?: String | null
  field_gte?: String | null
  field_contains?: String | null
  field_not_contains?: String | null
  field_starts_with?: String | null
  field_not_starts_with?: String | null
  field_ends_with?: String | null
  field_not_ends_with?: String | null
  newValue?: String | null
  newValue_not?: String | null
  newValue_in?: String[] | String | null
  newValue_not_in?: String[] | String | null
  newValue_lt?: String | null
  newValue_lte?: String | null
  newValue_gt?: String | null
  newValue_gte?: String | null
  newValue_contains?: String | null
  newValue_not_contains?: String | null
  newValue_starts_with?: String | null
  newValue_not_starts_with?: String | null
  newValue_ends_with?: String | null
  newValue_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  bar?: BarWhereInput | null
  upvotes_every?: BarChangeUpvoteWhereInput | null
  upvotes_some?: BarChangeUpvoteWhereInput | null
  upvotes_none?: BarChangeUpvoteWhereInput | null
}

export interface BarChangeWhereUniqueInput {
  id?: ID_Input | null
}

export interface BarCommentCreateInput {
  comment: String
  bar: BarCreateOneWithoutBarCommentsInput
  user?: UserCreateOneWithoutBarCommentsInput | null
}

export interface BarCommentCreateManyWithoutBarInput {
  create?: BarCommentCreateWithoutBarInput[] | BarCommentCreateWithoutBarInput | null
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
}

export interface BarCommentCreateManyWithoutUserInput {
  create?: BarCommentCreateWithoutUserInput[] | BarCommentCreateWithoutUserInput | null
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
}

export interface BarCommentCreateWithoutBarInput {
  comment: String
  user?: UserCreateOneWithoutBarCommentsInput | null
}

export interface BarCommentCreateWithoutUserInput {
  comment: String
  bar: BarCreateOneWithoutBarCommentsInput
}

export interface BarCommentScalarWhereInput {
  AND?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput | null
  OR?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput | null
  NOT?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  comment?: String | null
  comment_not?: String | null
  comment_in?: String[] | String | null
  comment_not_in?: String[] | String | null
  comment_lt?: String | null
  comment_lte?: String | null
  comment_gt?: String | null
  comment_gte?: String | null
  comment_contains?: String | null
  comment_not_contains?: String | null
  comment_starts_with?: String | null
  comment_not_starts_with?: String | null
  comment_ends_with?: String | null
  comment_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BarCommentSubscriptionWhereInput {
  AND?: BarCommentSubscriptionWhereInput[] | BarCommentSubscriptionWhereInput | null
  OR?: BarCommentSubscriptionWhereInput[] | BarCommentSubscriptionWhereInput | null
  NOT?: BarCommentSubscriptionWhereInput[] | BarCommentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BarCommentWhereInput | null
}

export interface BarCommentUpdateInput {
  comment?: String | null
  bar?: BarUpdateOneRequiredWithoutBarCommentsInput | null
  user?: UserUpdateOneWithoutBarCommentsInput | null
}

export interface BarCommentUpdateManyDataInput {
  comment?: String | null
}

export interface BarCommentUpdateManyMutationInput {
  comment?: String | null
}

export interface BarCommentUpdateManyWithoutBarInput {
  create?: BarCommentCreateWithoutBarInput[] | BarCommentCreateWithoutBarInput | null
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  set?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  disconnect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  delete?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  update?: BarCommentUpdateWithWhereUniqueWithoutBarInput[] | BarCommentUpdateWithWhereUniqueWithoutBarInput | null
  updateMany?: BarCommentUpdateManyWithWhereNestedInput[] | BarCommentUpdateManyWithWhereNestedInput | null
  deleteMany?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput | null
  upsert?: BarCommentUpsertWithWhereUniqueWithoutBarInput[] | BarCommentUpsertWithWhereUniqueWithoutBarInput | null
}

export interface BarCommentUpdateManyWithoutUserInput {
  create?: BarCommentCreateWithoutUserInput[] | BarCommentCreateWithoutUserInput | null
  connect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  set?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  disconnect?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  delete?: BarCommentWhereUniqueInput[] | BarCommentWhereUniqueInput | null
  update?: BarCommentUpdateWithWhereUniqueWithoutUserInput[] | BarCommentUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BarCommentUpdateManyWithWhereNestedInput[] | BarCommentUpdateManyWithWhereNestedInput | null
  deleteMany?: BarCommentScalarWhereInput[] | BarCommentScalarWhereInput | null
  upsert?: BarCommentUpsertWithWhereUniqueWithoutUserInput[] | BarCommentUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BarCommentUpdateManyWithWhereNestedInput {
  where: BarCommentScalarWhereInput
  data: BarCommentUpdateManyDataInput
}

export interface BarCommentUpdateWithoutBarDataInput {
  comment?: String | null
  user?: UserUpdateOneWithoutBarCommentsInput | null
}

export interface BarCommentUpdateWithoutUserDataInput {
  comment?: String | null
  bar?: BarUpdateOneRequiredWithoutBarCommentsInput | null
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
  AND?: BarCommentWhereInput[] | BarCommentWhereInput | null
  OR?: BarCommentWhereInput[] | BarCommentWhereInput | null
  NOT?: BarCommentWhereInput[] | BarCommentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  comment?: String | null
  comment_not?: String | null
  comment_in?: String[] | String | null
  comment_not_in?: String[] | String | null
  comment_lt?: String | null
  comment_lte?: String | null
  comment_gt?: String | null
  comment_gte?: String | null
  comment_contains?: String | null
  comment_not_contains?: String | null
  comment_starts_with?: String | null
  comment_not_starts_with?: String | null
  comment_ends_with?: String | null
  comment_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  bar?: BarWhereInput | null
  user?: UserWhereInput | null
}

export interface BarCommentWhereUniqueInput {
  id?: ID_Input | null
}

export interface BarCreateInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateManyWithoutBeersInput {
  create?: BarCreateWithoutBeersInput[] | BarCreateWithoutBeersInput | null
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
}

export interface BarCreateManyWithoutCreatedByInput {
  create?: BarCreateWithoutCreatedByInput[] | BarCreateWithoutCreatedByInput | null
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
}

export interface BarCreateManyWithoutLikedByInput {
  create?: BarCreateWithoutLikedByInput[] | BarCreateWithoutLikedByInput | null
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
}

export interface BarCreateOneWithoutBarChangesInput {
  create?: BarCreateWithoutBarChangesInput | null
  connect?: BarWhereUniqueInput | null
}

export interface BarCreateOneWithoutBarCommentsInput {
  create?: BarCreateWithoutBarCommentsInput | null
  connect?: BarWhereUniqueInput | null
}

export interface BarCreateOneWithoutBarRatingInput {
  create?: BarCreateWithoutBarRatingInput | null
  connect?: BarWhereUniqueInput | null
}

export interface BarCreateOneWithoutBeerConnectionsInput {
  create?: BarCreateWithoutBeerConnectionsInput | null
  connect?: BarWhereUniqueInput | null
}

export interface BarCreateOneWithoutBeerPricesInput {
  create?: BarCreateWithoutBeerPricesInput | null
  connect?: BarWhereUniqueInput | null
}

export interface BarCreatephotosInput {
  set?: String[] | String | null
}

export interface BarCreateWithoutBarChangesInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutBarCommentsInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutBarRatingInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutBeerConnectionsInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutBeerPricesInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutBeersInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutCreatedByInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  likedBy?: UserCreateManyWithoutLikedBarsInput | null
}

export interface BarCreateWithoutLikedByInput {
  name: String
  address: String
  lat: String
  long: String
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarCreatephotosInput | null
  beers?: BeerCreateManyWithoutBarsInput | null
  barRating?: BarRatingCreateManyWithoutBarInput | null
  barComments?: BarCommentCreateManyWithoutBarInput | null
  barChanges?: BarChangeCreateManyWithoutBarInput | null
  beerPrices?: BeerPriceCreateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeCreateManyWithoutBarInput | null
  createdBy?: UserCreateOneWithoutCreatedBarsInput | null
}

export interface BarRatingCreateInput {
  rating: Float
  user?: UserCreateOneWithoutBarRatingsInput | null
  bar: BarCreateOneWithoutBarRatingInput
}

export interface BarRatingCreateManyWithoutBarInput {
  create?: BarRatingCreateWithoutBarInput[] | BarRatingCreateWithoutBarInput | null
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
}

export interface BarRatingCreateManyWithoutUserInput {
  create?: BarRatingCreateWithoutUserInput[] | BarRatingCreateWithoutUserInput | null
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
}

export interface BarRatingCreateWithoutBarInput {
  rating: Float
  user?: UserCreateOneWithoutBarRatingsInput | null
}

export interface BarRatingCreateWithoutUserInput {
  rating: Float
  bar: BarCreateOneWithoutBarRatingInput
}

export interface BarRatingScalarWhereInput {
  AND?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput | null
  OR?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput | null
  NOT?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  rating?: Float | null
  rating_not?: Float | null
  rating_in?: Float[] | Float | null
  rating_not_in?: Float[] | Float | null
  rating_lt?: Float | null
  rating_lte?: Float | null
  rating_gt?: Float | null
  rating_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BarRatingSubscriptionWhereInput {
  AND?: BarRatingSubscriptionWhereInput[] | BarRatingSubscriptionWhereInput | null
  OR?: BarRatingSubscriptionWhereInput[] | BarRatingSubscriptionWhereInput | null
  NOT?: BarRatingSubscriptionWhereInput[] | BarRatingSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BarRatingWhereInput | null
}

export interface BarRatingUpdateInput {
  rating?: Float | null
  user?: UserUpdateOneWithoutBarRatingsInput | null
  bar?: BarUpdateOneRequiredWithoutBarRatingInput | null
}

export interface BarRatingUpdateManyDataInput {
  rating?: Float | null
}

export interface BarRatingUpdateManyMutationInput {
  rating?: Float | null
}

export interface BarRatingUpdateManyWithoutBarInput {
  create?: BarRatingCreateWithoutBarInput[] | BarRatingCreateWithoutBarInput | null
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  set?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  disconnect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  delete?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  update?: BarRatingUpdateWithWhereUniqueWithoutBarInput[] | BarRatingUpdateWithWhereUniqueWithoutBarInput | null
  updateMany?: BarRatingUpdateManyWithWhereNestedInput[] | BarRatingUpdateManyWithWhereNestedInput | null
  deleteMany?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput | null
  upsert?: BarRatingUpsertWithWhereUniqueWithoutBarInput[] | BarRatingUpsertWithWhereUniqueWithoutBarInput | null
}

export interface BarRatingUpdateManyWithoutUserInput {
  create?: BarRatingCreateWithoutUserInput[] | BarRatingCreateWithoutUserInput | null
  connect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  set?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  disconnect?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  delete?: BarRatingWhereUniqueInput[] | BarRatingWhereUniqueInput | null
  update?: BarRatingUpdateWithWhereUniqueWithoutUserInput[] | BarRatingUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BarRatingUpdateManyWithWhereNestedInput[] | BarRatingUpdateManyWithWhereNestedInput | null
  deleteMany?: BarRatingScalarWhereInput[] | BarRatingScalarWhereInput | null
  upsert?: BarRatingUpsertWithWhereUniqueWithoutUserInput[] | BarRatingUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BarRatingUpdateManyWithWhereNestedInput {
  where: BarRatingScalarWhereInput
  data: BarRatingUpdateManyDataInput
}

export interface BarRatingUpdateWithoutBarDataInput {
  rating?: Float | null
  user?: UserUpdateOneWithoutBarRatingsInput | null
}

export interface BarRatingUpdateWithoutUserDataInput {
  rating?: Float | null
  bar?: BarUpdateOneRequiredWithoutBarRatingInput | null
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
  AND?: BarRatingWhereInput[] | BarRatingWhereInput | null
  OR?: BarRatingWhereInput[] | BarRatingWhereInput | null
  NOT?: BarRatingWhereInput[] | BarRatingWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  rating?: Float | null
  rating_not?: Float | null
  rating_in?: Float[] | Float | null
  rating_not_in?: Float[] | Float | null
  rating_lt?: Float | null
  rating_lte?: Float | null
  rating_gt?: Float | null
  rating_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  bar?: BarWhereInput | null
}

export interface BarRatingWhereUniqueInput {
  id?: ID_Input | null
}

export interface BarScalarWhereInput {
  AND?: BarScalarWhereInput[] | BarScalarWhereInput | null
  OR?: BarScalarWhereInput[] | BarScalarWhereInput | null
  NOT?: BarScalarWhereInput[] | BarScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  lat?: String | null
  lat_not?: String | null
  lat_in?: String[] | String | null
  lat_not_in?: String[] | String | null
  lat_lt?: String | null
  lat_lte?: String | null
  lat_gt?: String | null
  lat_gte?: String | null
  lat_contains?: String | null
  lat_not_contains?: String | null
  lat_starts_with?: String | null
  lat_not_starts_with?: String | null
  lat_ends_with?: String | null
  lat_not_ends_with?: String | null
  long?: String | null
  long_not?: String | null
  long_in?: String[] | String | null
  long_not_in?: String[] | String | null
  long_lt?: String | null
  long_lte?: String | null
  long_gt?: String | null
  long_gte?: String | null
  long_contains?: String | null
  long_not_contains?: String | null
  long_starts_with?: String | null
  long_not_starts_with?: String | null
  long_ends_with?: String | null
  long_not_ends_with?: String | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  openTime?: DateTime | null
  openTime_not?: DateTime | null
  openTime_in?: DateTime[] | DateTime | null
  openTime_not_in?: DateTime[] | DateTime | null
  openTime_lt?: DateTime | null
  openTime_lte?: DateTime | null
  openTime_gt?: DateTime | null
  openTime_gte?: DateTime | null
  closeTime?: DateTime | null
  closeTime_not?: DateTime | null
  closeTime_in?: DateTime[] | DateTime | null
  closeTime_not_in?: DateTime[] | DateTime | null
  closeTime_lt?: DateTime | null
  closeTime_lte?: DateTime | null
  closeTime_gt?: DateTime | null
  closeTime_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BarSubscriptionWhereInput {
  AND?: BarSubscriptionWhereInput[] | BarSubscriptionWhereInput | null
  OR?: BarSubscriptionWhereInput[] | BarSubscriptionWhereInput | null
  NOT?: BarSubscriptionWhereInput[] | BarSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BarWhereInput | null
}

export interface BarUpdateInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateManyDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
}

export interface BarUpdateManyMutationInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
}

export interface BarUpdateManyWithoutBeersInput {
  create?: BarCreateWithoutBeersInput[] | BarCreateWithoutBeersInput | null
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  set?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  update?: BarUpdateWithWhereUniqueWithoutBeersInput[] | BarUpdateWithWhereUniqueWithoutBeersInput | null
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput | null
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput | null
  upsert?: BarUpsertWithWhereUniqueWithoutBeersInput[] | BarUpsertWithWhereUniqueWithoutBeersInput | null
}

export interface BarUpdateManyWithoutCreatedByInput {
  create?: BarCreateWithoutCreatedByInput[] | BarCreateWithoutCreatedByInput | null
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  set?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  update?: BarUpdateWithWhereUniqueWithoutCreatedByInput[] | BarUpdateWithWhereUniqueWithoutCreatedByInput | null
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput | null
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput | null
  upsert?: BarUpsertWithWhereUniqueWithoutCreatedByInput[] | BarUpsertWithWhereUniqueWithoutCreatedByInput | null
}

export interface BarUpdateManyWithoutLikedByInput {
  create?: BarCreateWithoutLikedByInput[] | BarCreateWithoutLikedByInput | null
  connect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  set?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  disconnect?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  delete?: BarWhereUniqueInput[] | BarWhereUniqueInput | null
  update?: BarUpdateWithWhereUniqueWithoutLikedByInput[] | BarUpdateWithWhereUniqueWithoutLikedByInput | null
  updateMany?: BarUpdateManyWithWhereNestedInput[] | BarUpdateManyWithWhereNestedInput | null
  deleteMany?: BarScalarWhereInput[] | BarScalarWhereInput | null
  upsert?: BarUpsertWithWhereUniqueWithoutLikedByInput[] | BarUpsertWithWhereUniqueWithoutLikedByInput | null
}

export interface BarUpdateManyWithWhereNestedInput {
  where: BarScalarWhereInput
  data: BarUpdateManyDataInput
}

export interface BarUpdateOneRequiredWithoutBarChangesInput {
  create?: BarCreateWithoutBarChangesInput | null
  connect?: BarWhereUniqueInput | null
  update?: BarUpdateWithoutBarChangesDataInput | null
  upsert?: BarUpsertWithoutBarChangesInput | null
}

export interface BarUpdateOneRequiredWithoutBarCommentsInput {
  create?: BarCreateWithoutBarCommentsInput | null
  connect?: BarWhereUniqueInput | null
  update?: BarUpdateWithoutBarCommentsDataInput | null
  upsert?: BarUpsertWithoutBarCommentsInput | null
}

export interface BarUpdateOneRequiredWithoutBarRatingInput {
  create?: BarCreateWithoutBarRatingInput | null
  connect?: BarWhereUniqueInput | null
  update?: BarUpdateWithoutBarRatingDataInput | null
  upsert?: BarUpsertWithoutBarRatingInput | null
}

export interface BarUpdateOneRequiredWithoutBeerConnectionsInput {
  create?: BarCreateWithoutBeerConnectionsInput | null
  connect?: BarWhereUniqueInput | null
  update?: BarUpdateWithoutBeerConnectionsDataInput | null
  upsert?: BarUpsertWithoutBeerConnectionsInput | null
}

export interface BarUpdateOneRequiredWithoutBeerPricesInput {
  create?: BarCreateWithoutBeerPricesInput | null
  connect?: BarWhereUniqueInput | null
  update?: BarUpdateWithoutBeerPricesDataInput | null
  upsert?: BarUpsertWithoutBeerPricesInput | null
}

export interface BarUpdatephotosInput {
  set?: String[] | String | null
}

export interface BarUpdateWithoutBarChangesDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutBarCommentsDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutBarRatingDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutBeerConnectionsDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutBeerPricesDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutBeersDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutCreatedByDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  likedBy?: UserUpdateManyWithoutLikedBarsInput | null
}

export interface BarUpdateWithoutLikedByDataInput {
  name?: String | null
  address?: String | null
  lat?: String | null
  long?: String | null
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos?: BarUpdatephotosInput | null
  beers?: BeerUpdateManyWithoutBarsInput | null
  barRating?: BarRatingUpdateManyWithoutBarInput | null
  barComments?: BarCommentUpdateManyWithoutBarInput | null
  barChanges?: BarChangeUpdateManyWithoutBarInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBarInput | null
  beerConnections?: BeerBarConnectionChangeUpdateManyWithoutBarInput | null
  createdBy?: UserUpdateOneWithoutCreatedBarsInput | null
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

export interface BarUpsertWithoutBeerConnectionsInput {
  update: BarUpdateWithoutBeerConnectionsDataInput
  create: BarCreateWithoutBeerConnectionsInput
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
  AND?: BarWhereInput[] | BarWhereInput | null
  OR?: BarWhereInput[] | BarWhereInput | null
  NOT?: BarWhereInput[] | BarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  lat?: String | null
  lat_not?: String | null
  lat_in?: String[] | String | null
  lat_not_in?: String[] | String | null
  lat_lt?: String | null
  lat_lte?: String | null
  lat_gt?: String | null
  lat_gte?: String | null
  lat_contains?: String | null
  lat_not_contains?: String | null
  lat_starts_with?: String | null
  lat_not_starts_with?: String | null
  lat_ends_with?: String | null
  lat_not_ends_with?: String | null
  long?: String | null
  long_not?: String | null
  long_in?: String[] | String | null
  long_not_in?: String[] | String | null
  long_lt?: String | null
  long_lte?: String | null
  long_gt?: String | null
  long_gte?: String | null
  long_contains?: String | null
  long_not_contains?: String | null
  long_starts_with?: String | null
  long_not_starts_with?: String | null
  long_ends_with?: String | null
  long_not_ends_with?: String | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  openTime?: DateTime | null
  openTime_not?: DateTime | null
  openTime_in?: DateTime[] | DateTime | null
  openTime_not_in?: DateTime[] | DateTime | null
  openTime_lt?: DateTime | null
  openTime_lte?: DateTime | null
  openTime_gt?: DateTime | null
  openTime_gte?: DateTime | null
  closeTime?: DateTime | null
  closeTime_not?: DateTime | null
  closeTime_in?: DateTime[] | DateTime | null
  closeTime_not_in?: DateTime[] | DateTime | null
  closeTime_lt?: DateTime | null
  closeTime_lte?: DateTime | null
  closeTime_gt?: DateTime | null
  closeTime_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  beers_every?: BeerWhereInput | null
  beers_some?: BeerWhereInput | null
  beers_none?: BeerWhereInput | null
  barRating_every?: BarRatingWhereInput | null
  barRating_some?: BarRatingWhereInput | null
  barRating_none?: BarRatingWhereInput | null
  barComments_every?: BarCommentWhereInput | null
  barComments_some?: BarCommentWhereInput | null
  barComments_none?: BarCommentWhereInput | null
  barChanges_every?: BarChangeWhereInput | null
  barChanges_some?: BarChangeWhereInput | null
  barChanges_none?: BarChangeWhereInput | null
  beerPrices_every?: BeerPriceWhereInput | null
  beerPrices_some?: BeerPriceWhereInput | null
  beerPrices_none?: BeerPriceWhereInput | null
  beerConnections_every?: BeerBarConnectionChangeWhereInput | null
  beerConnections_some?: BeerBarConnectionChangeWhereInput | null
  beerConnections_none?: BeerBarConnectionChangeWhereInput | null
  createdBy?: UserWhereInput | null
  likedBy_every?: UserWhereInput | null
  likedBy_some?: UserWhereInput | null
  likedBy_none?: UserWhereInput | null
}

export interface BarWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerBarConnectionChangeCreateInput {
  type: ConnectionChangeType
  user?: UserCreateOneInput | null
  beer: BeerCreateOneWithoutBarConnectionsInput
  bar: BarCreateOneWithoutBeerConnectionsInput
  upvotes?: BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeCreateManyWithoutBarInput {
  create?: BeerBarConnectionChangeCreateWithoutBarInput[] | BeerBarConnectionChangeCreateWithoutBarInput | null
  connect?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
}

export interface BeerBarConnectionChangeCreateManyWithoutBeerInput {
  create?: BeerBarConnectionChangeCreateWithoutBeerInput[] | BeerBarConnectionChangeCreateWithoutBeerInput | null
  connect?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
}

export interface BeerBarConnectionChangeCreateOneWithoutUpvotesInput {
  create?: BeerBarConnectionChangeCreateWithoutUpvotesInput | null
  connect?: BeerBarConnectionChangeWhereUniqueInput | null
}

export interface BeerBarConnectionChangeCreateWithoutBarInput {
  type: ConnectionChangeType
  user?: UserCreateOneInput | null
  beer: BeerCreateOneWithoutBarConnectionsInput
  upvotes?: BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeCreateWithoutBeerInput {
  type: ConnectionChangeType
  user?: UserCreateOneInput | null
  bar: BarCreateOneWithoutBeerConnectionsInput
  upvotes?: BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeCreateWithoutUpvotesInput {
  type: ConnectionChangeType
  user?: UserCreateOneInput | null
  beer: BeerCreateOneWithoutBarConnectionsInput
  bar: BarCreateOneWithoutBeerConnectionsInput
}

export interface BeerBarConnectionChangeScalarWhereInput {
  AND?: BeerBarConnectionChangeScalarWhereInput[] | BeerBarConnectionChangeScalarWhereInput | null
  OR?: BeerBarConnectionChangeScalarWhereInput[] | BeerBarConnectionChangeScalarWhereInput | null
  NOT?: BeerBarConnectionChangeScalarWhereInput[] | BeerBarConnectionChangeScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  type?: ConnectionChangeType | null
  type_not?: ConnectionChangeType | null
  type_in?: ConnectionChangeType[] | ConnectionChangeType | null
  type_not_in?: ConnectionChangeType[] | ConnectionChangeType | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerBarConnectionChangeSubscriptionWhereInput {
  AND?: BeerBarConnectionChangeSubscriptionWhereInput[] | BeerBarConnectionChangeSubscriptionWhereInput | null
  OR?: BeerBarConnectionChangeSubscriptionWhereInput[] | BeerBarConnectionChangeSubscriptionWhereInput | null
  NOT?: BeerBarConnectionChangeSubscriptionWhereInput[] | BeerBarConnectionChangeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerBarConnectionChangeWhereInput | null
}

export interface BeerBarConnectionChangeUpdateInput {
  type?: ConnectionChangeType | null
  user?: UserUpdateOneInput | null
  beer?: BeerUpdateOneRequiredWithoutBarConnectionsInput | null
  bar?: BarUpdateOneRequiredWithoutBeerConnectionsInput | null
  upvotes?: BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeUpdateManyDataInput {
  type?: ConnectionChangeType | null
}

export interface BeerBarConnectionChangeUpdateManyMutationInput {
  type?: ConnectionChangeType | null
}

export interface BeerBarConnectionChangeUpdateManyWithoutBarInput {
  create?: BeerBarConnectionChangeCreateWithoutBarInput[] | BeerBarConnectionChangeCreateWithoutBarInput | null
  connect?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  set?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  disconnect?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  delete?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  update?: BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBarInput[] | BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBarInput | null
  updateMany?: BeerBarConnectionChangeUpdateManyWithWhereNestedInput[] | BeerBarConnectionChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerBarConnectionChangeScalarWhereInput[] | BeerBarConnectionChangeScalarWhereInput | null
  upsert?: BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBarInput[] | BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBarInput | null
}

export interface BeerBarConnectionChangeUpdateManyWithoutBeerInput {
  create?: BeerBarConnectionChangeCreateWithoutBeerInput[] | BeerBarConnectionChangeCreateWithoutBeerInput | null
  connect?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  set?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  disconnect?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  delete?: BeerBarConnectionChangeWhereUniqueInput[] | BeerBarConnectionChangeWhereUniqueInput | null
  update?: BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBeerInput[] | BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBeerInput | null
  updateMany?: BeerBarConnectionChangeUpdateManyWithWhereNestedInput[] | BeerBarConnectionChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerBarConnectionChangeScalarWhereInput[] | BeerBarConnectionChangeScalarWhereInput | null
  upsert?: BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBeerInput[] | BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBeerInput | null
}

export interface BeerBarConnectionChangeUpdateManyWithWhereNestedInput {
  where: BeerBarConnectionChangeScalarWhereInput
  data: BeerBarConnectionChangeUpdateManyDataInput
}

export interface BeerBarConnectionChangeUpdateOneRequiredWithoutUpvotesInput {
  create?: BeerBarConnectionChangeCreateWithoutUpvotesInput | null
  connect?: BeerBarConnectionChangeWhereUniqueInput | null
  update?: BeerBarConnectionChangeUpdateWithoutUpvotesDataInput | null
  upsert?: BeerBarConnectionChangeUpsertWithoutUpvotesInput | null
}

export interface BeerBarConnectionChangeUpdateWithoutBarDataInput {
  type?: ConnectionChangeType | null
  user?: UserUpdateOneInput | null
  beer?: BeerUpdateOneRequiredWithoutBarConnectionsInput | null
  upvotes?: BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeUpdateWithoutBeerDataInput {
  type?: ConnectionChangeType | null
  user?: UserUpdateOneInput | null
  bar?: BarUpdateOneRequiredWithoutBeerConnectionsInput | null
  upvotes?: BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeUpdateWithoutUpvotesDataInput {
  type?: ConnectionChangeType | null
  user?: UserUpdateOneInput | null
  beer?: BeerUpdateOneRequiredWithoutBarConnectionsInput | null
  bar?: BarUpdateOneRequiredWithoutBeerConnectionsInput | null
}

export interface BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBarInput {
  where: BeerBarConnectionChangeWhereUniqueInput
  data: BeerBarConnectionChangeUpdateWithoutBarDataInput
}

export interface BeerBarConnectionChangeUpdateWithWhereUniqueWithoutBeerInput {
  where: BeerBarConnectionChangeWhereUniqueInput
  data: BeerBarConnectionChangeUpdateWithoutBeerDataInput
}

export interface BeerBarConnectionChangeUpsertWithoutUpvotesInput {
  update: BeerBarConnectionChangeUpdateWithoutUpvotesDataInput
  create: BeerBarConnectionChangeCreateWithoutUpvotesInput
}

export interface BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBarInput {
  where: BeerBarConnectionChangeWhereUniqueInput
  update: BeerBarConnectionChangeUpdateWithoutBarDataInput
  create: BeerBarConnectionChangeCreateWithoutBarInput
}

export interface BeerBarConnectionChangeUpsertWithWhereUniqueWithoutBeerInput {
  where: BeerBarConnectionChangeWhereUniqueInput
  update: BeerBarConnectionChangeUpdateWithoutBeerDataInput
  create: BeerBarConnectionChangeCreateWithoutBeerInput
}

export interface BeerBarConnectionChangeUpvoteCreateInput {
  user?: UserCreateOneInput | null
  beerBarConnectionChange: BeerBarConnectionChangeCreateOneWithoutUpvotesInput
}

export interface BeerBarConnectionChangeUpvoteCreateManyWithoutBeerBarConnectionChangeInput {
  create?: BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput[] | BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput | null
  connect?: BeerBarConnectionChangeUpvoteWhereUniqueInput[] | BeerBarConnectionChangeUpvoteWhereUniqueInput | null
}

export interface BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput {
  user?: UserCreateOneInput | null
}

export interface BeerBarConnectionChangeUpvoteScalarWhereInput {
  AND?: BeerBarConnectionChangeUpvoteScalarWhereInput[] | BeerBarConnectionChangeUpvoteScalarWhereInput | null
  OR?: BeerBarConnectionChangeUpvoteScalarWhereInput[] | BeerBarConnectionChangeUpvoteScalarWhereInput | null
  NOT?: BeerBarConnectionChangeUpvoteScalarWhereInput[] | BeerBarConnectionChangeUpvoteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface BeerBarConnectionChangeUpvoteSubscriptionWhereInput {
  AND?: BeerBarConnectionChangeUpvoteSubscriptionWhereInput[] | BeerBarConnectionChangeUpvoteSubscriptionWhereInput | null
  OR?: BeerBarConnectionChangeUpvoteSubscriptionWhereInput[] | BeerBarConnectionChangeUpvoteSubscriptionWhereInput | null
  NOT?: BeerBarConnectionChangeUpvoteSubscriptionWhereInput[] | BeerBarConnectionChangeUpvoteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerBarConnectionChangeUpvoteWhereInput | null
}

export interface BeerBarConnectionChangeUpvoteUpdateInput {
  user?: UserUpdateOneInput | null
  beerBarConnectionChange?: BeerBarConnectionChangeUpdateOneRequiredWithoutUpvotesInput | null
}

export interface BeerBarConnectionChangeUpvoteUpdateManyWithoutBeerBarConnectionChangeInput {
  create?: BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput[] | BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput | null
  connect?: BeerBarConnectionChangeUpvoteWhereUniqueInput[] | BeerBarConnectionChangeUpvoteWhereUniqueInput | null
  set?: BeerBarConnectionChangeUpvoteWhereUniqueInput[] | BeerBarConnectionChangeUpvoteWhereUniqueInput | null
  disconnect?: BeerBarConnectionChangeUpvoteWhereUniqueInput[] | BeerBarConnectionChangeUpvoteWhereUniqueInput | null
  delete?: BeerBarConnectionChangeUpvoteWhereUniqueInput[] | BeerBarConnectionChangeUpvoteWhereUniqueInput | null
  update?: BeerBarConnectionChangeUpvoteUpdateWithWhereUniqueWithoutBeerBarConnectionChangeInput[] | BeerBarConnectionChangeUpvoteUpdateWithWhereUniqueWithoutBeerBarConnectionChangeInput | null
  deleteMany?: BeerBarConnectionChangeUpvoteScalarWhereInput[] | BeerBarConnectionChangeUpvoteScalarWhereInput | null
  upsert?: BeerBarConnectionChangeUpvoteUpsertWithWhereUniqueWithoutBeerBarConnectionChangeInput[] | BeerBarConnectionChangeUpvoteUpsertWithWhereUniqueWithoutBeerBarConnectionChangeInput | null
}

export interface BeerBarConnectionChangeUpvoteUpdateWithoutBeerBarConnectionChangeDataInput {
  user?: UserUpdateOneInput | null
}

export interface BeerBarConnectionChangeUpvoteUpdateWithWhereUniqueWithoutBeerBarConnectionChangeInput {
  where: BeerBarConnectionChangeUpvoteWhereUniqueInput
  data: BeerBarConnectionChangeUpvoteUpdateWithoutBeerBarConnectionChangeDataInput
}

export interface BeerBarConnectionChangeUpvoteUpsertWithWhereUniqueWithoutBeerBarConnectionChangeInput {
  where: BeerBarConnectionChangeUpvoteWhereUniqueInput
  update: BeerBarConnectionChangeUpvoteUpdateWithoutBeerBarConnectionChangeDataInput
  create: BeerBarConnectionChangeUpvoteCreateWithoutBeerBarConnectionChangeInput
}

export interface BeerBarConnectionChangeUpvoteWhereInput {
  AND?: BeerBarConnectionChangeUpvoteWhereInput[] | BeerBarConnectionChangeUpvoteWhereInput | null
  OR?: BeerBarConnectionChangeUpvoteWhereInput[] | BeerBarConnectionChangeUpvoteWhereInput | null
  NOT?: BeerBarConnectionChangeUpvoteWhereInput[] | BeerBarConnectionChangeUpvoteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  user?: UserWhereInput | null
  beerBarConnectionChange?: BeerBarConnectionChangeWhereInput | null
}

export interface BeerBarConnectionChangeUpvoteWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerBarConnectionChangeWhereInput {
  AND?: BeerBarConnectionChangeWhereInput[] | BeerBarConnectionChangeWhereInput | null
  OR?: BeerBarConnectionChangeWhereInput[] | BeerBarConnectionChangeWhereInput | null
  NOT?: BeerBarConnectionChangeWhereInput[] | BeerBarConnectionChangeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  type?: ConnectionChangeType | null
  type_not?: ConnectionChangeType | null
  type_in?: ConnectionChangeType[] | ConnectionChangeType | null
  type_not_in?: ConnectionChangeType[] | ConnectionChangeType | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  beer?: BeerWhereInput | null
  bar?: BarWhereInput | null
  upvotes_every?: BeerBarConnectionChangeUpvoteWhereInput | null
  upvotes_some?: BeerBarConnectionChangeUpvoteWhereInput | null
  upvotes_none?: BeerBarConnectionChangeUpvoteWhereInput | null
}

export interface BeerBarConnectionChangeWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerChangeCreateInput {
  field: BeerField
  newValue: String
  user?: UserCreateOneWithoutBeerChangesInput | null
  beer: BeerCreateOneWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteCreateManyWithoutBeerChangeInput | null
}

export interface BeerChangeCreateManyWithoutBeerInput {
  create?: BeerChangeCreateWithoutBeerInput[] | BeerChangeCreateWithoutBeerInput | null
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
}

export interface BeerChangeCreateManyWithoutUserInput {
  create?: BeerChangeCreateWithoutUserInput[] | BeerChangeCreateWithoutUserInput | null
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
}

export interface BeerChangeCreateOneWithoutUpvotesInput {
  create?: BeerChangeCreateWithoutUpvotesInput | null
  connect?: BeerChangeWhereUniqueInput | null
}

export interface BeerChangeCreateWithoutBeerInput {
  field: BeerField
  newValue: String
  user?: UserCreateOneWithoutBeerChangesInput | null
  upvotes?: BeerChangeUpvoteCreateManyWithoutBeerChangeInput | null
}

export interface BeerChangeCreateWithoutUpvotesInput {
  field: BeerField
  newValue: String
  user?: UserCreateOneWithoutBeerChangesInput | null
  beer: BeerCreateOneWithoutBeerChangesInput
}

export interface BeerChangeCreateWithoutUserInput {
  field: BeerField
  newValue: String
  beer: BeerCreateOneWithoutBeerChangesInput
  upvotes?: BeerChangeUpvoteCreateManyWithoutBeerChangeInput | null
}

export interface BeerChangeScalarWhereInput {
  AND?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput | null
  OR?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput | null
  NOT?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  field?: BeerField | null
  field_not?: BeerField | null
  field_in?: BeerField[] | BeerField | null
  field_not_in?: BeerField[] | BeerField | null
  newValue?: String | null
  newValue_not?: String | null
  newValue_in?: String[] | String | null
  newValue_not_in?: String[] | String | null
  newValue_lt?: String | null
  newValue_lte?: String | null
  newValue_gt?: String | null
  newValue_gte?: String | null
  newValue_contains?: String | null
  newValue_not_contains?: String | null
  newValue_starts_with?: String | null
  newValue_not_starts_with?: String | null
  newValue_ends_with?: String | null
  newValue_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerChangeSubscriptionWhereInput {
  AND?: BeerChangeSubscriptionWhereInput[] | BeerChangeSubscriptionWhereInput | null
  OR?: BeerChangeSubscriptionWhereInput[] | BeerChangeSubscriptionWhereInput | null
  NOT?: BeerChangeSubscriptionWhereInput[] | BeerChangeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerChangeWhereInput | null
}

export interface BeerChangeUpdateInput {
  field?: BeerField | null
  newValue?: String | null
  user?: UserUpdateOneWithoutBeerChangesInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerChangesInput | null
  upvotes?: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput | null
}

export interface BeerChangeUpdateManyDataInput {
  field?: BeerField | null
  newValue?: String | null
}

export interface BeerChangeUpdateManyMutationInput {
  field?: BeerField | null
  newValue?: String | null
}

export interface BeerChangeUpdateManyWithoutBeerInput {
  create?: BeerChangeCreateWithoutBeerInput[] | BeerChangeCreateWithoutBeerInput | null
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  set?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  disconnect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  delete?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  update?: BeerChangeUpdateWithWhereUniqueWithoutBeerInput[] | BeerChangeUpdateWithWhereUniqueWithoutBeerInput | null
  updateMany?: BeerChangeUpdateManyWithWhereNestedInput[] | BeerChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput | null
  upsert?: BeerChangeUpsertWithWhereUniqueWithoutBeerInput[] | BeerChangeUpsertWithWhereUniqueWithoutBeerInput | null
}

export interface BeerChangeUpdateManyWithoutUserInput {
  create?: BeerChangeCreateWithoutUserInput[] | BeerChangeCreateWithoutUserInput | null
  connect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  set?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  disconnect?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  delete?: BeerChangeWhereUniqueInput[] | BeerChangeWhereUniqueInput | null
  update?: BeerChangeUpdateWithWhereUniqueWithoutUserInput[] | BeerChangeUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BeerChangeUpdateManyWithWhereNestedInput[] | BeerChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerChangeScalarWhereInput[] | BeerChangeScalarWhereInput | null
  upsert?: BeerChangeUpsertWithWhereUniqueWithoutUserInput[] | BeerChangeUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BeerChangeUpdateManyWithWhereNestedInput {
  where: BeerChangeScalarWhereInput
  data: BeerChangeUpdateManyDataInput
}

export interface BeerChangeUpdateOneRequiredWithoutUpvotesInput {
  create?: BeerChangeCreateWithoutUpvotesInput | null
  connect?: BeerChangeWhereUniqueInput | null
  update?: BeerChangeUpdateWithoutUpvotesDataInput | null
  upsert?: BeerChangeUpsertWithoutUpvotesInput | null
}

export interface BeerChangeUpdateWithoutBeerDataInput {
  field?: BeerField | null
  newValue?: String | null
  user?: UserUpdateOneWithoutBeerChangesInput | null
  upvotes?: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput | null
}

export interface BeerChangeUpdateWithoutUpvotesDataInput {
  field?: BeerField | null
  newValue?: String | null
  user?: UserUpdateOneWithoutBeerChangesInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerChangesInput | null
}

export interface BeerChangeUpdateWithoutUserDataInput {
  field?: BeerField | null
  newValue?: String | null
  beer?: BeerUpdateOneRequiredWithoutBeerChangesInput | null
  upvotes?: BeerChangeUpvoteUpdateManyWithoutBeerChangeInput | null
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
  user?: UserCreateOneWithoutBeerChangeUpvotesInput | null
  beerChange: BeerChangeCreateOneWithoutUpvotesInput
}

export interface BeerChangeUpvoteCreateManyWithoutBeerChangeInput {
  create?: BeerChangeUpvoteCreateWithoutBeerChangeInput[] | BeerChangeUpvoteCreateWithoutBeerChangeInput | null
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
}

export interface BeerChangeUpvoteCreateManyWithoutUserInput {
  create?: BeerChangeUpvoteCreateWithoutUserInput[] | BeerChangeUpvoteCreateWithoutUserInput | null
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
}

export interface BeerChangeUpvoteCreateWithoutBeerChangeInput {
  user?: UserCreateOneWithoutBeerChangeUpvotesInput | null
}

export interface BeerChangeUpvoteCreateWithoutUserInput {
  beerChange: BeerChangeCreateOneWithoutUpvotesInput
}

export interface BeerChangeUpvoteScalarWhereInput {
  AND?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput | null
  OR?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput | null
  NOT?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface BeerChangeUpvoteSubscriptionWhereInput {
  AND?: BeerChangeUpvoteSubscriptionWhereInput[] | BeerChangeUpvoteSubscriptionWhereInput | null
  OR?: BeerChangeUpvoteSubscriptionWhereInput[] | BeerChangeUpvoteSubscriptionWhereInput | null
  NOT?: BeerChangeUpvoteSubscriptionWhereInput[] | BeerChangeUpvoteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerChangeUpvoteWhereInput | null
}

export interface BeerChangeUpvoteUpdateInput {
  user?: UserUpdateOneWithoutBeerChangeUpvotesInput | null
  beerChange?: BeerChangeUpdateOneRequiredWithoutUpvotesInput | null
}

export interface BeerChangeUpvoteUpdateManyWithoutBeerChangeInput {
  create?: BeerChangeUpvoteCreateWithoutBeerChangeInput[] | BeerChangeUpvoteCreateWithoutBeerChangeInput | null
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  set?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  disconnect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  delete?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  update?: BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput[] | BeerChangeUpvoteUpdateWithWhereUniqueWithoutBeerChangeInput | null
  deleteMany?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput | null
  upsert?: BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput[] | BeerChangeUpvoteUpsertWithWhereUniqueWithoutBeerChangeInput | null
}

export interface BeerChangeUpvoteUpdateManyWithoutUserInput {
  create?: BeerChangeUpvoteCreateWithoutUserInput[] | BeerChangeUpvoteCreateWithoutUserInput | null
  connect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  set?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  disconnect?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  delete?: BeerChangeUpvoteWhereUniqueInput[] | BeerChangeUpvoteWhereUniqueInput | null
  update?: BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput[] | BeerChangeUpvoteUpdateWithWhereUniqueWithoutUserInput | null
  deleteMany?: BeerChangeUpvoteScalarWhereInput[] | BeerChangeUpvoteScalarWhereInput | null
  upsert?: BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput[] | BeerChangeUpvoteUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BeerChangeUpvoteUpdateWithoutBeerChangeDataInput {
  user?: UserUpdateOneWithoutBeerChangeUpvotesInput | null
}

export interface BeerChangeUpvoteUpdateWithoutUserDataInput {
  beerChange?: BeerChangeUpdateOneRequiredWithoutUpvotesInput | null
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
  AND?: BeerChangeUpvoteWhereInput[] | BeerChangeUpvoteWhereInput | null
  OR?: BeerChangeUpvoteWhereInput[] | BeerChangeUpvoteWhereInput | null
  NOT?: BeerChangeUpvoteWhereInput[] | BeerChangeUpvoteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  user?: UserWhereInput | null
  beerChange?: BeerChangeWhereInput | null
}

export interface BeerChangeUpvoteWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerChangeWhereInput {
  AND?: BeerChangeWhereInput[] | BeerChangeWhereInput | null
  OR?: BeerChangeWhereInput[] | BeerChangeWhereInput | null
  NOT?: BeerChangeWhereInput[] | BeerChangeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  field?: BeerField | null
  field_not?: BeerField | null
  field_in?: BeerField[] | BeerField | null
  field_not_in?: BeerField[] | BeerField | null
  newValue?: String | null
  newValue_not?: String | null
  newValue_in?: String[] | String | null
  newValue_not_in?: String[] | String | null
  newValue_lt?: String | null
  newValue_lte?: String | null
  newValue_gt?: String | null
  newValue_gte?: String | null
  newValue_contains?: String | null
  newValue_not_contains?: String | null
  newValue_starts_with?: String | null
  newValue_not_starts_with?: String | null
  newValue_ends_with?: String | null
  newValue_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  beer?: BeerWhereInput | null
  upvotes_every?: BeerChangeUpvoteWhereInput | null
  upvotes_some?: BeerChangeUpvoteWhereInput | null
  upvotes_none?: BeerChangeUpvoteWhereInput | null
}

export interface BeerChangeWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerCommentCreateInput {
  comment: String
  beer: BeerCreateOneWithoutBeerCommentsInput
  user?: UserCreateOneWithoutBeerCommentsInput | null
}

export interface BeerCommentCreateManyWithoutBeerInput {
  create?: BeerCommentCreateWithoutBeerInput[] | BeerCommentCreateWithoutBeerInput | null
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
}

export interface BeerCommentCreateManyWithoutUserInput {
  create?: BeerCommentCreateWithoutUserInput[] | BeerCommentCreateWithoutUserInput | null
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
}

export interface BeerCommentCreateWithoutBeerInput {
  comment: String
  user?: UserCreateOneWithoutBeerCommentsInput | null
}

export interface BeerCommentCreateWithoutUserInput {
  comment: String
  beer: BeerCreateOneWithoutBeerCommentsInput
}

export interface BeerCommentScalarWhereInput {
  AND?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput | null
  OR?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput | null
  NOT?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  comment?: String | null
  comment_not?: String | null
  comment_in?: String[] | String | null
  comment_not_in?: String[] | String | null
  comment_lt?: String | null
  comment_lte?: String | null
  comment_gt?: String | null
  comment_gte?: String | null
  comment_contains?: String | null
  comment_not_contains?: String | null
  comment_starts_with?: String | null
  comment_not_starts_with?: String | null
  comment_ends_with?: String | null
  comment_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerCommentSubscriptionWhereInput {
  AND?: BeerCommentSubscriptionWhereInput[] | BeerCommentSubscriptionWhereInput | null
  OR?: BeerCommentSubscriptionWhereInput[] | BeerCommentSubscriptionWhereInput | null
  NOT?: BeerCommentSubscriptionWhereInput[] | BeerCommentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerCommentWhereInput | null
}

export interface BeerCommentUpdateInput {
  comment?: String | null
  beer?: BeerUpdateOneRequiredWithoutBeerCommentsInput | null
  user?: UserUpdateOneWithoutBeerCommentsInput | null
}

export interface BeerCommentUpdateManyDataInput {
  comment?: String | null
}

export interface BeerCommentUpdateManyMutationInput {
  comment?: String | null
}

export interface BeerCommentUpdateManyWithoutBeerInput {
  create?: BeerCommentCreateWithoutBeerInput[] | BeerCommentCreateWithoutBeerInput | null
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  set?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  disconnect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  delete?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  update?: BeerCommentUpdateWithWhereUniqueWithoutBeerInput[] | BeerCommentUpdateWithWhereUniqueWithoutBeerInput | null
  updateMany?: BeerCommentUpdateManyWithWhereNestedInput[] | BeerCommentUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput | null
  upsert?: BeerCommentUpsertWithWhereUniqueWithoutBeerInput[] | BeerCommentUpsertWithWhereUniqueWithoutBeerInput | null
}

export interface BeerCommentUpdateManyWithoutUserInput {
  create?: BeerCommentCreateWithoutUserInput[] | BeerCommentCreateWithoutUserInput | null
  connect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  set?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  disconnect?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  delete?: BeerCommentWhereUniqueInput[] | BeerCommentWhereUniqueInput | null
  update?: BeerCommentUpdateWithWhereUniqueWithoutUserInput[] | BeerCommentUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BeerCommentUpdateManyWithWhereNestedInput[] | BeerCommentUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerCommentScalarWhereInput[] | BeerCommentScalarWhereInput | null
  upsert?: BeerCommentUpsertWithWhereUniqueWithoutUserInput[] | BeerCommentUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BeerCommentUpdateManyWithWhereNestedInput {
  where: BeerCommentScalarWhereInput
  data: BeerCommentUpdateManyDataInput
}

export interface BeerCommentUpdateWithoutBeerDataInput {
  comment?: String | null
  user?: UserUpdateOneWithoutBeerCommentsInput | null
}

export interface BeerCommentUpdateWithoutUserDataInput {
  comment?: String | null
  beer?: BeerUpdateOneRequiredWithoutBeerCommentsInput | null
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
  AND?: BeerCommentWhereInput[] | BeerCommentWhereInput | null
  OR?: BeerCommentWhereInput[] | BeerCommentWhereInput | null
  NOT?: BeerCommentWhereInput[] | BeerCommentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  comment?: String | null
  comment_not?: String | null
  comment_in?: String[] | String | null
  comment_not_in?: String[] | String | null
  comment_lt?: String | null
  comment_lte?: String | null
  comment_gt?: String | null
  comment_gte?: String | null
  comment_contains?: String | null
  comment_not_contains?: String | null
  comment_starts_with?: String | null
  comment_not_starts_with?: String | null
  comment_ends_with?: String | null
  comment_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  beer?: BeerWhereInput | null
  user?: UserWhereInput | null
}

export interface BeerCommentWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerCreateInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateManyWithoutBarsInput {
  create?: BeerCreateWithoutBarsInput[] | BeerCreateWithoutBarsInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
}

export interface BeerCreateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
}

export interface BeerCreateManyWithoutCreatedByInput {
  create?: BeerCreateWithoutCreatedByInput[] | BeerCreateWithoutCreatedByInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
}

export interface BeerCreateManyWithoutLikedByInput {
  create?: BeerCreateWithoutLikedByInput[] | BeerCreateWithoutLikedByInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
}

export interface BeerCreateOneWithoutBarConnectionsInput {
  create?: BeerCreateWithoutBarConnectionsInput | null
  connect?: BeerWhereUniqueInput | null
}

export interface BeerCreateOneWithoutBeerChangesInput {
  create?: BeerCreateWithoutBeerChangesInput | null
  connect?: BeerWhereUniqueInput | null
}

export interface BeerCreateOneWithoutBeerCommentsInput {
  create?: BeerCreateWithoutBeerCommentsInput | null
  connect?: BeerWhereUniqueInput | null
}

export interface BeerCreateOneWithoutBeerPricesInput {
  create?: BeerCreateWithoutBeerPricesInput | null
  connect?: BeerWhereUniqueInput | null
}

export interface BeerCreateOneWithoutBeerRatingInput {
  create?: BeerCreateWithoutBeerRatingInput | null
  connect?: BeerWhereUniqueInput | null
}

export interface BeerCreateWithoutBarConnectionsInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutBarsInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutBeerChangesInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutBeerCommentsInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutBeerPricesInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutBeerRatingInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutBreweryInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutCreatedByInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  likedBy?: UserCreateManyWithoutLikedBeersInput | null
}

export interface BeerCreateWithoutLikedByInput {
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryCreateOneWithoutBeersInput | null
  bars?: BarCreateManyWithoutBeersInput | null
  beerRating?: BeerRatingCreateManyWithoutBeerInput | null
  beerComments?: BeerCommentCreateManyWithoutBeerInput | null
  beerChanges?: BeerChangeCreateManyWithoutBeerInput | null
  beerPrices?: BeerPriceCreateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeCreateManyWithoutBeerInput | null
  createdBy?: UserCreateOneWithoutCreatedBeersInput | null
}

export interface BeerPriceChangeCreateInput {
  newPrice: Float
  beerPrice: BeerPriceCreateOneWithoutChangesInput
  user?: UserCreateOneInput | null
  upvotes?: BeerPriceChangeUpvoteCreateManyWithoutBeerPriceChangeInput | null
}

export interface BeerPriceChangeCreateManyWithoutBeerPriceInput {
  create?: BeerPriceChangeCreateWithoutBeerPriceInput[] | BeerPriceChangeCreateWithoutBeerPriceInput | null
  connect?: BeerPriceChangeWhereUniqueInput[] | BeerPriceChangeWhereUniqueInput | null
}

export interface BeerPriceChangeCreateOneWithoutUpvotesInput {
  create?: BeerPriceChangeCreateWithoutUpvotesInput | null
  connect?: BeerPriceChangeWhereUniqueInput | null
}

export interface BeerPriceChangeCreateWithoutBeerPriceInput {
  newPrice: Float
  user?: UserCreateOneInput | null
  upvotes?: BeerPriceChangeUpvoteCreateManyWithoutBeerPriceChangeInput | null
}

export interface BeerPriceChangeCreateWithoutUpvotesInput {
  newPrice: Float
  beerPrice: BeerPriceCreateOneWithoutChangesInput
  user?: UserCreateOneInput | null
}

export interface BeerPriceChangeScalarWhereInput {
  AND?: BeerPriceChangeScalarWhereInput[] | BeerPriceChangeScalarWhereInput | null
  OR?: BeerPriceChangeScalarWhereInput[] | BeerPriceChangeScalarWhereInput | null
  NOT?: BeerPriceChangeScalarWhereInput[] | BeerPriceChangeScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  newPrice?: Float | null
  newPrice_not?: Float | null
  newPrice_in?: Float[] | Float | null
  newPrice_not_in?: Float[] | Float | null
  newPrice_lt?: Float | null
  newPrice_lte?: Float | null
  newPrice_gt?: Float | null
  newPrice_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerPriceChangeSubscriptionWhereInput {
  AND?: BeerPriceChangeSubscriptionWhereInput[] | BeerPriceChangeSubscriptionWhereInput | null
  OR?: BeerPriceChangeSubscriptionWhereInput[] | BeerPriceChangeSubscriptionWhereInput | null
  NOT?: BeerPriceChangeSubscriptionWhereInput[] | BeerPriceChangeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerPriceChangeWhereInput | null
}

export interface BeerPriceChangeUpdateInput {
  newPrice?: Float | null
  beerPrice?: BeerPriceUpdateOneRequiredWithoutChangesInput | null
  user?: UserUpdateOneInput | null
  upvotes?: BeerPriceChangeUpvoteUpdateManyWithoutBeerPriceChangeInput | null
}

export interface BeerPriceChangeUpdateManyDataInput {
  newPrice?: Float | null
}

export interface BeerPriceChangeUpdateManyMutationInput {
  newPrice?: Float | null
}

export interface BeerPriceChangeUpdateManyWithoutBeerPriceInput {
  create?: BeerPriceChangeCreateWithoutBeerPriceInput[] | BeerPriceChangeCreateWithoutBeerPriceInput | null
  connect?: BeerPriceChangeWhereUniqueInput[] | BeerPriceChangeWhereUniqueInput | null
  set?: BeerPriceChangeWhereUniqueInput[] | BeerPriceChangeWhereUniqueInput | null
  disconnect?: BeerPriceChangeWhereUniqueInput[] | BeerPriceChangeWhereUniqueInput | null
  delete?: BeerPriceChangeWhereUniqueInput[] | BeerPriceChangeWhereUniqueInput | null
  update?: BeerPriceChangeUpdateWithWhereUniqueWithoutBeerPriceInput[] | BeerPriceChangeUpdateWithWhereUniqueWithoutBeerPriceInput | null
  updateMany?: BeerPriceChangeUpdateManyWithWhereNestedInput[] | BeerPriceChangeUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerPriceChangeScalarWhereInput[] | BeerPriceChangeScalarWhereInput | null
  upsert?: BeerPriceChangeUpsertWithWhereUniqueWithoutBeerPriceInput[] | BeerPriceChangeUpsertWithWhereUniqueWithoutBeerPriceInput | null
}

export interface BeerPriceChangeUpdateManyWithWhereNestedInput {
  where: BeerPriceChangeScalarWhereInput
  data: BeerPriceChangeUpdateManyDataInput
}

export interface BeerPriceChangeUpdateOneRequiredWithoutUpvotesInput {
  create?: BeerPriceChangeCreateWithoutUpvotesInput | null
  connect?: BeerPriceChangeWhereUniqueInput | null
  update?: BeerPriceChangeUpdateWithoutUpvotesDataInput | null
  upsert?: BeerPriceChangeUpsertWithoutUpvotesInput | null
}

export interface BeerPriceChangeUpdateWithoutBeerPriceDataInput {
  newPrice?: Float | null
  user?: UserUpdateOneInput | null
  upvotes?: BeerPriceChangeUpvoteUpdateManyWithoutBeerPriceChangeInput | null
}

export interface BeerPriceChangeUpdateWithoutUpvotesDataInput {
  newPrice?: Float | null
  beerPrice?: BeerPriceUpdateOneRequiredWithoutChangesInput | null
  user?: UserUpdateOneInput | null
}

export interface BeerPriceChangeUpdateWithWhereUniqueWithoutBeerPriceInput {
  where: BeerPriceChangeWhereUniqueInput
  data: BeerPriceChangeUpdateWithoutBeerPriceDataInput
}

export interface BeerPriceChangeUpsertWithoutUpvotesInput {
  update: BeerPriceChangeUpdateWithoutUpvotesDataInput
  create: BeerPriceChangeCreateWithoutUpvotesInput
}

export interface BeerPriceChangeUpsertWithWhereUniqueWithoutBeerPriceInput {
  where: BeerPriceChangeWhereUniqueInput
  update: BeerPriceChangeUpdateWithoutBeerPriceDataInput
  create: BeerPriceChangeCreateWithoutBeerPriceInput
}

export interface BeerPriceChangeUpvoteCreateInput {
  user?: UserCreateOneInput | null
  beerPriceChange: BeerPriceChangeCreateOneWithoutUpvotesInput
}

export interface BeerPriceChangeUpvoteCreateManyWithoutBeerPriceChangeInput {
  create?: BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput[] | BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput | null
  connect?: BeerPriceChangeUpvoteWhereUniqueInput[] | BeerPriceChangeUpvoteWhereUniqueInput | null
}

export interface BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput {
  user?: UserCreateOneInput | null
}

export interface BeerPriceChangeUpvoteScalarWhereInput {
  AND?: BeerPriceChangeUpvoteScalarWhereInput[] | BeerPriceChangeUpvoteScalarWhereInput | null
  OR?: BeerPriceChangeUpvoteScalarWhereInput[] | BeerPriceChangeUpvoteScalarWhereInput | null
  NOT?: BeerPriceChangeUpvoteScalarWhereInput[] | BeerPriceChangeUpvoteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface BeerPriceChangeUpvoteSubscriptionWhereInput {
  AND?: BeerPriceChangeUpvoteSubscriptionWhereInput[] | BeerPriceChangeUpvoteSubscriptionWhereInput | null
  OR?: BeerPriceChangeUpvoteSubscriptionWhereInput[] | BeerPriceChangeUpvoteSubscriptionWhereInput | null
  NOT?: BeerPriceChangeUpvoteSubscriptionWhereInput[] | BeerPriceChangeUpvoteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerPriceChangeUpvoteWhereInput | null
}

export interface BeerPriceChangeUpvoteUpdateInput {
  user?: UserUpdateOneInput | null
  beerPriceChange?: BeerPriceChangeUpdateOneRequiredWithoutUpvotesInput | null
}

export interface BeerPriceChangeUpvoteUpdateManyWithoutBeerPriceChangeInput {
  create?: BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput[] | BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput | null
  connect?: BeerPriceChangeUpvoteWhereUniqueInput[] | BeerPriceChangeUpvoteWhereUniqueInput | null
  set?: BeerPriceChangeUpvoteWhereUniqueInput[] | BeerPriceChangeUpvoteWhereUniqueInput | null
  disconnect?: BeerPriceChangeUpvoteWhereUniqueInput[] | BeerPriceChangeUpvoteWhereUniqueInput | null
  delete?: BeerPriceChangeUpvoteWhereUniqueInput[] | BeerPriceChangeUpvoteWhereUniqueInput | null
  update?: BeerPriceChangeUpvoteUpdateWithWhereUniqueWithoutBeerPriceChangeInput[] | BeerPriceChangeUpvoteUpdateWithWhereUniqueWithoutBeerPriceChangeInput | null
  deleteMany?: BeerPriceChangeUpvoteScalarWhereInput[] | BeerPriceChangeUpvoteScalarWhereInput | null
  upsert?: BeerPriceChangeUpvoteUpsertWithWhereUniqueWithoutBeerPriceChangeInput[] | BeerPriceChangeUpvoteUpsertWithWhereUniqueWithoutBeerPriceChangeInput | null
}

export interface BeerPriceChangeUpvoteUpdateWithoutBeerPriceChangeDataInput {
  user?: UserUpdateOneInput | null
}

export interface BeerPriceChangeUpvoteUpdateWithWhereUniqueWithoutBeerPriceChangeInput {
  where: BeerPriceChangeUpvoteWhereUniqueInput
  data: BeerPriceChangeUpvoteUpdateWithoutBeerPriceChangeDataInput
}

export interface BeerPriceChangeUpvoteUpsertWithWhereUniqueWithoutBeerPriceChangeInput {
  where: BeerPriceChangeUpvoteWhereUniqueInput
  update: BeerPriceChangeUpvoteUpdateWithoutBeerPriceChangeDataInput
  create: BeerPriceChangeUpvoteCreateWithoutBeerPriceChangeInput
}

export interface BeerPriceChangeUpvoteWhereInput {
  AND?: BeerPriceChangeUpvoteWhereInput[] | BeerPriceChangeUpvoteWhereInput | null
  OR?: BeerPriceChangeUpvoteWhereInput[] | BeerPriceChangeUpvoteWhereInput | null
  NOT?: BeerPriceChangeUpvoteWhereInput[] | BeerPriceChangeUpvoteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  user?: UserWhereInput | null
  beerPriceChange?: BeerPriceChangeWhereInput | null
}

export interface BeerPriceChangeUpvoteWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerPriceChangeWhereInput {
  AND?: BeerPriceChangeWhereInput[] | BeerPriceChangeWhereInput | null
  OR?: BeerPriceChangeWhereInput[] | BeerPriceChangeWhereInput | null
  NOT?: BeerPriceChangeWhereInput[] | BeerPriceChangeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  newPrice?: Float | null
  newPrice_not?: Float | null
  newPrice_in?: Float[] | Float | null
  newPrice_not_in?: Float[] | Float | null
  newPrice_lt?: Float | null
  newPrice_lte?: Float | null
  newPrice_gt?: Float | null
  newPrice_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  beerPrice?: BeerPriceWhereInput | null
  user?: UserWhereInput | null
  upvotes_every?: BeerPriceChangeUpvoteWhereInput | null
  upvotes_some?: BeerPriceChangeUpvoteWhereInput | null
  upvotes_none?: BeerPriceChangeUpvoteWhereInput | null
}

export interface BeerPriceChangeWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerPriceCreateInput {
  price: Float
  user?: UserCreateOneWithoutPricedBeersInput | null
  bar: BarCreateOneWithoutBeerPricesInput
  beer: BeerCreateOneWithoutBeerPricesInput
  changes?: BeerPriceChangeCreateManyWithoutBeerPriceInput | null
}

export interface BeerPriceCreateManyWithoutBarInput {
  create?: BeerPriceCreateWithoutBarInput[] | BeerPriceCreateWithoutBarInput | null
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
}

export interface BeerPriceCreateManyWithoutBeerInput {
  create?: BeerPriceCreateWithoutBeerInput[] | BeerPriceCreateWithoutBeerInput | null
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
}

export interface BeerPriceCreateManyWithoutUserInput {
  create?: BeerPriceCreateWithoutUserInput[] | BeerPriceCreateWithoutUserInput | null
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
}

export interface BeerPriceCreateOneWithoutChangesInput {
  create?: BeerPriceCreateWithoutChangesInput | null
  connect?: BeerPriceWhereUniqueInput | null
}

export interface BeerPriceCreateWithoutBarInput {
  price: Float
  user?: UserCreateOneWithoutPricedBeersInput | null
  beer: BeerCreateOneWithoutBeerPricesInput
  changes?: BeerPriceChangeCreateManyWithoutBeerPriceInput | null
}

export interface BeerPriceCreateWithoutBeerInput {
  price: Float
  user?: UserCreateOneWithoutPricedBeersInput | null
  bar: BarCreateOneWithoutBeerPricesInput
  changes?: BeerPriceChangeCreateManyWithoutBeerPriceInput | null
}

export interface BeerPriceCreateWithoutChangesInput {
  price: Float
  user?: UserCreateOneWithoutPricedBeersInput | null
  bar: BarCreateOneWithoutBeerPricesInput
  beer: BeerCreateOneWithoutBeerPricesInput
}

export interface BeerPriceCreateWithoutUserInput {
  price: Float
  bar: BarCreateOneWithoutBeerPricesInput
  beer: BeerCreateOneWithoutBeerPricesInput
  changes?: BeerPriceChangeCreateManyWithoutBeerPriceInput | null
}

export interface BeerPriceScalarWhereInput {
  AND?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput | null
  OR?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput | null
  NOT?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerPriceSubscriptionWhereInput {
  AND?: BeerPriceSubscriptionWhereInput[] | BeerPriceSubscriptionWhereInput | null
  OR?: BeerPriceSubscriptionWhereInput[] | BeerPriceSubscriptionWhereInput | null
  NOT?: BeerPriceSubscriptionWhereInput[] | BeerPriceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerPriceWhereInput | null
}

export interface BeerPriceUpdateInput {
  price?: Float | null
  user?: UserUpdateOneWithoutPricedBeersInput | null
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput | null
  changes?: BeerPriceChangeUpdateManyWithoutBeerPriceInput | null
}

export interface BeerPriceUpdateManyDataInput {
  price?: Float | null
}

export interface BeerPriceUpdateManyMutationInput {
  price?: Float | null
}

export interface BeerPriceUpdateManyWithoutBarInput {
  create?: BeerPriceCreateWithoutBarInput[] | BeerPriceCreateWithoutBarInput | null
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  set?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  disconnect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  delete?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  update?: BeerPriceUpdateWithWhereUniqueWithoutBarInput[] | BeerPriceUpdateWithWhereUniqueWithoutBarInput | null
  updateMany?: BeerPriceUpdateManyWithWhereNestedInput[] | BeerPriceUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput | null
  upsert?: BeerPriceUpsertWithWhereUniqueWithoutBarInput[] | BeerPriceUpsertWithWhereUniqueWithoutBarInput | null
}

export interface BeerPriceUpdateManyWithoutBeerInput {
  create?: BeerPriceCreateWithoutBeerInput[] | BeerPriceCreateWithoutBeerInput | null
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  set?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  disconnect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  delete?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  update?: BeerPriceUpdateWithWhereUniqueWithoutBeerInput[] | BeerPriceUpdateWithWhereUniqueWithoutBeerInput | null
  updateMany?: BeerPriceUpdateManyWithWhereNestedInput[] | BeerPriceUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput | null
  upsert?: BeerPriceUpsertWithWhereUniqueWithoutBeerInput[] | BeerPriceUpsertWithWhereUniqueWithoutBeerInput | null
}

export interface BeerPriceUpdateManyWithoutUserInput {
  create?: BeerPriceCreateWithoutUserInput[] | BeerPriceCreateWithoutUserInput | null
  connect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  set?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  disconnect?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  delete?: BeerPriceWhereUniqueInput[] | BeerPriceWhereUniqueInput | null
  update?: BeerPriceUpdateWithWhereUniqueWithoutUserInput[] | BeerPriceUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BeerPriceUpdateManyWithWhereNestedInput[] | BeerPriceUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerPriceScalarWhereInput[] | BeerPriceScalarWhereInput | null
  upsert?: BeerPriceUpsertWithWhereUniqueWithoutUserInput[] | BeerPriceUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BeerPriceUpdateManyWithWhereNestedInput {
  where: BeerPriceScalarWhereInput
  data: BeerPriceUpdateManyDataInput
}

export interface BeerPriceUpdateOneRequiredWithoutChangesInput {
  create?: BeerPriceCreateWithoutChangesInput | null
  connect?: BeerPriceWhereUniqueInput | null
  update?: BeerPriceUpdateWithoutChangesDataInput | null
  upsert?: BeerPriceUpsertWithoutChangesInput | null
}

export interface BeerPriceUpdateWithoutBarDataInput {
  price?: Float | null
  user?: UserUpdateOneWithoutPricedBeersInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput | null
  changes?: BeerPriceChangeUpdateManyWithoutBeerPriceInput | null
}

export interface BeerPriceUpdateWithoutBeerDataInput {
  price?: Float | null
  user?: UserUpdateOneWithoutPricedBeersInput | null
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput | null
  changes?: BeerPriceChangeUpdateManyWithoutBeerPriceInput | null
}

export interface BeerPriceUpdateWithoutChangesDataInput {
  price?: Float | null
  user?: UserUpdateOneWithoutPricedBeersInput | null
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput | null
}

export interface BeerPriceUpdateWithoutUserDataInput {
  price?: Float | null
  bar?: BarUpdateOneRequiredWithoutBeerPricesInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerPricesInput | null
  changes?: BeerPriceChangeUpdateManyWithoutBeerPriceInput | null
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

export interface BeerPriceUpsertWithoutChangesInput {
  update: BeerPriceUpdateWithoutChangesDataInput
  create: BeerPriceCreateWithoutChangesInput
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
  AND?: BeerPriceWhereInput[] | BeerPriceWhereInput | null
  OR?: BeerPriceWhereInput[] | BeerPriceWhereInput | null
  NOT?: BeerPriceWhereInput[] | BeerPriceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  bar?: BarWhereInput | null
  beer?: BeerWhereInput | null
  changes_every?: BeerPriceChangeWhereInput | null
  changes_some?: BeerPriceChangeWhereInput | null
  changes_none?: BeerPriceChangeWhereInput | null
}

export interface BeerPriceWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerRatingCreateInput {
  rating: Int
  user?: UserCreateOneWithoutBeerRatingsInput | null
  beer: BeerCreateOneWithoutBeerRatingInput
}

export interface BeerRatingCreateManyWithoutBeerInput {
  create?: BeerRatingCreateWithoutBeerInput[] | BeerRatingCreateWithoutBeerInput | null
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
}

export interface BeerRatingCreateManyWithoutUserInput {
  create?: BeerRatingCreateWithoutUserInput[] | BeerRatingCreateWithoutUserInput | null
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
}

export interface BeerRatingCreateWithoutBeerInput {
  rating: Int
  user?: UserCreateOneWithoutBeerRatingsInput | null
}

export interface BeerRatingCreateWithoutUserInput {
  rating: Int
  beer: BeerCreateOneWithoutBeerRatingInput
}

export interface BeerRatingScalarWhereInput {
  AND?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput | null
  OR?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput | null
  NOT?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  rating?: Int | null
  rating_not?: Int | null
  rating_in?: Int[] | Int | null
  rating_not_in?: Int[] | Int | null
  rating_lt?: Int | null
  rating_lte?: Int | null
  rating_gt?: Int | null
  rating_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerRatingSubscriptionWhereInput {
  AND?: BeerRatingSubscriptionWhereInput[] | BeerRatingSubscriptionWhereInput | null
  OR?: BeerRatingSubscriptionWhereInput[] | BeerRatingSubscriptionWhereInput | null
  NOT?: BeerRatingSubscriptionWhereInput[] | BeerRatingSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerRatingWhereInput | null
}

export interface BeerRatingUpdateInput {
  rating?: Int | null
  user?: UserUpdateOneWithoutBeerRatingsInput | null
  beer?: BeerUpdateOneRequiredWithoutBeerRatingInput | null
}

export interface BeerRatingUpdateManyDataInput {
  rating?: Int | null
}

export interface BeerRatingUpdateManyMutationInput {
  rating?: Int | null
}

export interface BeerRatingUpdateManyWithoutBeerInput {
  create?: BeerRatingCreateWithoutBeerInput[] | BeerRatingCreateWithoutBeerInput | null
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  set?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  disconnect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  delete?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  update?: BeerRatingUpdateWithWhereUniqueWithoutBeerInput[] | BeerRatingUpdateWithWhereUniqueWithoutBeerInput | null
  updateMany?: BeerRatingUpdateManyWithWhereNestedInput[] | BeerRatingUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput | null
  upsert?: BeerRatingUpsertWithWhereUniqueWithoutBeerInput[] | BeerRatingUpsertWithWhereUniqueWithoutBeerInput | null
}

export interface BeerRatingUpdateManyWithoutUserInput {
  create?: BeerRatingCreateWithoutUserInput[] | BeerRatingCreateWithoutUserInput | null
  connect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  set?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  disconnect?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  delete?: BeerRatingWhereUniqueInput[] | BeerRatingWhereUniqueInput | null
  update?: BeerRatingUpdateWithWhereUniqueWithoutUserInput[] | BeerRatingUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: BeerRatingUpdateManyWithWhereNestedInput[] | BeerRatingUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerRatingScalarWhereInput[] | BeerRatingScalarWhereInput | null
  upsert?: BeerRatingUpsertWithWhereUniqueWithoutUserInput[] | BeerRatingUpsertWithWhereUniqueWithoutUserInput | null
}

export interface BeerRatingUpdateManyWithWhereNestedInput {
  where: BeerRatingScalarWhereInput
  data: BeerRatingUpdateManyDataInput
}

export interface BeerRatingUpdateWithoutBeerDataInput {
  rating?: Int | null
  user?: UserUpdateOneWithoutBeerRatingsInput | null
}

export interface BeerRatingUpdateWithoutUserDataInput {
  rating?: Int | null
  beer?: BeerUpdateOneRequiredWithoutBeerRatingInput | null
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
  AND?: BeerRatingWhereInput[] | BeerRatingWhereInput | null
  OR?: BeerRatingWhereInput[] | BeerRatingWhereInput | null
  NOT?: BeerRatingWhereInput[] | BeerRatingWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  rating?: Int | null
  rating_not?: Int | null
  rating_in?: Int[] | Int | null
  rating_not_in?: Int[] | Int | null
  rating_lt?: Int | null
  rating_lte?: Int | null
  rating_gt?: Int | null
  rating_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  beer?: BeerWhereInput | null
}

export interface BeerRatingWhereUniqueInput {
  id?: ID_Input | null
}

export interface BeerScalarWhereInput {
  AND?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  OR?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  NOT?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  type?: String | null
  type_not?: String | null
  type_in?: String[] | String | null
  type_not_in?: String[] | String | null
  type_lt?: String | null
  type_lte?: String | null
  type_gt?: String | null
  type_gte?: String | null
  type_contains?: String | null
  type_not_contains?: String | null
  type_starts_with?: String | null
  type_not_starts_with?: String | null
  type_ends_with?: String | null
  type_not_ends_with?: String | null
  strong?: String | null
  strong_not?: String | null
  strong_in?: String[] | String | null
  strong_not_in?: String[] | String | null
  strong_lt?: String | null
  strong_lte?: String | null
  strong_gt?: String | null
  strong_gte?: String | null
  strong_contains?: String | null
  strong_not_contains?: String | null
  strong_starts_with?: String | null
  strong_not_starts_with?: String | null
  strong_ends_with?: String | null
  strong_not_ends_with?: String | null
  photo?: String | null
  photo_not?: String | null
  photo_in?: String[] | String | null
  photo_not_in?: String[] | String | null
  photo_lt?: String | null
  photo_lte?: String | null
  photo_gt?: String | null
  photo_gte?: String | null
  photo_contains?: String | null
  photo_not_contains?: String | null
  photo_starts_with?: String | null
  photo_not_starts_with?: String | null
  photo_ends_with?: String | null
  photo_not_ends_with?: String | null
  avgRating?: Float | null
  avgRating_not?: Float | null
  avgRating_in?: Float[] | Float | null
  avgRating_not_in?: Float[] | Float | null
  avgRating_lt?: Float | null
  avgRating_lte?: Float | null
  avgRating_gt?: Float | null
  avgRating_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BeerSubscriptionWhereInput {
  AND?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput | null
  OR?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput | null
  NOT?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BeerWhereInput | null
}

export interface BeerUpdateInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateManyDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
}

export interface BeerUpdateManyMutationInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
}

export interface BeerUpdateManyWithoutBarsInput {
  create?: BeerCreateWithoutBarsInput[] | BeerCreateWithoutBarsInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  update?: BeerUpdateWithWhereUniqueWithoutBarsInput[] | BeerUpdateWithWhereUniqueWithoutBarsInput | null
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  upsert?: BeerUpsertWithWhereUniqueWithoutBarsInput[] | BeerUpsertWithWhereUniqueWithoutBarsInput | null
}

export interface BeerUpdateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  update?: BeerUpdateWithWhereUniqueWithoutBreweryInput[] | BeerUpdateWithWhereUniqueWithoutBreweryInput | null
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  upsert?: BeerUpsertWithWhereUniqueWithoutBreweryInput[] | BeerUpsertWithWhereUniqueWithoutBreweryInput | null
}

export interface BeerUpdateManyWithoutCreatedByInput {
  create?: BeerCreateWithoutCreatedByInput[] | BeerCreateWithoutCreatedByInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  update?: BeerUpdateWithWhereUniqueWithoutCreatedByInput[] | BeerUpdateWithWhereUniqueWithoutCreatedByInput | null
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  upsert?: BeerUpsertWithWhereUniqueWithoutCreatedByInput[] | BeerUpsertWithWhereUniqueWithoutCreatedByInput | null
}

export interface BeerUpdateManyWithoutLikedByInput {
  create?: BeerCreateWithoutLikedByInput[] | BeerCreateWithoutLikedByInput | null
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  set?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput | null
  update?: BeerUpdateWithWhereUniqueWithoutLikedByInput[] | BeerUpdateWithWhereUniqueWithoutLikedByInput | null
  updateMany?: BeerUpdateManyWithWhereNestedInput[] | BeerUpdateManyWithWhereNestedInput | null
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput | null
  upsert?: BeerUpsertWithWhereUniqueWithoutLikedByInput[] | BeerUpsertWithWhereUniqueWithoutLikedByInput | null
}

export interface BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput
  data: BeerUpdateManyDataInput
}

export interface BeerUpdateOneRequiredWithoutBarConnectionsInput {
  create?: BeerCreateWithoutBarConnectionsInput | null
  connect?: BeerWhereUniqueInput | null
  update?: BeerUpdateWithoutBarConnectionsDataInput | null
  upsert?: BeerUpsertWithoutBarConnectionsInput | null
}

export interface BeerUpdateOneRequiredWithoutBeerChangesInput {
  create?: BeerCreateWithoutBeerChangesInput | null
  connect?: BeerWhereUniqueInput | null
  update?: BeerUpdateWithoutBeerChangesDataInput | null
  upsert?: BeerUpsertWithoutBeerChangesInput | null
}

export interface BeerUpdateOneRequiredWithoutBeerCommentsInput {
  create?: BeerCreateWithoutBeerCommentsInput | null
  connect?: BeerWhereUniqueInput | null
  update?: BeerUpdateWithoutBeerCommentsDataInput | null
  upsert?: BeerUpsertWithoutBeerCommentsInput | null
}

export interface BeerUpdateOneRequiredWithoutBeerPricesInput {
  create?: BeerCreateWithoutBeerPricesInput | null
  connect?: BeerWhereUniqueInput | null
  update?: BeerUpdateWithoutBeerPricesDataInput | null
  upsert?: BeerUpsertWithoutBeerPricesInput | null
}

export interface BeerUpdateOneRequiredWithoutBeerRatingInput {
  create?: BeerCreateWithoutBeerRatingInput | null
  connect?: BeerWhereUniqueInput | null
  update?: BeerUpdateWithoutBeerRatingDataInput | null
  upsert?: BeerUpsertWithoutBeerRatingInput | null
}

export interface BeerUpdateWithoutBarConnectionsDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutBarsDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutBeerChangesDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutBeerCommentsDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutBeerPricesDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutBeerRatingDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutBreweryDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutCreatedByDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  likedBy?: UserUpdateManyWithoutLikedBeersInput | null
}

export interface BeerUpdateWithoutLikedByDataInput {
  name?: String | null
  type?: String | null
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: BreweryUpdateOneWithoutBeersInput | null
  bars?: BarUpdateManyWithoutBeersInput | null
  beerRating?: BeerRatingUpdateManyWithoutBeerInput | null
  beerComments?: BeerCommentUpdateManyWithoutBeerInput | null
  beerChanges?: BeerChangeUpdateManyWithoutBeerInput | null
  beerPrices?: BeerPriceUpdateManyWithoutBeerInput | null
  barConnections?: BeerBarConnectionChangeUpdateManyWithoutBeerInput | null
  createdBy?: UserUpdateOneWithoutCreatedBeersInput | null
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

export interface BeerUpsertWithoutBarConnectionsInput {
  update: BeerUpdateWithoutBarConnectionsDataInput
  create: BeerCreateWithoutBarConnectionsInput
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
  AND?: BeerWhereInput[] | BeerWhereInput | null
  OR?: BeerWhereInput[] | BeerWhereInput | null
  NOT?: BeerWhereInput[] | BeerWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  type?: String | null
  type_not?: String | null
  type_in?: String[] | String | null
  type_not_in?: String[] | String | null
  type_lt?: String | null
  type_lte?: String | null
  type_gt?: String | null
  type_gte?: String | null
  type_contains?: String | null
  type_not_contains?: String | null
  type_starts_with?: String | null
  type_not_starts_with?: String | null
  type_ends_with?: String | null
  type_not_ends_with?: String | null
  strong?: String | null
  strong_not?: String | null
  strong_in?: String[] | String | null
  strong_not_in?: String[] | String | null
  strong_lt?: String | null
  strong_lte?: String | null
  strong_gt?: String | null
  strong_gte?: String | null
  strong_contains?: String | null
  strong_not_contains?: String | null
  strong_starts_with?: String | null
  strong_not_starts_with?: String | null
  strong_ends_with?: String | null
  strong_not_ends_with?: String | null
  photo?: String | null
  photo_not?: String | null
  photo_in?: String[] | String | null
  photo_not_in?: String[] | String | null
  photo_lt?: String | null
  photo_lte?: String | null
  photo_gt?: String | null
  photo_gte?: String | null
  photo_contains?: String | null
  photo_not_contains?: String | null
  photo_starts_with?: String | null
  photo_not_starts_with?: String | null
  photo_ends_with?: String | null
  photo_not_ends_with?: String | null
  avgRating?: Float | null
  avgRating_not?: Float | null
  avgRating_in?: Float[] | Float | null
  avgRating_not_in?: Float[] | Float | null
  avgRating_lt?: Float | null
  avgRating_lte?: Float | null
  avgRating_gt?: Float | null
  avgRating_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  brewery?: BreweryWhereInput | null
  bars_every?: BarWhereInput | null
  bars_some?: BarWhereInput | null
  bars_none?: BarWhereInput | null
  beerRating_every?: BeerRatingWhereInput | null
  beerRating_some?: BeerRatingWhereInput | null
  beerRating_none?: BeerRatingWhereInput | null
  beerComments_every?: BeerCommentWhereInput | null
  beerComments_some?: BeerCommentWhereInput | null
  beerComments_none?: BeerCommentWhereInput | null
  beerChanges_every?: BeerChangeWhereInput | null
  beerChanges_some?: BeerChangeWhereInput | null
  beerChanges_none?: BeerChangeWhereInput | null
  beerPrices_every?: BeerPriceWhereInput | null
  beerPrices_some?: BeerPriceWhereInput | null
  beerPrices_none?: BeerPriceWhereInput | null
  barConnections_every?: BeerBarConnectionChangeWhereInput | null
  barConnections_some?: BeerBarConnectionChangeWhereInput | null
  barConnections_none?: BeerBarConnectionChangeWhereInput | null
  createdBy?: UserWhereInput | null
  likedBy_every?: UserWhereInput | null
  likedBy_some?: UserWhereInput | null
  likedBy_none?: UserWhereInput | null
}

export interface BeerWhereUniqueInput {
  id?: ID_Input | null
}

export interface BreweryCreateInput {
  name: String
  country: String
  logo?: String | null
  beers?: BeerCreateManyWithoutBreweryInput | null
}

export interface BreweryCreateOneWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput | null
  connect?: BreweryWhereUniqueInput | null
}

export interface BreweryCreateWithoutBeersInput {
  name: String
  country: String
  logo?: String | null
}

export interface BrewerySubscriptionWhereInput {
  AND?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput | null
  OR?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput | null
  NOT?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BreweryWhereInput | null
}

export interface BreweryUpdateInput {
  name?: String | null
  country?: String | null
  logo?: String | null
  beers?: BeerUpdateManyWithoutBreweryInput | null
}

export interface BreweryUpdateManyMutationInput {
  name?: String | null
  country?: String | null
  logo?: String | null
}

export interface BreweryUpdateOneWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput | null
  connect?: BreweryWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: BreweryUpdateWithoutBeersDataInput | null
  upsert?: BreweryUpsertWithoutBeersInput | null
}

export interface BreweryUpdateWithoutBeersDataInput {
  name?: String | null
  country?: String | null
  logo?: String | null
}

export interface BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput
  create: BreweryCreateWithoutBeersInput
}

export interface BreweryWhereInput {
  AND?: BreweryWhereInput[] | BreweryWhereInput | null
  OR?: BreweryWhereInput[] | BreweryWhereInput | null
  NOT?: BreweryWhereInput[] | BreweryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  logo?: String | null
  logo_not?: String | null
  logo_in?: String[] | String | null
  logo_not_in?: String[] | String | null
  logo_lt?: String | null
  logo_lte?: String | null
  logo_gt?: String | null
  logo_gte?: String | null
  logo_contains?: String | null
  logo_not_contains?: String | null
  logo_starts_with?: String | null
  logo_not_starts_with?: String | null
  logo_ends_with?: String | null
  logo_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  beers_every?: BeerWhereInput | null
  beers_some?: BeerWhereInput | null
  beers_none?: BeerWhereInput | null
}

export interface BreweryWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateManyWithoutLikedBarsInput {
  create?: UserCreateWithoutLikedBarsInput[] | UserCreateWithoutLikedBarsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutLikedBeersInput {
  create?: UserCreateWithoutLikedBeersInput[] | UserCreateWithoutLikedBeersInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBarChangesInput {
  create?: UserCreateWithoutBarChangesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBarChangeUpvotesInput {
  create?: UserCreateWithoutBarChangeUpvotesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBarCommentsInput {
  create?: UserCreateWithoutBarCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBarRatingsInput {
  create?: UserCreateWithoutBarRatingsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBeerChangesInput {
  create?: UserCreateWithoutBeerChangesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBeerChangeUpvotesInput {
  create?: UserCreateWithoutBeerChangeUpvotesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBeerCommentsInput {
  create?: UserCreateWithoutBeerCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBeerRatingsInput {
  create?: UserCreateWithoutBeerRatingsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCreatedBarsInput {
  create?: UserCreateWithoutCreatedBarsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCreatedBeersInput {
  create?: UserCreateWithoutCreatedBeersInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPricedBeersInput {
  create?: UserCreateWithoutPricedBeersInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutBarChangesInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBarChangeUpvotesInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBarCommentsInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBarRatingsInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBeerChangesInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBeerChangeUpvotesInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBeerCommentsInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutBeerRatingsInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutCreatedBarsInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutCreatedBeersInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutLikedBarsInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutLikedBeersInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  pricedBeers?: BeerPriceCreateManyWithoutUserInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserCreateWithoutPricedBeersInput {
  email: String
  password: String
  role?: Role | null
  active?: Boolean | null
  nickname: String
  birthdate: DateTime
  sex: Sex
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentCreateManyWithoutUserInput | null
  barComments?: BarCommentCreateManyWithoutUserInput | null
  beerRatings?: BeerRatingCreateManyWithoutUserInput | null
  barRatings?: BarRatingCreateManyWithoutUserInput | null
  beerChanges?: BeerChangeCreateManyWithoutUserInput | null
  barChanges?: BarChangeCreateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteCreateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteCreateManyWithoutUserInput | null
  likedBeers?: BeerCreateManyWithoutLikedByInput | null
  likedBars?: BarCreateManyWithoutLikedByInput | null
  createdBeers?: BeerCreateManyWithoutCreatedByInput | null
  createdBars?: BarCreateManyWithoutCreatedByInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | Role | null
  role_not_in?: Role[] | Role | null
  active?: Boolean | null
  active_not?: Boolean | null
  nickname?: String | null
  nickname_not?: String | null
  nickname_in?: String[] | String | null
  nickname_not_in?: String[] | String | null
  nickname_lt?: String | null
  nickname_lte?: String | null
  nickname_gt?: String | null
  nickname_gte?: String | null
  nickname_contains?: String | null
  nickname_not_contains?: String | null
  nickname_starts_with?: String | null
  nickname_not_starts_with?: String | null
  nickname_ends_with?: String | null
  nickname_not_ends_with?: String | null
  birthdate?: DateTime | null
  birthdate_not?: DateTime | null
  birthdate_in?: DateTime[] | DateTime | null
  birthdate_not_in?: DateTime[] | DateTime | null
  birthdate_lt?: DateTime | null
  birthdate_lte?: DateTime | null
  birthdate_gt?: DateTime | null
  birthdate_gte?: DateTime | null
  sex?: Sex | null
  sex_not?: Sex | null
  sex_in?: Sex[] | Sex | null
  sex_not_in?: Sex[] | Sex | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  surname?: String | null
  surname_not?: String | null
  surname_in?: String[] | String | null
  surname_not_in?: String[] | String | null
  surname_lt?: String | null
  surname_lte?: String | null
  surname_gt?: String | null
  surname_gte?: String | null
  surname_contains?: String | null
  surname_not_contains?: String | null
  surname_starts_with?: String | null
  surname_not_starts_with?: String | null
  surname_ends_with?: String | null
  surname_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateManyDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
}

export interface UserUpdateManyWithoutLikedBarsInput {
  create?: UserCreateWithoutLikedBarsInput[] | UserCreateWithoutLikedBarsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutLikedBarsInput[] | UserUpdateWithWhereUniqueWithoutLikedBarsInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutLikedBarsInput[] | UserUpsertWithWhereUniqueWithoutLikedBarsInput | null
}

export interface UserUpdateManyWithoutLikedBeersInput {
  create?: UserCreateWithoutLikedBeersInput[] | UserCreateWithoutLikedBeersInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutLikedBeersInput[] | UserUpdateWithWhereUniqueWithoutLikedBeersInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutLikedBeersInput[] | UserUpsertWithWhereUniqueWithoutLikedBeersInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneWithoutBarChangesInput {
  create?: UserCreateWithoutBarChangesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBarChangesDataInput | null
  upsert?: UserUpsertWithoutBarChangesInput | null
}

export interface UserUpdateOneWithoutBarChangeUpvotesInput {
  create?: UserCreateWithoutBarChangeUpvotesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBarChangeUpvotesDataInput | null
  upsert?: UserUpsertWithoutBarChangeUpvotesInput | null
}

export interface UserUpdateOneWithoutBarCommentsInput {
  create?: UserCreateWithoutBarCommentsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBarCommentsDataInput | null
  upsert?: UserUpsertWithoutBarCommentsInput | null
}

export interface UserUpdateOneWithoutBarRatingsInput {
  create?: UserCreateWithoutBarRatingsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBarRatingsDataInput | null
  upsert?: UserUpsertWithoutBarRatingsInput | null
}

export interface UserUpdateOneWithoutBeerChangesInput {
  create?: UserCreateWithoutBeerChangesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBeerChangesDataInput | null
  upsert?: UserUpsertWithoutBeerChangesInput | null
}

export interface UserUpdateOneWithoutBeerChangeUpvotesInput {
  create?: UserCreateWithoutBeerChangeUpvotesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBeerChangeUpvotesDataInput | null
  upsert?: UserUpsertWithoutBeerChangeUpvotesInput | null
}

export interface UserUpdateOneWithoutBeerCommentsInput {
  create?: UserCreateWithoutBeerCommentsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBeerCommentsDataInput | null
  upsert?: UserUpsertWithoutBeerCommentsInput | null
}

export interface UserUpdateOneWithoutBeerRatingsInput {
  create?: UserCreateWithoutBeerRatingsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBeerRatingsDataInput | null
  upsert?: UserUpsertWithoutBeerRatingsInput | null
}

export interface UserUpdateOneWithoutCreatedBarsInput {
  create?: UserCreateWithoutCreatedBarsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutCreatedBarsDataInput | null
  upsert?: UserUpsertWithoutCreatedBarsInput | null
}

export interface UserUpdateOneWithoutCreatedBeersInput {
  create?: UserCreateWithoutCreatedBeersInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutCreatedBeersDataInput | null
  upsert?: UserUpsertWithoutCreatedBeersInput | null
}

export interface UserUpdateOneWithoutPricedBeersInput {
  create?: UserCreateWithoutPricedBeersInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutPricedBeersDataInput | null
  upsert?: UserUpsertWithoutPricedBeersInput | null
}

export interface UserUpdateWithoutBarChangesDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBarChangeUpvotesDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBarCommentsDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBarRatingsDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBeerChangesDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBeerChangeUpvotesDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBeerCommentsDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutBeerRatingsDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutCreatedBarsDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutCreatedBeersDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutLikedBarsDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutLikedBeersDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  pricedBeers?: BeerPriceUpdateManyWithoutUserInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithoutPricedBeersDataInput {
  email?: String | null
  password?: String | null
  role?: Role | null
  active?: Boolean | null
  nickname?: String | null
  birthdate?: DateTime | null
  sex?: Sex | null
  name?: String | null
  surname?: String | null
  beerComments?: BeerCommentUpdateManyWithoutUserInput | null
  barComments?: BarCommentUpdateManyWithoutUserInput | null
  beerRatings?: BeerRatingUpdateManyWithoutUserInput | null
  barRatings?: BarRatingUpdateManyWithoutUserInput | null
  beerChanges?: BeerChangeUpdateManyWithoutUserInput | null
  barChanges?: BarChangeUpdateManyWithoutUserInput | null
  beerChangeUpvotes?: BeerChangeUpvoteUpdateManyWithoutUserInput | null
  barChangeUpvotes?: BarChangeUpvoteUpdateManyWithoutUserInput | null
  likedBeers?: BeerUpdateManyWithoutLikedByInput | null
  likedBars?: BarUpdateManyWithoutLikedByInput | null
  createdBeers?: BeerUpdateManyWithoutCreatedByInput | null
  createdBars?: BarUpdateManyWithoutCreatedByInput | null
}

export interface UserUpdateWithWhereUniqueWithoutLikedBarsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLikedBarsDataInput
}

export interface UserUpdateWithWhereUniqueWithoutLikedBeersInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLikedBeersDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
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
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | Role | null
  role_not_in?: Role[] | Role | null
  active?: Boolean | null
  active_not?: Boolean | null
  nickname?: String | null
  nickname_not?: String | null
  nickname_in?: String[] | String | null
  nickname_not_in?: String[] | String | null
  nickname_lt?: String | null
  nickname_lte?: String | null
  nickname_gt?: String | null
  nickname_gte?: String | null
  nickname_contains?: String | null
  nickname_not_contains?: String | null
  nickname_starts_with?: String | null
  nickname_not_starts_with?: String | null
  nickname_ends_with?: String | null
  nickname_not_ends_with?: String | null
  birthdate?: DateTime | null
  birthdate_not?: DateTime | null
  birthdate_in?: DateTime[] | DateTime | null
  birthdate_not_in?: DateTime[] | DateTime | null
  birthdate_lt?: DateTime | null
  birthdate_lte?: DateTime | null
  birthdate_gt?: DateTime | null
  birthdate_gte?: DateTime | null
  sex?: Sex | null
  sex_not?: Sex | null
  sex_in?: Sex[] | Sex | null
  sex_not_in?: Sex[] | Sex | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  surname?: String | null
  surname_not?: String | null
  surname_in?: String[] | String | null
  surname_not_in?: String[] | String | null
  surname_lt?: String | null
  surname_lte?: String | null
  surname_gt?: String | null
  surname_gte?: String | null
  surname_contains?: String | null
  surname_not_contains?: String | null
  surname_starts_with?: String | null
  surname_not_starts_with?: String | null
  surname_ends_with?: String | null
  surname_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  beerComments_every?: BeerCommentWhereInput | null
  beerComments_some?: BeerCommentWhereInput | null
  beerComments_none?: BeerCommentWhereInput | null
  barComments_every?: BarCommentWhereInput | null
  barComments_some?: BarCommentWhereInput | null
  barComments_none?: BarCommentWhereInput | null
  beerRatings_every?: BeerRatingWhereInput | null
  beerRatings_some?: BeerRatingWhereInput | null
  beerRatings_none?: BeerRatingWhereInput | null
  barRatings_every?: BarRatingWhereInput | null
  barRatings_some?: BarRatingWhereInput | null
  barRatings_none?: BarRatingWhereInput | null
  beerChanges_every?: BeerChangeWhereInput | null
  beerChanges_some?: BeerChangeWhereInput | null
  beerChanges_none?: BeerChangeWhereInput | null
  barChanges_every?: BarChangeWhereInput | null
  barChanges_some?: BarChangeWhereInput | null
  barChanges_none?: BarChangeWhereInput | null
  beerChangeUpvotes_every?: BeerChangeUpvoteWhereInput | null
  beerChangeUpvotes_some?: BeerChangeUpvoteWhereInput | null
  beerChangeUpvotes_none?: BeerChangeUpvoteWhereInput | null
  barChangeUpvotes_every?: BarChangeUpvoteWhereInput | null
  barChangeUpvotes_some?: BarChangeUpvoteWhereInput | null
  barChangeUpvotes_none?: BarChangeUpvoteWhereInput | null
  pricedBeers_every?: BeerPriceWhereInput | null
  pricedBeers_some?: BeerPriceWhereInput | null
  pricedBeers_none?: BeerPriceWhereInput | null
  likedBeers_every?: BeerWhereInput | null
  likedBeers_some?: BeerWhereInput | null
  likedBeers_none?: BeerWhereInput | null
  likedBars_every?: BarWhereInput | null
  likedBars_some?: BarWhereInput | null
  likedBars_none?: BarWhereInput | null
  createdBeers_every?: BeerWhereInput | null
  createdBeers_some?: BeerWhereInput | null
  createdBeers_none?: BeerWhereInput | null
  createdBars_every?: BarWhereInput | null
  createdBars_some?: BarWhereInput | null
  createdBars_none?: BarWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
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

export interface AggregateBeerBarConnectionChange {
  count: Int
}

export interface AggregateBeerBarConnectionChangeUpvote {
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

export interface AggregateBeerPriceChange {
  count: Int
}

export interface AggregateBeerPriceChangeUpvote {
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
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos: Array<String>
  beers?: Array<Beer> | null
  barRating?: Array<BarRating> | null
  barComments?: Array<BarComment> | null
  barChanges?: Array<BarChange> | null
  beerPrices?: Array<BeerPrice> | null
  beerConnections?: Array<BeerBarConnectionChange> | null
  createdBy?: User | null
  likedBy?: Array<User> | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BarChange extends Node {
  id: ID_Output
  field: String
  newValue: String
  user?: User | null
  bar: Bar
  upvotes?: Array<BarChangeUpvote> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BarChangeConnection {
  pageInfo: PageInfo
  edges: Array<BarChangeEdge | null>
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
  field: String
  newValue: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BarChangeSubscriptionPayload {
  mutation: MutationType
  node?: BarChange | null
  updatedFields?: Array<String> | null
  previousValues?: BarChangePreviousValues | null
}

export interface BarChangeUpvote extends Node {
  id: ID_Output
  user?: User | null
  barChange: BarChange
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BarChangeUpvoteConnection {
  pageInfo: PageInfo
  edges: Array<BarChangeUpvoteEdge | null>
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
  createdAt: DateTime
}

export interface BarChangeUpvoteSubscriptionPayload {
  mutation: MutationType
  node?: BarChangeUpvote | null
  updatedFields?: Array<String> | null
  previousValues?: BarChangeUpvotePreviousValues | null
}

export interface BarComment extends Node {
  id: ID_Output
  comment: String
  bar: Bar
  user?: User | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BarCommentConnection {
  pageInfo: PageInfo
  edges: Array<BarCommentEdge | null>
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
  updatedAt: DateTime
}

export interface BarCommentSubscriptionPayload {
  mutation: MutationType
  node?: BarComment | null
  updatedFields?: Array<String> | null
  previousValues?: BarCommentPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface BarConnection {
  pageInfo: PageInfo
  edges: Array<BarEdge | null>
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
  phone?: String | null
  openTime?: DateTime | null
  closeTime?: DateTime | null
  photos: Array<String>
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BarRating extends Node {
  id: ID_Output
  rating: Float
  user?: User | null
  bar: Bar
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BarRatingConnection {
  pageInfo: PageInfo
  edges: Array<BarRatingEdge | null>
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
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BarRatingSubscriptionPayload {
  mutation: MutationType
  node?: BarRating | null
  updatedFields?: Array<String> | null
  previousValues?: BarRatingPreviousValues | null
}

export interface BarSubscriptionPayload {
  mutation: MutationType
  node?: Bar | null
  updatedFields?: Array<String> | null
  previousValues?: BarPreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Beer extends Node {
  id: ID_Output
  name: String
  type: String
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  brewery?: Brewery | null
  bars?: Array<Bar> | null
  beerRating?: Array<BeerRating> | null
  beerComments?: Array<BeerComment> | null
  beerChanges?: Array<BeerChange> | null
  beerPrices?: Array<BeerPrice> | null
  barConnections?: Array<BeerBarConnectionChange> | null
  createdBy?: User | null
  likedBy?: Array<User> | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerBarConnectionChange extends Node {
  id: ID_Output
  type: ConnectionChangeType
  user?: User | null
  beer: Beer
  bar: Bar
  upvotes?: Array<BeerBarConnectionChangeUpvote> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerBarConnectionChangeConnection {
  pageInfo: PageInfo
  edges: Array<BeerBarConnectionChangeEdge | null>
  aggregate: AggregateBeerBarConnectionChange
}

/*
 * An edge in a connection.

 */
export interface BeerBarConnectionChangeEdge {
  node: BeerBarConnectionChange
  cursor: String
}

export interface BeerBarConnectionChangePreviousValues {
  id: ID_Output
  type: ConnectionChangeType
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerBarConnectionChangeSubscriptionPayload {
  mutation: MutationType
  node?: BeerBarConnectionChange | null
  updatedFields?: Array<String> | null
  previousValues?: BeerBarConnectionChangePreviousValues | null
}

export interface BeerBarConnectionChangeUpvote extends Node {
  id: ID_Output
  user?: User | null
  beerBarConnectionChange: BeerBarConnectionChange
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerBarConnectionChangeUpvoteConnection {
  pageInfo: PageInfo
  edges: Array<BeerBarConnectionChangeUpvoteEdge | null>
  aggregate: AggregateBeerBarConnectionChangeUpvote
}

/*
 * An edge in a connection.

 */
export interface BeerBarConnectionChangeUpvoteEdge {
  node: BeerBarConnectionChangeUpvote
  cursor: String
}

export interface BeerBarConnectionChangeUpvotePreviousValues {
  id: ID_Output
  createdAt: DateTime
}

export interface BeerBarConnectionChangeUpvoteSubscriptionPayload {
  mutation: MutationType
  node?: BeerBarConnectionChangeUpvote | null
  updatedFields?: Array<String> | null
  previousValues?: BeerBarConnectionChangeUpvotePreviousValues | null
}

export interface BeerChange extends Node {
  id: ID_Output
  field: BeerField
  newValue: String
  user?: User | null
  beer: Beer
  upvotes?: Array<BeerChangeUpvote> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerChangeConnection {
  pageInfo: PageInfo
  edges: Array<BeerChangeEdge | null>
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
  field: BeerField
  newValue: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerChangeSubscriptionPayload {
  mutation: MutationType
  node?: BeerChange | null
  updatedFields?: Array<String> | null
  previousValues?: BeerChangePreviousValues | null
}

export interface BeerChangeUpvote extends Node {
  id: ID_Output
  user?: User | null
  beerChange: BeerChange
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerChangeUpvoteConnection {
  pageInfo: PageInfo
  edges: Array<BeerChangeUpvoteEdge | null>
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
  createdAt: DateTime
}

export interface BeerChangeUpvoteSubscriptionPayload {
  mutation: MutationType
  node?: BeerChangeUpvote | null
  updatedFields?: Array<String> | null
  previousValues?: BeerChangeUpvotePreviousValues | null
}

export interface BeerComment extends Node {
  id: ID_Output
  comment: String
  beer: Beer
  user?: User | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerCommentConnection {
  pageInfo: PageInfo
  edges: Array<BeerCommentEdge | null>
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
  updatedAt: DateTime
}

export interface BeerCommentSubscriptionPayload {
  mutation: MutationType
  node?: BeerComment | null
  updatedFields?: Array<String> | null
  previousValues?: BeerCommentPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface BeerConnection {
  pageInfo: PageInfo
  edges: Array<BeerEdge | null>
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
  strong?: String | null
  photo?: String | null
  avgRating?: Float | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerPrice extends Node {
  id: ID_Output
  price: Float
  user?: User | null
  bar: Bar
  beer: Beer
  changes?: Array<BeerPriceChange> | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerPriceChange extends Node {
  id: ID_Output
  newPrice: Float
  beerPrice: BeerPrice
  user?: User | null
  upvotes?: Array<BeerPriceChangeUpvote> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerPriceChangeConnection {
  pageInfo: PageInfo
  edges: Array<BeerPriceChangeEdge | null>
  aggregate: AggregateBeerPriceChange
}

/*
 * An edge in a connection.

 */
export interface BeerPriceChangeEdge {
  node: BeerPriceChange
  cursor: String
}

export interface BeerPriceChangePreviousValues {
  id: ID_Output
  newPrice: Float
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerPriceChangeSubscriptionPayload {
  mutation: MutationType
  node?: BeerPriceChange | null
  updatedFields?: Array<String> | null
  previousValues?: BeerPriceChangePreviousValues | null
}

export interface BeerPriceChangeUpvote extends Node {
  id: ID_Output
  user?: User | null
  beerPriceChange: BeerPriceChange
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerPriceChangeUpvoteConnection {
  pageInfo: PageInfo
  edges: Array<BeerPriceChangeUpvoteEdge | null>
  aggregate: AggregateBeerPriceChangeUpvote
}

/*
 * An edge in a connection.

 */
export interface BeerPriceChangeUpvoteEdge {
  node: BeerPriceChangeUpvote
  cursor: String
}

export interface BeerPriceChangeUpvotePreviousValues {
  id: ID_Output
  createdAt: DateTime
}

export interface BeerPriceChangeUpvoteSubscriptionPayload {
  mutation: MutationType
  node?: BeerPriceChangeUpvote | null
  updatedFields?: Array<String> | null
  previousValues?: BeerPriceChangeUpvotePreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface BeerPriceConnection {
  pageInfo: PageInfo
  edges: Array<BeerPriceEdge | null>
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
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerPriceSubscriptionPayload {
  mutation: MutationType
  node?: BeerPrice | null
  updatedFields?: Array<String> | null
  previousValues?: BeerPricePreviousValues | null
}

export interface BeerRating extends Node {
  id: ID_Output
  rating: Int
  user?: User | null
  beer: Beer
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BeerRatingConnection {
  pageInfo: PageInfo
  edges: Array<BeerRatingEdge | null>
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
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BeerRatingSubscriptionPayload {
  mutation: MutationType
  node?: BeerRating | null
  updatedFields?: Array<String> | null
  previousValues?: BeerRatingPreviousValues | null
}

export interface BeerSubscriptionPayload {
  mutation: MutationType
  node?: Beer | null
  updatedFields?: Array<String> | null
  previousValues?: BeerPreviousValues | null
}

export interface Brewery extends Node {
  id: ID_Output
  name: String
  country: String
  logo?: String | null
  beers?: Array<Beer> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BreweryConnection {
  pageInfo: PageInfo
  edges: Array<BreweryEdge | null>
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
  logo?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BrewerySubscriptionPayload {
  mutation: MutationType
  node?: Brewery | null
  updatedFields?: Array<String> | null
  previousValues?: BreweryPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
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
  name?: String | null
  surname?: String | null
  beerComments?: Array<BeerComment> | null
  barComments?: Array<BarComment> | null
  beerRatings?: Array<BeerRating> | null
  barRatings?: Array<BarRating> | null
  beerChanges?: Array<BeerChange> | null
  barChanges?: Array<BarChange> | null
  beerChangeUpvotes?: Array<BeerChangeUpvote> | null
  barChangeUpvotes?: Array<BarChangeUpvote> | null
  pricedBeers?: Array<BeerPrice> | null
  likedBeers?: Array<Beer> | null
  likedBars?: Array<Bar> | null
  createdBeers?: Array<Beer> | null
  createdBars?: Array<Bar> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
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
  name?: String | null
  surname?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
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