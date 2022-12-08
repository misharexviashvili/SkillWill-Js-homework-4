// Task 1
const replacer = function (string, valueToReplace, valueToReplaceWith) {
  const arr = string.trim().split(" ");
  //   Finds index of replacable word
  const replaceWordIndex = arr.indexOf(valueToReplace);
  //   Replace word with new value using array = method
  arr[replaceWordIndex] = valueToReplaceWith;
  //   Turn array elements into 1 sentence
  const newSentece = arr.join(" ");
  return newSentece;
};

// Task 2
const capitalizer = function (string) {
  //  Finds index of replacable word
  const arr = string.trim().split(" ");
  const array = [];
  //  Concatenates uppercased first character and rest of the word, then pushes words into an array
  for (const element of arr) {
    const capitlized = element.charAt(0).toUpperCase() + element.slice(1);
    array.push(capitlized);
  }
  //   Turn array elements into 1 sentence
  const capitalizedSentence = array.join(" ");
  return capitalizedSentence;
};
