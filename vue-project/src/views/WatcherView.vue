<script >

//비동기 : 외부 주소의 데이터를 받아올 때, 결과값을 가져올때까지 기다리는 것.?
export default {
  data() {
    return {
      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.'
    }
  },
  watch: {
    // 질문이 변경될 때마다 이 함수가 실행됩니다
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = '생각 중...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
      } catch (error) {
        this.answer = '에러! API에 연결할 수 없습니다. ' + error
      }
    }
  }
}


</script>

<template>
  <div class="layout">
    <h1>This is Event Handling page</h1>
    <p>
      예/아니오 질문:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
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