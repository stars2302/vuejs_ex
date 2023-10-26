<script>
  export default {
    data() {
      return {
        list: [
          'html','css','javascript'
        ]
      }
    },
    mounted() {
      // document.querySelector('#username').focus();
      this.$refs.username.focus();

      //ref가 v-for 내부에서 사용되면 배열로!
      console.log(this.$refs.items)
    }
  }
</script>




<template>
  <div class="layout">
    <h1>This is Event Handling page</h1>

    {/* <input id="username" /> */}
    {/* ref로 별칭을 정해서 this.$refs.별칭 으로 불러와 활용할 수 있음 */}
    <input ref="username" />

    <hr>

    <ul>
    <li v-for="item in list" ref="items" :key="item">
      {{ item }}
    </li>
  </ul>

  </div>
</template>

<style>
.box {
  border: 1px solid #ccc;
  padding: 20px;
  display: inline-block;
}
section {
  height: 200vh;
}
hr{margin: 10px 0}

</style>