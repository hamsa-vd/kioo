<script>
    import Employees from "./team/employees.svelte";
</script>

<article id="team" class="flex flex-col items-center space-y-24">
    <section class="team-header flex flex-col space-y-4" >
        <h3 class="font-me capitalize text-center text-2xl lg:text-4xl"> meet the team </h3>
        <div class="flex justify-center">
            <p class="font-ps text-gray text-md lg:text-lg text-center" > Prove that you have real people working for you, with some nice looking profile pictures. </p>
        </div>
    </section>
    <Employees />
    <button class="font-me bg-yellow text-black capitalize -mt-12 text-lg">view more</button>
</article>


<style>
    #team { 
        scroll-margin-top: 150px;
    }

    p {
        max-width: 50ch;
    }

    button {
        padding: 1em 2em;
    }
</style>