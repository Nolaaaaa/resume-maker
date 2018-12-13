<template>
  <div>
    <h2>联系方式</h2>
    <el-form>
      <div class="container" v-for="item in items" :key="item.id">
        <el-form-item :label="labels[key]" v-for="key in keys" :key="key.id">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["items", "labels"],
  computed: {
    keys() {
      return Object.keys(this.items[0]); //拿到数组中的第一项，然后字页面上遍历
    }
  }
};
</script>

