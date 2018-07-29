<template>
  <div class="shopContainer">
    <ul class="all-building">
      <li v-for="(item, key) in building" v-bind:key="key" class="building" v-on:click="buyBuilding(key)"> 
        <img v-bind:src="require('../assets/img/'+ item.img)" alt="" class="building-img">
        <div>
          <span class="building-name">{{ key }}</span> <br>
          Price: {{ buildingPrice(key) | numberFormatter }}
        </div>
        <h4>{{ item.total }}</h4>
        {{ item.total_cps }} <br>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BuildingShop',
  data: function() {
    return {};
  },
  computed: {
    building() {
      return this.$store.state.building;
    }
  },
  methods: {
    buyBuilding: function(buildingType) {
      if (this.$store.state.cookieCounter >= this.buildingPrice(buildingType)) {
        this.$store.dispatch('removeCookies', {
          price: this.buildingPrice(buildingType)
        });

        this.$store.dispatch('buyBuilding', {
          building: buildingType,
          number: 1
        });

        this.$store.dispatch('newCurrentCpS');
      }
      return this.$store.getters.getBuilding(buildingType);
    },
    buildingPrice: function(buildingName) {
      return this.$store.getters.buildingPrice(buildingName);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/_easings.scss';

.shopContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .all-building {
    width: 50%;
  }
  .building {
    width: 100%;
    border: 2px solid black;
    cursor: pointer;
    margin: 5px;
    transition: transform 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:active {
      transform: scale(1.05);
    }

    .building-name {
      font-size: 2.5vw;
      font-weight: bold;
    }
  }
}
</style>
