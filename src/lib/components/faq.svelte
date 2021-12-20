<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { faqs } from '../constants'
    let openFaqs = writable([]);

    onMount(() => {
        const temp = []
        for(let _ of faqs) temp.push(false)
        openFaqs.set(temp)
    })
</script>

<article id="faqs" class="flex flex-col lg:flex-row space-y-12 lg:space-y-0">
    <section class="faq-header flex-1 flex flex-col space-y-4" >
        <h3 class="font-me text-center lg:text-left text-2xl lg:text-4xl"> FAQs </h3>
        <p class="font-ps text-gray text-center lg:text-left text-md lg:text-lg" > This faq outlines our goals and where we want to take Metaverse. </p>
    </section>
    <section class="faqs flex-1 flex flex-col space-y-12">
        {#each faqs as faq, idx}
            <div class="faq flex justify-between items-start">
                <div class="faq-content space-y-4">
                    <h4 class="font-pse text-lg lg:text-xl" > {faq.question} </h4>
                    {#if $openFaqs[idx]}
                        <p class="font-ps text-md lg:text-lg text-gray"> {faq.answer} </p>
                    {/if}
                </div>
                <div class="img-holder grid
                place-items-center" on:click|preventDefault={() => openFaqs.update(xOpenFaqs => {
                    xOpenFaqs[idx] = !xOpenFaqs[idx]
                    return xOpenFaqs
                })}>
                    <img src={!$openFaqs[idx] ? "/icons/plus.svg" : "/icons/minus.svg"} alt="toggle" class='faq-toggle' >
                </div>
            </div>
        {/each}
    </section>
</article>

<style>
    div.img-holder {
        background-color: rgba(255,255,255, 0.1);
        min-width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    div.img-holder {
        cursor: pointer;
    }
</style>