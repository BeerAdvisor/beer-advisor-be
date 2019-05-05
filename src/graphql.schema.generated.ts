
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum Sex {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export class AttachBeerInput {
    beerId: string;
    barId: string;
    price: number;
}

export class BeerListItemInput {
    beerId: string;
    price?: number;
}

export class ChangeBarInput {
    name?: string;
    lat?: string;
    long?: string;
    address?: string;
    openTime?: DateTime;
    closeTime?: DateTime;
    phone?: string;
    photos: string[];
    beers: BeerListItemInput[];
}

export class ChangeBeerInput {
    beerId: string;
    name?: string;
    strong?: string;
    photo?: string;
    breweryId?: string;
    typeId?: string;
    includeIn: IncludeInInput[];
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
    phone?: string;
    photos: string[];
    beers: BeerListItemInput[];
}

export class CreateBeerInput {
    name: string;
    strong?: string;
    photo?: string;
    breweryId?: string;
    typeId?: string;
    includeIn: IncludeInInput[];
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
    maxPrice?: number;
    minPrice?: number;
}

export class IncludeInInput {
    barId: string;
    price?: number;
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

export class AuthPayload {
    id: string;
    email: string;
    role: Role;
    active: boolean;
    nickname: string;
    birthdate: DateTime;
    sex: Sex;
    name?: string;
    surname?: string;
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
    barRating: BarRating[];
    barComments: BarComment[];
    barChanges: BarChange[];
    beerList: BeerList;
    createdBy?: User;
    likedBy: User[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BarChange {
    id: string;
    name?: string;
    address?: string;
    lat?: string;
    long?: string;
    phone?: string;
    openTime?: DateTime;
    closeTime?: DateTime;
    checked?: boolean;
    accepted?: boolean;
    bar: Bar;
    beerList: BeerList;
    user?: User;
    createdAt: DateTime;
    updatedAt: DateTime;
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
    beerRating: BeerRating[];
    beerComments: BeerComment[];
    beerChanges: BeerChange[];
    includedIn: BeerListItem[];
    createdBy?: User;
    likedBy: User[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerChange {
    id: string;
    name?: string;
    strong?: string;
    photo?: string;
    brewery?: Brewery;
    type?: BeerType;
    checked?: boolean;
    accepted?: boolean;
    beer: Beer;
    user?: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerComment {
    id: string;
    comment: string;
    beer: Beer;
    user?: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerList {
    id: string;
    bar?: Bar;
    items: BeerListItem[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class BeerListItem {
    id: string;
    price: number;
    beer: Beer;
    beerList: BeerList;
    createdAt: DateTime;
    updatedAt: DateTime;
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
    abstract createBeer(createBeerInput?: CreateBeerInput): Beer | Promise<Beer>;

    abstract commentBeer(commentBeerInput?: CommentBeerInput): BeerComment | Promise<BeerComment>;

    abstract rateBeer(rateBeerInput?: RateBeerInput): Beer | Promise<Beer>;

    abstract changeBeer(changeBeerInput?: ChangeBeerInput): BeerChange | Promise<BeerChange>;

    abstract attachBeer(attachBeerInput?: AttachBeerInput): Bar | Promise<Bar>;

    abstract createBeerType(createBeerTypeInput?: CreateBeerTypeInput): BeerType | Promise<BeerType>;

    abstract changeBeerType(changeBeerTypeInput?: ChangeBeerTypeInput): BeerType | Promise<BeerType>;

    abstract createBar(createBarInput?: CreateBarInput): Bar | Promise<Bar>;

    abstract commentBar(commentBarInput?: CommentBarInput): BarComment | Promise<BarComment>;

    abstract rateBar(rateBarInput?: RateBarInput): Bar | Promise<Bar>;

    abstract changeBar(changeBarInput?: ChangeBarInput): BarChange | Promise<BarChange>;

    abstract createBrewery(createBreweryInput?: CreateBreweryInput): Brewery | Promise<Brewery>;

    abstract signup(signUpInput?: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract login(loginInput?: LoginInput): AuthPayload | Promise<AuthPayload>;
}

export abstract class IQuery {
    abstract beers(): Beer[] | Promise<Beer[]>;

    abstract beer(id: string): Beer | Promise<Beer>;

    abstract findBeers(findBeerInput?: FindBeerInput): Beer[] | Promise<Beer[]>;

    abstract beerTypes(): BeerType[] | Promise<BeerType[]>;

    abstract beerType(id: string): BeerType | Promise<BeerType>;

    abstract bars(): Bar[] | Promise<Bar[]>;

    abstract bar(id: string): Bar | Promise<Bar>;

    abstract findBars(findBarInput?: FindBarInput): Bar[] | Promise<Bar[]>;

    abstract breweries(): Brewery[] | Promise<Brewery[]>;

    abstract brewery(id: string): Brewery | Promise<Brewery>;

    abstract user(): User | Promise<User>;

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
    likedBeers: Beer[];
    likedBars: Bar[];
    createdBeers: Beer[];
    createdBars: Bar[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
