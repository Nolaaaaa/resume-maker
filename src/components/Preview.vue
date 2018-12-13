<template>
  <div id="preview">
    <section class="profile">
      <h2>{{resume.profile[0].name || "Your name"}}</h2>
      <h3>WEB前端开发</h3>
      <p>{{resume.profile[0].city || "Your city"}} | {{resume.profile[0].birth || "Your birth"}}</p>
      <div
        class="contacts"
        v-if="filter(resume.contacts).length > 0"
        v-for="items in filter(resume.contacts)"
        :key="items.id"
      >
        <ul v-for="item in items" :key="item.id">
          <li>{{item}}</li>
        </ul>
      </div>
    </section>
    <section class="projects" v-if="filter(resume.projects).length > 0">
      <h2>项目经验</h2>
      <div v-for="items in filter(resume.projects)" :key="items.id">
        <h3>{{items.name}}</h3>
        <ul v-for="item in items" :key="item.id">
          <li>{{item}}</li>
        </ul>
      </div>
    </section>
    <section class="workHistory" v-if="filter(resume.workHistory).length > 0">
      <h2>工作经历</h2>
      <div v-for="items in filter(resume.workHistory)" :key="items.id">
        <h3>{{items.name}}</h3>
        <ul v-for="item in items" :key="item.id">
          <li>{{item}}</li>
        </ul>
      </div>
    </section>
    <section class="studyHistory" v-if="filter(resume.studyHistory).length > 0">
      <h2>学习经历</h2>
      <div v-for="items in filter(resume.studyHistorys)" :key="items.id">
        <h3>{{items.name}}</h3>
        <ul v-for="item in items" :key="item.id">
          <li>{{item}}</li>
        </ul>
      </div>
    </section>
    <section class="awards" v-if="filter(resume.awards).length > 0">
      <h2>个人奖项</h2>
      <div v-for="items in filter(resume.awards)" :key="items.id">
        <h3>{{items.name}}</h3>
        <ul v-for="item in items" :key="item.id">
          <li>{{item}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["resume"],
  methods: {
    filter(array) {
      //过滤空对象。有项目就显示
      return array.filter(item => !this.isEmpty(item));
    },
    isEmpty(object) {
      //判断是否为空，true为空，false为中间有值
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