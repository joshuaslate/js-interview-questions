export const fakeAsyncWork = (workFn) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      const workFnResult = workFn();
      resolve(workFnResult);
    } catch (err) {
      reject(err);
    }
  }, 250);
});
