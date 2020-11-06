<script>
  export let cell = 0;
  let cellDiv;

  import { start, end, state, mouse } from "../stores.js";
  import { afterUpdate } from "svelte";

  let _state = state;
  state.subscribe((val) => {
    _state = val;
  });

  afterUpdate(() => {
    //After updating check if my state changed
    if ($start !== cellDiv && cell === 3) {
      //Check if I'm still endpoint
      cell = $end === cellDiv ? 3 : 0;
      cellDiv.style.backgroundColor = cellToClass();
    }

    if ($end !== cellDiv && cell === 1) {
      //Check if I'm still starting-point
      cell = $start === cellDiv ? 1 : 0;
      cellDiv.style.backgroundColor = cellToClass();
    }
  });

  function clickHandler() {
    if (_state === 1) {
      //Start point
      if ($end === cellDiv) $end = null;

      $start = cellDiv;
      cell = 1;
    } else if (_state === 3) {
      //End point
      if ($start === cellDiv) $start = null;
      $end = cellDiv;
      cell = 3;
    } else if (_state === 4) {
      //Barriers
      if ($start === cellDiv) $start = null;
      if ($end === cellDiv) $end = null;
      cell = 4;
    }
    cellDiv.style.backgroundColor = cellToClass();
  }

  function handleMouse() {
    if ($mouse && _state === 4)
      clickHandler();
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
      case 4:
        return "gray";
      case 5:
        return "black";
    }
  }
</script>

<style>
  div {
    width: 1em;
    height: 1em;
    border: 1px solid transparent;
    margin: 0.2em;
    transition: all 200ms;
    background-color: white;
    cursor: pointer;
  }
</style>

<div
  class="cell"
  bind:this={cellDiv}
  on:mousemove={handleMouse}
  on:click={clickHandler} />
