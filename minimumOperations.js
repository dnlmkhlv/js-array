/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let numOfOperations = 0;

  for (let i = 0; i <= nums.length; i++) {
    if ((nums[i] + 1) % 3 == 0 || (nums[i] - 1) % 3 == 0) {
      numOfOperations++;
    }
  }

  return numOfOperations;
};

console.log(minimumOperations([1, 2, 3, 4]));
