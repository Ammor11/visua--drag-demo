<template>
  <div
    class="shape"
    :class="{ active: true }"
    @click="selectCurComponent"
    @mousedown="handleMouseDownOnShape"
  >
    <div
      class="shape-point"
      v-for="(item, index) in active ? pointList : []"
      :key="index"
      @mousedown="handleMouseDownOnPoint"
      :style="getPointStyle(item)"
    >
      {{ item }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  defaultStyle: {
    required: true,
    type: Object,
    default: () => {
      return {};
    },
  },
  element: {
    required: true,
    type: Object,
    default: () => {
      return {};
    },
  },
  index: {
    required: true,
    type: [Number, String],
    default: 0,
  },
});
const pointList = ["t", "r", "b", "l", "lt", "rt", "lb", "rb"];
const selectCurComponent = () => {
  1 + 1;
};
const handleMouseDownOnShape = () => {
  1 + 1;
};
const handleMouseDownOnPoint = () => {
  1 + 1;
};
const getPointStyle = (point: any) => {
  return {};
};
</script>
<style lang="scss" scoped>
.shape {
  position: absolute;
  &:hover {
    cursor: move;
  }

  .active {
    border: 1px solid #59c7f9;
    user-select: none;
  }
}
</style>
