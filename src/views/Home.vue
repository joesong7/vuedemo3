<template>
  <div>
    <h1>hello vue3</h1>
 
       {{userData.book.results}}
    
      <input type="text" v-model="search">
      {{newSearch}}
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from '@vue/runtime-core';
import axios from 'axios'
export default {
  setup() {
  const search = ref("");
  let newSearch =ref("資料");
  const stopWatch = watch(search, (newValue, oldValue) => {
      if(newValue !=oldValue){
        console.log("更新資料");
      }
   })
    const userData = reactive({
        book:{}

    });
   onMounted(async () => {
       await axios.get('https://randomuser.me/api').then((response) => {
         userData.book = response.data
         console.log(response.data.results);
      
      
      })

      
    })
    return {
      search,
      newSearch,
      stopWatch,
      userData,
    };
  },
};
</script>

<style>
</style>