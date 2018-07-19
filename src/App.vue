<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'

export default {
  name: 'App',
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
</style>
