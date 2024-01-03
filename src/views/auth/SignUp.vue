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
          <!-- name div start here -->
          <div
            class="form-input"
            :class="{ invalid: nameValidity == 'invalid' }"
          >
            <label for="Name">Name</label>
            <br />
            <input
              type="Name"
              v-model.trim="name"
              id="name"
              @blur="validateInput"
            />
            <p v-if="nameValidity == 'invalid'">Enter a valid name</p>
          </div>
          <br />
          <!-- email div start here -->
          <div
            class="form-input"
            :class="{ invalid: emailValidity == 'invalid' }"
          >
            <label for="Email">Email</label>
            <br />
            <input
              type="Email"
              v-model.trim="email"
              id="email"
              @blur="validateInput"
            />
            <p v-if="emailValidity == 'invalid'">Enter a valid email</p>
          </div>
          <br />
          <!-- password div star here -->
          <div
            class="form-input"
            :class="{ invalid: passValidity == 'invalid' }"
          >
            <label for="Password">Password</label>
            <br />
            <input
              type="password"
              v-model.trim="password"
              id="password"
              @blur="validateInput"
            />
            <p v-if="passValidity == 'invalid'">
              Enter a strong password (More than 6 characters)
            </p>
          </div>
          <br />
          <!-- check agree terms start here -->
          <div
            class="form-input checknot"
            :class="{ invalid: agreeValidity == 'invalid' }"
          >
            <label class="agree">
              <input
                type="checkbox"
                v-model="agree"
                @click="this.agree == !this.agree"
              />
              <span class="checkmark"></span>
            </label>
            <p>By creating an account, you agree to the Terms of Service.</p>
          </div>
          <!-- sign up button starts here -->
          <div class="login__input">
            <button
              class="loginbtn"
              :disabled="
                name === '' ||
                email == '' ||
                password == '' ||
                emailValidity == 'invalid' ||
                passValidity == 'invalid' ||
                agree == false
              "
            >
              Sign Up
            </button>
          </div>
          <!-- sign up with socials start here -->
          <div class="signup with_account">or sign up with account</div>
          <div class="signup accounts">
            <button class="social">
              <i class="fab fa-google"></i>&nbsp; Google
            </button>
            <button class="social">
              <i class="fab fa-facebook"></i>&nbsp; Facebook
            </button>
          </div> 
          <!-- already have an account starts here -->
          <div class="signup">
            Already have an account ?&nbsp;
            <router-link :to="{ name: 'login' }" class="yell"
              >Login</router-link
            >
          </div>
        </form>
        <!-- form ends here -->
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
      agree: false,
      nameValidity: "pending",
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
        .post("https://yeerlo-go.herokuapp.com/auth", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          loader.hide();
          this.$moshaToast(response.data.message, {
            type: "success",
            hideProgressBar: true,
            timeout: 2000,
            showIcon: true,
            transition: "bounce",
            showCloseButton: false,
            swipeClose: false,
          });
          this.users = response.data;
          this.token = this.users.data.token;
          this.$store.dispatch("user", this.users.data);
          setTimeout(
            () =>
              this.$router.push({
                name: "Otp Verification",
                params: { email: this.email, token: this.token },
              }),
            2000
          );
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
    validateInput() {
      // name validation
      if (this.name == "") {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
      // email validation
      if (this.email == "" || !this.email.includes("@")) {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
      // password validation
      // if (this.password == "" || this.password.length < 6) {
      //   this.passValidity = "invalid";
      // } else {
      //   this.passValidity = "valid";
      // }
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/Form.css";
/* The agree button */
.agree {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.agree input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.agree:hover input[type="checkbox"] ~ .checkmark {
  background-color: #f06723;
}

/* When the checkbox is checked, add a blue background */
.agree input[type="checkbox"]:checked ~ .checkmark {
  background-color: #f06723;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.agree input[type="checkbox"]:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.agree .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.checknot {
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin: 0.5em 0;
}
.form-input.invalid input {
  border-color: red;
}
.form-input.invalid label {
  color: red;
}
.form-input.invalid P {
  color: red;
}
button[disabled] {
  border: 1px solid #cccccc;
  background-color: #cccccc;
  color: #666666;
}
</style>
