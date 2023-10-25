<script>
//script setup 이 export를 해주는 거임
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName : 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    fullName : {
      //computed의 객체에선 get, set만 사용가능!
      get(){
        return this.firstName + ' ' + this.lastName 
      },
      set(newValue){
        [this.firstName, this.lastName] = newValue.split(' ');
      }
    }
  }
}
</script>

<template>
  <p>책을 가지고 있다:</p>
  <span>{{ publishedBooksMessage }}</span>
  <hr>
  <div>이름: {{ this.fullName }}</div><!--get()-->
  <div>이름: {{ this.fullName='승관 부' }}</div><!--set()-->
</template>

<style>
 hr{margin: 10px 0}
</style>