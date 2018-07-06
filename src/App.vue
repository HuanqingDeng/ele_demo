<template>
  <div id="app">
    <transition name="router-fade">
      <!-- vue 内置组件 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <!-- vue 内置组件 -->
      <keep-alive>
        <router-view v-if="!$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'
//name+enter 进入那一瞬间
//router-fade-enter-active 会在进入的整个过程里，完全进入之后会移除这个样式
.router-fade-enter-active ,
.router-fade-leave-active 
{
    transition: opacity 3s;
  }
.router-fade-enter,
.router-fade-leave-active 
{
  opacity :0;
}
</style>
