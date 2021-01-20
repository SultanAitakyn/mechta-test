<template>
  <header class="header">
    <img class="logo" src="@/assets/logo.png"/>
    <h2>
      Fast delivery
    </h2>
  </header>
</template>

<script>

export default {
  name: 'Delivery',
}
</script>

<style scoped>
.header {
  height: 120px;
  display: flex;
  flex-direction: column;
  background-color: #f0efeb;
  padding: 15px;
  align-items: center;
}

.logo {
  width: 70px;
  height: 70px
}
</style>
