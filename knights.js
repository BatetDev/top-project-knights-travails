/**
 * Knight's Travails - Finds shortest path for a knight between two squares
 * Uses Breadth-First Search (BFS) to guarantee shortest path
 * Coordinates: [column, row] where both are 0-7
 */

function knightMoves(start, end) {
  const queue = []; // BFS queue: stores {position, path} objects
  const visited = new Set(); // Track visited positions using string keys

  // Initialize with starting position
  queue.push({ position: start, path: [start] });
  visited.add(start.toString());

  while (queue.length > 0) {
    const { position, path } = queue.shift();

    // Check if target position reached
    if (position[0] === end[0] && position[1] === end[1]) {
      console.log(
        `You made it in ${path.length - 1} moves! Here's your path ([column, row]):`
      );
      path.forEach(([x, y]) => console.log(`  [${x},${y}]`));
      return path;
    }

    // Explore all possible knight moves from current position
    const possibleMoves = getPossibleMoves(position);
    for (const move of possibleMoves) {
      const moveKey = move.toString();
      if (!visited.has(moveKey)) {
        visited.add(moveKey);
        queue.push({
          position: move,
          path: [...path, move], // Create new path with current move added
        });
      }
    }
  }

  return null; // No path found (theoretically impossible on chessboard)
}

/**
 * Generates all valid knight moves from given position
 * Knight moves in L-shapes: (±2, ±1) or (±1, ±2)
 */
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
    // Filter moves that stay within 8x8 board boundaries
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      moves.push([newX, newY]);
    }
  }
  return moves;
}

// Test Cases
console.log('=== TEST 1: Corner to nearby (1 move) ===');
knightMoves([0, 0], [1, 2]);

console.log('\n=== TEST 2: Short path (2 moves) ===');
knightMoves([0, 0], [3, 3]);

console.log('\n=== TEST 3: Longer path ===');
knightMoves([0, 0], [7, 7]);

console.log('\n=== TEST 4: Different quadrant ===');
knightMoves([3, 3], [4, 3]);

console.log('\n=== TEST 5: Edge case - same position ===');
knightMoves([4, 4], [4, 4]);
