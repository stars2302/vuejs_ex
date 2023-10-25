<script >

export default {
  data(){
    return {
      message: '',
      mutiple:'',
      checked: true,
      checkedNames: [],
      picked: '하나',
      selected: '',
      options: [
        { text: '하나', value: '1' },
        { text: '둘', value: '2' },
        { text: '셋', value: '3' }
      ],
      toggle : false,

      pick: '',
      first: '부',
      second: '승관',

      msg: ''
    }
  },

  computed: {

  },

  methods: {
    
  }
}

</script>

<template>
  <div class="layout">
    <h1>This is Event Handling page</h1>
    <h2>텍스트</h2>
    <input type="text" :value="message" @input="event=>message=event.target.value">
    <!-- <input v-model="message"> --><!-- 영어만...... 중,일,한어는 한글자씩 딜레이 -->
    <p>메시지 : {{ message }}</p>

    <hr>
    <span>여러 줄 메세지:</span>
    <textarea v-model="mutiple" placeholder="여러 줄을 추가해보세요"></textarea>
    <p style="white-space: pre-line;">{{ mutiple }}</p>

    <h2>체크박스</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <hr>

    <div>체크된 이름: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
    <label for="jack">젝</label>

    <input type="checkbox" id="john" value="존" v-model="checkedNames">
    <label for="john">존</label>

    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
    <label for="mike">마이크</label>

    <hr>

    <div>선택한 것: {{ picked }}</div>

    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>

    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>

    <hr>

    <div>선택됨: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option value="a">가</option>
      <option value="b">나</option>
      <option value="c">다</option>
    </select>

    <hr>

    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.text }}
      </option>
    </select>

    <div>선택됨: {{ selected }}</div>

    <hr>

    <!-- `picked`는 선택 시 문자열 "가"입니다. -->
    <input type="radio" v-model="picked" value="가" />

    <!-- `toggle`은 true 또는 false입니다. -->
    <input type="checkbox" v-model="toggle" />

    <!-- `selected`는 첫 번째 옵션이 선택될 때 문자열 "한글"입니다. -->
    <select v-model="selected">
      <option value="한글">한글</option>
    </select>

    <hr>

    <input
      type="checkbox"
      v-model="toggle"
      true-value="네"
      false-value="아니오"
      id ="check" 
    />
    <label for="check">{{ toggle }}</label>

    <hr>

    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    {{ pick }}

    <hr>

    <h2>lazy</h2>
    <p>입력할 때 마다 실시간으로 변경되지 않고, 입력 후 액션(엔터, 블러 등)이 있어야 반영됨</p>
    <input v-model="msg" /><!-- event: input -->
    <input v-model.lazy="msg" /><!-- event: change -->
    {{ msg }}
  </div>
</template>

<style>
 hr{margin: 10px 0}
</style>