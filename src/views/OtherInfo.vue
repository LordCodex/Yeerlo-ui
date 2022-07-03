/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <!-- login-arrow  -->
      <div class="login-arrow" @click="back">
        <i class="fas fa-arrow-left"></i> &nbsp; Enter Other Info
      </div>
      <br />
      <!-- form start from here -->
      <div class="form">
        <form action="" method="post">
          <label for="Organization Name">Organization Name</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <label for="Phone Number">Phone Number</label>
          <br />
          <input type="number" name="" id="" />
          <br />
          <label for="Nationality">Nationality</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <br />
          <label for="State">State</label>
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
  name: "OtherInfo",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
@import "../assets/css/Form.css";
</style>
