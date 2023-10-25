<script>
export default {

  data() {
    return {
      // isActive: true,
      // hasError: false
      classObject: {
        active: true,
        "text-danger": true, //- 하이픈 있으면 따옴표
        nono: false

      }
    }
  },
  data2() {
    return {
      isActive: true,
      error: null,
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  },
  computed: {
    classObject2() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }











}

</script>

<template>
  <div class="about">
    <h1>Class style Binding page</h1>
    <div class="normal" :class="{ active : isActive, 'error' : hasError }"></div>
    <div class="normal" :class=" classObject"></div>
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
hr{margin: 10px 0}

</style>
