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
        <form @submit.prevent="handleSubmit">
          <label for="Name">Name</label>
          <br />
          <input type="Name" v-model="name" id="name" />
          <br />
          <br />
          <label for="Email">Your Email</label>
          <br />
          <input type="email" v-model="email" id="email" />
          <br />
          <br />
          <label for="Password">Password</label>
          <br />
          <input type="password" v-model="password" id="password" />
          <br />
          <div class="login__input">
            <button class="loginbtn">Sign Up</button>
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
import axios from "axios";
export default {
  name: "LoginView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios
        .post("https://live.yeerlo.com/api/auth", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
</style>
