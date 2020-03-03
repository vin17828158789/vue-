<template>
    <div class="main">
        <div class="top">
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
            <div><img src="../assets/imgs/男宝宝.png" alt=""></div>
        </div>
        <div class="mid">
            <h2>超值特惠</h2>
            <div class="contant">
                <div class="msg msg_1">超值特惠1</div>
                <div class="msg msg_2">超值特惠2</div>
                <div class="msg msg_3">超值特惠3</div>
            </div>
        </div>
        <div class="bottom">
            <div class="msg" v-for="(items,i) in getmsg" :key="i">
                <p @click="addTrack(items.msg)">
                    <span>{{ items.id }}</span>
                    <span>{{ items.msg }}</span>
                    <span>{{ items.price }}</span>
                    <span>{{ items.num }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            getmsg(){
                return this.$store.state.msgs
            }
        },
        methods:{
            // 点击改变状态
            addTrack(btnmsg){
                return this.$store.commit('addTrack',btnmsg)
            }
        }
    }
</script>

<style lang="less" scoped>
.main{
    width: 100%;
    display: flex;
    flex-flow: column;
    overflow-y: auto;
    overflow: hidden;
    .top{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        div{
            width: 18%;
            border-radius: 50%;
            margin: 10px;
            background: purple;
            text-align: center;
            img{
                width: 50%;
            }
        }
    }
    .mid{
        h2{
            margin: 10px 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #000;
        }
        .contant{
            display: flex;
            justify-content: space-around;
            text-align: center;
            .msg{
                border: 1px solid #ccc;
                width: 30%;
                height: 80px;
            }
        }
    }
    .bottom{
        .msg{
            p{
                margin: 20px 0;
                span{
                    margin-left: 40px;
                }
            }
        }
    }
}
</style>