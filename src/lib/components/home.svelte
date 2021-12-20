<script>
    import Top from "./home/top.svelte";
    import Bottom from "./home/bottom.svelte";
    import Highlights from "./home/highlights.svelte";
</script>

<article id="home" class="space-y-20">
    <Top />
    <Highlights />
    <Bottom />
</article>

<style>
    #home {
        scroll-margin-top: 150px;
    }
</style>