<template>
    <div class="main">
        <div v-for="(item,i) in showTrack" :key="i">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$store.getters.showList)
        },
        computed:{
            showTrack(){
                // console.log(this.$store.getters.showList)
                return this.$store.getters.showList
            }
        }
    }
</script>

<style lang="less" scoped>
</style>