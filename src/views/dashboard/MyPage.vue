/* eslint-disable */

<template>
  <div class="menu__container__box">
    <div class="menu__container">
      <div class="menu__name">
        <h3>
          <a @click="back()" class="menu_title"
            ><i class="fas fa-arrow-left"></i
          ></a>
          &nbsp;My page
        </h3>
        <div class="circle-buttons">
          <div class="circle-button"></div>
          <div class="circle-button"></div>
          <div class="circle-button" style="background-color: #07bb4f"></div>
        </div>
      </div>
      <div class="menu-top__text">
        Setup and customize your display page to view demo of your un-saved page
        customization, cliick the button above.for live mode ( i.e saved
        customization), use click button
      </div>
      <AccordionList open-multiple-items>
        <AccordionItem>
          <template #summary>Basic Info</template>
          <template #icon
            ><div class="menu-icon"><i class="fas fa-plus"></i></div
          ></template>
          Some nested content
        </AccordionItem>
        <AccordionItem>
          <template #summary>Media Resources</template>
          <template #icon
            ><div class="menu-icon"><i class="fas fa-plus"></i></div
          ></template>
          Here some text of nested item-2
        </AccordionItem>
        <AccordionItem>
          <template #summary>Gallery</template>
          <template #icon
            ><div class="menu-icon"><i class="fas fa-plus"></i></div
          ></template>
          Here some text of nested item-2
        </AccordionItem>
        <AccordionItem>
          <template #summary>Event</template>
          <template #icon
            ><div class="menu-icon"><i class="fas fa-plus"></i></div
          ></template>
          Here some text of nested item-2
        </AccordionItem>

        <AccordionItem>
          <template #summary>Sponsor</template>
          <template #icon
            ><div class="menu-icon"><i class="fas fa-plus"></i></div
          ></template>
          Here some text of nested item-2
        </AccordionItem>
      </AccordionList>

      <button class="loginbtn">Save Changes</button>
    </div>
  </div>
</template>
<script>
import { AccordionList, AccordionItem } from "vue3-rich-accordion";
export default {
  name: "MyPage",
  components: { AccordionList, AccordionItem },
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
.menu__name {
  display: flex;
  justify-content: space-between;
}
.circle-buttons {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.circle-button {
  height: 25px;
  width: 25px;
  background-color: #f06723;
  border-radius: 50%;
}
.menu-top__text {
  margin: 2.5em 0;
}
</style>
