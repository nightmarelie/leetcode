/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || nums.length == 0 || (nums.length == 1 && nums[0] == 0)) {
    return [];
  }

  const set = new Set();
  const length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      const searchRes = 0 - (nums[i] + nums[j]);
      const searchIdx = nums.indexOf(searchRes);
      if (i != searchIdx && j != searchIdx && searchIdx != -1) {
        const res = JSON.stringify(
          [nums[i], nums[j], searchRes].sort((a, b) => a - b)
        );
        if (!set.has(res)) {
          set.add(res);
        }
      }
    }
  }

  return Array.from(set).map(JSON.parse);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || nums.length == 0 || (nums.length == 1 && nums[0] == 0)) {
    return [];
  }

  const set = new Set();
  const length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const res = JSON.stringify(
            [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
          );
          if (!set.has(res)) {
            set.add(res);
          }
        }
      }
    }
  }

  return Array.from(set).map(JSON.parse);
};

var threeSum = function (nums) {
  if (!nums || nums.length == 0 || (nums.length == 1 && nums[0] == 0)) {
    return [];
  }

  const result = [];
  const length = nums.length;
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && sorted[i] == sorted[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = length - 1;

    while (j < k) {
      sum = sorted[i] + sorted[j] + sorted[k];
      if (sum === 0) {
        result.push([sorted[i], sorted[j], sorted[k]]);
        k--;

        while (j < k && sorted[k] == sorted[k + 1]) {
          k--;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};
