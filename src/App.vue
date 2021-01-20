<template>
  <div id="app">
    <Header/>
    <Delivery/>
  </div>
</template>

<script>
import Delivery from '@/components/main/Delivery.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Delivery,
    Header
  }
}
</script>

<style>
#app {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
