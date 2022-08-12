/* eslint-disable */

<template>
  <div class="menu__container__box">
    <div class="menu__container">
      <div class="menu__name">
        <h3>
          <a @click="back()"><i class="fas fa-arrow-left"></i></a>
          &nbsp;Profile
        </h3>
        <p style="margin-left: 2em; margin-top: 0.2em; margin-bottom: 2em">
          My profile page
        </p>
      </div>
      <div class="menus">
        <div class="menu-icon" id="open-sheet" aria-controls="sheet">
          <div class="menu">
            <div class="menu-text">Edit Profile</div>
            <i class="fas fa-plus"></i>
          </div>
        </div>

        <div class="menu">
          <div class="menu-text">Social Profile</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">Account Setting</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">Currency</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">Security 2fa</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">Trasaction Pin</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">Withdraw Info</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyProfile",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
@import "../assets/css/Bottomsheet.css";
@import "../assets/css/bottommain.css";
.menu__container__box {
  /* height: 100vh; */
  background-color: white;
  margin: 1.5em 0;
}
.menu__container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}
/* .menu__name {
  margin: 1.5em 0;
} */
.menus {
  display: flex;
  flex-direction: column;
  /* gap: 0.8em;
  margin: 1em 0; */
  margin-top: 1em;
}
.menu {
  padding: 1.3em;
  background: #d9d9d92e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  margin-bottom: 20px;
}
.icon {
  color: #f06723;
}
</style>
