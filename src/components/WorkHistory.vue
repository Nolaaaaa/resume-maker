<template>
    <div>
        <h2>工作经历</h2>
        <el-form >
            <div  class="container" v-for="(item, index) in items" :key="item.id">  
                <el-form-item :label="labels[key]" v-for="key in keys" :key="key.id">
                  <el-input v-model="item[key]"></el-input>
                </el-form-item> 
                <i class="el-icon-circle-close" @click="removeWorkHistory(index)"></i>
            </div>
            <el-form-item>
              <el-button type="primary" @click="addWorkHistory">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props: [
        'items',   //页面上绑定的items
        'labels'   //页面上绑定labels
    ],
    computed: {
        keys() {
            return Object.keys(this.items[0])   //拿到数组中的第一项，然后在页面上遍历
        }
    },
    methods: {
        addWorkHistory() { 
            const newItem = {}   //console.log(this.keys) 打印出来是一个数组 ["company", "content"]
            this.keys.map((key) => {  //console.log(key) //打印出是company、content
                newItem[key] = ''    //把空字符串赋值给 newItem[key]  console.log(newItem[key])  //打印出是空值
            })   
            this.items.push(newItem)   //console.log(newItem) 打印出 {company: "", content: ""}
        },
        removeWorkHistory(index) {
            this.items.splice(index,1) //从某个下标开始删除一个
        },
    }
}
</script>

