import { IRating } from '../interfaces/i-rating.interface';

export const calculateAverageRating = <T extends IRating>(ratings: T[]) => ratings.reduce((acc, value) => acc + value.rating, 0) / ratings.length;
