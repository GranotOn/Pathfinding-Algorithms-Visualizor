import Cell from "./Cell.js";
import BFS from "./Algorithms/BFS.js";
import DFS from "./Algorithms/DFS.js";

export function search(board, start, end, changeCell, callback) {
  const startParams = start.id.split(" ");
  const endParams = end.id.split(" ");
  const startCell = new Cell(
    parseInt(startParams[0]),
    parseInt(startParams[1])
  );
  const endCell = new Cell(parseInt(endParams[0]), parseInt(endParams[1]));

  BFS(board, startCell, endCell, changeCell, (Cell) => {
    traverse(callback, changeCell, Cell, startCell);
  });
}

export function traverse(callback, changeCell, Cell, startCell) {
  callback && callback();
  if (Cell.parent === null) return;
  
  let p = Cell.parent;
  while (p !== null) {
    if (startCell == p)
      return;
    const p_coords = p.coords();
    const p_i = p_coords[0];
    const p_j = p_coords[1];
    setTimeout(() => {
      changeCell(p_i, p_j, 6);
    }, 30)
    p = p.parent;
  }
}
