<script setup>
import Circle from "./Circle.vue";
</script>

<template>
      <div class="my-8 mr-8 w-1/5  ">
        <h1 class=" text-custom-grey tracking-wide text-sm text-content-grey font-poppins font-bold mb-2">
          {{country}}</h1>
          <div class="flex flex-row flex-wrap w-3/5">
            <Circle v-for="oneBrand in brands['nonasian']" :brands="oneBrand" type="nonasian" :isActive="true"></Circle>
            <Circle v-for="oneBrand in brands['asian']" :brands="oneBrand" type="asian" :isActive="true"></Circle>
          </div>


      </div>

</template>

<script>
export default {
  components:{
      Circle
  },
  props:{
    country: String,
    brands: Object
  },


}
</script>