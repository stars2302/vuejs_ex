<script>
  import ButtonCounter from './ButtonCounte.vue';
  import BlogPost from './BlogPost.vue';
  import Home from './tabs/Home.vue';
  import Post from './tabs/Post.vue';
  import Archive from './tabs/Archive.vue';

  export default {
    components: {
      ButtonCounter,
      BlogPost,
      Home,
      Post,
      Archive
    },
    data(){
      return{
        posts: [
          {id: 1, title: '부승관 귀여워'},
          {id: 2, title: '부승관 잘생겼어'},
          {id: 3, title: '부승관 최고야'}
        ],
        postFontSize: 1,
        currentTab: 'Home',
        tabs: ['Home','Post','Archive']
      }
    }
    
  }
</script>




<template>
  <div class="layout">
    <h1>This is Components Basics page</h1>
    <p>각 자식컴포넌트에서 변수를 따로 잡았고 그래서 각각 따로 작동</p>

    <ButtonCounter/>
    <ButtonCounter/>
    <ButtonCounter/>

    <hr>

    <h2>Blog</h2>
    <!-- 자식 컴포넌트에 값을 넘길 때 :속성명 - 숫자, 문자, 배열, 객체 등 / @속성명 - 함수 -->
    <p>부모 컴포넌트에서 공통 변수를 잡아 넘겨줘서 동시에 작동</p>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
        @smaller-text="postFontSize -= 0.1"
      />
    </div>

    <hr>

    <h2>Tab</h2>
    <div class="tabs">
      <div class="buttons">
        <button v-for="tab in tabs" :key="tab" :class="['tab-button',{active: currentTab === tab}]" @click="currentTab = tab">
          {{ tab }}
        </button>
        <component :is="currentTab"></component>
      </div>
    </div>

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

.buttons button {
  opacity: .5;
  cursor: pointer;
  padding: 7px 20px;
}

.buttons button.active {
  opacity: 1;
}
</style>