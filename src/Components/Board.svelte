<script>
  export let board;

  import Cell from "./Cell.svelte";
  $: board;

  function changeCell(i, j, v) {
    board[i][j] = v;
  }
</script>

<style>
  .board {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>

<div class="board">
  {#each board as row, i}
    <div class="row">
      {#each board[i] as cell, j}
        <Cell {cell} {changeCell} {i} {j} />
      {/each}
    </div>
  {/each}
</div>
