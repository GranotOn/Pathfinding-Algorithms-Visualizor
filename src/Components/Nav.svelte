<script>
  export let algorithm = "BFS";

  console.log(algorithm);
</script>

<style>
  nav {
    display: flex;
    position: absolute;
    width: 16em;
    top: 8%;
    left: 5px;
    background-color: whitesmoke;
    box-shadow: 1px 3px 1px 3px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    align-items: center;
  }

  .items div {
    cursor: pointer;
    width: 15em;
    height: 5em;
    margin: 1em 0;
    text-align: center;
    background-color: black;
    color: white;
    font-weight: 600;
    border: 1px solid black;
    box-shadow: 1px 1px 1px 4px solid black;
  }

  .items div:hover {
      opacity: .8;
      transition: opacity 100ms ease-in;
  }

  .active {
    background-color: dodgerblue !important;
  }
</style>

<nav>
  <div class="items">
    <div
      on:click={() => (algorithm = 'DFS')}
      class={algorithm === 'DFS' ? 'active' : ''}>
      <h3>DFS</h3>
    </div>
    <div
      on:click={() => (algorithm = 'BFS')}
      class={algorithm === 'BFS' ? "active" : ''}>
      <h3>BFS</h3>
    </div>
  </div>
</nav>
