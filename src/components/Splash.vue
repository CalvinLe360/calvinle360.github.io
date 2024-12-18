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
            <h2>Software Engineer</h2>
            <h2>Building simple and effective solutions to complex problems</h2>
            <div class="splash__link">
                <a
                    v-for="link of props.links"
                    :href="link.link"
                    target="_blank"
                >
                    <img :src="link.iconPath" />
                    <div class="splash__link--tooltip">
                        <div class="splash__link--tooltip-pos">
                            {{ link.tooltip }}
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="splash__scroll-down">ᐯ</div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixins.scss";

.splash {
    height: 100vh;
    width: 100vw;
    box-sizing: content-box;

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

    &__link {
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

        &--tooltip {
            @include mixins.transitions;
            visibility: hidden;
            opacity: 0;

            position: absolute;
        }

        &--tooltip-pos {
            background-color: rgb(5, 5, 5);
            border-radius: 6px;
            padding: 4px;
        }

        a:hover &--tooltip {
            visibility: visible;
            opacity: 1;
        }
    }

    &__scroll-down {
        position: absolute;
        pointer-events: none;

        text-align: center;
        font-size: 48px;

        left: 0;
        right: 0;
        top: 90vh;
        width: 100%;

        animation: arrow-movement 1000ms ease-in-out infinite;
    }
}

@keyframes arrow-movement {
    50% {
        top: 85vh;
    }
}
</style>
