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
        <form @submit.prevent="handleSubmit">
          <label for="Organization Name">Your Email</label>
          <br />
          <input type="text" v-model.trim="email" id="email" />
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
import axios from "axios";
export default {
  name: "OtherInfo",
  data() {
    return {
      email: "",
    };
  },
  mounted() {
    window.addEventListener("online", () => {
      this.isOnLine = true;
    });
    window.addEventListener("offline", () => {
      this.isOnLine = false;
    });
  },
  methods: {
    handleSubmit() {
      // email validation
      if (this.email == "" || !this.email.includes("@")) {
        this.emailValidity = "invalid";
        return false;
      } else {
        this.emailValidity = "valid";
      }

      let loader = this.$loading.show();
      if (this.isOnLine == false) {
        this.$moshaToast("Network Error: Check Connectivity.", {
          type: "danger",
          hideProgressBar: true,
          timeout: 3000,
          showIcon: true,
          transition: "bounce",
          showCloseButton: false,
          swipeClose: false,
        });
      }
      var data = {
        email: this.email,
      };
      var config = {
        method: "patch",
        url: "https://yeerlo-go.herokuapp.com/auth/recover",
        data: data,
      };
      axios(config)
        .then((response) => {
          loader.hide();
          this.$moshaToast(response.data.message, {
            type: "success",
            hideProgressBar: true,
            timeout: 1000,
            showIcon: true,
            transition: "bounce",
            showCloseButton: false,
            swipeClose: false,
          });
          setTimeout(
            () =>
              this.$router.push({
                name: "Forgot Password",
                params: { email: this.email },
              }),
            2000
          );
        })
        .catch((error) => {
          loader.hide();
          this.$moshaToast(error.response.data.message, {
            type: "danger",
            hideProgressBar: true,
            timeout: 1000,
            showIcon: true,
            transition: "bounce",
            showCloseButton: false,
            swipeClose: false,
          });
        });
    },
    // validating all input
  },
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
</style>
