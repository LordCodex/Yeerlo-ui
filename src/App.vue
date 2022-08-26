<template>
  <router-view></router-view>

  <!-- <nav>
    <router-link to="/">Login</router-link>
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link>
  </nav> -->
  <!-- <router-view /> -->
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

.accordion-list {
  display: flex;
  flex-direction: column;
  /* gap: 0.8em;
  margin: 1em 0; */
  margin-top: 1em;
}
.accordion-item__summary {
  padding: 1.3em;
  background: #d9d9d92e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  margin-bottom: 20px;
}
.accordion-item__content {
  animation: myAnim 1s ease 0s 1 normal forwards;
}
@keyframes myAnim {
  0% {
    opacity: 0;
    transform: rotateX(70deg);
    transform-origin: top;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }
}
</style>
