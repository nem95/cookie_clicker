<template>
  <div class="cookieContainer">
    <div> {{ cookieCounter }} </div>
    <div class="cookie" v-on:click="addCookies()" v-bind:class="{ isClicked: isClicked}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cookie',
  data: function () {
    return {
      isClicked: false,
      totalCpS: 0.0
    }
  },
  computed: {
    cookieCounter() {
      return this.$store.state.cookieCounter.toFixed(0);
    }
  },
  mounted : function(){
      //this.autoCookies()   
      this.$store.dispatch('autoIncrementCookieCounter');  
  },
  methods: {
    addCookies: function () {
      this.$store.commit('incrementCookieCounter');
      this.isClicked = !this.isClicked;

      return this.$store.state.cookieCounter;
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_easings.scss';

.cookieContainer {  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .cookie {
    border-radius: 100%;
    width: 250px; 
    height: 250px; 
    background-image: url('../assets/img/Cookie.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }
}
</style>
