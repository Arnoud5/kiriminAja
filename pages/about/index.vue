<template>
  <div>
    <Top />
    <About />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Top from "../../components/Top.vue";
import Navbar from "~/components/Navbar.vue";
import About from '../about.vue';
export default {
    name: "IndexPage",
    components: { Footer, Home, Top, Navbar }
};
