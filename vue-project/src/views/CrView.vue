<script >

export default {
  data(){
    return {
      awesome: true,
      type: 'D',
      page: true
    }
  }
}

</script>

<template>
  <div class="about">
    <h1>This is an Conditional Rendering page</h1>
    <button @click="awesome = !awesome">전환</button>

    <h2 v-if="awesome">Vue는 정말 멋지죠!</h2>
    <h2 v-else>아닌가요? 😢</h2>
    <h2 v-if="!awesome">Vue는 정말 멋지죠!</h2>
    <h2 v-else>아닌가요? 😢</h2><!-- v-else 위에는 v-if 또는 v-else-if가 있어야됨. 즉, v-else는 반복될 수 없음! -->

    <hr>

    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      A/B/C 아님
    </div>

    <hr>

    <button @click="page=!page" :class="{ active : page }">페이지 전환</button>
    <template v-if="page" >
      <h1 class="page1">제목 1</h1>
      <p>단락 1</p>
      <p>단락 2</p>
      <div v-show="true">hello~</div>
    </template>
    <template v-else>
      <h1 class="page2">제목 2</h1>
      <p>단락 1</p>
      <p>단락 2</p>
      <div v-show="false">world</div>
    </template>


    <hr>

    <!-- v-show는 <template> 엘리먼트를 지원하지 않으며 v-else와 상호작용하지 않습니다. -->
    



  </div>
</template>

<style>
.page1 {
  background-color: pink;
}
.page2 {
  background-color: aqua;
}

button.active {
  background-color: #000;
  color: #fff;  
}
hr{margin: 10px 0}

</style>