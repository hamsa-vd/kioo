<script>
    export let imgSrc;
</script>


<div class="highlight flex items-center p-2 space-x-2">
    <div class="img-container p-2">
        <img src="{imgSrc}" alt="{imgSrc}" />
    </div>
    <slot />
</div>

<style>
    div.highlight {
        background-color: rgba(255,255,255, 0.1);
        border-radius: .75em;
    }
    div.img-container {
        background-color: rgba(255,255,255, 0.25);
        border-radius: .75em;
    }
</style>
