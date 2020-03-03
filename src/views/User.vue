<template>
    <div class="main">
        <div @click="show" class="imgs">
            <div>
                <img :src="img">
            </div>
        </div>
        <div class="changeimg">
            <div v-show="that">
                <img @click="img=img1" :src="img1" />
                <img @click="img=img2" :src="img2" />
                <img @click="img=img3" :src="img3" />
            </div>
        </div>
    </div>
</template>

<script>
import img1 from '../assets/imgs/2.jpg'
import img2 from '../assets/imgs/8.png'
import img3 from '../assets/imgs/9.png'
    export default {
        data(){
            return {
                that:false,
                img: img1,
                img1,
                img2,
                img3,
            }
        },
        computed:{
            getimgs(){
                return this.$store.state.imgs
            },
            // 获取头像地址
            getimg(){
                var src = ''
                this.$store.state.imgs.forEach(obj=>{
                   src = '../assets/imgs/'+obj.src
                })
                return src
            }
        },
        methods:{
            // 显示下方盒子
            show(){
                this.that = !this.that
            },
        },
    }
</script>

<style lang="less" scoped>
    .main{
        .imgs{
            width: 100px;
            height: 100px;
            img{
                width: 100px;
                height: 100px;
            }
        }
        .changeimg{
            width: 100px;
            height: 100px;
            img{
                width: 100px;
                height: 100px;
            }
        }
    }
</style>