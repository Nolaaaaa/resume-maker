<template>
  <div>
    <h2>{{items.name}}</h2>
    <el-form>
      <div class="container" v-for="(item, index) in items.text" :key="item.id">
        <el-form-item :label="items.label[key]" v-for="key in keys" :key="key.id">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" @click="removeContent(index)"></i>
      </div>
      <el-form-item>
        <el-button type="primary" @click="addContent">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addContent,removeContent } from '@/assets/method.js'
export default {
  props: ["items"],
  computed: {
    keys() {
      return Object.keys(this.items.text[0])
    }
  },
  methods: {
    removeContent,
    addContent
  }
};
</script>

