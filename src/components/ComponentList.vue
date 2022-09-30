<template>
  <div class="component-list">
    <div
      class="list"
      draggable="true"
      @dragstart="handleDragStart"
      data-index="0"
    >
      文本
    </div>
    <div
      class="list"
      draggable="true"
      @dragstart="handleDragStart"
      data-index="1"
    >
      图片
    </div>
    <div
      class="list"
      draggable="true"
      @dragstart="handleDragStart"
      data-index="2"
    >
      按钮
    </div>
  </div>
</template>

<script setup lang="ts">
const handleDragStart = (e: any) => {
  e.dataTransfer.setData("index", e.target.dataset.index);
};
</script>

<style lang="scss" scoped>
.component-list {
  .list {
    width: 100px;
    height: 40px;
    border: 1px solid #000;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }
}
</style>
