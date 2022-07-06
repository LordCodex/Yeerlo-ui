/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow">
        <h2 class="loghead">Reset Password</h2>
        <p>Reset Your Password.</p>
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
            <router-link :to="{ name: 'Otp Verification' }" class="yell">
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
  name: "LoginView",
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
