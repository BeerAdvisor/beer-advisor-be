export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
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
    brewery?: Brewery;
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
    abstract createBeer(name: string, photo?: string, description?: string): Beer | Promise<Beer>;
}

export abstract class IQuery {
    abstract getBeers(): Beer[] | Promise<Beer[]>;
    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    id: string;
    email: string;
    password: string;
    role: Role;
    active: boolean;
    name?: string;
    beerComments: BeerComment[];
    breweryComments: BreweryComment[];
    beerRatings: BeerRating[];
}

export type DateTime = any;
