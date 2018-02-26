module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  preferences.forEach((item, i, arr) => {
      if (typeof item !== 'string') {
          let sec = arr[item - 1];
          let thr = arr[sec - 1];
          if (sec !== thr && item === arr[thr - 1]) {
              arr[item - 1] = 'a';
              arr[sec - 1] = 'a';
              result += 1;
          }
      }
  });
  return result;
};
