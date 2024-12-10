<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { FooterContent } from "./types";

const props = defineProps<{
    links: FooterContent[];
}>();

const viewingBufferPx = 70;
const scrolledToBottom = ref(false);

const onScroll = () => {
    scrolledToBottom.value =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - viewingBufferPx;
};

onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<template>
    <footer
        class="footer"
        :class="{
            'footer--visible': scrolledToBottom,
        }"
    >
        <div class="footer__column" v-for="column of props.links">
            <h3>{{ column.header }}</h3>
            <p v-for="link of column.links">
                {{ link.name + ": " }}
                <a :href="link.link" target="_blank">{{ link.linkName }}</a>
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/mixins.scss";

.footer {
    @include mixins.transitions;

    display: flex;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.555);
    padding: 2rem;
    box-sizing: border-box;

    justify-content: space-evenly;
    opacity: 0;
    overflow: hidden;

    &--visible {
        opacity: 1;
    }

    &__column {
        p {
            margin: 0;
            @include mixins.mobile {
                font-size: 12px;
            }
        }
    }
}
</style>
