<script>
export default {
  props: ['title'],// :속성명으로 보낸 값들
  emits: ['enlarge-text','smaller-text']// @속성명으로 보낸 함수들
}

</script>
<template>
  <h2>{{ title }}</h2>
  <button @click="$emit('enlarge-text')">텍스트 확대</button>
  <button @click="$emit('smaller-text')">텍스트 축소</button>
</template>