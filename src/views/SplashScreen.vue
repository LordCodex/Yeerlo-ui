/* eslint-disable */

<template>
  <div class="Splash_container grid">
    <div class="Splashbox__container__column--one">
      <img src="../assets/img/logo-mobile.png" alt="" />
    </div>
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="Splashbox__container__column--two">
      <img src="../assets/img/logo-mobile.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "SplashScreen",
};
</script>
<style scoped>
@import "../assets/css/Splash.css";
.logo img {
  width: 50%;
  margin: 0 auto;
}
.Splash_container {
  height: 100vh;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(1, 1fr);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Splashbox__container__column--two {
  display: flex;
  justify-content: right;
  align-items: center;
  opacity: 0.05;
}
.Splashbox__container__column--one {
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.05;
}
</style>
