<template>
  <div class="dashboard__container">
    <div class="dashboard__container__boxall">
      <div class="dashboard__head">
        <div class="dashboard__name"><h3>My Activity</h3></div>
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

      <div class="event__convention__container">
        <h2 style="color: #465793c4; margin: 1em 0">Monthly Earnings</h2>
        <div class="event__convention__list__container">
          <div><ChartView /></div>
        </div>
      </div>

      <div class="event__convention__container">
        <h2 style="color: #465793c4; margin: 1em 0">Top Event Conversion</h2>
        <div class="event__convention__list__container">
          <div class="event_box">
            <div class="events">
              <div class="event__image">
                <img src="../assets/img/slide_1.jpg" alt="" />
              </div>
              <div class="event__details">
                <h3>Laff Off Season 1</h3>
                <h4 style="color: #07bb4f">₦6500.06 Earned</h4>
                <h5 style="color: #0738bb">2 Ticket Sold</h5>
              </div>
            </div>
            <div
              style="border-bottom: 1px solid #cccccc; margin: 1.5em 0"
            ></div>
          </div>

          <div class="event_box">
            <div class="events">
              <div class="event__image">
                <img src="../assets/img/slide2.jpg" alt="" />
              </div>
              <div class="event__details">
                <h3>Laff Off Season 2</h3>
                <h4 style="color: #07bb4f">₦6500.06 Earned</h4>
                <h5 style="color: #0738bb">3 Ticket Sold</h5>
              </div>
            </div>
            <div
              style="border-bottom: 1px solid #cccccc; margin: 1.5em 0"
            ></div>
          </div>

          <div class="event_box">
            <div class="events">
              <div class="event__image">
                <img src="../assets/img/slide_3.jpg" alt="" />
              </div>
              <div class="event__details">
                <h3>Laff Off Season 3</h3>
                <h4 style="color: #07bb4f">₦6500.06 Earned</h4>
                <h5 style="color: #0738bb">4 Ticket Sold</h5>
              </div>
            </div>
            <div
              style="border-bottom: 1px solid #cccccc; margin: 1.5em 0"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky__footer">
      <div class="footer-icons">
        <i class="fas fa-chart-line act"></i>
        <p class="act">Activity</p>
        <div style="border-bottom: 3px solid #f06723; margin-top: 0.5em"></div>
      </div>
      <div class="footer-icons">
        <i class="fas fa-box"></i>
        <p>Event</p>
      </div>
      <div class="footer-icons">
        <i class="fas fa-th-large"></i>
        <p>profile</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChartView from "../components/ChartView.vue";
export default {
  name: "DashboardView",
  components: { ChartView },
};
</script>

<style scoped>
.dashboard__container {
  height: 100vh;
  background-color: white;

  margin-top: 1em;
}
.dashboard__container__boxall {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: -0.5em;
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
.event__convention__list__container {
  border: 1px solid #6d7d93;
  border-radius: 1em;
  padding: 2em;
  margin-bottom: 1em;
}
.events {
  display: flex;
  align-items: center;
  gap: 1em;
}
.event__image {
  border: 1px solid #f06723;
  border-radius: 2em;
  object-fit: cover;
  /* padding: 0.3em; */
  width: 70.21px;
  height: 70.21px;
}
.event__image img {
  background-color: #f06723;
  border-radius: 2em;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.event__details {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}
</style>
