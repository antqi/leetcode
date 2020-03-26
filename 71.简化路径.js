/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const dirs = path.split('/')
  const stack = []

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i]

    if (dir && dir !== '.' && dir !== '..') {
      stack.push(dir)
    } else if (dir === '..' && i > 1) {
      stack.pop()
    }
  }

  return '/' + stack.join('/')
}
// @lc code=end

simplifyPath('/home/')
simplifyPath('/../')
simplifyPath('/home//foo/')
simplifyPath('/a/./b/../../c/')
simplifyPath('/a//b////c/d//././/..')
