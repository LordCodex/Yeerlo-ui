/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow">
        <i class="fas fa-arrow-left"></i> &nbsp; Login
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="email">Email</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <label for="password">Password</label>
          <br />
          <input type="text" name="" id="" />
          <div id="forgot">
            <router-link :to="{ name: 'forgot' }" class="yell"
              >Forgot Password</router-link
            >
          </div>
          <br />
          <div class="login__input">
            <button class="loginbtn">Login</button>
          </div>
          <div class="signup">
            Don't have account ?&nbsp;
            <router-link :to="{ name: 'signup' }" class="yell"
              >Sign Up</router-link
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
};
</script>
<style scoped>
@import "../assets/css/Form.css";
</style>
