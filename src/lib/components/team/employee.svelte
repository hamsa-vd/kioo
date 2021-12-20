<script>
    /** @type {Employee} */
    export let employee;
</script>

<div class="employee space-y-4 col-span-3 lg:col-span-1">
    <div class="img-holder w-full">
        <img src="{employee.imgSrc}" alt="{employee.imgSrc}" class="w-full object-fill" />
    </div>
    <div class="flex justify-between items-start">
        <div class="employee-details">
            <h4 class="font-pse capitalize text-lg lg:text-2xl" > {employee.name} </h4>
            <p class="font-ps { employee.designation.includes(" ") ? 'capitalize' : 'uppercase' } text-md lg:text-xl text-gray" > { employee.designation } </p>
        </div>
        <div class="employee-contact flex space-x-2">
            <img src="/icons/linkedin.svg" alt="in" class="w-6" />
            <img src="/icons/github.svg" alt="github" class="w-6" />
        </div>
    </div>
</div>

<style>
    div.employee {
        width: 300px;
    }

</style>
