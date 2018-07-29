currentCpS
<template>
  <div class="cpsContainer">
    <div id="currentCps"> Cookies par seconde : {{ currenCpS | numberFormatter }} </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentCpS',
  data: function() {
    return {};
  },
  computed: {
    currenCpS() {
      return this.$store.state.currentCpS;
    }
  }
};
</script>

<style lang="scss" scoped>
.cpsContainer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 2vw;

  .currentCps {
    width: 100%;
    height: 100px;
  }
}
</style>
