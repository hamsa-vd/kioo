<script>
    import Logo from "./header/logo.svelte";
    import { pages } from '../constants'
    import { selectedPage } from "../store";
    import Telegram from '../svg-components/telegram.svelte'
    import Facebook from "../svg-components/facebook.svelte";
    import Instagram from "../svg-components/instagram.svelte";
    import Twitter from "../svg-components/twitter.svelte";
    import Medium from "../svg-components/medium.svelte";
    import Reddit from "../svg-components/reddit.svelte";
    import Youtube from "../svg-components/youtube.svelte";
</script>

<footer class="relative flex flex-col lg:flex-row items-center lg:items-start pb-12 space-y-4 lg:space-y-0">
    <div class="brand-info">
        <Logo />
        <p class="font-ps text-md lg:text-lg" > KIOO reflect token is an investment tool. </p>
    </div>
    <div class="flex-1 flex lg:justify-around justify-between space-x-4">
        <div class="pages space-y-4">
            <h5 class="capitalize font-pse text-2xl text-white"> pages </h5>
            <ul class="text-lg">
                {#each pages as page}
                    <li class="hover:cursor-pointer" class:capitalize={page !== 'faqs'} on:click={() => selectedPage.set({page, scroll: true})}> {page === 'faqs' ? "FAQs" : page} </li>
                {/each}
            </ul>
        </div>
        <div class="social space-y-6">
            <h5 class="capitalize font-pse text-2xl text-white"> social </h5>
            <ul class="grid grid-cols-4 gap-4">
                <li> <Telegram /> </li>
                <li style="--svg-hover-color: #0d8bf0;"> <Facebook /> </li>
                <li style="--svg-hover-color: #b23270;"> <Instagram /> </li>
                <li style="--svg-hover-color: #ff4300;"> <Reddit /> </li>
                <li style="--svg-hover-color: #f70000;"> <Youtube /> </li>
                <li style="--svg-hover-color: white;"> <Medium /> </li>
                <li style="--svg-hover-color: #1d9bf0;"> <Twitter /> </li>
            </ul>
       </div>
    </div>
   <p class="absolute bottom-0 left-0 text-sm lg:text-md" > <sup>©</sup>2021 KIOO. All rights reserved. </p>
</footer>

<style>

    footer {
        color: var(--footer-color);
    }

    div.social > ul > li {
        display: grid;
        place-items: center;
    }

    div.social > ul > li:hover {
        cursor: pointer;
        color: var(--svg-hover-color);
    }

    p.absolute {
        color : #575757;
    }
</style>