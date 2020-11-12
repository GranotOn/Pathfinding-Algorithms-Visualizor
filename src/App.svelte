<script>
  import Board from "./Components/Board.svelte";
  import Toolbar from "./Components/Toolbar.svelte";
  import { beforeUpdate } from "svelte";
  import { search } from "./search.js";
  import { get } from "svelte/store";
  import { mouse, start, end } from "./stores.js";
  import { LIMIT } from "./utils/consts.js";

  let board = [];
  var searching = false;

  function handleMouse(b) {
    mouse.update((n) => (n = b));
  }

  beforeUpdate(() => {
    const rows = LIMIT;
    const columns = LIMIT;
    board = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  });

  function softClearBoard() {
    board.forEach((b, i) => {
      b.forEach((c, j) => {
        if (c !== 0 && c != 1 && c !== 3 && c != 4) {
          board[i][j] = 0;
        }
      });
    });
  }

  function clearBoard() { //Hard clears all cells to 0
    board.forEach((b, i) => {
      b.forEach((c, j) => {
        if (c != 0)
          board[i][j] = 0;
      });
    })
  }

  function startSearch() { //Prepare app for search
    
    if (!get(start) || !get(end))
    return; // Check if $start and $end are set
    
    softClearBoard(); //Clear board from previous search
    searching = true; // Initialize a flag indicating the search started

    search(board, get(start), get(end), () => {
      board = board;
      console.log(board);
      searching = false; // Denounce flag at finish
    });// Call generic search on board with $algo

  }

  /**
   * State indexes:
   * 0 = white - Not, but can traverse
   * 1 = blue - Starting point
   * 2 = aquamarine - current cell
   * 3 = orangy - End point
   * 4 = gray - wall
   * 5 = black - finished traversing
   */
</script>

<style>
  main {
    background-color: #333;
    min-height: 100vh;
    min-width: 100vw;
    margin: auto;
  }

  div {
    min-width: 50em;
    min-height: 50em;
  }
</style>

<main
  on:mousedown={() => handleMouse(true)}
  on:mouseup={() => handleMouse(false)}>
  <Toolbar {clearBoard} {startSearch} />
  <div>
    <Board {board} />
  </div>
</main>
