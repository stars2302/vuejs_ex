<script >

export default {
  data(){
    return {
      Langs: 'web',
      items: [
        {id: 1,title:'HTML',desc:'HTML is ....'},
        {id: 2,title:'CSS',desc:'CSS is ....'},
        {id: 3,title:'javascript',desc:'javascript is ....'}
      ],
      myObject: {
        title: 'Vue에서 목록을 작성하는 방법',
        author: '홍길동',
        publishedAt: '2016-04-10'
      },
      numbers: [1, 2, 3, 4, 5,6,8,10,21,111],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    }
  },

  computed: {
    //numbers의 값이 변경되면!!! 실행!!!( 변경, 추가 ,삭제 ...)
    evenNumbers() {
      console.log('evenNumber실행');
      return this.numbers.filter(n => n % 2 === 0)
    }
  },

  methods: {
    //해당값 이외 다른값이 바뀌어도 실행
    even(numbers) {
      console.log('even 실행')
      return numbers.filter(number => number % 2 === 0)
    }
  }
}

</script>

<template>
  <div class="layout">
    <h1>This is List Rendering page</h1>
    <ul>
      <li v-for="(item,idx) in items" :key="item.id">
        {{ Langs }} {{ idx }} : {{ item.title }}
      </li>
    </ul>

    <hr>

    <ul>
      <li v-for="value in myObject" :key="value">
        {{ value }}
      </li>
    </ul>

    <hr>

    <span v-for="n in 10" :key="n">{{ n }}</span>

    <hr>

    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.desc }}</li>
      </template>
    </ul>

    <hr>

    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>
    <button @click="this.numbers.push(2)"></button>

    <hr>

    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
    <button @click="this.sets[0].push(1)"></button>
  </div>
</template>

<style>
 hr{margin: 10px 0}



</style>