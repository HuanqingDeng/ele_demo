<template>
    <div class="loginContainer">
        <head-top headTitle="登录" goBack="true">
            <!-- <slot name="button"></slot> -->
        </head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg" style="margin-top:10rem"/>
    </div>
</template>

<script>
import headTop from '@/components/headTop'
import {getcaptchas} from '@/api/getData'

// 业务经验一：navigationBar的封装
// history title居中 右边的操作按钮buttons
export default {
    data(){
        return{
            captchCodeImg:'',
            codeNumber:null
        }
    },
    components:{
        headTop
    },
    methods:{
        async getCaptchCode(){
            //api
            const res=await getcaptchas();
            // console.log(res);
            this.captchCodeImg=res.code
        } 
    },
    mounted(){
        this.getCaptchCode()
    }
}
</script>

<style>

</style>
