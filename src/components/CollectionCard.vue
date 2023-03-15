<script setup>
import Card from "./Card.vue";
</script>

<template>
    <div class="max-w-full max-h-full flex flex-column flex-wrap" >
      <Card v-for="country in listCountries" :country="country" :brands="groupedBrands[country]"></Card>
    </div>
    
</template>

<script>
  import brandsCSV from '../data/brands.csv'

  export default{
    components:{
        Card
    },
    data(){
      return{
        listCountries : [],
        groupedBrands : null,
        
      };
    },

    mounted() {

      this.groupedBrands = brandsCSV.reduce((acc, item) => {
        if (!acc[item.Origin]) {
          this.listCountries.push(item.Origin)
          acc[item.Origin] = {
            'nonasian': [],
            'asian' : []
          } 

        if(item.Type === 'nonasian')
          acc[item.Origin]['nonasian'] = [item.Brand]
        else
          acc[item.Origin]['asian'] = [item.Brand]

        } else {
            
          if(item.Type === 'nonasian')
            acc[item.Origin]['nonasian'].push(item.Brand) 
          else
              acc[item.Origin]['asian'].push(item.Brand)
              
        }
        return acc;
      }, {});
      
    },
    

  }


</script>
