/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow" @click="back">
        <i class="fas fa-arrow-left"></i> &nbsp; Reset Password
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="Password">Password</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <label for="Confirm Password">Confirm Password</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <div class="login__input">
            <button class="loginbtn">Next</button>
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
<style scoped></style>
