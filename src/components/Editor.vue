<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]"
                    :class="{active: currentTab===i }" 
                    @click="currentTab=i"
                    :key="i.id"
                >
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-{{icon[i]}}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-for="i in [0,1,2,3,4,5]"
                v-show="currentTab===i"
                :key="i.id"
            >{{i}}</li>
        </ol>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentTab: 0,
            icons:['self','work','read','jiangbei','project','phone']
        }
    }
}
</script>

<style lang="scss">
    #editor{
        min-height: 100px;
        display: flex;
        // border:3px solid rgb(155, 241, 155);
        nav{
            background: black;
            width: 80px;
            ol li {
                // border: 1px solid red;
                padding: 16px 0;
                text-align: center;
                .icon{
                    width: 24px;
                    height: 24px;
                    fill:white;
                }
                &.active{
                    background: white;
                    .icon{
                        fill: black
                    }
                }
            }
        }
    }
</style>