<script>
  export let cell = 0,
    state = 0;
  let cellDiv;

  import { start, end } from "../stores.js";
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    if ($start !== cellDiv && cell === 2) {
      cell = end === cellDiv ? 3 : 0;
      cellDiv.style.backgroundColor = cellToClass();
    }

    if ($end !== cellDiv && cell === 3) {
      cell = start === cellDiv ? 2 : 0;
      cellDiv.style.backgroundColor = cellToClass();
    }
  });

  function clickHandler() {
    if (state === 1) {
      if ($end === cellDiv) $end = null;

      $start = cellDiv;
      cell = 2;
    } else if (state === 2) {
      if ($start === cellDiv) $start = null;

      $end = cellDiv;
      cell = 3;
    }
    cellDiv.style.backgroundColor = cellToClass();
  }

  function cellToClass() {
    switch (cell) {
      case 0:
        return "white";
      case 1:
        return "dodgerblue";
      case 2:
        return "mediumaquamarine";
      case 3:
        return "rgb(240, 63, 10)";
    }
  }
</script>

<style>
  div {
    width: 1em;
    height: 1em;
    border: 1px solid white;
    margin: 0.2px;
    transition: all 200ms;
    background-color: white;
    cursor: pointer;
  }
</style>

<div class="cell" bind:this={cellDiv} on:click={clickHandler} />
