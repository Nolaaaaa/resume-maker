<template>
  <div id="app" :class="{previewMode: previewMode}">
    <Topbar @preview="preview" class="topbar"/>
    <main>
      <Editor :resume="resume" class="editor"/>
      <Preview :resume="resume" class="preview"/>
    </main>
    <div class="exitPreview" @click="exitPreview">退出预览</div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'
// profile,workHistory,studyHistory,awards,projects,contacts
export default {
  name: 'App',
  data() {
    return {
      previewMode: false,
      resume: [{
          name: '个人信息',
          label: { name: '名字', city: '城市', birth: '生日' },
          text: [ { name: '', city: '', birth: '' } ]
        },{ 
          name: '工作经历', 
          label: { company: '公司', content: '工作内容' },
          text: [ {company: '', content: ''} ]
        },{ 
          name: '学习经历', 
          label: { school: '学校', degree: '学历', duration: '时间' },
          text: [ {school: '', degree: '', duration: ''} ]
        },{  
          name: '个人奖项', 
          label: { name: '奖项名称', content: '奖项说明', time: '获奖时间' },
          text: [ { name: '', content: '', time: ''} ]
        },{  
          name: '项目经验', 
          label: { name: '项目名称', function: '项目功能', skill:  '所用技术', detail: '技术细节', address: '项目预览' },
          text: [ {name: '', function: '', skill:  '', detail: '', address: ''} ]
        },{  
          name: '联系方式', 
          label: { wechat: '微信', phone: '电话', email: '邮箱' },
          text: [ {wechat: '', phone: '', email: ''} ]
        }
      ]
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
