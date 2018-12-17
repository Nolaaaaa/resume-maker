<template>
  <div id="preview">
    <section class="profile">
      <h2>{{resume[0].text[0].name || "Your name"}}</h2>
      <h3>WEB前端开发</h3>
      <p>{{resume[0].text[0].city || "Your city"}} | {{resume[0].text[0].birth || "Your birth"}}</p>
    </section>

    <section v-for="items in resume2" :key="items.id">
    <template v-if="filter(items.text).length > 0">
      <h2>{{items.name}}</h2>
      <div v-for="item in filter(items.text)" :key="item.id">
        <h3 v-if="items.name == '项目经验'">{{item.name}}</h3>
        <ul v-for="i in item" :key="i.id">
          <li>{{i}}</li>
        </ul>
      </div>
    </template>
    </section>
  </div>
</template>
<script>
export default {
  props: ["resume"],
  computed: {
    resume2() {
      // 深拷贝 resume
      var resume2 = JSON.parse(JSON.stringify(this.resume))
      resume2.shift()
      return resume2
    }
  },
  methods: {
    filter(arr) {
      return arr.filter(item => !this.isEmpty(item))     //过滤空对象。有项目就显示
    },
    //判断是否为空，true为空，false为中间有值
    isEmpty(object) {
      let empty = true;
      for (let key in object) {
        if (object[key]) {
          empty = false;
          break;
        }
      }
      return empty;
    }
  }
};
</script>

<style lang="scss">
#preview {
  min-height: 1rem;
  box-sizing: border-box;
  padding: .2rem .4rem;
  * {
    padding:.05rem 0;
  }
  ul {
    padding: 0 .4rem;
    li {
      list-style: disc;
    }
  }
}
</style>