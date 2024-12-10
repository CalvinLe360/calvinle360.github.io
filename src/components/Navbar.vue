<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { links } from "../data";

const scrollPos = ref<number>(window.top?.scrollY ?? 0);

const onScroll = () => {
    scrollPos.value = window.top?.scrollY ?? 0;
};

onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
    <header>
        <nav
            class="navbar"
            :class="{
                'navbar--sticky': scrollPos !== 0,
            }"
        >
            <button class="navbar__button" :onclick="scrollToTop">
                Calvin Le
            </button>
            <a class="navbar__button" :href="links.resume" target="_blank"
                >Résumé</a
            >
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/mixins.scss";

.navbar {
    @include mixins.transitions;

    display: flex;
    justify-content: space-between;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 2rem;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    background-color: #00000000;
    text-align: center;

    &--sticky {
        background-color: rgba(0, 0, 0, 0.856);
    }

    &__button {
        @include mixins.transitions;
        color: white;
        font-size: large;

        border: 0;
        background-color: rgba(0, 0, 0, 0);
        padding: 1rem;
        cursor: pointer;

        &:hover {
            background-color: green;
        }
    }
}
</style>
