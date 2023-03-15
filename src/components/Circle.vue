<template>

    <div class="m-0 group relative ">
        <div class="relative m-0 w-2 h-2  rounded-full flex justify-center items-center text-center shadow-xl mr-1 my-1"
        :class="{ 'bg-custom-orange': isAsian, 'bg-custom-light': !isAsian,  }">
        
    <span v-if='isActive' class="pointer-events-none absolute -top-9 left-0 w-max rounded bg-white px-2 py-1 text-sm font-poppin font-bold text-black opacity-0 shadow transition-opacity group-hover:opacity-100">
        {{this.brands}}</span>
    </div>

    
    </div>

</template>

<script>
export default {
   data(){
    return{
      isAsian: false,
    }
  },
  mounted(){
    if (this.type === 'nonasian')
      this.isAsian = false
    else
      this.isAsian = true

  },

  props:{
    brands: String,
    type: String,
    isActive: Boolean
  },

}
</script>