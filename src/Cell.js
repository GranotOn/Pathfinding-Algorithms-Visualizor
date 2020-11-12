import { LIMIT } from "./utils/consts.js";

export default class Cell {
    constructor (i, j) {
        this.i = i;
        this.j = j;
        this.parent = null;
    }

    neighbors() {
        var n = [];
        if (this.i < (LIMIT - 1))
            n.push(new Cell(this.i + 1,this.j));
        if (this.j < (LIMIT - 1))
            n.push(new Cell(this.i, this.j + 1));
        if (this.i > 0)
            n.push(new Cell(this.i - 1, this.j));
        if (this.j > 0)
            n.push(new Cell(this.i, this.j - 1));
        return n;
    }

    coords() {
        return [this.i, this.j];
    }

    parent() {
        return this.parent;
    }
}