<script>
    export let board, state = 0;

    import Cell from "./Cell.svelte"
</script>

<style>
    .board {
        min-width: 50em;
        min-height: 50em;
        display: flex;
        flex-direction: column;
        padding: 1em;
    }

    .row {
        margin-bottom: .4em;
        width: 100%;
        height: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

</style>


<div class="board">
    {#each board as row, i}
        <div class="row">
            {#each board[i] as cell}
                <Cell cell={cell} state={state}/>
            {/each}
        </div>
    {/each}
</div>