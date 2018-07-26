<template>
  <div class="shopContainer">
    <ul>
      <li v-for="(item, key) in building" v-bind:key="key" class="building" v-on:click="buyBuilding(key)"> 
        {{ key }} : {{ item }} <br>
        Price: {{ buildingPrice(key) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BuildingShop",
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
        this.$store.dispatch("removeCookies", {
          price: this.buildingPrice(buildingType)
        });

        this.$store.dispatch("buyBuilding", {
          building: buildingType,
          number: 1
        });
        
        this.$store.dispatch("newCurrentCpS");
      }
      return this.$store.getters.getBuilding(buildingType);
    },
    buildingPrice: function(buildingName) {
      const building = this.$store.getters.getBuilding(buildingName);
      const base_price = building.base_price;
      const total_building = building.total;

      let price = (base_price * Math.pow(1.15, total_building)).toFixed(3);

      return parseFloat(price);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_easings.scss";

.shopContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .building {
    width: 100%;
    border: 2px solid black;
    cursor: pointer;
    margin: 5px;
    transition: transform 0.2s ease-in-out;

    &:active {
      transform: scale(1.05);
    }
  }
}
</style>
