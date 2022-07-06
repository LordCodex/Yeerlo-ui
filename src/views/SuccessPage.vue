/* eslint-disable */

<template>
  <div class="Login_container">
    <div id="box_container">
      <br />
      <!-- form start from here -->
      <div class="form">
        <img src="../assets/img/mark.png" alt="" />
        <p>You've successfully setup your Yeerlo account.</p>
        <button>Continue</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginView",
};
</script>
<style scoped>
@import "../assets/css/Form.css";
.form {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
}
button {
  background-color: white;
  color: #f06723;
}
</style>
