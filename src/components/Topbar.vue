<template>
  <div id="topbar" @preview="preview">
    <div class="logo">Resumer</div>
    <div class="actions">
      <el-button type="primary" @click="preview" plain>预览</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    preview() {
      this.$emit("preview");
    }
  }
};
</script>

<style lang="scss">
#topbar {
  min-height: 0.5rem;
  // border:.03rem solid rgb(243, 171, 171);
  display: flex; 
  justify-content: space-between; //左右排布
  font-size: 0.18rem;
  padding: 0.08rem;
  align-items: center; //左边x轴上两个居中对齐
  .logo {
    font-weight: 800;
  }
  .actions {
    .el-button {
      padding: 0.1rem 0.18rem;
      border-radius: .04rem;
    } 
  }
}
</style>

