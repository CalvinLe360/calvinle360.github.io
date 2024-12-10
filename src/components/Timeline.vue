<script setup lang="ts">
import { TimelineContent } from "./types";

const props = defineProps<{
    content: TimelineContent[];
}>();
</script>

<template>
    <h1 class="timeline-title">Work Experience</h1>
    <div class="timeline">
        <div class="timeline__element" v-for="data in props.content">
            <span class="timeline__icon">
                <img
                    :src="data.iconPath"
                    :alt="data.iconPath"
                    class="timeline-element-icon-image"
                />
            </span>
            <div class="timeline__content">
                <h4>{{ data.company }}</h4>
                <h5>{{ data.position }}</h5>
                <div>
                    <p v-html="data.description" />
                </div>
                <span class="timeline__date">{{ data.date }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$two-columns-breakpoint: 1170px;

.timeline-title {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.438);
    margin: 0;

    padding: 2rem;
    width: 100vw;
    box-sizing: border-box;
}

.timeline {
    margin: 2em auto;
    max-width: $two-columns-breakpoint;
    padding: 2em 0;
    position: relative;
    width: 100vw;
    color: black;
    box-sizing: border-box;

    @media only screen and (min-width: $two-columns-breakpoint) {
        margin: 3em auto;
        width: 90%;
    }

    &::before {
        background: #1b1b1b;
        background-image: linear-gradient(
            180deg,
            #1b1b1b 0,
            #fff 30px,
            #fff calc(100% - 30px),
            #1b1b1b
        );
        border-radius: 4px;
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        width: 4px;

        left: 18px;

        @media only screen and (min-width: $two-columns-breakpoint) {
            left: 50%;
            margin-left: -2px;
        }
    }

    &__element {
        position: relative;
        box-sizing: border-box;
        margin: 2em 1em 2em 0;

        @media only screen and (min-width: $two-columns-breakpoint) {
            margin: 4em 0;
        }

        &::after {
            clear: both;
            content: "";
            display: table;
        }
    }

    &__icon {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border: 1px solid black;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);

        height: 40px;
        left: 0;
        top: 0;
        width: 40px;

        @media only screen and (min-width: $two-columns-breakpoint) {
            width: 60px;
            height: 60px;
            left: 50%;
            margin-left: -30px;
        }

        svg {
            fill: currentColor;
            display: block;
            width: 24px;
            height: 24px;
            left: 50%;
            margin-left: -12px;
            margin-top: -12px;
            position: relative;
            top: 50%;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
    }

    &__content {
        background: #fff;
        border-radius: 0.25em;
        margin-left: 60px;
        padding: 1em;
        position: relative;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);

        &::after {
            clear: both;
            content: "";
            display: table;
        }

        @media only screen and (min-width: $two-columns-breakpoint) {
            margin-left: 0;
            padding: 1.5em;
            width: 40%;
        }

        h4 {
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 1.334;
            letter-spacing: 0em;
            margin: 0;
        }

        h5 {
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 0.0075em;
            margin: 0;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.6;
            margin: 1em 0 0;
        }
    }

    @media only screen and (min-width: $two-columns-breakpoint) {
        &__element:nth-child(2n) &__content {
            float: right;
        }
    }

    &__date {
        color: #333;
        font-size: 0.8125rem;
        font-weight: 500;
        display: inline-block;
        opacity: 0.7;
        padding: 0.8em 0;

        @media only screen and (min-width: $two-columns-breakpoint) {
            color: white;
            font-size: 1rem;
            left: 124%;
            position: absolute;
            top: 6px;
            width: 50%;
        }
    }

    @media only screen and (min-width: $two-columns-breakpoint) {
        &__element:nth-child(2n) &__date {
            left: auto;
            right: 124%;
            text-align: right;
        }
    }
}
</style>
