/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <div class="login-arrow">
        <h2 class="loghead">Verification Code</h2>
        <p>Verification code have been sent to your email.</p>
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <div class="code-input">
          <form action="" class="mt-5">
            <input class="otp" type="text" maxlength="1" />
            <input class="otp" type="text" maxlength="1" />
            <input class="otp" type="text" maxlength="1" />
            <input class="otp" type="text" maxlength="1" />
            <input class="otp" type="text" maxlength="1" />
            <input class="otp" type="text" maxlength="1" />
          </form>
        </div>
        <br />
        <br />
        <div class="login__input">
          <router-link :to="{ name: 'Success Page' }" class="yell">
            <button class="loginbtn">Confirm Code</button></router-link
          >
        </div>
        <div class="signup">
          You didn't receive any code ?&nbsp;
          <router-link :to="{ name: 'Success Page' }" class="yell"
            >Resend</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OtpVerify",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
.mt-5 {
  display: flex;
  gap: 1em;
  align-items: center;
}
.otp {
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
