<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { links } from "../data";

const getTimedGreeting = (hour: number) => {
    if (hour < 6) return "Why are you awake?!";
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    if (hour <= 24) return "Good evening!";

    return "Good whenever, I guess.";
};

const greeting = ref("Umm... not sure what to say.");

let intervalId: number;

onMounted(() => {
    intervalId = setInterval(() => {
        const date = new Date(Date.now());
        greeting.value = getTimedGreeting(date.getHours());
    }, 1000);

    onUnmounted(() => {
        clearInterval(intervalId);
    });
});
</script>

<template>
    <div class="introduction">
        <h1>{{ greeting }}</h1>
        <p>
            I'm Calvin! I'm passionate about programming and thrive on solving
            all kinds of problems through code. I love diving deep into
            challenges, getting completely immersed in the process, and finding
            creative solutions.
        </p>
        <p>
            My hobbies outside of the code include playing an assortment of
            board games and video games, specifically the kinds where I work
            with others to win as a team. Despite this, some of my favourites
            include Chess and Tetris!
        </p>
        <p>
            When you get the chance, please have a chat with me via
            <a :href="links.email" target="_blank">Email</a> or
            <a :href="links.linkedin" target="_blank">LinkedIn</a>!
        </p>
    </div>
</template>

<style lang="scss" scoped>
.introduction {
    padding: 2rem;
    background-image: url("/calvin/about.jpg");
    background-attachment: fixed;
    background-size: 100%;
    box-sizing: border-box;
    width: 100vw;

    background-blend-mode: multiply;
    background-color: rgb(94, 94, 94);
}

p {
    font-size: large;
    overflow-wrap: break-word;
    width: 90vw;

    a {
        color: rgb(0, 195, 255);
    }
}
</style>
