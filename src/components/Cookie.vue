<template>
  <div class="cookieContainer">
    <div id="counter">{{ cookieCounter | numberFormatter}} Cookies</div>
    <CurrentCpS />

    <div class="cookie" v-on:click="addCookies()"></div>
  </div>
</template>

<script>
import CurrentCpS from './CurrentCpS.vue';

export default {
  name: 'Cookie',
  components: { CurrentCpS },
  data: function() {
    return {};
  },
  computed: {
    cookieCounter() {
      return this.$store.getters.cookieCounter.toFixed(0);
    }
  },
  mounted: function() {
    this.$store.dispatch('autoIncrementCookieCounter');
  },
  methods: {
    addCookies: function() {
      this.$store.dispatch('incrementCookieCounter');

      return this.$store.state.cookieCounter;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/_easings.scss';

.cookieContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #counter {  
    font-weight: bold;
    font-size: 3vw;
  };

  .cookie {
    border-radius: 100%;
    width: 250px;
    height: 250px;
    background-image: url('../assets/img/Cookie.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    margin-top: 50px;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }
}
</style>
