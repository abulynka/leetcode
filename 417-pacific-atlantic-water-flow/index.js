/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function(heights) {
    function checkOcean(i, j, recursion, conditionCallBack, cellsWithAccessHash) {
        if (!recursion) {
            movesHash.clear();
        } else {
            movesHash.add(JSON.stringify([i, j]));
        }

        if (conditionCallBack(i, j) || cellsWithAccessHash.get([i, j])) {
            return true;
        }

        const checks = [
            [i - 1, j],
            [i + 1, j],
            [i, j - 1],
            [i, j + 1],
        ];

        for (let check of checks) {
            if (movesHash.has(JSON.stringify(check))) {
                continue;
            }

            if (check[0] < 0
                || check[0] >= heights.length
                || check[1] < 0
                || check[1] >= heights[0].length
                || heights[i][j] < heights[check[0]][check[1]]) {
                continue;
            }

            if (cellsWithAccessHash.has(...check)) {
                if (cellsWithAccessHash.get(...check)) {
                    return true;
                }
            } else {
                const status = checkOcean(...check, true, conditionCallBack, cellsWithAccessHash);
                cellsWithAccessHash.set(check, status);
                if (status) {
                    return true;
                }
            }
        }

        cellsWithAccessHash.set([i, j], false);

        return false;
    }

    const cellsWithPacificAccess = new Map();
    function checkPacific(i, j) {
        return checkOcean(i, j, false, (iValue, jValue) => {
            return iValue === 0 || jValue === 0;
        }, cellsWithPacificAccess);
    }

    const cellsWithAtlanticAccess = new Map();
    const movesHash = new Set();
    function checkAtlantic(i, j) {
        return checkOcean(i, j, false, (iValue, jValue) => {
            return iValue === heights.length - 1
                || jValue === heights[0].length - 1;
        }, cellsWithAtlanticAccess);
    }

    const result = [];
    for (let i = 0; i < heights.length; i += 1) {
        for (let j = 0; j < heights[i].length; j += 1) {
            if (checkAtlantic(i, j) && checkPacific(i, j)) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

// console.log(
//     pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]),
//     [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// );

console.log(
    pacificAtlantic([[3,3,3,3,3,3],[3,0,3,3,0,3],[3,3,3,3,3,3]]),
    [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],[1,2],[1,3],[1,5],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5]]
);
