import Cell from "./Cell.js";
import DFS from "./Algorithms/DFS.js";

export function search(board, start, end, callback) {
    const startParams = start.id.split(" ");
    const endParams = end.id.split(" ");
    const startCell = new Cell(parseInt(startParams[0]), parseInt(startParams[1]));
    const endCell = new Cell(parseInt(endParams[0]), parseInt(endParams[1]));

    DFS(board, startCell, endCell, traverse(board, endCell, callback));
}

export function traverse(board, Cell, callback) {
    callback && callback(board);
    if (Cell.parent === null)
        return;
    
    const coords = Cell.coords();
    const i = coords[0];
    const j = coords[1];

    board[i][j] = 1;
    let p = Cell.parent();
    while (p !== null) {
        const p_coords = p.coords();
        const p_i = p_coords[0];
        const p_j = p_coords[1];

        board[p_i][p_j] = 1;
        p = p.parent();
    }
}