<template>
  <div id="app" :class="{previewMode: previewMode}">
    <Topbar v-on:preview="preview" class="topbar"/>
    <main>
      <Editor  :resume="resume" class="editor"/>
      <Preview  :resume="resume" class="preview"/>
    </main>
    <el-button class="exitPreview" plain @click="exitPreview">退出预览</el-button>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;  
  flex-direction: column;
  .exitPreview {
    display: none;  
  }
  &.previewMode {
    .topbar{ display: none; }
    main .editor {
      display: none;
    }
    main .preview {
      max-width: 800px;
      margin: 32px auto;
    }
    .exitPreview {
      display: inline-block;  
    }
  }
  .topbar{
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
    display: flex;
    flex: 1;
    background: #DDD;
    overflow: auto;  
    .editor{
      width:  40em;
      margin: 16px 8px 16px 16px;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      background: white;
      border-radius: 4px;
    }
    .preview{
      flex: 1;
      margin: 16px 16px 16px 8px;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      background: white;
      border-radius: 4px;
    }
  }
}
</style>
