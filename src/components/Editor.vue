<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="(icon, index) in icons"
                    :class="{active: currentTab===index }" 
                    @click="currentTab=index"
                    :key="icon.id"
                >
                    <!-- <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-{{icon[i]}}`"></use>
                    </svg> -->
                    <i class="iconfont" :class="`icon-${icon}`"></i>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-show="currentTab===0">
                <Profile :profile="profile" />
            </li>
            <li v-show="currentTab===1">
                <WorkHistory :workHistory="workHistory"/>
            </li>
            <li v-show="currentTab===2">
                <StudyHistory :studyHistory="studyHistory" />
            </li>
            <li v-show="currentTab===3">
                <h2>个人奖项</h2>
                <el-form >
                  <el-form-item label="奖项名称">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="获奖说明">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="获奖时间">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
                
            </li>
            <li v-show="currentTab===4">
                <h2>项目经验</h2>
                <el-form >
                  <el-form-item label="项目名称">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="项目功能">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="所用技术">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                  <el-form-item label="技术细节">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                  <el-form-item label="预览地址">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
                
            </li>
            <li v-show="currentTab===5">
                <h2>联系方式</h2>
                <el-form >
                  <el-form-item label="微信">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="电话">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
                
            </li>
        </ol>
    </div>
</template>
<script>
import Profile from './Profile'
import WorkHistory from './WorkHistory'
import StudyHistory from './StudyHistory'
export default {
    data(){
        return {
            currentTab: 0,
            icons:['self','work','read','jiangbei','project','phone'],
            profile: {
                name: '',
                city: '',
                birth: '',
            },
            workHistory: [
                {company: '',content: '',}
            ],
            studyHistory: [
                {school: '',duration: '',degree: ''}
            ]
        }
    },
    components: {
        Profile,
        WorkHistory,
        StudyHistory,
    },
    created: function(){
    },

}
</script>

<style lang="scss">
    #editor {
        min-height: 100px;
        display: flex;
        overflow: auto;
        // border:3px solid rgb(155, 241, 155);
        nav {
            background: black;
            width: 80px;
            height: 100%;
            ol li {
                padding: 16px 0;
                text-align: center;
                .iconfont{
                    width: 32px;
                    height: 32px;
                    font-size: 28px;
                    font-weight:500;
                    color: #ffffff;
                }
                &.active {
                    background: white;
                    .iconfont { 
                        color: black; 
                    }
                }
            }
        }
        .panes{
            h2 {
                margin-bottom: 32px;
            }
            .container {
                position: relative;
                .el-icon-circle-close {
                    position: absolute;   //这个相对上面那个选择器定位
                    right: 0;
                    top: 0;
                }
            }
            flex: 1; //这句也很重要 精华
            li {
                padding: 32px;
                height: 100%;  //这句加下面一句，很重要 精华
                overflow: auto;
            }
        }
    }
</style>