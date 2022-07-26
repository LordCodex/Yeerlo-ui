<template>
  <!-- <nav>
    <router-link to="/">Login</router-link>
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link>
  </nav> -->
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Urbanist&display=swap");
#app {
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style-type: none;
  font-family: Urbanist;
  outline-style: none;
}
a {
  color: black;
}
</style>
