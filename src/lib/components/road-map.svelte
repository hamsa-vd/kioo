<script>
    import Phases from "./roadmap/phases.svelte";
</script>

<article id="roadmap" class="flex flex-col space-y-24">
    <section class="roadmap-header flex flex-col space-y-4" >
        <h3 class="font-me capitalize text-center text-2xl lg:text-4xl"> roadmap </h3>
        <div class="flex justify-center">
            <p class="font-ps text-gray text-md lg:text-lg text-center" > This roadmap outlines our goals and where we want to take Metaverse. </p>
        </div>
    </section>
    <Phases />
</article>


<style>
    #roadmap {
        scroll-margin-top: 150px;
    }

    p {
        max-width: 35ch;
    }
</style>