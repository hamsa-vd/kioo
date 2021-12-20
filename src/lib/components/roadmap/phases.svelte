<script>
    import { phases } from '../../constants'
    import Phase from './phase.svelte';
</script>


<section class="roadmap-body flex flex-col lg:flex-row items-center lg:items-start justify-around">
    <div class="phases pt-12 flex flex-col space-y-24">
        <div class="phase relative ml-[100px]" />
        {#each phases as phase, idx}
            <Phase {phase} {idx} />
        {/each}
    </div>
    <div class="img-container order-first lg:order-last">
        <img src="/images/minimap.png" alt="minimap">
    </div>
</section>

<style>
    div.phases {
        --tw-mt: calc(6rem * calc(1 - var(--tw-space-y-reverse)));
        --move-left: -75px;
    }
    div.phase::before{
        content: "";
        left: var(--move-left);
        position: absolute;
        background-color: var(--secondary-color);
        height: calc( 0% + var(--tw-mt) );
        width: 1px;
        border-radius: 1px;
    }
</style>