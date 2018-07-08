<template>
    <div>{{geohash}}</div>
</template>

<script>
import {cityGuess} from "@/api/getData"
export default {
    data(){
        return{
            geohash:''
        }
    },
    async beforeMount(){
        if(this.$route.query.geohash){
            this.geohash=this.$route.query.geohash
        }else{
            const data=await cityGuess();
            this.geohash=`${data.latitude},${data.longitude}`
        }
        // msite是有一个独立的项目组去做 多个spa组成
        // console.log(this.router.query.geohash);
        
    }
}
</script>

<style>

</style>
