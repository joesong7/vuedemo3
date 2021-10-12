<template>
  <div>
    <h1>hello vue3</h1>
    <li v-for="item in userData.book" :key="item.key">
       {{item.title}}
    </li>
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
       await axios.get('http://7485-1-200-178-123.ngrok.io/api/book').then((response) => {
         userData.book = response.data
         console.log("mounted");
      
      
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