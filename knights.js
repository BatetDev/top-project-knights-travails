function knightMoves(start, end) {
  const queue = []; // Stores positions to explore in BFS order
  const visited = new Set(); // Tracks positions we've already seen

  // Initialize queue with starting position AND path to get there
  queue.push([start, [start]]); // Element 1 is current position, 2 is path so far
  // Mark the start as visited
  visited.add(start.toString());
  // Converts [3,3] to "3,3" for Set storage

  // TODO: BFS loop
  // We'll process queue until empty or target found

  // If we get here, no path found
  return null;
}

function getPossibleMoves(position) {
  const moves = []; // Array to collect valid destination positions

  const [x, y] = position; // Destructure: if position = [3,3], then x=3, y=3

  // All 8 possible L-shaped knight moves as [dx, dy] pairs (d being delta, meaning diff between values)
  const offsets = [
    [2, 1], // Right 2, Down 1
    [2, -1], // Right 2, Up 1
    [-2, 1], // Left 2, Down 1
    [-2, -1], // Left 2, Up 1
    [1, 2], // Right 1, Down 2
    [1, -2], // Right 1, Up 2
    [-1, 2], // Left 1, Down 2
    [-1, -2], // Left 1, Up 2
  ];

  // Loop through each move pattern
  for (let [dx, dy] of offsets) {
    // Calculate new position by applying the offset
    let newX = x + dx; // Current x + change in x
    let newY = y + dy; // CUrrent y + change in y

    // Check if new position is within 8x8 chessboard boundaries
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      moves.push([newX, newY]); // Add valid position to results
    }
  }

  return moves; // Return array of reachable positions
}

// Test main function (currently returns null - not implemented)
console.log(knightMoves([0, 0], [1, 2]));

// Test helper function - verify move generation works
console.log('From [0,0]:', getPossibleMoves([0, 0]));
// Expected: [[2,1], [1,2]] (only 2 valid moves from corner)

console.log('From [3,3]:', getPossibleMoves([3, 3]));
// Expected: 8 moves (all directions valid from center)
