/* eslint-disable */

<template>
  <div class="menu__container__box">
    <div class="sticky__footer">
      <router-link :to="{ name: 'Dashboard' }" class="page-link">
        <div class="footer-icons">
          <i class="fas fa-chart-line"></i>
          <p>Activity</p>
        </div>
      </router-link>

      <div class="footer-icons">
        <i class="fas fa-box"></i>
        <p>Event</p>
      </div>

      <div class="footer-icons">
        <i class="fas fa-th-large act"></i>
        <p class="act">Menu</p>
        <div style="border-bottom: 3px solid #f06723; margin-top: 0.5em"></div>
      </div>
    </div>

    <div class="menu__container">
      <!-- <div class="menu__name"><h3>Menu</h3></div> -->
      <div class="menus">
        <router-link :to="{ name: 'My Profile' }" class="page-link">
          <div class="menu">
            <div class="menu-text">
              <i class="fas fa-user icon"></i> &nbsp; Profile
            </div>
            <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
          </div>
        </router-link>
        <router-link :to="{ name: 'My Page' }" class="page-link">
          <div class="menu">
            <div class="menu-text">
              <i class="fas fa-swatchbook icon"></i> &nbsp; My Page
            </div>
            <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
          </div>
        </router-link>

        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-images icon"></i> &nbsp; Gallery
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>
        <router-link :to="{ name: 'My Earning' }" class="page-link">
          <div class="menu">
            <div class="menu-text">
              <i class="fas fa-money-bill-wave icon"></i> &nbsp; Earnings
            </div>
            <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
          </div>
        </router-link>
        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-th icon"></i> &nbsp; Modules
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>
        <router-link :to="{ name: 'Vendor List' }" class="page-link">
          <div class="menu">
            <div class="menu-text">
              <i class="fas fa-store-alt icon"></i> &nbsp; Vendors
            </div>
            <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
          </div>
        </router-link>
        <div class="menu" @click="isOpenRate = true">
          <div class="menu-text">
            <i class="fas fa-star icon"></i> &nbsp; Rate Yeerlo
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-sign-out-alt icon"></i> &nbsp; Logout
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>
      </div>
    </div>
    <!-- Edit Withdraw  sheet -->
    <Sheet
      v-slot="{ closeSelf }"
      maxWidth="auto"
      height="90%"
      v-model:visible="isOpenRate"
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
          <h3><strong>Rate Yeerlo</strong></h3>
          <p>Yeerlo Rating & Testimonial</p>
        </div>
        <br />
        <div class="sheet_content">
          <div class="form__input-container">
            <div class="form__input">
              <label for="Position">Position* </label>
              <input type="text" id="" placeholder="e.g CEO, OLAT" />
            </div>
            <br />
            <div class="form__input">
              <label for="Website">Website (Optional)</label>
              <input type="text" id="" placeholder="e.g www.olat.com" />
            </div>
            <br />
            <div class="form__input">
              <label for="Testimonial">Testimonial* </label>
              <textarea
                style="height: 146px; width: 100%"
                placeholder="Write your thoughts on how Yeerlo has helped you enhance your events or businesses..."
              ></textarea>
            </div>
            <br />
            <div class="form__input">
              <label for="Ratings">Ratings </label>
              <select name="ratings" id="ratings">
                <option value="volvo">1</option>
                <option value="saab">1.5</option>
                <option value="opel">2</option>
                <option value="audi">2.5</option>
                <option value="volvo">3</option>
                <option value="saab">3.5</option>
                <option value="opel">4</option>
                <option value="audi">4.5</option>
                <option value="opel">5</option>
              </select>
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
  name: "MenuView",
  components: {
    Sheet,
  },
  data() {
    return {
      isOpenRate: false,
    };
  },
};
</script>
<style scoped>
.menu__container__box {
  margin-top: 1em;
  margin-bottom: 5em;
}
.menu__container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}
.menus {
  display: flex;
  flex-direction: column;
  /* gap: 0.8em; */
  /* margin: 1em 0; */
  margin-top: 2em;
}
.menu {
  padding: 1.3em;
  background: #d9d9d92e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  /* padding: 10px; */
  margin-bottom: 20px;
}
.sticky__footer {
  overflow: hidden;
  background: rgba(0, 4, 14, 0.14);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  -webkit-backdrop-filter: blur(25px);
  -o-backdrop-filter: blur(25px);
  -moz-backdrop-filter: blur(25px);

  backdrop-filter: blur(25px);
  padding: 0.4em 1em;
  opacity: 1;
  /* float: left; */
  color: black;
  text-align: center;
  /* padding: 14px 16px; */
  text-decoration: none;
  font-size: 16px;
}
.icon {
  color: #f06723;
}
.act {
  color: #f06723;
}

.main {
  padding: 16px;
  margin-bottom: 30px;
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
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
