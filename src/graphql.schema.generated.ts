/* tslint:disable */
export enum BarField {
    NAME = "NAME",
    ADDRESS_CHANGE = "ADDRESS_CHANGE",
    PHONE = "PHONE",
    OPEN_TIME = "OPEN_TIME",
    CLOSE_TIME = "CLOSE_TIME"
}

export enum BeerField {
    NAME = "NAME",
    TYPE = "TYPE",
    STRONG = "STRONG",
    PHOTO = "PHOTO",
    BREWERY = "BREWERY"
}

export enum ConnectionChangeType {
    ADD = "ADD",
    REMOVE = "REMOVE"
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum Sex {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export class AddressChange {
    lat: string;
    long: string;
}

export class ChangeBarInput {
    field: BarField;
    barId: string;
    newValue?: string;
    newAddressValue?: AddressChange;
}

export class ChangeBeerInput {
    field: BeerField;
    newValue: string;
    beerId: string;
}

export class ChangeBeerTypeInput {
    beerTypeId: string;
    newDescription: string;
}

export class CommentBarInput {
    barId: string;
    comment: string;
}

export class CommentBeerInput {
    beerId: string;
    comment: string;
}

export class CreateBarInput {
    name: string;
    lat: string;
    long: string;
    address?: string;
    openTime?: DateTime;
    closeTime?: DateTime;
    photos: string[];
    beerIds: string[];
}

export class CreateBeerInput {
    name: string;
    photo?: string;
    strong?: string;
    breweryId?: string;
    typeId?: string;
    barIds: string[];
}

export class CreateBeerTypeInput {
    name: string;
    description?: string;
    beerIds: string[];
}

export class CreateBreweryInput {
    name: string;
    country: string;
    logo?: string;
}

export class DistanceSearch {
    lat: string;
    long: string;
    distance: number;
}

export class FindBarInput {
    name?: string;
    openNow?: boolean;
    distance?: DistanceSearch;
}

export class FindBeerInput {
    name?: string;
    type?: string;
    strong?: string;
    brewery?: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class RateBarInput {
    barId: string;
    rating: number;
}

export class RateBeerInput {
    beerId: string;
    rating: number;
}

export class SignUpInput {
    email: string;
    password: string;
    nickname: string;
    sex: Sex;
    birthdate: DateTime;
}

export class UpvoteBarChangeInput {
    barChangeId: string;
}

export class UpvoteBeerChangeInput {
    beerChangeId: string;
}

export class AuthPayload {
    user?: User;
}

export class Bar {
    id: string;
    name: string;
    address: string;
    lat: string;
    long: string;
    phone?: string;
    openTime?: DateTime;
    closeTime?: DateTime;
    photos: string[];
    beers: Beer[];
    barRating: BarRating[];
    barComments: BarComment[];
    barChanges: BarChange[];
    beerPrices: BeerPrice[];
    beerConnections: BeerBarConnectionChange[];
    createdBy?: User;
    likedBy: User[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BarChange {
    id: string;
    field: string;
    newValue: string;
    user?: User;
    bar: Bar;
    upvotes: BarChangeUpvote[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BarChangeUpvote {
    id: string;
    user?: User;
    barChange: BarChange;
    createdAt: DateTime;
}

export class BarComment {
    id: string;
    comment: string;
    bar: Bar;
    user?: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BarRating {
    id: string;
    rating: number;
    user?: User;
    bar: Bar;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Beer {
    id: string;
    name: string;
    strong?: string;
    photo?: string;
    avgRating?: number;
    brewery?: Brewery;
    type?: BeerType;
    bars: Bar[];
    beerRating: BeerRating[];
    beerComments: BeerComment[];
    beerChanges: BeerChange[];
    beerPrices: BeerPrice[];
    barConnections: BeerBarConnectionChange[];
    createdBy?: User;
    likedBy: User[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerBarConnectionChange {
    id: string;
    type: ConnectionChangeType;
    user?: User;
    beer: Beer;
    bar: Bar;
    upvotes: BeerBarConnectionChangeUpvote[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerBarConnectionChangeUpvote {
    id: string;
    user?: User;
    beerBarConnectionChange: BeerBarConnectionChange;
    createdAt: DateTime;
}

export class BeerChange {
    id: string;
    field: BeerField;
    newValue: string;
    user?: User;
    beer: Beer;
    upvotes: BeerChangeUpvote[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerChangeUpvote {
    id: string;
    user?: User;
    beerChange: BeerChange;
    createdAt: DateTime;
}

export class BeerComment {
    id: string;
    comment: string;
    beer: Beer;
    user?: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerPrice {
    id: string;
    price: number;
    user?: User;
    bar: Bar;
    beer: Beer;
    changes: BeerPriceChange[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerPriceChange {
    id: string;
    newPrice: number;
    beerPrice: BeerPrice;
    user?: User;
    upvotes: BeerPriceChangeUpvote[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerPriceChangeUpvote {
    id: string;
    user?: User;
    beerPriceChange: BeerPriceChange;
    createdAt: DateTime;
}

export class BeerRating {
    id: string;
    rating: number;
    user?: User;
    beer: Beer;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerType {
    id: string;
    name: string;
    description?: string;
    beers: Beer[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Brewery {
    id: string;
    name: string;
    country: string;
    logo?: string;
    beers: Beer[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class IMutation {
    abstract createBar(createBarInput?: CreateBarInput): Bar | Promise<Bar>;

    abstract commentBar(commentBarInput?: CommentBarInput): BarComment | Promise<BarComment>;

    abstract rateBar(rateBarInput?: RateBarInput): Bar | Promise<Bar>;

    abstract changeBar(changeBarInput?: ChangeBarInput): BarChange | Promise<BarChange>;

    abstract upvoteBarChange(upvoteBarChangeInput?: UpvoteBarChangeInput): UpvoteBarChangeUnion | Promise<UpvoteBarChangeUnion>;

    abstract createBeerType(createBeerTypeInput?: CreateBeerTypeInput): BeerType | Promise<BeerType>;

    abstract changeBeerType(changeBeerTypeInput?: ChangeBeerTypeInput): BeerType | Promise<BeerType>;

    abstract createBeer(createBeerInput?: CreateBeerInput): Beer | Promise<Beer>;

    abstract commentBeer(commentBeerInput?: CommentBeerInput): BeerComment | Promise<BeerComment>;

    abstract rateBeer(rateBeerInput?: RateBeerInput): Beer | Promise<Beer>;

    abstract changeBeer(changeBeerInput?: ChangeBeerInput): BeerChange | Promise<BeerChange>;

    abstract upvoteBeerChange(upvoteBeerChangeInput?: UpvoteBeerChangeInput): UpvoteBeerChangeUnion | Promise<UpvoteBeerChangeUnion>;

    abstract createBrewery(createBreweryInput?: CreateBreweryInput): Brewery | Promise<Brewery>;

    abstract signup(signUpInput?: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract login(loginInput?: LoginInput): AuthPayload | Promise<AuthPayload>;
}

export abstract class IQuery {
    abstract getBars(): Bar[] | Promise<Bar[]>;

    abstract bar(id: string): Bar | Promise<Bar>;

    abstract findBars(findBarInput?: FindBarInput): Bar[] | Promise<Bar[]>;

    abstract beerTypes(): BeerType[] | Promise<BeerType[]>;

    abstract beerType(id: string): BeerType | Promise<BeerType>;

    abstract beers(): Beer[] | Promise<Beer[]>;

    abstract beer(id: string): Beer | Promise<Beer>;

    abstract findBeers(findBeerInput?: FindBeerInput): Beer[] | Promise<Beer[]>;

    abstract breweries(): Brewery[] | Promise<Brewery[]>;

    abstract brewery(id: string): Brewery | Promise<Brewery>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    id: string;
    email: string;
    role: Role;
    active: boolean;
    nickname: string;
    birthdate: DateTime;
    sex: Sex;
    name?: string;
    surname?: string;
    beerComments: BeerComment[];
    barComments: BarComment[];
    beerRatings: BeerRating[];
    barRatings: BarRating[];
    beerChanges: BeerChange[];
    barChanges: BarChange[];
    beerChangeUpvotes: BeerChangeUpvote[];
    barChangeUpvotes: BarChangeUpvote[];
    pricedBeers: BeerPrice[];
    likedBeers: Beer[];
    likedBars: Bar[];
    createdBeers: Beer[];
    createdBars: Bar[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
export type UpvoteBarChangeUnion = BarChangeUpvote | Bar;
export type UpvoteBeerChangeUnion = BeerChangeUpvote | Beer;
