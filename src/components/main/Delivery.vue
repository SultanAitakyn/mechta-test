<template>
  <main class="container">
    <form @submit="onSearchSubmit" class="search-form">
      <input required v-model="cityName" type="text" class="search-form__input" placeholder="City name"/>
      <button type="submit" class="search-form__button">GO</button>
    </form>
    <div class="delivery-cards">
      <DeliveryCard v-for="(delivery, index) of deliveries" :delivery="delivery" :key="index"/>
    </div>
  </main>
</template>

<script>
import DeliveryCard from '@/components/main/DeliveryCard.vue';
import {getDeliveryInfo} from '@/requests/delivery.js';

export default {
  name: 'Delivery',
  components: {
    DeliveryCard
  },
  data() {
    return {
      cityName: '',
      deliveries: []
    }
  },
  methods: {
    onSearchSubmit(e) {
      e.preventDefault();
      if (this.cityName !== '') {
        this.getDeliveries(this.cityName);
      }
    },
    async getDeliveries(cityName) {
      try {
        const response = await getDeliveryInfo(cityName);
        this.deliveries = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.getDeliveries('nur-sultan');
  }
}
</script>

<style scoped>
.container {
  padding-top: 1.2rem;
  background-color: #fafbfc;
}

.search-form {
  text-align: center;
  padding: 1.2rem;
}

.search-form__input {
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.search-form__input:focus {
  color: #333;
}

.search-form__button {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.delivery-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
