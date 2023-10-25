<script >

export default {
  data(){
    return {
      count : 1,
      name: '귤승관'
    }
  },

  computed: {

  },

  methods: {
    greet(event) {
      // `this`는 메서드가 활성화된 현재 인스턴스를 가리킵니다.
      alert(`안녕 ${this.name}!`)
      // 'event'는 네이티브 DOM 이벤트 객체입니다.
      if (event) {
        alert(event.target.tagName);
        console.log(event);
      }
    },
    say(message) {
      alert(message); 
    },
    warn(message, event) {
      // 이제 네이티브 이벤트 객체에 접근할 수 있습니다.
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    doThis(){
      //.stop
      alert('링크 전파를 차단했습니다.');
    },
    onSubmit(){
      //.onSubmit
      alert('폼 제출을 막았다.')
    },
    doThat(){
      //.stop.prevent
      alert('기능과 링크 전파를 차단했습니다.')
    },
    boxClick(){
      //.onSubmit
      alert('box click')
    },
    spanClick(){
      //.onSubmit
      alert('span click')
    },
    submit(){
      alert('enter 입력되었습니다.')
    },
    onPageDown(){
      window.scrollTo(0,100);
    }
  }
}

</script>

<template>
  <div class="layout">
    <h1>This is Event Handling page</h1>
    <button @click="count++">+</button>
    {{ count }}
    <hr>

    <button @click="greet">환영하기</button>
    <h3 @mouseover="greet">환영하기</h3>

    

    <hr>
    <h2>인라인 핸들러에서 메서드 호출하기</h2>
    <button @click="say('안녕')">안녕이라고 말하기 내게~ 말 하~ 지뫄아</button>
    <button @click="say('잘가')">잘가라고 말하기</button>

    <hr>
    <h2>인라인 핸들러에서 이벤트 객체 접근하기</h2>
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
      제출하기
    </button>

    <!-- 인라인 화살표 함수 사용 -->
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
      제출하기
    </button>


    <hr>

    <!-- 클릭 이벤트 전파가 중지됩니다. -->
    <a @click.stop="doThis" href="http://www.naver.com" target="_blank">doThis</a>

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <form @submit.prevent="onSubmit" action="http://www.naver.com">
      <button>제출</button>
    </form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <a @click.stop.prevent="doThat"></a>

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <form @submit.prevent action="http://www.naver.com">
      <button>제출</button>
    </form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <div @click="boxClick" class="box">
      <span @click.self="spanClick" class="box">ㅎㅇ</span>
    </div>

    <hr>
    <h2>입력키 수식어</h2>
    <!-- `key`가 `Enter`일 때만 `submit`을 호출합니다 -->
    <input @keyup.enter="submit" value="enter 키 입력" />
    <input @keyup.page-down="onPageDown" value="pageDown 키 입력" />


    <section></section>
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