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
          <div class="menu" @click="isOpenProfile = true">
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
    <!-- Edit profile  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="90%"
      v-model:visible="isOpenProfile"
      :clickOutside="false"
    >
      <!-- profile sheetcontainer -->
      <div class="sheetcontainer">
        <!-- profile sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- profile sheet header -->
        <div class="sheet__header">
          <h3><strong>Edit Profile</strong></h3>
          <p>Edit profile details on yeerlo account.</p>
        </div>
        <div class="sheet_content">
          <div class="upload_image">
            <div class="upload_pics">
              <img src="../../assets/img/slide_1.jpg" alt="" />
            </div>
            <input type="file" ref="file" style="display: none" />
            <button @click="$refs.file.click()">Upload Image</button>
          </div>
          <div class="form__input-container">
            <div class="form__input">
              <label for="name">Name </label>
              <input type="text" name="" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="Phone">Phone </label>
              <input type="text" name="" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="Username">Username </label>
              <input type="text" name="" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="Country">Country </label>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <br />
            <div class="form__input">
              <label for="Bio">Bio </label>
              <textarea style="height: 146px; width: 100%" name="">
Enter Bio here...</textarea
              >
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- profile sheetcontainer ends here -->
    </Sheet>
    <!-- Edit profile  sheet -->
  </div>
</template>
<script>
import { Sheet } from "bottom-sheet-vue3";
export default {
  name: "MyProfile",
  components: {
    Sheet,
  },
  data() {
    return {
      isOpenProfile: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
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
.sheetcontainer {
  max-width: 85%;
  margin: 0 auto;
}
.sheet__header {
  text-align: center;
}
.sheet__header h3 {
  font-size: 25px;
  text-align: center;
  color: #192252;
  margin-bottom: 2px;
}
.upload_pics {
  border: 1px solid #4e3a2f;
  border-radius: 0.5em;
  object-fit: cover;
  /* padding: 0.3em; */
  width: 60.21px;
  height: 60.21px;
}

.upload_pics img {
  background-color: #4e3a2f;
  border-radius: 0.5em;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
#upload-photo {
  height: 0;
  width: 0;
}

#upload-photo-label {
  border: 1px solid #cccccc;
  padding: 5px 30px;
  font-family: arial;
  font-size: 13px;
}
#upload-photo-label:active {
  background: #ccc;
}
.upload_image {
  display: flex;
  gap: 1em;
  margin-top: 2em;
  margin-bottom: 1em;
}
.upload_image button {
  width: 70%;
  padding: 0.8em;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
