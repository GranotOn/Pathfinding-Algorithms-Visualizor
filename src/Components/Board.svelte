<script>
  export let board;

  import Cell from "./Cell.svelte";
  
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
        <Cell bind:cell={cell} {i} {j} />
      {/each}
    </div>
  {/each}
</div>
