<template>
    <div class="city_container">
        <head-top go-back="true" :head-title="cityname">
            <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
        </head-top>
        <form class="city_form" v-on:submit.prevent>
            <div>
                <input type="search" name="city" placeholder="输入学校、商务楼、地址" 
                class="city_input input_style" required v-model="inputValue">
            </div>
            <div>
                <input type="submit" name="submit" class="sity_submit input_style" @click="postpois"
                value="提交">
            </div>
        </form>
        <ul class="getpois_ul">
            <li v-for="(item,index) in placelist" :key="index" @click="nextpage(index,item.geohash)">
                <h4 class="pois_name ellipsis">{{item.name}}</h4>
                <p class="pois_address ellipsis">{{item.address}}</p>
            </li>
        </ul>
        <div class="search_none_place" v-if="!placelist.length">很抱歉，暂无结果</div>
    </div>
</template>

<script>
import headTop from "@/components/headTop.vue";
import {currentcity,searchplace} from '@/api/getData';
export default {
    data(){
        return{
            cityname:'',
            cityid:'',
            inputValue:'',
            placelist:[]
        }
    },
    methods:{
        async postpois(){
            if(this.inputValue){
                const placelist=await searchplace(this.cityid,this.inputValue)
                // console.log(data);
                this.placelist=placelist.data
                // console.log(placelist);
                
            }
        },
        nextpage(index,geohash){
            console.log(index,geohash);
            this.$router.push({
                path:'/msite',
                query:{
                    geohash
                }
            })
        }
    },
    async mounted(){
        this.cityid=this.$route.params.cityid;
        // console.log(this.cityid);
        const data=await currentcity(this.cityid)
        this.cityname=data.data.name
        
    },
    components:{
        'head-top':headTop
    }
}
</script>

<style lang="stylus">
@import './../style/mixin'
.city_container
    padding-top 2.35rem
.change_city
    right 0.4rem
    sc(0.6rem,#fff)
    ct()
.city_form
  background-color #fff
  border-top 1px solid $bc
  border-bottom 1px solid $bc
  padding-top 0.4em
  div
    width 90%
    margin 0 auto
    text-align center
    .input_style
      border-radius 0.1rem
      margin-bottom 0.4em
      wh(100%, 1.4rem)
    .city_input
      border 1px solid $bc
      padding 0 0.3em
      sc(0.65rem, #333)
    .city_submit
      background-color $blue
      sc(0.65rem, #fff)

.pois_search_history
  border-top 1px solid $bc
  border-bottom 1px solid $bc
  padding-left 0.5rem
  font(0.475rem, 0.8rem)
.getpois_ul
  background-color #fff
  border-top 1px solid $bc
  li
    margin 0 auto
    padding-top 0.65rem
    border-bottom 1px solid $bc
    .pois_name
      margin 0 auto 0.35rem
      width 90%
      sc(0.65rem, #333)
    .pois_address
      width 90%
      margin 0 auto 0.55rem
      sc(0.45rem, #999)
.search_none_place
  margin 0 auto
  font(0.65rem, 1.75rem)
  color #333333
  background-color #fff
  text-indent 0.5rem
.clear_all_history
  sc(0.7rem, #666)

</style>
