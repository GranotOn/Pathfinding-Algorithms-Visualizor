<script>
  import Nav from "./Components/Nav.svelte";
  import Board from "./Components/Board.svelte";
  import Toolbar from "./Components/Toolbar.svelte";
  import Info from "./Components/Info.svelte";

  import { search } from "./search.js";
  import { get } from "svelte/store";
  import { mouse, start, end } from "./stores.js";
  import { LIMIT, MS, DFS_INFO, BFS_INFO } from "./utils/consts.js";

  let info, board, algorithm = "BFS";
  $: info; // Pop-up
  $: board = new Array(LIMIT).fill(0).map(() => new Array(LIMIT).fill(0));
  
  var searching = false;

  function handleMouse(b) {
    mouse.update((n) => (n = b));
  }

  function changeCell(i, j, val) {
    board[i][j] = val;
  }

  function softClearBoard() {
    board.forEach((b, i) => {
      b.forEach((c, j) => {
        if (c !== 0 && c != 1 && c !== 3 && c != 4) {
          board[i][j] = 0;
        }
      });
    });
  }

  function clearBoard() {
    //Hard clears all cells to 0
    board.forEach((b, i) => {
      b.forEach((c, j) => {
        if (c != 0) board[i][j] = 0;
      });
    });
  }

  /**
   * State indexes:
   * 0 = white - Not, but can traverse
   * 1 = blue - Starting point
   * 2 = aquamarine - current cell
   * 3 = orangy - End point
   * 4 = gray - wall
   * 5 = black - finished traversing
   * 6 = violet - traversing
   */

  function startSearch() {
    //Prepare app for search

    if (!get(start) || !get(end)) return; // Check if $start and $end are set

    softClearBoard(); //Clear board from previous search
    searching = true; // Initialize a flag indicating the search started
    
    switch (algorithm) {
      case "BFS":
        info = BFS_INFO;
        break;
      case "DFS":
        info = DFS_INFO;
        break;
    }

    search(algorithm, board, get(start), get(end), changeCell, () => {
      searching = false; // Denounce flag at finish
    }); // Call generic search on board with $algo
  }

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

<Nav bind:algorithm={algorithm}/>
<main
  on:mousedown={() => handleMouse(true)}
  on:mouseup={() => handleMouse(false)}>
  <Toolbar {clearBoard} {startSearch} {searching} />
  <div>
    <Board {board} />
  </div>
</main>

{#if info}
 <Info bind:info={info} {MS} />
{/if}