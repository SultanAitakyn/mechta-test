<template>
  <div class="card">
    <img class="card__img" :src="getImgUrl"/>
    <span class="card__delivery-type">{{delivery.type.toUpperCase()}}</span>
    <span class="card__price">{{delivery.price}}$</span>
    <span class="card__price">{{delivery.city.toUpperCase()}}</span>
    <button :disabled="!delivery.available" class="card__button">Select</button>
  </div>
</template>

<script>

export default {
  name: 'DeliveryCard',
  props: {
    delivery: Object
  },
  computed: {
    getImgUrl() {
      return require('@/assets/' + this.delivery.type + '.png');
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edf2f4;
  border-radius: 13px;
  padding: 25px;
  transition: 0.5s;
  margin: 10px auto;
}

.card:hover {
  box-shadow: 0px 0px 60px 10px rgba(204, 204, 223, 0.71);
}

.card__img {
  max-width: 100px;
  height: 100px;
  margin-bottom: 5px;
}

.card__delivery-type {
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
}

.card__price {
  font-size: 1.6rem;
  font-family: serif;
  margin-bottom: 5px;
}

.card__button {
  font-size: 1.4rem;
  background-color: #fff;
  border: #9fa4af 1px solid;
  text-transform: uppercase;
  font-weight: 300;
  padding: 0.7rem 2.5rem;
  border-radius: 100px;
  transition: 0.2s;
}

.card__button:focus {
  outline: 0;
}

.card__button:hover:enabled {
  background-color: #368ee0;
  color: #fff;
  cursor: pointer;
}
</style>
