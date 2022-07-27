/* eslint-disable */

<template>
  <div class="menu__container__box">
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
        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-swatchbook icon"></i> &nbsp; My Page
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-images icon"></i> &nbsp; Gallery
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-money-bill-wave icon"></i> &nbsp; Earnings
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-th icon"></i> &nbsp; Modules
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>

        <div class="menu">
          <div class="menu-text">
            <i class="fas fa-store-alt icon"></i> &nbsp; Vendors
          </div>
          <div class="menu-icon"><i class="fas fa-angle-right"></i></div>
        </div>

        <div class="menu">
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
  </div>
</template>
<script>
export default {
  name: "MenuView",
};
</script>
<style scoped>
.menu__container__box {
  height: 100vh;
  background-color: white;
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
.sticky__footer {
  display: flex;
  background: rgba(0, 4, 14, 0.14);
  width: 100%;
  padding: 0.4em 1em;
  /* gap: 1em; */
  opacity: 1;
  position: sticky;
  bottom: 0;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(25px);
  -o-backdrop-filter: blur(25px);
  -moz-backdrop-filter: blur(25px);

  backdrop-filter: blur(25px);
}
.footer-icons {
  text-align: center;
  font-size: 16px;

  /* flex-direction: column; */
}
.act {
  color: #f06723;
}
</style>
