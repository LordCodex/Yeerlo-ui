/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow">
        <h2 class="loghead">Login</h2>
        <p>Sign in to your account.</p>
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="email">Your Email</label>
          <br />
          <input type="email" name="" id="" />
          <br />
          <br />
          <label for="password">Password</label>
          <br />
          <input type="password" name="" id="" />
          <div id="forgot">
            <router-link :to="{ name: 'Other Information' }" class="yell"
              >Forgot Password?</router-link
            >
          </div>
          <br />
          <div class="login__input">
            <button class="loginbtn">Login</button>
          </div>
          <div class="signup with_account">or login with account</div>
          <div class="signup accounts">
            <button class="social">
              <i class="fab fa-google"></i>&nbsp; Google
            </button>
            <button class="social">
              <i class="fab fa-facebook"></i>&nbsp; Facebook
            </button>
          </div>
          <div class="signup">
            Don't have an account ?&nbsp;
            <router-link :to="{ name: 'Sign Up' }" class="yell"
              >Register</router-link
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
