function knightMoves(start, end) {
  const queue = []; // BFS queue: stores {position, path}
  const visited = new Set(); // Track visited positions

  // Initialize with start position
  queue.push({ position: start, path: [start] });
  visited.add(start.toString());

  while (queue.length > 0) {
    const { position, path } = queue.shift();

    // Check if target reached
    if (position[0] === end[0] && position[1] === end[1]) {
      console.log(
        `You made it in ${path.length - 1} moves! Here's your path ([column, row]):`
      );
      path.forEach(([x, y]) => console.log(`  [${x},${y}]`));
      return path;
    }

    // Generate and process possible moves
    const possibleMoves = getPossibleMoves(position);
    for (const move of possibleMoves) {
      const moveKey = move.toString();
      if (!visited.has(moveKey)) {
        visited.add(moveKey);
        queue.push({
          position: move,
          path: [...path, move], // Extend path with new position
        });
      }
    }
  }
  return null; // No path found (shouldn't happen on chessboard)
}

function getPossibleMoves([x, y]) {
  const moves = [];
  // All 8 possible L-shaped knight moves
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
    const newX = x + dx;
    const newY = y + dy;
    // Check if move stays on board
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      moves.push([newX, newY]);
    }
  }
  return moves;
}

// Test cases
console.log('=== TEST: [0,0] to [1,2] ([column, row]) ===');
knightMoves([0, 0], [1, 2]);

console.log('\n=== TEST: [0,0] to [3,3] ([column, row]) ===');
knightMoves([0, 0], [3, 3]);

console.log('\n=== TEST: [3,3] to [3,3] ([column, row]) ===');
knightMoves([3, 3], [6, 7]);
