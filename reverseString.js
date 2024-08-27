function reverse(str) {
  let strArr = str.split("");
  let reversedArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }

  return reversedArr.join("");
}

console.log(reverse("Hello"));
console.log(reverse("My name is Daniil"));
