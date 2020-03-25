/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  // 递归
  // if (N < 2) {
  //   return N
  // }
  // return fib(N - 1) + fib(N - 2)

  //递推
  let cache = [0, 1]
  let i = 2
  while (i <= N) {
    cache[i] = cache[i - 1] + cache[i - 2]
    i++
  }
  return cache[N]
}
// @lc code=end
// console.log(fib(7))
