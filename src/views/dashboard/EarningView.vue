/* eslint-disable */

<template>
  <div class="menu__container__box">
    <div class="menu__container">
      <div class="menu__name">
        <h3>
          <a @click="back()"><i class="fas fa-arrow-left"></i></a>
          &nbsp; My Earnings
        </h3>
      </div>
    </div>
    <div class="earning-box-container">
      <div class="earning-box">
        <h3>Earnings This Month</h3>
        <h2>₦0</h2>
      </div>
      <div class="earning-box">
        <h3>All Time Earnings</h3>
        <h2>₦0</h2>
      </div>
    </div>
    <!-- menus ends here -->
  </div>
</template>
<script>
export default {
  name: "EarningView",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.menu__container__box {
  /* height: 100vh; */
  background-color: white;
  margin: 1.5em 0;
}
.menu__container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}
/* .menu__name {
  margin: 1.5em 0;
  
  max-width: 90%;
  margin: 0 auto;
} */
.earning-box-container {
  max-width: 90%;
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
.earning-box {
  background: #feefe9;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 0.5rem !important;
}
.earning-box h2 {
  color: #f06723;
}
</style>
