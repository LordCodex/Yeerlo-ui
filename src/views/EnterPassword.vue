/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow" @click="back">
        <i class="fas fa-arrow-left"></i> &nbsp; Enter Password
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="Password">Password</label>
          <br />
          <input type="password" name="" id="" />
          <br />
          <br />
          <label for="Confirm Password">Confirm Password</label>
          <br />
          <input type="password" name="" id="" />
          <br />
          <br />
          <div class="login__input">
            <router-link :to="{ name: 'Other  Information' }" class="yell">
              <button class="loginbtn">Next</button></router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EnterPassword",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
@import "../assets/css/Form.css";
</style>
