<template>
  <div class="Picture">
    <div style="overflow: hidden">
      <img :src="propValue.url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  propValue: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<style lang="scss" scoped></style>
