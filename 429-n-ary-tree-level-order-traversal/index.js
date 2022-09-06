import { check } from '../lib/lib.js';

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const results = [];

    if (root === null) {
        return results;
    }

    function scan(node, index) {
        if (results.length - 1 < index) {
            results.push([]);
        }

        results[index].push(node.val);

        node.children.forEach((value) => {
            scan(value, index + 1);
        });
    }

    scan(root, 0);

    return results;
}

// check(levelOrder(JSON.parse('{"val":1,"children":[{"val":3,"children":[{"val":5,"children":[]},{"val":6,"children":[]}]},{"val":2,"children":[]},{"val":4,"children":[]}]}')), [[1],[3,2,4],[5,6]]);
// check(levelOrder(JSON.parse('{"val":1,"children":[{"val":2,"children":[]},{"val":3,"children":[{"val":6,"children":[]},{"val":7,"children":[{"val":11,"children":[{"val":14,"children":[]}]}]}]},{"val":4,"children":[{"val":8,"children":[{"val":12,"children":[]}]}]},{"val":5,"children":[{"val":9,"children":[{"val":13,"children":[]}]},{"val":10,"children":[]}]}]}')), [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]);
