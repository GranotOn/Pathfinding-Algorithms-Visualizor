var stop = false;

function DFS_visit(board, startCell, endCell, callback) {
  if (stop)
    return;
  
  const neighbors = startCell.neighbors();

  if (!neighbors || neighbors.length === 0) return;

  neighbors.forEach((neighbor) => {
    const coords = neighbor.coords();
    const i = coords[0];
    const j = coords[1];
    const cell = board[i][j];

    if (cell === 0 || cell === 3) {
      board[i][j] = 2; // Traversing
      neighbor.parent = startCell; // Set PI
      if (cell === 3) {
        callback && callback();
        stop = true;
      }
      DFS_visit(board, neighbor, endCell, callback);
    }
  });

  const coords = startCell.coords();
  const i = coords[0];
  const j = coords[1];
  board[i][j] = 5; // Traversed
}

export default function DFS(board, startCell, endCell, callback) {
  DFS_visit(board, startCell, endCell, callback);
}
