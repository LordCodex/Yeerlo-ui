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

        <div class="menu" @click="isOpensocial = true">
          <div class="menu-text">Social Profile</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu" @click="isOpenSettings = true">
          <div class="menu-text">Account Setting</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu" @click="isOpenCurrency = true">
          <div class="menu-text">Currency</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu" @click="isOpenSecurity = true">
          <div class="menu-text">Security 2fa</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu" @click="isOpenTransaction = true">
          <div class="menu-text">Trasaction Pin</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>

        <div class="menu" @click="isOpenWithdraw = true">
          <div class="menu-text">Withdraw Info</div>
          <div class="menu-icon"><i class="fas fa-plus"></i></div>
        </div>
      </div>
    </div>
    <!-- menus ends here -->
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
          <h3><strong>Basic Profile</strong></h3>
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
              <input type="text" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="Phone">Phone (Optional)</label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="Username">Username </label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="Country">Country </label>
              <select name="cars" id="cars">
                <option value="volvo">Nigeria</option>
                <option value="saab">United State</option>
                <option value="opel">China</option>
                <option value="audi">Greece</option>
              </select>
            </div>
            <br />
            <div class="form__input">
              <label for="Bio">Bio </label>
              <textarea style="height: 146px; width: 100%">
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
    <!-- Edit profile  ends sheet -->

    <!-- Edit social  ends sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="90%"
      v-model:visible="isOpensocial"
      :clickOutside="false"
    >
      <!-- social sheetcontainer -->
      <div class="sheetcontainer">
        <!-- social sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- social sheet header -->
        <div class="sheet__header">
          <h3><strong>Social Profile</strong></h3>
          <br />
        </div>
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input">
              <label for="Phone number 1"
                ><i class="fas fa-phone-alt" style="color: #f06723"></i>
                &nbsp; Phone number 1
              </label>
              <input type="text" id="" placeholder="e.g +896-789-546" />
            </div>
            <br />
            <div class="form__input">
              <label for="Phone number 2">
                <i class="fas fa-phone-alt" style="color: #f06723"></i>
                &nbsp; Phone number 2
              </label>
              <input type="text" id="" placeholder="e.g +796-789-546" />
            </div>
            <br />
            <div class="form__input">
              <label for="website">
                <i class="fas fa-globe" style="color: rgb(20, 20, 175)"></i>
                &nbsp; Website
              </label>
              <input type="text" id="" placeholder="e.g www.my-site.com" />
            </div>
            <br />
            <div class="form__input">
              <label for="Email">
                <i class="fas fa-envelope" style="color: #ea4335"></i>
                &nbsp; Email
              </label>
              <input type="text" id="" placeholder="e.g my-self@gmail.com" />
            </div>
            <br />
            <div class="form__input">
              <label for="Facebook">
                <i class="fab fa-facebook" style="color: blue"></i>
                &nbsp; Facebook
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://facebook.com/my-page"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="twitter">
                <i class="fab fa-twitter" style="color: #00acee"></i>
                &nbsp; Twitter
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://twitter.com/my-page"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="instagram">
                <i class="fab fa-instagram" style="color: #dd2a7b"></i>
                &nbsp; Instagram
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://instagram.com/my-page"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="linkedin">
                <i class="fab fa-linkedin" style="color: #0072b1"></i>
                &nbsp; Linkedin
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://linkedin.com/company/my-company"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="whatsapp">
                <i class="fab fa-whatsapp" style="color: #075e54"></i>
                &nbsp; Whatsapp
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://whatsapp.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="pinterest">
                <i class="fab fa-pinterest" style="color: #e60023"></i>
                &nbsp; Pinterest
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://pinterest.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="snapchat">
                <i class="fab fa-snapchat" style="color: #fffc00"></i>
                &nbsp; Snapchat
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://snapchat.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="quora">
                <i class="fab fa-quora" style="color: red"></i>
                &nbsp; Quora
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://quora.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="medium">
                <i class="fab fa-medium" style="color: black"></i>
                &nbsp; Medium
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://medium.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="tiktok">
                <i class="fab fa-tiktok" style="color: black"></i>
                &nbsp; Tiktok
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://tiktok.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="youtube">
                <i class="fab fa-youtube" style="color: red"></i>
                &nbsp; Youtube
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://www.youtube.com/in/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="tumblr">
                <i class="fab fa-tumblr" style="color: black"></i>
                &nbsp; Tumblr
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://www.tumblr.com/my-channel"
              />
            </div>
            <br />
            <div class="form__input">
              <label for="skype">
                <i class="fab fa-skype" style="color: #00aff0"></i>
                &nbsp; Skype
              </label>
              <input
                type="text"
                id=""
                placeholder="e.g https://www.skype.com/563728"
              />
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- social sheetcontainer ends here -->
    </Sheet>
    <!-- Edit social ends sheet -->
    <!-- Edit Settings  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="50%"
      v-model:visible="isOpenSettings"
      :clickOutside="false"
    >
      <!-- Settings sheetcontainer -->
      <div class="sheetcontainer">
        <!-- Settings sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- Settings sheet header -->
        <div class="sheet__header">
          <h3><strong>Account Settings</strong></h3>
        </div>
        <br />
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input checkb">
              <label for="Account Reaction">Account Reaction</label>
              <input type="checkbox" id="toggles" class="checkbox" />
              <label for="toggles" class="switch"></label>
            </div>
            <br />
            <div class="form__input checkb">
              <label for="Newsletter">Newsletter</label>
              <input type="checkbox" id="toggle" class="checkbox" />
              <label for="toggle" class="switch"></label>
            </div>
            <br />
            <div class="form__input checkb">
              <label for="My Subscription">My Subscription</label>
              <input type="checkbox" id="toggless" class="checkbox" />
              <label for="toggless" class="switch"></label>
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Settings sheetcontainer ends here -->
    </Sheet>
    <!-- Edit Settings  ends sheet -->

    <!-- Edit Currency  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="40%"
      v-model:visible="isOpenCurrency"
      :clickOutside="false"
    >
      <!-- Currency sheetcontainer -->
      <div class="sheetcontainer">
        <!-- Currency sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- Currency sheet header -->
        <div class="sheet__header">
          <h3><strong>Currency</strong></h3>
        </div>
        <br />
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input">
              <label for="currency">
                <i class="fas fa-money-bill-alt"></i>
                &nbsp; Default Currency
              </label>
              <select name="cars" id="cars">
                <option value="volvo">NGN</option>
                <option value="saab">USD</option>
                <option value="opel">EUR</option>
                <option value="audi">EFR</option>
              </select>
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Currency sheetcontainer ends here -->
    </Sheet>
    <!-- Edit Currency  ends sheet -->

    <!-- Edit Security  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="50%"
      v-model:visible="isOpenSecurity"
      :clickOutside="false"
    >
      <!-- Security sheetcontainer -->
      <div class="sheetcontainer">
        <!-- Security sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- Security sheet header -->
        <div class="sheet__header">
          <h3><strong>Security</strong></h3>
        </div>
        <br />
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input checkb">
              <label for="Account Reaction">Two FA </label>
              <input type="checkbox" id="togg" class="checkbox" />
              <label for="togg" class="switch"></label>
            </div>
            <br />
            <br />
            <div class="form__input">
              <label for="key">
                <i class="fas fa-key"></i>
                &nbsp; Ticket Auth Key
              </label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Security sheetcontainer ends here -->
    </Sheet>
    <!-- Edit Security  ends sheet -->

    <!-- Edit Transaction  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="60%"
      v-model:visible="isOpenTransaction"
      :clickOutside="false"
    >
      <!-- Transaction sheetcontainer -->
      <div class="sheetcontainer">
        <!-- Transaction sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- Transaction sheet header -->
        <div class="sheet__header">
          <h3><strong>Transaction Pin</strong></h3>
          <p>Change transaction pin</p>
        </div>
        <br />
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input">
              <label for="Old Pin">Old Pin </label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="New Pin">New Pin</label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Transaction sheetcontainer ends here -->
    </Sheet>
    <!-- Edit Transaction  ends sheet -->

    <!-- Edit Withdraw  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="60%"
      v-model:visible="isOpenWithdraw"
      :clickOutside="false"
    >
      <!-- Withdraw sheetcontainer -->
      <div class="sheetcontainer">
        <!-- Withdraw sheetclose -->
        <h3 @click="closeSelf()" style="float: right">
          <i class="fas fa-window-close" style="color: #f06723"></i>
        </h3>
        <br />
        <br />
        <!-- Withdraw sheet header -->
        <div class="sheet__header">
          <h3><strong>Withdrawal Info</strong></h3>
          <p>Input Your Withdrawal info</p>
        </div>
        <br />
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input">
              <label for="Old Pin">Old Pin </label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="form__input">
              <label for="New Pin">New Pin</label>
              <input type="text" id="" />
            </div>
            <br />
            <div class="login__input">
              <button class="loginbtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Withdraw sheetcontainer ends here -->
    </Sheet>
    <!-- Edit Withdraw  ends sheet -->
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
      isOpensocial: false,
      isOpenSettings: false,
      isOpenCurrency: false,
      isOpenSecurity: false,
      isOpenTransaction: false,
      isOpenWithdraw: false,
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
  font-size: 22px;
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

/* checkboxs switch */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: all 0.3s;
}
.switch::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

.checkbox:checked + .switch::after {
  left: 20px;
}
.checkbox:checked + .switch {
  background-color: #f06723;
}
.checkbox {
  display: none;
}
.checkb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkb label {
  font-size: 17px;
}
</style>
