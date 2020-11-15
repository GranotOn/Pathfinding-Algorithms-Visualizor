var stop = false;

function BFS_visit(board, startCell, endCell, changeCell, callback) {
  if (stop) return;

  const neighbors = startCell.neighbors();

  if (!neighbors || neighbors.length === 0) return;

  neighbors.forEach((neighbor) => {
    const coords = neighbor.coords();
    const i = coords[0];
    const j = coords[1];
    const cell = board[i][j];
    neighbor.parent = startCell; // Set PI

    if (cell === 0) {
      changeCell(i, j, 2);
      setTimeout(() => {
        BFS_visit(board, neighbor, endCell, changeCell, callback);
      }, 50);
    }
    if (cell === 3) {
      stop = true;
      callback && callback(neighbor);
      return;
    }
  });

  const coords = startCell.coords();
  const i = coords[0];
  const j = coords[1];
  if (board[i][j] === 2) {
    board[i][j] = 5;
    changeCell(i, j, 5);
  } // Traversed
}

export default function BFS(board, startCell, endCell, changeCell, callback) {
  stop = false;
  BFS_visit(board, startCell, endCell, changeCell, callback);
}
