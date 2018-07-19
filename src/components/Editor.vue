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
                <Work :workHistory="workHistory"/>
            </li>
            <li v-show="currentTab===2">
                <el-form >
                  <el-form-item label="姓名">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="城市">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="出生年月">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
            </li>
            <li v-show="currentTab===3">
                <el-form >
                  <el-form-item label="姓名">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="城市">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="出生年月">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
                
            </li>
            <li v-show="currentTab===4">
                <el-form >
                  <el-form-item label="姓名">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="城市">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="出生年月">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
                
            </li>
            <li v-show="currentTab===5">
                <el-form >
                  <el-form-item label="姓名">
                    <el-input v-model="profile.name"></el-input>
                  </el-form-item>
                  <el-form-item label="城市">
                    <el-input v-model="profile.city"></el-input>
                  </el-form-item>
                  <el-form-item label="出生年月">
                    <el-input v-model="profile.birth"></el-input>
                  </el-form-item>
                </el-form>
                
            </li>
        </ol>
    </div>
</template>
<script>
import Profile from './Profile'
import Work from './Work'
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
            ]
        }
    },
    components: {
        Profile,
        Work,
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
                // border: 1px solid red;
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