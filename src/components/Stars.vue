<script setup lang="ts">
const count = 75;
</script>

<template>
    <div class="stars">
        <div class="star" v-for="_ of count"></div>
    </div>
</template>

<style lang="scss" scoped>
@use "sass:math";

body {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    overflow: hidden;
}

@function random_range($min, $max) {
    $rand: math.random();
    $random_range: $min + math.floor($rand * (($max - $min) + 1));
    @return $random_range;
}

.stars {
    $stars-height: 100vh;
    $stars-width: 100vw;

    position: relative;
    top: 0;
    left: 0;
    width: $stars-width;
    height: $stars-height;

    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    overflow: hidden;
    z-index: -1;
    margin-bottom: -$stars-height;
    margin-right: -$stars-width;
}

.star {
    $star-count: 75;
    --star-color: var(--primary-color);
    --star-tail-length: 6em;
    --star-tail-height: 2px;
    --star-width: calc(var(--star-tail-length) / 6);
    --fall-duration: 15s;
    --tail-fade-duration: var(--fall-duration);

    position: absolute;
    top: -10vh;
    left: var(--left-offset);
    width: var(--star-tail-length);
    height: var(--star-tail-height);
    color: var(--star-color);
    background: linear-gradient(45deg, currentColor, transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px currentColor);
    transform: rotate(-45deg);
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
        tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

    @for $i from 1 through $star-count {
        &:nth-child(#{$i}) {
            --star-tail-length: #{random_range(5em, 7.5em)};
            --left-offset: #{random_range(20vw, 150vw)};
            --fall-duration: #{random_range(6, 12s)};
            --fall-delay: #{random_range(0, 10s)};
        }
    }

    &::before,
    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: calc(var(--star-width) / -2);
        width: var(--star-width);
        height: 100%;
        background: linear-gradient(
            45deg,
            transparent,
            currentColor,
            transparent
        );
        border-radius: inherit;
        animation: blink 2s linear infinite;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
}

@keyframes fall {
    to {
        transform: translate3d(-150em, 150em, 0) rotate(-45deg);
    }
}

@keyframes tail-fade {
    0%,
    50% {
        width: var(--star-tail-length);
        opacity: 1;
    }

    70%,
    80% {
        width: 0;
        opacity: 0.4;
    }

    100% {
        width: 0;
        opacity: 0;
    }
}

@keyframes blink {
    50% {
        opacity: 0.6;
    }
}
</style>
