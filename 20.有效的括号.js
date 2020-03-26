/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < s.length; i++) {
    const left = s[i]

    if (left in map) {
      stack.push(left)
    } else {
      if (left !== map[stack.pop()]) {
        return false
      }
    }
  }

  return !stack.length
}
// @lc code=end
