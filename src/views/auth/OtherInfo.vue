/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow">
        <h2 class="loghead">Enter Email</h2>
        <p>Enter email to reset password.</p>
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="Organization Name">Your Email</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <div class="login__input">
            <router-link :to="{ name: 'Forgot Password' }" class="yell">
              <button class="loginbtn">Next</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OtherInfo",
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
</style>
