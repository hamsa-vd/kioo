<script>
    import { selectedPage } from '../../store';
    import { pages } from '../../constants'
    import { createEventDispatcher } from 'svelte'
    
    const dispath = createEventDispatcher();

    /** @param {Page} page */
    const handlePageChange = (page) => dispath("pagechange",{page})
    
</script>

<nav class="flex lg:flex-row flex-col space-x-0 lg:space-x-6 space-y-2 lg:space-y-0 text-gray">
    {#each pages as page}
        <p class="text-lg font-me capitalize" class:text-white={$selectedPage.page === page}  on:click|preventDefault={(e) => handlePageChange(page)}> {page} </p>
    {/each}
</nav>

<style lang="postcss">
    p:hover:not(.text-white) {
        cursor: pointer;
        color: rgba(255,255,255,0.75);
    }
    p.text-white:hover {
        cursor: default;
    }
</style>