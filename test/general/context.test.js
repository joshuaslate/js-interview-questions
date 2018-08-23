import { returnGreeting } from '../../general/context';

// returnGreeting sample solution #1
// export const returnGreeting = (givenArray = []) => {
//   return getGreeting.apply({ name: 'DevDecoded' }, []);
// };

// returnGreetingSampleSolution #2
// export const returnGreeting = (givenArray = []) => {
//   return getGreeting.call({ name: 'DevDecoded' });
// };

// returnGreetingSampleSolution #3
// export const returnGreeting = (givenArray = []) => {
//   return getGreeting.bind({ name: 'DevDecoded' })();
// };

describe('General JavaScript Interview Questions (Context)', () => {
  it('should return "Greetings from DevDecoded!"', () => {
    expect(returnGreeting()).toEqual("Greetings from DevDecoded!");
  });
});
