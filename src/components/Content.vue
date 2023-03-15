<script setup>
import Circle from "./Circle.vue";
import CollectionCard from "./CollectionCard.vue";
</script>

<template>
    <div class="p-6 ">
        <h1 class="pb-7 font-sans text-3xl opacity-80">Instant noodle brands are
        mostly from <span class=" px-1.5 rounded bg-custom-orange">Asia</span></h1>

        <p class="p-2 pl-0 opacity-70">Distribution of instant noodle brands according to their country of origin</p>
        
        

        <div class="flex flex-row mb-5">
            <div class=" pr-5 flex items-center flex-row">
                <Circle  :isActive="false" type="asian"/> <span class="pl-1 opacity-70 text-sm ">Asian Country</span>
            </div>
            
            <div class="flex items-center flex-row">
                <Circle :isActive="false" type="nonasian"/> <span class="pl-1 opacity-70 text-sm  ">non-Asian Country</span>
            </div>            
        </div>

        <p class="m-0 opacity-70 text-sm">Each dot represents an instant noodle brand. Click the dot to see the brand.</p>

        <CollectionCard></CollectionCard>

        <p class="p-3 pl-0 opacity-70 w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas id fermentum,
            amet quam viverra tincidunt hendrerit. Lacus vitae, quis ac risus nec. Neque id in lacus, sem interdum. Leo nunc bibendum vitae at at interdum amet. Orci nec, lorem malesuada sit massa. Neque feugiat turpis leo gravida laoreet quis et faucibus. Sed eget at a in ut convallis eu dolor. Est suspendisse venenatis urna turpis nunc, porttitor. Eget auctor erat lacus volutpat mollis scelerisque faucibus eu. Eu, gravida dolor
            feugiat est venenatis. Varius tristique etiam rutrum.</p>
    </div>
</template>