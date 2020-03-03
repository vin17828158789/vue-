<template>
    <div id="main">
        <div class="top">
            <router-view/>
        </div>
        <div class="bottom">
            <p><router-link to='/index' exact>首页</router-link></p>
            <p><router-link to='/track' exact>足迹</router-link></p>
            <p><router-link to='/user' exact>用户</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
#main{
    position: relative;
    .top{}
    .bottom{
        width: 100%;
        background: #f64;
        display: flex;
        position: fixed;
        justify-content: space-around;
        bottom: 0;
        border-top: 2px solid #000;
        padding-top: 20px;
        p{
            text-align: center;
            width: 30%;
            margin-bottom: 20px;
            a{
                color: #000;
                font-size: 20px;
            }
        }
    }
}
</style>