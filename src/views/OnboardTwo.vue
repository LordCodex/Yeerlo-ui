<template>
  <div>
    <div class="Onborarding__Container">
      <div class="Onboarding__Container__Column--one">
        <img src="../assets/img/slide2.jpg" alt="" />
      </div>

      <div
        class="Onboarding__Container__Column--two"
        style="text-align: center"
      >
        <span class="dot"></span>
        <span class="dot" style="background-color: #f06723"></span>
        <span class="dot"></span>
      </div>
      <div class="Onboarding__Container__Column--three">
        <div class="Onboarding__text">
          <h1>Easy Ticketing</h1>
          <p>
            Create free or paid tickets for your events and watch your ticket
            sales as they roll-in in real-time.
          </p>
          <br />
          <br />
          <router-link :to="{ name: 'Onboard Three' }" class="yell">
            <button class="getstarted">Get Started</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnboardTwo",
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
  background-color: #e6c303;
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
}
.dot {
  height: 5px;
  width: 50px;
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
