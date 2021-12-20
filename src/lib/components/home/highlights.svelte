<script>
    import Highlight from "./highlight.svelte";
</script>

<section class="highlights flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-around items-center">
   <div class="info">
        <h3 class="font-me text-xl text-center lg:text-left capitalize" > highlights </h3>
        <p class="font-ps text-md text-center lg:text-left text-gray" > KIOO embeds 2 principles that 
            benefit investors </p>
   </div> 
   <div class="content flex lg:space-x-4 space-x-0 flex-col lg:flex-row space-y-2 lg:space-y-0">
       <Highlight imgSrc="/icons/money-bag.svg">
           <p class="text-md font-ps" > The <span class="text-yellow" > Reflection of 3% </span>
               of each transaction </p>
       </Highlight>
       <Highlight imgSrc="/icons/fire.svg">
           <p class="text-md font-ps" > Mechanism is the 
            <span class='text-yellow' > “Burn” </span>  of each TXN </p>
       </Highlight>
    </div>
</section>

<style>
    div.info > p {
        max-width: 25ch;
    }

    div.content  p {
        max-width: 15ch;
    }
</style>