import { flattenArray } from '../../general/recursion';

// flattenArray solution #1:
// export const flattenArray = (arr = []) => {
//   return arr.reduce((accum, item) => {
//     if (Array.isArray(item)) {
//       accum = [...accum, ...flattenArray(item)];
//     } else {
//       accum.push(item);
//     }

//     return accum;
//   }, []);
// };

// flattenArray solution #2:
// export const flattenArray = (arr = []) => {
//   let returnArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       returnArr = returnArr.concat(flattenArray(arr[i]));
//     } else {
//       returnArr.push(arr[i]);
//     }
//   }

//   return returnArr;
// };

describe('General JavaScript Interview Questions (Recursion)', () => {
  it('should properly flatten an array', () => {
    expect(flattenArray([1, 2, 3, 'hello', 'world', [15, 25, 32, [16, 12, [23]]]]))
      .toEqual([1, 2, 3, 'hello', 'world', 15, 25, 32, 16, 12, 23]);
  });
});
