import { check } from '../lib/lib.js';

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
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const numbers = [];
    function scan(node) {
        if (node.left !== null) {
            scan(node.left);
        }

        numbers.push(node.val);

        if (node.right !== null) {
            scan(node.right);
        }
    }

    if (root !== null) {
        scan(root);
    }
    return numbers;
};

check(inorderTraversal(JSON.parse('{"val":1,"left":null,"right":{"val":2,"left":{"val":3,"left":null,"right":null},"right":null}}')), [1,3,2]);
check(inorderTraversal(JSON.parse(null)), []);
check(inorderTraversal(JSON.parse('{"val":1,"left":null,"right":null}')), [1]);
