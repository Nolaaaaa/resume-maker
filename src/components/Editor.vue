<template>
  <div id="editor">
    <nav><ol><li
      v-for="(icon, index) in icons"
      :class="{active: currentTab===index }"
      @click="currentTab=index"
      :key="icon.id"
      >
      <i class="iconfont" :class="`icon-${icon}`"></i>
    </li></ol></nav>
    <ol class="panes">
      <li v-show="currentTab===0"><Profile :items="resume[0]"/></li>
      <li v-show="currentTab===1"><StudyHistory :items="resume[1]"/></li>
      <li v-show="currentTab===2"><WorkHistory :items="resume[2]"/></li>
      <li v-show="currentTab===3"><Awards :items="resume[3]"/></li>
      <li v-show="currentTab===4"><Projects :items="resume[4]"/></li>
      <li v-show="currentTab===5"><Contacts :items="resume[5]"/></li>
      
    </ol>
  </div>
</template>
<script>
import Profile from "./Profile";
import WorkHistory from "./WorkHistory";
import StudyHistory from "./StudyHistory";
import Projects from "./Projects";
import Awards from "./Awards";
import Contacts from "./Contacts";

export default {
  props: ["resume"],
  data() {
    return {
      currentTab: 0,
      icons: ["self", "work", "read", "jiangbei", "project", "phone"]
    };
  },
  components: {
    Profile,
    WorkHistory,
    StudyHistory,
    Awards,
    Projects,
    Contacts
  },
  created: function() {}
};
</script>

<style lang="scss">
#editor {
  min-height: 1rem;
  display: flex;
  overflow: auto;
  nav {
    background: rgba(0, 0, 0, 0.836);
    width: 0.8rem;
    height: 100%;
    ol li {
      padding: 0.16rem 0;
      text-align: center;
      .iconfont {
        width: 0.32rem;
        height: 0.32rem;
        font-size: 0.28rem;
        font-weight: 500;
        color: #ffffff;
      }
      &.active {
        background: white;
        .iconfont {
          color: black;
        }
      }
    }
  }
  .panes {
    h2 {
      margin-bottom: 0.32rem;
    }
    .container {
      position: relative;
      .el-icon-circle-close {
        position: absolute; //这个相对上面那个选择器定位
        right: 0;
        top: 0;
      }
    }
    flex: 1; //这句也很重要 精华
    li {
      padding: 0.32rem;
      height: 100%; //这句加下面一句，很重要 精华
      overflow: auto;
    }
  }
}
</style>