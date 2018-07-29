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
      const cookieEl = document.querySelector('.cookie');
      this.$store.dispatch('incrementCookieCounter');

      var newSpan = document.createElement('div'); 
      newSpan.textContent = `+ ${ this.$store.state.defaultCookie }`;
      
      cookieEl.appendChild(newSpan);
      newSpan.classList.add('cookie-add');
      
      window.setTimeout(function() {
        cookieEl.removeChild(newSpan);
      }, 2000); 

      return this.$store.state.cookieCounter;
    }
  }
};
</script>

<style lang="scss">
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
  }

  .cookie {
    border-radius: 100%;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
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

    .cookie-add {
      transition: transform 1.5s ease-in-out;
      font-size: 5vw;
      font-weight: bold;
      //transform: translateY(-100%); 
      animation: goUp 2s;
    }
  }
}

@keyframes goUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%); 
    opacity: 0;
  }
}

</style>
