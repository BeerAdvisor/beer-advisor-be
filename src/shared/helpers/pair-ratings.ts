import { countBy, map } from 'ramda';
import { IRating } from '../interfaces/i-rating.interface';

const pairRatings = <T extends IRating>(ratings: T[]) => countBy((r: number) => r)(map((rating: T) => rating.rating, ratings));

const weightedMean = (arrValues: number[], arrWeights: number[]) => {
  const result = arrValues
    .map((value, i) => {
      const weight = arrWeights[i];
      const sum = value * weight;
      return [sum, weight];
    })
    .reduce((p, c) => [p[0] + c[0], p[1] + c[1]], [0, 0]);

  return result[0] / result[1];
};

export const calculateAverageWeight = <T extends IRating>(ratings: T[]) => {
  const pairedRatings = pairRatings(ratings);
  return weightedMean(Object.keys(pairedRatings).map(v => +v), Object.values(pairedRatings));
};
