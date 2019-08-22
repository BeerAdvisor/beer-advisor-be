export interface FourSquareVenueContact {
  phone: string;
  formattedPhone: string;
  twitter: string;
  instagram: string;
  facebook: string;
  facebookUsername: string;
  facebookName: string;
}

export interface FourSquareVenueLocation {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  distance: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

export interface FourSquareIcon {
  prefix: string;
  suffix: string;
}

export interface FourSquareCategory {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: FourSquareIcon;
  primary: boolean;
}

export interface FourSquareNowHere {
  count: number;
  summary: string;
}

export interface FourSquareVenue {
  id: string;
  name: string;
  contact: FourSquareVenueContact;
  location: FourSquareVenueLocation;
  verified: boolean;
  categories: FourSquareCategory[];
  referralId: string;
  hereNow: FourSquareNowHere;
  venueChains: any;
  hasPerk: false;
}

export interface FourSquareApiResponse {
    venues: FourSquareVenue[];
}

export interface FourSquareApiResult {
    response: FourSquareApiResponse;
}