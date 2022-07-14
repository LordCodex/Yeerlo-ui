<template>
  <div class="dashboard__container">
    <div class="dashboard__head">
      <div class="dashboard__name"><h3>Dashboard</h3></div>
      <div class="dashboard__profile_pics">
        <img src="../assets/img/slide_1.jpg" alt="" />
      </div>
    </div>
    <div class="dashboard__box__container">
      <div class="dashboard__box">
        <div class="circle" style="background-color: blue">
          <i class="fas fa-star" style="color: white"></i>
        </div>
        <h2>4.31</h2>
        <p>Average Community Rating</p>
      </div>

      <div class="dashboard__box" style="background: #7afc9e1f">
        <div class="circle" style="background-color: green">
          <i class="fas fa-user-friends" style="color: white"></i>
        </div>
        <h2>3</h2>
        <p>Average Community Rating</p>
      </div>
    </div>

    <div class="dashboard__box__container">
      <div class="dashboard__box" style="background-color: #cccccc66">
        <div class="circle" style="background-color: #848fac">
          <i class="fas fa-rocket" style="color: white"></i>
        </div>
        <h2>0</h2>
        <p>Page Impression</p>
      </div>

      <div class="dashboard__box">
        <div class="circle" style="background-color: black">
          <i class="fas fa-thumbs-up" style="color: white"></i>
        </div>
        <h2>0</h2>
        <p>Page Like</p>
      </div>
    </div>

    <div class="dashboard__box__container">
      <div class="dashboard__box" style="background-color: #ff91ed36">
        <div class="circle" style="background-color: #bb0711">
          <i class="fas fa-shopping-bag" style="color: white"></i>
        </div>
        <h2>0</h2>
        <p>Remarketing Credit</p>
      </div>

      <div class="dashboard__box" style="background-color: #b0f5ff40">
        <div class="circle" style="background-color: #07bbbb">
          <i class="fab fa-slack-hash" style="color: white"></i>
        </div>
        <h2>0</h2>
        <p>Character Count</p>
      </div>
    </div>

    <div class="dashboard__box__container">
      <div class="dashboard__box" style="background: #f583ff33">
        <div class="circle" style="background: #6c07bb">
          <i class="fas fa-database" style="color: white"></i>
        </div>
        <h2>2 GB</h2>
        <p>Storage used</p>
      </div>

      <div class="dashboard__box" style="background: #fdff9880">
        <div class="circle" style="background: #fcf323">
          <i class="fas fa-hdd" style="color: white"></i>
        </div>
        <h2>4.5 GB</h2>
        <p>Storage Capacity</p>
      </div>
    </div>
    <div class="sticky__footer">
      <div class="footer-icons">
        <i class="fas fa-chart-line act"></i>
        <p class="act">My Activity</p>
        <div style="border-bottom: 3px solid #f06723; margin-top: 0.5em"></div>
      </div>
      <div class="footer-icons">
        <i class="fas fa-box"></i>
        <p>Event Management</p>
      </div>
      <div class="footer-icons">
        <i class="fas fa-th-large"></i>
        <p>profile</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
};
</script>

<style scoped>
.dashboard__container {
  height: 100vh;
  background-color: white;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 1em;
}
.dashboard__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}
.dashboard__profile_pics {
  border: 1px solid #f06723;
  border-radius: 1em;
  object-fit: cover;
  padding: 0.3em;
  width: 50.21px;
  height: 50.21px;
}

.dashboard__profile_pics img {
  background-color: #f06723;
  border-radius: 1em;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.dashboard__box__container {
  padding: 0.5em 0;
  display: flex;
  gap: 1em;
  flex-direction: row;
}
.dashboard__box {
  display: flex;
  flex-direction: column;
  width: 178px;
  height: 204px;
  left: 22px;
  top: 158px;
  background: #4657931f;
  border-radius: 8px;
  padding: 1em;
  text-align: center;
  gap: 1em;
}
.circle {
  height: 50px;
  width: 50px;
  border-radius: 2em;
  padding: 1em;
  margin: 0 auto;
}
.sticky__footer {
  display: flex;
  background: #848fac2e;
  border-radius: 25px;
  padding: 1em;
  gap: 1.5em;
  opacity: 1;
  position: sticky;
  bottom: 0;
  justify-content: space-between;
}
.footer-icons {
  text-align: center;
  font-size: 15px;

  /* flex-direction: column; */
}
.act {
  color: #f06723;
}
</style>
