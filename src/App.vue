<template>
  <div id="app"> 
    <!-- 导航区域 -->
    <div class="head">
      <Header />
    </div>
     <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Common/Header.vue'

export default {
  name: 'App',
  components:{
    Header,
  }
};
</script>

<style>

</style>
