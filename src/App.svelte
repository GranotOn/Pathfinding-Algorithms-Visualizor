<script>
  import Board from "./Components/Board.svelte";
  import { beforeUpdate } from "svelte";

  var board = [];
  beforeUpdate(() => {
    const rows = 50;
	const columns = 50;
	board = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  });

  let state = 2;
  
</script>

<style>
	main {
		min-width: 50em;
		min-height: 50em;
		background-color: #444;
	}
</style>

<main>
  <Board {board} state={state} />
</main>
