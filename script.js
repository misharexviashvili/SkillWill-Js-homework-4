// Task 1
const replacer = function (string, valueToReplace, valueToReplaceWith) {
  const arr = string.trim().split(" ");
  const replaceWordIndex = arr.indexOf(valueToReplace);
  arr[replaceWordIndex] = valueToReplaceWith;
  const newSentece = arr.join(" ");
  return newSentece;
};
