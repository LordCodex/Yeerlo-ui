<template>
  <div>
    <div class="Onborarding__Container">
      <div class="Onboarding__Container__Column--one">
        <img src="../../assets/img/slide6-min.png" alt="" />
      </div>

      <div
        class="Onboarding__Container__Column--two"
        style="text-align: center"
      >
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot" style="background-color: #f06723"></span>
      </div>
      <div class="Onboarding__Container__Column--three">
        <div class="Onboarding__text">
          <h1>Live Stream For Wider Reach</h1>
          <p>
            Reach more audience for your events with world-class live streaming
            services. There are a thousand and one viewers hoping to watch live!
          </p>
          <br />
          <br />
          <router-link :to="{ name: 'Sign Up' }" class="yell">
            <button class="getstarted">Get Started</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnboardFour",
};
</script>

<style scoped>
.Onborarding__Container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
.Onboarding__Container__Column--one {
  background-color: #bf002c;
  height: 50vh;
  width: 100%;
  border-radius: 0 0 0 6em;
  object-fit: cover;
}
.Onboarding__Container__Column--one img {
  width: 100%;
  height: 100%;
  border-radius: 0 0 0 6em;
  object-fit: cover;
}
.getstarted {
  font-size: 16px;
}
.Onboarding__Container__Column--three {
  padding: 2em;
  line-height: 1.5;
}
.Onboarding__text h1 {
  font-weight: 700;
  color: #192252;
}
.Onboarding__text p {
  margin: 1em 0;
  color: #848fac;
  margin-bottom: -0.5em;
}
.dot {
  height: 5px;
  width: 40px;
  background-color: #bbb;
  border-radius: 15%;
  display: inline-block;
}
.Onboarding__Container__Column--two {
  display: flex;
  gap: 0.5em;
  padding: 1em;
}
</style>
