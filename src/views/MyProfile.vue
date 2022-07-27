/* eslint-disable */

<template>
  <div class="menu__container__box">
    <div class="menu__container">
      <div class="menu__name">
        <h2>
          <a @click="back()"><i class="fas fa-arrow-left"></i></a>
          &nbsp;Profile
        </h2>
        <p style="margin-left: 2em; margin-top: 0.2em; margin-bottom: 2em">
          My profile page
        </p>
      </div>
      <div class="menus">
        <div class="menu">
          <div class="menu-text">Edit Profile</div>
          <div class="menu-icon" id="open-sheet" aria-controls="sheet">
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
    <!-- The sheet component -->
    <div id="sheet" class="column items-center justify-end" aria-hidden="true">
      <!-- Dark background for the sheet -->
      <div class="overlay"></div>

      <!-- The sheet itself -->
      <div class="contents column">
        <!-- Sheet controls -->
        <header class="controls">
          <!-- The thing to drag if you want to resize the sheet -->
          <div class="draggable-area">
            <div class="draggable-thumb"></div>
          </div>
          <!-- Button to close the sheet -->
          <div class="close-sheet" type="button" title="Close the sheet">
            <i class="fas fa-times-circle"></i>
          </div>
        </header>

        <!-- Body of the sheet -->
        <main class="body fill column">
          <h2>Hello, World!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            explicabo vero quas eligendi, eos cupiditate sint aliquam a omnis
            commodi quos in libero veniam. Quidem, non a quibusdam consequuntur
            mollitia officia numquam sit quos dolorum quaerat reprehenderit
            laboriosam perspiciatis consequatur odit error dolore recusandae
            iste id quam magnam ut! Sint nulla minus excepturi libero officiis,
            deleniti, delectus obcaecati saepe natus rerum nesciunt!
          </p>
        </main>
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
  gap: 0.8em;
  margin: 1em 0;
}
.menu {
  padding: 1.5em;
  background: #d9d9d92e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
}
.icon {
  color: #f06723;
}
</style>
