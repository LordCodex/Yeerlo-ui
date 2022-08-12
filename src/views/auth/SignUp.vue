/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow">
        <h2 class="loghead">Sign Up</h2>
        <p>Sign up to get your account.</p>
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="Name">Name</label>
          <br />
          <input type="Name" name="" id="" />
          <br />
          <br />
          <label for="Email">Your Email</label>
          <br />
          <input type="email" name="" id="" />
          <br />
          <br />
          <label for="Password">Password</label>
          <br />
          <input type="password" name="" id="" />
          <br />
          <div class="login__input">
            <router-link :to="{ name: 'Otp Verification' }" class="yell">
              <button class="loginbtn">Sign Up</button>
            </router-link>
          </div>
          <div class="signup with_account">or sign up with account</div>
          <div class="signup accounts">
            <button class="social">
              <i class="fab fa-google"></i>&nbsp; Google
            </button>
            <button class="social">
              <i class="fab fa-facebook"></i>&nbsp; Facebook
            </button>
          </div>
          <div class="signup">
            Already have an account ?&nbsp;
            <router-link :to="{ name: 'login' }" class="yell"
              >Login</router-link
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
@import "../../assets/css/Form.css";
</style>
