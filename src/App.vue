<template>
  <div id="app" :class="{previewMode: previewMode}">
    <Topbar v-on:preview="preview" class="topbar"/>
    <main>
      <Editor  :resume="resume" class="editor"/>
      <Preview  :resume="resume" class="preview"/>
    </main>
    <div class="exitPreview" @click="exitPreview">退出预览</div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'

export default {
  name: 'App',
  data() {
    return {
      previewMode: false,
      resume: {
        profile: [ { name: '', city: '', birth: '' } ],
        workHistory: [ {company: '',content: '',} ],
        studyHistory: [ {school: '',degree: '',duration: ''} ],
        awards: [ {name: '',content: '',time: ''} ],
        projects: [ {name: '',function: '',skill:  '',detail: '',address: ''} ],
        contacts: [ {wechat: '',phone: '',email: ''} ]
      }
    }
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    }
  },
  components: {
    Topbar,
    Preview,
    Editor,
  },
}
</script>

<style lang="scss">
// 页面布局 
#app {
  background-image: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-714256.jpg);
  background-size: cover;
  background-color: rgba(221, 221, 221, 0.836);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;  
  flex-direction: column;
  .exitPreview {  
    color: rgb(37, 126, 214);
    background: #ecf5ff8f ;
    border-color: #b3d8ff;
    padding: .18rem .22rem .12rem; 
    font-weight: bold;
    border-radius: .04rem;
    writing-mode: vertical-lr;
    letter-spacing: 1px;
    position: fixed;
    bottom: 50%;
    right: 0;
    display: none;  
    &:hover {
      color: #fff;
      background-color: rgba(64, 160, 255, 0.616);
      border-color: #409EFF;
      cursor: pointer;
    }
  }
  &.previewMode {
    .topbar{ display: none; }
    main .editor {
      display: none;
    }
    main .preview {
      max-width: 8.00rem;
      margin: .32rem auto;
    }
    .exitPreview {
      display: inline-block;  
    }
  }
  .topbar{
    background: rgba(255, 255, 255, 0.726);
    z-index: 1;
    box-shadow: 0 0 3px hsla(0,0,0,0.5); //添加阴影
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: auto;
  }
  main{
    padding: .24rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    overflow: hidden;  
    .editor{
      width:  40em;
      height: 100%;
      margin: .16rem .16rem .16rem .12rem;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      background: rgba(255, 255, 255, 0.486);
      border-radius: .04rem;
    }
    .preview{
      width:  50em;
      height: 100%;
      margin: .16rem .16rem .16rem .12rem;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      background: rgba(255, 255, 255, 0.486);
      border-radius:.04rem;
    }
  }
}
</style>
