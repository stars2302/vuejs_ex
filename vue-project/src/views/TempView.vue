<script setup>
  const rawHtml = "<a href='#'>Link</a>";
  const pid = 10;
  const isButtonDisabled = true;

  const objectOfAttrs= {
    id: 'container',
    class: 'wrapper'
  }


  const number = 20;
  const ok = false;
  const message = '안녕';
  const id= 30;

  const sayHello = (msg)=>{
    alert(msg);
  }

  const url = 'https://www.naver.com';
  const attributeName = 'title';

  const items = [
    {id:0, title: '부'},
    {id:1, title: '승'},
    {id:2, title: '관'}
  ]

  const onSubmit = ()=>{
    alert('제출되었습니다.^^')
  }
</script>

<template>
  <div class="layout">
    <h1>This is an Template page</h1>

    <h2>속성 바인딩</h2>
    <p>{{ rawHtml }}</p>
    <p><span v-html="rawHtml"></span></p>
    <hr>

    <div v-bind:id="pid">변수사용 가능!</div>
    <div :id="pid">변수사용 가능!</div>
    <div id="pid">이건 그냥 글씨</div>
    <!-- <div id={{ pid }}>안됨. {{ pid }}하지만 내용에선 괄호사용해서 됨</div> -->
    <hr>

    <h2>불리언 바인딩</h2>
    <button disabled="true">버튼(평범한 disalbed)</button>
    <button :disabled="isButtonDisabled">버튼(:disabled="true" 활용)</button>
    <button :disabled="!isButtonDisabled">버튼(:disabled="!true" 활용)</button>

    <hr>
    <h2>여러속성 바인드</h2>
    <div v-bind="objectOfAttrs">해당 객체만 넣어주면 속성 여러개 한번에 불러오기</div>

    <hr>
    <h2>javascript 표현식</h2>
    {{ number + 1 }}

    {{ ok ? '예' : '아니오' }}

    {{ message.split('').reverse().join('') }}

    <div :id="`list-${id}`"></div>

    <h2>함수호출</h2>
    <!-- <span :title="sayHello('안농')">{{ sayHello('다시안농') }}</span> -->

    <hr>
    <h2>디렉티브</h2>
    <a :href="url">네이버</a>
    <a v-bind:[attributeName]="attributeName">link</a>

    <div v-for="item in items" :key="item.id">
      {{ item.title }}
    </div>
    <hr>
    <h2>v-on (이벤트 메서드)</h2>
    <div>
      <button type="button" v-on:click="sayHello('hi')">hi</button>
      <button type="button" @click="sayHello('hihi')">hihi</button>
      <button type="button" @mouseover="sayHello('hihi')">hihi</button>
    </div>
    
    <form action="" @submit.prevent="onSubmit">
      <button>제출</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
