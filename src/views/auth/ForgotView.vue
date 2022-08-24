/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow">
        <h2 class="loghead">Reset Password</h2>
        <p>Reset Your Password.</p>
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form @submit.prevent="handleSubmit">
          <label for="Verification code"
            >Verification code <i class="fas fa-key"></i
          ></label>
          <br />
          <input
            type="text"
            class="fontAwesome"
            placeholder="Enter Verification Code "
            name=""
            v-model.trim="code"
            id="code"
          />
          <p style="color: red" v-if="codeValidity == 'invalid'">
            Enter Verification Code
          </p>
          <br />
          <br />
          <label for="Password">Password</label>
          <br />
          <input type="password" v-model.trim="pass" id="password" />
          <p style="color: red" v-if="passwordValidity == 'invalid'">
            Enter New Password
          </p>
          <br />
          <br />
          <label for="Confirm Password">Confirm Password</label>
          <br />
          <input type="password" v-model.trim="confirmpass" id="confirmpass" />
          <p style="color: red" v-if="passValidity == 'invalid'">
            Confirm Password is not the same
          </p>
          <p style="color: red" v-if="confirmpassValidity == 'invalid'">
            Confirm New Password
          </p>

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
  name: "LoginView",
  data() {
    return {
      email: this.$route.params.email,
      pass: "",
      code: "",
      confirmpass: "",
      passwordValidity: "pending",
      passValidity: "pending",
      codeValidity: "pending",
      confirmpassValidity: "pending",
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
      // // password validation
      if (this.pass !== this.confirmpass) {
        this.passValidity = "invalid";
        return false;
      } else {
        this.passValidity = "valid";
      }
      if (this.code == "") {
        this.codeValidity = "invalid";
        return false;
      } else {
        this.codeValidity = "valid";
      }
      if (this.pass == "") {
        this.passwordValidity = "invalid";
        return false;
      } else {
        this.passwordValidity = "valid";
      }
      if (this.confirmpass == "") {
        this.confirmpassValidity = "invalid";
        return false;
      } else {
        this.confirmpassValidity = "valid";
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
        code: this.code,
        password: this.pass,
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
                name: "login",
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
  },
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
</style>
