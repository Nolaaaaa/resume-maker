<template>
    <div>
        <h2>项目经验</h2>
        <el-form >
            <div  class="container" v-for="(item,index) in items" :key="item.id">  
                <el-form-item :label="labels[key]" v-for="key in keys" :key="key.id">
                  <el-input v-model="item[key]"></el-input>
                </el-form-item> 
                 <i class="el-icon-circle-close" @click="removeProjects(index)"></i>
            </div>
            <el-form-item>
            <el-button type="primary" @click="addProjects">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props: [
        'items',
        'labels' 
    ],
    computed: {
        keys() {
            return Object.keys(this.items[0])   //拿到数组中的第一项，然后字页面上遍历
        }
    },
    methods: {
        addProjects() {
            const newItem = {}
            this.keys.map((key) => {
                newItem[key] = ''
            })
            this.items.push(newItem)
        },
        removeProjects(index) {
            this.items.splice(index,1) //从某个下标开始删除一个
        },
    }
}
</script>

