<script>
    import { onMount } from "svelte";
    import { selectedPage } from "../store";
    import Logo from "./header/logo.svelte";
    import NavBar from "./header/nav-bar.svelte";
    let openNav = false;

    onMount(() => {
        selectedPage.subscribe(({page,scroll}) => {
            if(scroll) document.getElementById(page)?.scrollIntoView({behavior: "smooth"})
        })
    })

    /** @param {CustomEvent<{page: Page}>} e */
    function handlePageChange(e){
        selectedPage.set({page : e.detail.page, scroll: true})
        openNav = false
    }

</script>

<header class="sticky top-0 flex justify-between items-center pt-4">
    <Logo />
    <div class="hidden lg:block">
        <NavBar on:pagechange={handlePageChange} />
    </div>
    <button class="font-me hidden lg:block font-extralight border text-sm lg:text-lg border-solid rounded"> connect wallet </button>
    <div class="lg:hidden hover:cursor-pointer w-6" on:click={() => openNav = !openNav}>
        {#if openNav}
            <img src="/icons/close.svg" class="w-[75%] object-contain" alt="close">
        {:else}
            <img src="/icons/menu.svg" class="w-full object-contain" alt="menu">
        {/if}
    </div>
    <div class="flex flex-col p-4 lg:hidden absolute top-[100%] left-0 right-0 space-y-6" class:hidden={!openNav}>
        <NavBar on:pagechange={handlePageChange} />
        <button class="font-me font-extralight border text-sm lg:text-lg border-solid rounded"> connect wallet </button>
    </div>
</header>

<style>
    header {
        background-color: var(--bg-color);
        z-index: 100;
    }

    button {
        padding: 0.5em;
    }

    div.absolute {
        background-color: var(--bg-color);
        padding-block: 1rem;
    }    

</style>