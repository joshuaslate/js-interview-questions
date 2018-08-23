import { handlePromise, handleAsyncAwait, helloFutureMe } from '../../general/async';

// helloFutureMe sample solution #1
// export const helloFutureMe = () => {
//   return new Promise(resolve => setTimeout(resolve, 1000, 'Hello, future me'));
// };

// handlePromise sample solution #1
// export const handlePromise = (workFn) => {
//   return fakeAsyncWork(workFn)
//     .then(result => result)
//     .catch(err => console.error(err.message));
// };

// handleAsyncAwait sample solution #1
// export const handleAsyncAwait = async (workFn) => {
//   try {
//     const result = await fakeAsyncWork(workFn);
//     return result;
//   } catch (err) {
//     console.error(err.message);
//   }
// };


const expectedValue1 = 'Hello from a promise!';
const expectedErrorMessage1 = 'Argh! Error from a promise!';
const expectedValue2 = 'Hello from async/await!';
const expectedErrorMessage2 = 'Argh! Error from async/await!';

describe('General JavaScript Interview Questions (Async)', () => {
  it(`should return ${expectedValue1} on a successful resolution`, async () => {
    const res = await handlePromise(() => {
      return expectedValue1;
    });

    expect(res).toBe(expectedValue1);
  });

  it(`should log the ${expectedErrorMessage1} error when failing`, async () => {
    console.error = jest.fn();
    await handlePromise(() => {
      throw new Error(expectedErrorMessage1);
    });

    expect(console.error).toHaveBeenCalledWith(expectedErrorMessage1);
  });

  it(`should return ${expectedValue2} on a successful resolution`, async () => {
    const res = await handleAsyncAwait(() => {
      return expectedValue2;
    });

    expect(res).toBe(expectedValue2);
  });

  it(`should log the ${expectedErrorMessage2} error when failing`, async () => {
    console.error = jest.fn();
    await handleAsyncAwait(() => {
      throw new Error(expectedErrorMessage2);
    });

    expect(console.error).toHaveBeenCalledWith(expectedErrorMessage2);
  });

  it('should resolve with "Hello, future me" after some period of time', () => {
    helloFutureMe().then(res => {
      expect(res).toBe('Hello, future me');
    });
  });
});
