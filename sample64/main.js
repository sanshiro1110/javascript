const arry = [1, 2, 3, 4, 5];

arry.reduce(function(accu, curr) {
  console.log(accu, curr);
  // return accu * curr;
}, 10);

const str = "animation";
const strArry = str.split('');

function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

const result = strArry.reduce(tag, "");

console.log(result);
