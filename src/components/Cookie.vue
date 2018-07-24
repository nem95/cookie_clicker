<template>
  <div class="cookieContainer">
    <div> {{ cookieCounter }} </div>
    <div class="cookie" v-on:click="addCookies()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cookie',
  data: function () {
    return {
      defaultCookie: 1,
      cookieCounter: parseInt(localStorage.getItem('cookieCounter')) || 0,
    }
  },
  methods: {
    addCookies: function () {      
      this.cookieCounter += this.defaultCookie;

      localStorage.setItem('cookieCounter', this.cookieCounter)
      return this.cookieCounter;
    }
  }
}
</script>

<style lang="scss">
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
    background-image: url('../assets/Cookie.png');
    background-image: url('../assets/img/Cookie.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;

    &:hover {
      animation-duration: .5s;
      animation-name: grow;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes grow {
  from {
    transform: scale(1);
  }
  
  to {
    transform: scale(1.3);
  }
}
</style>
