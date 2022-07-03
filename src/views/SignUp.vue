/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow" @click="back">
        <i class="fas fa-arrow-left"></i> &nbsp; Sign Up
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="Name">Name</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <label for="Email">Email</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <div class="login__input">
            <button class="loginbtn">Sign Up</button>
          </div>
          <div class="signup">
            Don't have account ?&nbsp;
            <router-link :to="{ name: 'login' }" class="yell"
              >Sign In</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
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
