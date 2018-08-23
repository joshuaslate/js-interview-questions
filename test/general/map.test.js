import { squareInputArray } from '../../general/map';

// squareInputArray sample solution #1
// export const squareInputArray = (givenArray = []) => {
//   return givenArray.map(num => num * num);
// };

describe('General JavaScript Interview Questions (Map)', () => {
  it('should return a new array of squared values, given an array of numbers', () => {
    expect(squareInputArray([24, 42, 36, 64, 5709, 313040])).toEqual([576, 1764, 1296, 4096, 32592681, 97994041600]);
  });
});
