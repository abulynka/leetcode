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
 * @return {string}
 */
const tree2str = function(root) {
    function scan(node) {
        if (node === null) {
            return '';
        }

        let result = `${node.val}`;
        if (node.left === null && node.right === null) {
            return result;
        }
        result += '(' + scan(node.left) + ')';
        if (node.right !== null) {
            result += '(' + scan(node.right) + ')';
        }

        return result;
    }

    return scan(root);
};

check(tree2str(JSON.parse('{"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null},"right":null},"right":{"val":3,"left":null,"right":null}}')), '1(2(4))(3)');
check(tree2str(JSON.parse('{"val":1,"left":{"val":2,"left":null,"right":{"val":4,"left":null,"right":null}},"right":{"val":3,"left":null,"right":null}}')), '1(2()(4))(3)');
