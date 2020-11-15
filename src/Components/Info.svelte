<script>
    export let info, MS = 0;

    setTimeout(() => info = null, MS); //This is legal because info is bound to parent
</script>

<style>
    div {
        position: fixed;
        bottom: -10%;
        right: 10px;
        max-width: 20em;
        min-height: 5em;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 3px rgba(0, 0, 0, 0.75);
        background-color: #64a4ff;
        background-image: linear-gradient(315deg, #64a4ff 0%, #83eaf1 74%);
        animation: popup 550ms forwards cubic-bezier(0.3, .5, 0.735, 0.75);
    }

    @keyframes popup {
        0% {
            bottom: -10%;
        } 65% {
            bottom: 40px;
        } 85% {
            bottom: 10px;
        } 100% {
            bottom: 15px;
        }
    }

    h3 {
        font-weight: bold;
        color: black;
    }
</style>
<div>
    <h3>{info}</h3>
</div>