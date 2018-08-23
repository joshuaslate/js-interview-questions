import { sumArray } from '../../general/reduce';

// sumArray sample solution #1
// export const sumArray = (givenArray = []) => {
//   return givenArray.reduce((accum, curr) => {
//     return accum + curr;
//   }, 0);
// };

describe('General JavaScript Interview Questions (Reduce)', () => {
  it('the sum of all the numbers in a given array of numbers', () => {
    expect(sumArray([27, 85, 213, 30])).toEqual(355);
  });
});
