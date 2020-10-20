// https://leetcode.com/problems/binary-tree-tilt/submissions/
// Level: Easy
// Topic: BST, Tree


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var findTilt = function (root) {
  function traversal(node) {
    if (!node) return 0;
    var sumLeft = traversal(node.left);
    var sumRight = traversal(node.right);
    res += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  }
  var res = 0;
  traversal(root)
  return res;
}

// var root = [1,2,3,4,5,6,7] // 7

// Notes:

