<template>
  <div class="VText">
    <textarea
      v-if="store.editMode == 'edit'"
      :value="propValue"
      class="text textarea"
      ref="v-text"
    ></textarea>
    <div v-else class="text disabled">
      <div v-for="(text, index) in propValue.split('\n')" :key="index">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "@/store/index";
const store = useStore();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  propValue: {
    type: String,
    default: "",
  },
  element: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
