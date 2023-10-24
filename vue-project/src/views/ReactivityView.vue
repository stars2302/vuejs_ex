<script setup>
  import { ref, nextTick, reactive } from 'vue'

  const count = ref(0); //react의 state랑 비슷!!!한거!!!그거!
  console.log(count); //RefImpL 객체

  const state = reactive({ count2: 0 }); //react의 state랑 비슷!!!한거!!!그거!
  console.log(state); // Proxy
  
  
  
  
  
  // const increment = ()=>{
  //   count.value++;
  // }

  const increment =  async()=>{
    count.value++;
    console.log(document.querySelector('#counter').textContent);
    await nextTick();//template 실행완료되어 값이 업데이트 될때까지 기다리는 중...
    console.log(document.querySelector('#counter').textContent);
  }
</script>

<template>
  {{ console.log('template 실행') }}
  <div class="layout">
    <h1>This is an Reactivity page</h1>

    <!-- <button @click="count++">플러스</button> -->
    <button @click="increment">count 플러스</button><!-- 직접 쓰는거보다 함수로 분리하는게 좋다! -->
    <div id="counter">{{ count }}</div>

    <hr>
    <button @click="state.count2++">count2 플러스</button>
    <div id="counter">{{ state.count2 }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
