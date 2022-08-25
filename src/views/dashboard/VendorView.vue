/* eslint-disable */

<template>
  <div class="menu__container__box">
    <div class="menu__container">
      <div class="menu__name">
        <h3>
          <a @click="back()"><i class="fas fa-arrow-left"></i></a>
          &nbsp; Vendors
        </h3>
        <div class="circle-buttons">
          <div class="circle-button">
            <i class="fas fa-sync-alt" style="color: white"></i>
          </div>
        </div>
      </div>
    </div>
    <form id="search" role="search">
      <div class="Search-box-container">
        <input type="search" id="search-input" />
        <button><i class="fa fa-search"></i></button>
      </div>
    </form>
    <!-- menus ends here -->
  </div>
</template>
<script>
export default {
  name: "VendorView",
  data() {
    return {};
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
.menu__name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Search-box-container {
  max-width: 90%;
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column;
  
  gap: 1.5em; */
}
.Search-box-container button {
  width: 60px;
  height: 50px;
  margin-left: -1em;
}
/* .Search-box {
  background: #feefe9;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 0.5rem !important;
}
.Search-box h2 {
  color: #f06723;
} */
.circle-button {
  height: 30px;
  width: 30px;
  background-color: #f06723;
  border-radius: 50%;
  object-fit: cover;
  /* text-align: center; */
  padding: 0.45em;
}
</style>
