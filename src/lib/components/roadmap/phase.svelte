<script>
    /** @type { Phase } */
    export let phase;
    export let idx;

    function getDoubleNumber(num){
        return Number(num).toString().length >= 2 ? num : "0" + num
    }

</script>

<div class="phase relative flex flex-col ml-[100px] space-y-4" class:completed={!phase.tasks.filter(el => !el.completed).length} >
    <span class="absolute text-7xl text-white opacity-10 -top-6 -left-8 font-me" > { getDoubleNumber(idx + 1) } </span>
    <h1 class="text-3xl mt-8 z-20 font-me"> Phase: <span class="uppercase" > { phase.season } </span> </h1>
    <ul class="list-inside flex flex-col space-y-2">
        {#each phase.tasks as task}
            <li class="font-ps text-lg flex items-center" style="--list-bg-color : { task.completed ? 'var(--secondary-color)' : '#fff' };" > {task.description} </li>
        {/each}
    </ul>
</div>

<style>
    li {
        max-width: 25ch;
    }
    li::before {
        content: "";
        width: 1.5ch;
        height: 1.5ch;
        margin-right: 1rem;
        border-radius: .5ch;
        background-color: var(--list-bg-color, #fff);
        transform: rotateZ(45deg);
    }

    div.phase.completed > h1 {
        color: var(--secondary-color);
    }
    div.phase::before, div.phase::after {
        content: "";
        left: var(--move-left);
        position: absolute;
    }
    div.phase::before {
        height: calc( 100% + var(--tw-mt));
        width: 1px;
        background-color: rgba(255,255,255,0.5);
    }
    :global(div.phase:last-child::before) {
        height: 0% !important;
    }
    :global(div.phase::before + div.phase.completed) {
        background-color: var(--secondary-color);
    }
    div.phase::after {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        transform: translateX( calc( -50% + 0.5px));;
        background-color: #fff;
    }
    div.phase.completed::after {
        background-color: var(--secondary-color);
        box-shadow: 0px 0px 0px 4px var(--bg-color),
                    0px 0px 0px 5px var(--secondary-color);
    }
</style>