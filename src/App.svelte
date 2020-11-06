<script>
  import Board from "./Components/Board.svelte";
  import Toolbar from "./Components/Toolbar.svelte";
  import { beforeUpdate } from "svelte";
  import { mouse } from "./stores.js";

  function handleMouse(b) {
    mouse.update((n) => n = b);
  }
  var board = [];
  beforeUpdate(() => {
    const rows = 50;
	const columns = 50;
	board = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  });

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

<main on:mousedown={() => handleMouse(true)} on:mouseup={() => handleMouse(false)}>
  <Toolbar />
  <div>
    <Board {board} />
  </div>
</main>
