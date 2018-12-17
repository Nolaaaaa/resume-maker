<template>
  <div>
    <h2>{{items.name}}</h2>
    <el-form>
      <div class="container" v-for="item in items.text" :key="item.id">
        <el-form-item :label="items.label[key]" v-for="key in keys" :key="key.id">
          <el-input v-model="item[key]">{{item[key]}}</el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["items"],
  computed: {
    keys() {
      return Object.keys(this.items.text[0])
    }
  }
};
</script>

