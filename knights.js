function knightMoves(start, end) {
  const queue = [];
  const visited = new Set();

  // TODO: Initialize queue with starting position

  // TODO: BFS loop

  // If we get here, no path found
  return null;
}

function getPossibleMoves(position) {
  const moves = [];
  const [x, y] = position;

  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  for (let [dx, dy] of offsets) {
    let newX = x + dx;
    let newY = y + dy;

    // Check if new positions are within the chessboard
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      moves.push([newX, newY]);
    }
  }

  return moves;
}

// Test
console.log(knightMoves([0, 0], [1, 2]));

// Test your function
console.log('From [0,0]:', getPossibleMoves([0, 0]));
console.log('From [3,3]:', getPossibleMoves([3, 3]));
