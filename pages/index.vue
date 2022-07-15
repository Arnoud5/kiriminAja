<template>
  <div>
    <Top />
    <Home />
    <Ekspedisi />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Home from "../components/Home.vue";
import Top from "../components/Top.vue";
import Navbar from "~/components/Navbar.vue";
import Ekspedisi from "~/components/Ekspedisi.vue";
export default {
    name: "IndexPage",
    components: { Footer, Home, Top, Navbar, Ekspedisi }
};
</script>
