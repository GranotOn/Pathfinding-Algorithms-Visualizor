<script>
  export let clearBoard;
  import { state } from "../stores.js";
  function formHandler(e) {
    state.update(n => n = parseInt(e.target.value));
  }
</script>

<style>
  div {
    position: sticky;
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 4em;
  }

  input {
    background-color: #ddd;
    background-image: -webkit-linear-gradient(
        0deg,
        transparent 20%,
        hsla(0, 0%, 100%, 0.7),
        transparent 80%
      ),
      -webkit-linear-gradient(45deg, transparent 20%, hsla(0, 0%, 100%, 0.7), transparent
            80%);
    border: 1px transparent;
    border-radius: 10px;
    box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.8),
      0 0 0 1px hsla(0, 0%, 0%, 0.6), 0 2px 3px hsla(0, 0%, 0%, 0.6),
      0 4px 3px hsla(0, 0%, 0%, 0.4), 0 6px 6px hsla(0, 0%, 0%, 0.2),
      0 10px 6px hsla(0, 0%, 0%, 0.2);
    cursor: pointer;
    display: inline-block;
    transform: translateY(30%);
    height: 15px;
    width: 15px;
    margin-right: 4px;
    -webkit-appearance: none;
  }

  input:checked {
    background-color: dodgerblue;
  }

  label {
    cursor: pointer;
    font-size: 2em;
    margin-right: 1em;
    color: #fff;
  }
  button {
    padding: 0.5em 1.7em;
    margin: 1em;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    border: none;
    box-shadow: 1px 1px 1px 3px rgba(66, 65, 65, 0.678);
  }

  .primary {
    background-color: dodgerblue;
  }

  .secondary {
    background-color: rgba(0, 0, 0, 0.678);
  }
</style>

<div>
  <form on:change={formHandler}>
    <input id="a" name="rad" type="radio" value="1" checked />
    <label for="a"><span>Starting Point</span></label>
    <input id="b" name="rad" type="radio" value="3" />
    <label for="b"><span>Ending Point</span></label>
    <input id="c" name="rad" type="radio" value="4" />
    <label for="c"><span>Barriers</span></label>
  </form>
  <button class="primary">Activate</button>
  <button class="secondary" on:click={clearBoard}>Clear</button>
</div>
