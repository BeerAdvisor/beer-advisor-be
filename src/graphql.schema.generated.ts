export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
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
    breweryId: string;
    description?: string;
    photo?: string;
    barIds: string[];
}

export class CreateBreweryInput {
    name: string;
    logo?: string;
    country?: string;
    description?: string;
    beerIds: string[];
}

export class RateBeerInput {
    beerId: string;
    rating: number;
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
    openTime?: DateTime;
    closeTime?: DateTime;
    photos: string[];
    beers: Beer[];
}

export class Beer {
    id: string;
    name: string;
    brewery: Brewery;
    photo?: string;
    description?: string;
    bars: Bar[];
    beerRating: BeerRating[];
    comments: BeerComment[];
}

export class BeerComment {
    id: string;
    beer: Beer;
    user: User;
    comment: string;
    timestamp: DateTime;
}

export class BeerRating {
    id: string;
    user: User;
    beer: Beer;
    rating: number;
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

    abstract createBrewery(createBreweryInput?: CreateBreweryInput): Brewery | Promise<Brewery>;

    abstract commentBrewery(commentBreweryInput?: CommentBreweryInput): BreweryComment | Promise<BreweryComment>;

    abstract signup(email: string, password: string, name: string): AuthPayload | Promise<AuthPayload>;

    abstract login(email: string, password: string): AuthPayload | Promise<AuthPayload>;
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
    role: Role;
    active: boolean;
    name?: string;
    beerComments: BeerComment[];
    breweryComments: BreweryComment[];
    beerRatings: BeerRating[];
}

export type DateTime = any;
