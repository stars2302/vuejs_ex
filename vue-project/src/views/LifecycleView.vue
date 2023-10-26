<script>
//script setup 이 export를 해주는 거임
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {

  },

  //mounted - 로드된 최초 1회
  mounted(){
    console.log('컴포넌트 마운트 완료')//4
  },
  beforeMount(){
    console.log('컴포넌트 마운트 이전')//1
  },


  //update - 값이 업데이트 될 때 마다
  beforeUpdate(){
    console.log('업데이트 시작')
  },
  updated(){
    console.log('업데이트 완료')
  }
}
</script>

<template>
  <!-- 컴파일 - 로드, 값이 바뀔때마다 계쏙 -->
  {{ console.log('템플릿 컴파일 시작') }}<!-- 2 -->
  <div class="layout">
    <h1>This is lifecycle hooks page</h1>
    <button @click="count++">+</button>
    <div id="counter">{{ count }}</div>

  </div>
  {{ console.log('템플릿 컴파일 완료') }}<!-- 3 -->
</template>

<style>
 hr{margin: 10px 0}
</style>