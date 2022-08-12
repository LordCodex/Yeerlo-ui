/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <br />
      <!-- form start from here -->
      <div class="form">
        <div class="img_check">
          <img src="../../assets/img/mark.png" alt="" />
        </div>
        <p>You've successfully setup your Yeerlo account.</p>
        <router-link :to="{ name: 'login' }" class="yell">
          <button>Continue</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginView",
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
.form {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
}
button {
  background-color: white;
  color: #f06723;
  font-size: 16px;
  padding: 1em 8em;
}
.img_check img {
  width: 50%;
}
</style>
