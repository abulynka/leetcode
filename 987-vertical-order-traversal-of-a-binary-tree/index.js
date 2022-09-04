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
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
    const coordinates = [];

    function scan(node, row, col) {
        coordinates.push([row, col, node.val]);

        if (node.left !== null) {
            scan(node.left, row + 1, col - 1);
        }

        if (node.right !== null) {
            scan(node.right, row + 1, col + 1);
        }
    }

    scan(root, 0, 0);

    const hash = new Map();
    const results = [];

    coordinates.sort((a, b) => {
            if (a[1] === b[1]) {
                if (a[0] === b[0]) {
                    return a[2] - b[2];
                } else {
                    return a[0] - b[0];
                }
            }
            return a[1] - b[1];
        })
        .map((coordinate) => {
            if (!hash.has(coordinate[1])) {
                hash.set(coordinate[1], results.length);
                results.push([]);
            }

            results[hash.get(coordinate[1])].push(coordinate[2]);
        });

    return results;
};

function TreeNode(val, left, right) {
    if (val === null) {
        return null;
    }

    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
}

function check(a, b) {
    console.log(a, b, JSON.stringify(a) === JSON.stringify(b));
}

check(
    verticalTraversal(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(
                20,
                new TreeNode(15),
                new TreeNode(7)
            )
        )
    ),
    [[9],[3,15],[20],[7]]
);

check(
    verticalTraversal(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7))
        )
    ),
    [[4],[2],[1,5,6],[3],[7]]
);

check(
    verticalTraversal(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(6)),
            new TreeNode(3, new TreeNode(5), new TreeNode(7))
        )
    ),
    [[4],[2],[1,5,6],[3],[7]]
);

check(
    verticalTraversal(JSON.parse('{"val":3,"left":{"val":1,"left":{"val":0,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":{"val":4,"left":{"val":2,"left":null,"right":null},"right":null}}')),
    [[0],[1],[3,2,2],[4]]
);

check(
    verticalTraversal(JSON.parse('{"val":0,"left":{"val":8,"left":null,"right":null},"right":{"val":1,"left":{"val":3,"left":null,"right":{"val":4,"left":null,"right":{"val":7,"left":null,"right":null}}},"right":{"val":2,"left":{"val":5,"left":{"val":6,"left":null,"right":null},"right":null},"right":null}}}')),
    [[8],[0,3,6],[1,4,5],[2,7]]
);
