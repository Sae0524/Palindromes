let palindrome = function (word) {
  let len = word.length;
  let start = word.substrings(0,Math.floor(len/2)).toLowerCase();
  let start = word.substrings(len - Math.floor(len/2)).toLowerCase();
  //console.log(start,end);
  let flip = end.split('').reverse().join('');
  return (start === flip);
}

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false