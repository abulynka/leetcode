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
 * @return {TreeNode}
 */
const pruneTree = function(root) {
    function scan(node) {
        if (node.left !== null && scan(node.left)) {
            node.left = null;
        }
        if (node.right !== null && scan(node.right)) {
            node.right = null;
        }
        return node.val !== 1 && node.left === null && node.right === null;
    }

    scan(root);

    if (root.val === 0 && root.left === null && root.right === null) {
        return null;
    }

    return root;
};

check(pruneTree(JSON.parse('{"val":1,"left":null,"right":{"val":0,"left":{"val":0,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}')), JSON.parse('{"val":1,"left":null,"right":{"val":0,"left":null,"right":{"val":1,"left":null,"right":null}}}'));
check(pruneTree(JSON.parse('{"val":1,"left":{"val":0,"left":{"val":0,"left":null,"right":null},"right":{"val":0,"left":null,"right":null}},"right":{"val":1,"left":{"val":0,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}')), JSON.parse('{"val":1,"left":null,"right":{"val":1,"left":null,"right":{"val":1,"left":null,"right":null}}}'));
check(pruneTree(JSON.parse('{"val":1,"left":{"val":1,"left":{"val":1,"left":{"val":0,"left":null,"right":null},"right":null},"right":{"val":1,"left":null,"right":null}},"right":{"val":0,"left":{"val":0,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}')), JSON.parse('{"val":1,"left":{"val":1,"left":{"val":1,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}},"right":{"val":0,"left":null,"right":{"val":1,"left":null,"right":null}}}'));
