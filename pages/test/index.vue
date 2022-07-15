<template>
    <div>
        <top />
        <Navbar />
        <Banner />
        <Footer />
    </div>

</template>

<script>
import Top from "../../components/Top.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue"
import Banner from "../../components/Banner.vue"
export default {
    name: "IndexPage",
    components: { Top, Navbar, Footer, Banner }
};
