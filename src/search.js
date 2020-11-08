import { LIMIT } from "./utils/consts.js";
import Cell from "./Cell.js";

export function search(board, start, end, callback) {
    const startParams = start.id.split(" ");
    const endParams = end.id.split(" ");
    const startCell = new Cell(parseInt(startParams[0]), parseInt(startParams[1]));
    const endCell = new Cell(parseInt(endParams[0]), parseInt(endParams[1]));

    console.log(startCell, endCell);

    console.log(startCell.neighbors(), endCell.neighbors());
    callback();
}