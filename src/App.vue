<script setup lang="ts">
import Splash from "./components/Splash.vue";
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Timeline from "./components/Timeline.vue";
import Footer from "./components/Footer.vue";

import { footerContent, splashLinks, timelineData } from "./data";
</script>

<template>
    <Splash :links="splashLinks" />
    <Timeline :content="timelineData" />
    <About />
    <Footer :links="footerContent" />

    <Navbar />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
