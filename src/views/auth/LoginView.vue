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
        <form @submit.prevent="handleSubmit">
          <!-- email div start here -->
          <div
            class="form-input"
            :class="{ invalid: emailValidity == 'invalid' }"
          >
            <label for="email">Your Email</label>
            <br />
            <input type="email" name="" v-model.trim="email" id="email" />
            <p v-if="emailValidity == 'invalid'">Enter a valid email</p>
          </div>
          <br />
          <br />
          <div
            class="form-input"
            :class="{ invalid: passValidity == 'invalid' }"
          >
            <label for="password">Password</label>
            <br />

            <input
              type="password"
              name=""
              v-model.trim="password"
              id="password"
            />
            <p v-if="passValidity == 'invalid'">Password is Required</p>
          </div>
          <div id="forgot">
            <router-link :to="{ name: 'Other Information' }" class="yell"
              >Forgot Password?</router-link
            >
          </div>
          <br />
          <div class="login__input">
            <button class="loginbtn">Login</button>
          </div>
          <!-- <div class="signup with_account">or login with account</div>
          <div class="signup accounts">
            <button class="social">
              <i class="fab fa-google"></i>&nbsp; Google
            </button>
            <button class="social">
              <i class="fab fa-facebook"></i>&nbsp; Facebook
            </button>
          </div> -->

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
import axios from "axios";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      agree: false,
      emailValidity: "pending",
      passValidity: "pending",
      agreeValidity: "pending",
      isOnLine: navigator.onLine,
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
      // password validation
      if (this.password == "") {
        this.passValidity = "invalid";
        return false;
      } else {
        this.passValidity = "valid";
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
      axios
        .post("https://yeerlo-go.herokuapp.com/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          loader.hide();
          this.users = response.data;
          this.token = this.users.data.token;
          this.email = this.users.data.email;
          this.$store.dispatch("user", this.users.data);
          if (this.users.data.verified == false) {
            this.$router.push({
              name: "Otp Verification",
              params: { email: this.email, token: this.token },
            });
          } else {
            this.$moshaToast(response.data.message, {
              type: "success",
              hideProgressBar: true,
              timeout: 2000,
              showIcon: true,
              transition: "bounce",
              showCloseButton: false,
              swipeClose: false,
            });
            setTimeout(() => this.$router.push({ path: "/dashboard" }), 2000);
          }
          // this.$router.push({
          //   name: "Dashboard",
          // });
        })
        .catch((error) => {
          loader.hide();
          this.$moshaToast(error.response.data.message, {
            type: "danger",
            hideProgressBar: true,
            timeout: 2000,
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
.form-input.invalid input {
  border-color: red;
}
.form-input.invalid label {
  color: red;
}
.form-input.invalid P {
  color: red;
}
</style>
