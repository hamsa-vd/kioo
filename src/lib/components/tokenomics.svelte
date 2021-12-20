<script>
    import { supplies } from '../constants'

    /** @param { Supply['type'] } type */
    const getColSpan = (type) => type === 'max' || type === 'circulating' ? 'lg:col-span-3' : 'lg:col-span-2' 

</script>

<arcticle id="tokenomics" class="space-y-24" >
    <section class="tokenomics-header space-y-4" >
        <h3 class="font-me text-center text-2xl lg:text-4xl"> KIOO Tokenomics </h3>
        <div class="flex justify-center">
            <p class="font-ps text-gray text-md lg:text-lg text-center" > All KIOO token holders are KIOO’s buyers, no allocation has been reserved for the project initiators. </p>
        </div>
    </section>
    <section class="tokenomics-body text-black grid grid-cols-6 gap-8">
        {#each supplies as supply}
            <div class="flex flex-col justify-center items-center {supply.type} rounded-3xl space-y-4 col-span-6 {getColSpan(supply.type)}" >
                <h4 class="font-me text-2xl lg:text-4xl uppercase"> {supply.value.toLocaleString()}{supply.type === 'max' ? "\$KIOO" : "B"} </h4>
                <h6 class="font-ps text-md lg:text-xl capitalize"> { supply.type } supply </h6>
                {#if supply.percent}
                    <p class="font-ps text-md lg:text-xl"> {supply.percent}% </p>
                {/if}
            </div>
        {/each}
    </section>
</arcticle>

<style>
    #tokenomics {
        scroll-margin-top: 150px;
    }

    p {
        max-width: 50ch;
    }

    section.tokenomics-body > div {
        min-height: 150px;
    }

    section.tokenomics-body > div.max {
        background: linear-gradient(75.02deg, #FBE1E9 -15.65%, #E5D2FF 40.4%, #9CE3FF 98.83%);
    }

    section.tokenomics-body > div.circulating {
        background: linear-gradient(252.87deg, #9DE4FA -5.56%, #9AFEC2 49.33%, #BCE0F4 103.08%);
    }

    section.tokenomics-body > div.reflection {
        background: linear-gradient(240.58deg, #FFDBAB -5.31%, #B5FFE9 58.47%, #FF9081 113.59%);
    }

    section.tokenomics-body > div.burn {
        background: linear-gradient(239.36deg, #F19CFF -22.28%, #FFC39C 50.52%, #FFEEFF 113.43%);
    }

    section.tokenomics-body > div.liquidity {
        background: linear-gradient(242.86deg, #B5FDDA -5.84%, #8DE0F1 58.39%, #6CAFFF 113.9%);
    }

    @media only screen and (min-width : 768px) {
        section.tokenomics-body > div {
            min-height: 200px;
        }
        section.tokenomics-body > div.circulating, section.tokenomics-body > div.max {
            min-height: 250px;
        }
    }
</style>