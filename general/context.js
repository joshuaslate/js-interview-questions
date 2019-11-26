/**
 * Write a function that calls getGreeting and returns "Greetings from DevDecoded!"
 *
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
 *       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 *       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */

function getGreeting() {
  return `Greetings from ${this.name}!`;
}

export const returnGreeting = () => {};
