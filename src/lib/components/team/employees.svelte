<script>
    import Employee from "./employee.svelte";
    import { team } from '../../constants'
</script>

<section class="employees grid grid-cols-3 gap-8 justify-center">
    {#each team as employee}
        <Employee {employee} />
    {/each}
</section>


<style>
    section.employees {
        margin-inline: auto;
    }
</style>