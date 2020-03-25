/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let comp = {}

  // for (let i = 0; i < nums.length; i++) {
  //   comp[nums[i]] = i
  // }

  for (let i = 0; i < nums.length; i++) {
    // if (comp[target - nums[i]] && i != comp[target - nums[i]]) {
    //   return comp[target - nums[i]] > i
    //     ? [i, comp[target - nums[i]]]
    //     : [comp[target - nums[i]], i]
    // }
    if (nums[i] in comp) {
      return [comp[nums[i]], i]
    } else {
      comp[target - nums[i]] = i
    }
  }
}
// @lc code=end
