<script setup lang="ts">
import Stars from "./Stars.vue";
import { SplashLink } from "./types";

const props = defineProps<{
    links: SplashLink[];
}>();
</script>

<template>
    <div class="splash">
        <Stars />
        <div class="splash__contents">
            <img
                src="/img/calvin/profile.jpg"
                alt="Calvin Le"
                class="splash__profile"
            />
            <h1>Calvin Le</h1>
            <h2>Innovator, Immersed in Code, Driven by Solutions</h2>
            <div class="splash__svgs">
                <a
                    v-for="link of props.links"
                    :href="link.link"
                    target="_blank"
                >
                    <img :src="link.iconPath" />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixins.scss";

.splash {
    height: 100vh;
    width: 100vw;

    display: flex;
    overflow: hidden;

    &__profile {
        height: 128px;
        border-radius: 50%;
    }

    &__contents {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            margin: 1rem;
        }

        h2 {
            text-align: center;
            width: 100vw;
        }
    }

    &__svgs {
        display: flex;

        a > img {
            @include mixins.transitions;

            width: 24px;
            height: 24px;
            margin: 0 0.5rem;

            background-color: rgb(5, 5, 5);
            padding: 0.5rem;
            border-radius: 50%;
            overflow: visible;

            &:hover {
                background-color: green;
            }
        }
    }
}
</style>
