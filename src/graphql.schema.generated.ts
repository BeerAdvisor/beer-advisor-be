/* tslint:disable */
export enum BeerField {
    NAME = "NAME",
    TYPE = "TYPE",
    STRONG = "STRONG",
    PHOTO = "PHOTO",
    BREWERY = "BREWERY"
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum Sex {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export class ChangeBeerInput {
    field: BeerField;
    newValue: string;
    beerId: string;
}

export class CommentBeerInput {
    beerId: string;
    comment: string;
}

export class CommentBreweryInput {
    breweryId: string;
    comment: string;
}

export class CreateBarInput {
    name: string;
    address: string;
    lat: string;
    long: string;
    openTime?: DateTime;
    closeTime?: DateTime;
    photos: string[];
    beerIds: string[];
}

export class CreateBeerInput {
    name: string;
    type: string;
    photo?: string;
    strong?: string;
    breweryId?: string;
    barIds: string[];
}

export class CreateBreweryInput {
    name: string;
    logo?: string;
    country?: string;
    description?: string;
    beerIds: string[];
}

export class LoginInput {
    email: string;
    password: string;
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
    beerPrices: BeerPrice[];
    barComments: BarComment[];
    barChanges: BarChange[];
    createdBy: User;
    likedBy: User[];
}

export class BarChange {
    id: string;
    price: number;
    field: string;
    newValue: string;
    user: User;
    bar: Bar;
    upvotes: BarChangeUpvote[];
    createdAt: DateTime;
}

export class BarChangeUpvote {
    id: string;
    user: User;
    barChange: BarChange;
}

export class BarComment {
    id: string;
    comment: string;
    bar: Bar;
    user: User;
    createdAt: DateTime;
}

export class BarRating {
    id: string;
    rating: number;
    user: User;
    bar: Bar;
}

export class Beer {
    id: string;
    name: string;
    type: string;
    strong?: string;
    photo?: string;
    brewery?: Brewery;
    bars: Bar[];
    beerRating: BeerRating[];
    beerPrices: BeerPrice[];
    beerComments: BeerComment[];
    beerChanges: BeerChange[];
    createdBy: User;
    likedBy: User[];
}

export class BeerChange {
    id: string;
    price: number;
    field: BeerField;
    newValue: string;
    user: User;
    beer: Beer;
    upvotes: BeerChangeUpvote[];
    createdAt: DateTime;
}

export class BeerChangeUpvote {
    id: string;
    user: User;
    beerChange: BeerChange;
}

export class BeerComment {
    id: string;
    comment: string;
    beer: Beer;
    user: User;
    createdAt: DateTime;
}

export class BeerPrice {
    id: string;
    price: number;
    user: User;
    bar: Bar;
    beer: Beer;
}

export class BeerRating {
    id: string;
    rating: number;
    user: User;
    beer: Beer;
}

export class Brewery {
    id: string;
    name: string;
    logo?: string;
    country?: string;
    description?: string;
    beers: Beer[];
    comments: BreweryComment[];
}

export class BreweryComment {
    id: string;
    brewery: Brewery;
    user: User;
    comment: string;
    timestamp: DateTime;
}

export abstract class IMutation {
    abstract createBar(createBarInput?: CreateBarInput): Bar | Promise<Bar>;

    abstract createBeer(createBeerInput?: CreateBeerInput): Beer | Promise<Beer>;

    abstract commentBeer(commentBeerInput?: CommentBeerInput): BeerComment | Promise<BeerComment>;

    abstract rateBeer(rateBeerInput?: RateBeerInput): BeerRating | Promise<BeerRating>;

    abstract changeBeer(changeBeerInput?: ChangeBeerInput): BeerChange | Promise<BeerChange>;

    abstract createBrewery(createBreweryInput?: CreateBreweryInput): Brewery | Promise<Brewery>;

    abstract commentBrewery(commentBreweryInput?: CommentBreweryInput): BreweryComment | Promise<BreweryComment>;

    abstract signup(signUpInput?: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract login(loginInput?: LoginInput): AuthPayload | Promise<AuthPayload>;
}

export abstract class IQuery {
    abstract getBars(): Bar[] | Promise<Bar[]>;

    abstract bar(id: string): Bar | Promise<Bar>;

    abstract getBeers(): Beer[] | Promise<Beer[]>;

    abstract beer(id: string): Beer | Promise<Beer>;

    abstract getBreweries(): Brewery[] | Promise<Brewery[]>;

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
}

export type DateTime = any;
