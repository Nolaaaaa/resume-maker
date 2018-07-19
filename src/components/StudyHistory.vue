<template>
    <div>
        <h2>学习经历</h2>
        <el-form >
            <div  class="container" v-for="item in studyHistory" :key="item.id">  
                <el-form-item label="学校">
                  <el-input v-model="item.school"></el-input>
                </el-form-item> 
                <el-form-item label="学位">
                  <el-input v-model="item.degree"></el-input>
                </el-form-item>
                <el-form-item label="时间">
                  <el-input v-model="item.duration"></el-input>
                </el-form-item>
            </div>
            <!-- <el-form-item>
              <el-button type="primary" @click="addStudyHistory">立即创建</el-button>
            </el-form-item> -->
        </el-form>
    </div>
</template>
<script>
export default {
    props: [
        'studyHistory'
    ],
    methods: {
        // addStudyHistory() {
        //     this.studyHistory.push({
        //         school: '',
        //         degree: '',
        //         duration: '',
        //     })
        // }
    }
}
</script>

