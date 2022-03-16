<template>
  <div>
    <navbar />
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue';
import Navbar from "./components/Navbar.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
    FooterBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/style.css";
</style>
