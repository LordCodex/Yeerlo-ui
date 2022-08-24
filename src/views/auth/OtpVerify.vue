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
        <form @submit.prevent="handleSubmit">
          <div class="mt-5">
            <div class="code-input">
              <input
                class="otp"
                type="text"
                maxlength="1"
                v-model.trim="otpone"
                data-index="0"
                ref="input-0"
                @input="focusNextOncePopulated($event, 1)"
              />
              <input
                class="otp"
                type="text"
                maxlength="1"
                v-model.trim="otptwo"
                data-index="1"
                ref="input-1"
                @input="focusNextOncePopulated($event, 1)"
              />
              <input
                class="otp"
                type="text"
                maxlength="1"
                v-model.trim="otpthree"
                data-index="2"
                ref="input-2"
                @input="focusNextOncePopulated($event, 1)"
              />
              <input
                class="otp"
                type="text"
                maxlength="1"
                v-model.trim="otpfour"
                data-index="3"
                ref="input-3"
                @input="focusNextOncePopulated($event, 1)"
              />
              <input
                class="otp"
                type="text"
                maxlength="1"
                v-model.trim="otpfive"
                data-index="4"
                ref="input-4"
                @input="focusNextOncePopulated($event, 1)"
              />
              <input
                class="otp"
                type="text"
                maxlength="1"
                v-model.trim="otpsix"
                data-index="5"
                ref="input-5"
                @input="focusNextOncePopulated($event, 1)"
              />
            </div>
          </div>
          <br />
          <br />
          <div class="login__input">
            <button class="loginbtn">Confirm Code</button>
          </div>
        </form>

        <div class="signup">
          You didn't receive any code ?&nbsp;
          <a href="javascript:void(0)" @click="resendOtp" class="yell"
            >Resend code</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "OtpVerify",
  data() {
    return {
      token: this.$route.params.token,
      otpone: "",
      otptwo: "",
      otpthree: "",
      otpfour: "",
      otpfive: "",
      otpsix: "",
    };
  },
  methods: {
    handleSubmit() {
      const email = this.$route.params.email;
      const otp =
        this.otpone +
        this.otptwo +
        this.otpthree +
        this.otpfour +
        this.otpfive +
        this.otpsix;
      var config = {
        method: "post",
        url: `https://yeerlo-go.herokuapp.com/code/verify?code=${otp}&key=verification_${email}&action=welcome&email=${email}`,
        headers: {
          "x-access-token": this.token,
        },
      };

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

          this.$router.push({ name: "Success Page" });
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
    resendOtp() {
      const email = this.$route.params.email;
      var sendOtp = {
        method: "get",
        url: `https://yeerlo-go.herokuapp.com/auth/resend-code/${email}`,
        headers: {
          "x-access-token": this.token,
        },
      };
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

      axios(sendOtp)
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
    focusNextOncePopulated(event, max) {
      if (event.target.value.length === max) {
        const nextElement =
          this.$refs?.[`input-${Number(event.target.dataset.index) + 1}`];
        if (nextElement) nextElement.focus();
      }
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
