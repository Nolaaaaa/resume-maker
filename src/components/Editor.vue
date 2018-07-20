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
                <Profile :items="resume.profile" 
                :labels="{ name: '名字', city: '城市', birth: '生日' }" />
            </li>
            <li v-show="currentTab===1">
                <StudyHistory :items="resume.studyHistory" 
                :labels="{school: '学校', degree: '学历', duration: '时间',}"/>
            </li>
            <li v-show="currentTab===2">
                <WorkHistory :items="resume.workHistory" 
                :labels="{company: '公司',content: '工作内容',}"/>
            </li>
            <li v-show="currentTab===3">
                <Projects :items="resume.projects" 
                :labels="{name: '项目名称',function: '项目功能',skill:  '所用技术',detail: '技术细节',address: '项目预览'}"/>
            </li>
            <li v-show="currentTab===4">
                <Awards :items="resume.awards" 
                :labels="{name: '奖项名称',content: '奖项说明',time: '获奖时间'}" />
            </li>
            <li v-show="currentTab===5">
                <Contacts :items="resume.contacts" 
                :labels="{wechat: '微信',phone: '电话',email: '邮箱'}"/>
            </li>
        </ol>
    </div>
</template>
<script>
import Profile from './Profile'
import WorkHistory from './WorkHistory'
import StudyHistory from './StudyHistory'
import Projects from './Projects'
import Awards from './Awards'
import Contacts from './Contacts'


export default {
    props: ['resume'],
    data(){
        return {
            currentTab: 0,
            icons:['self','work','read','jiangbei','project','phone'],
        }
    },
    components: {
        Profile,
        WorkHistory,
        StudyHistory,
        Awards,
        Projects,
        Contacts,
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