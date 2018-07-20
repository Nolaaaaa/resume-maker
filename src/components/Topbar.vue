<template>
    <div id="topbar">
        <div class="logo">Resumer</div>
        <div class="actions">
            <el-button  plain>登录</el-button>
            <el-button type="primary" plain>注册</el-button>
        </div>
    </div>
</template>
<style lang="scss"> 
    #topbar{
        min-height: 50px;
        // border: 3px solid rgb(243, 171, 171);
        display: flex;  //内容并排显示
        justify-content: space-between; //左右排布
        font-size: 18px;
        padding: 8px;
        align-items: center;    //左边x轴上两个居中对齐
        .logo{
            font-weight:800;
        }
        .actions{
            .el-button{padding: 10px 18px}  //登录注册图标大小
        }
    }
</style>

