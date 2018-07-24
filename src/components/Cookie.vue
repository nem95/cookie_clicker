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
      defaultCookie: 1,
      cookieCounter: 
        parseInt(localStorage.getItem('cookieCounter')) || 0,
      isClicked: false,
    }
  },
  methods: {
    addCookies: function () {
      this.cookieCounter += this.defaultCookie;
      this.isClicked = !this.isClicked;
      localStorage.setItem('cookieCounter', this.cookieCounter)
      
      return this.cookieCounter;
    }
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
