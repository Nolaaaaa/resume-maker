<template>
    <div>
        <h2>工作经历</h2>
        <el-form >
            <div  class="container" v-for="(work, index) in workHistory" :key="work.id">  
                <el-form-item label="公司名称">
                  <el-input v-model="work.company"></el-input>
                </el-form-item> 
                <el-form-item label="工作内容">
                  <el-input v-model="work.content"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" @click="removeWorkHistory(index)"></i>
            </div>
            <el-form-item>
              <el-button type="primary" @click="addWorkHistory">立即创建</el-button>
              <!-- <el-button @click="clearWorkHistory">取消</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props: [
        'workHistory'
    ],
    methods: {
        addWorkHistory() {
            this.workHistory.push({
                company: '',
                content: '',
            })
        },
        removeWorkHistory(index) {
            this.workHistory.splice(index,1) //从某个下标开始删除一个
        },
        // clearWorkHistory() {
        // }
    }
}
</script>

