<template>
  <div class="visual-editor">
    <header class="toolbar"></header>
    <main>
      <section class="left">
        <ComponentList />
      </section>
      <section class="center">
        <div
          class="content"
          @drop="handleDrop"
          @dragenter.prevent="handleDragEnter"
          @dragover.prevent="handleDragOver"
        >
          <component
            v-for="item in store.componentData"
            :key="item.component"
            :is="item.component"
            :style="item.style"
            :propValue="item.propValue"
          ></component>
        </div>
      </section>
      <section class="right"></section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { reactive, markRaw } from "vue";
import { useStore } from "@/store/index";
import { componentList } from "@/assets/custom-component";
import ComponentList from "@/components/ComponentList.vue";
import VText from "@/components/costomComponents/VText.vue";
import Picture from "@/components/costomComponents/Picture.vue";
import lodash from "lodash";

interface tabType {
  name: string;
  tabComp: any;
}

const comData = reactive<tabType[]>([
  {
    name: "VText组件",
    tabComp: markRaw(VText),
  },
  {
    name: "Picture组件",
    tabComp: markRaw(Picture),
  },
]);

const store = useStore();
const handleDrop = (e: any) => {
  e.stopPropagation();
  e.preventDefault();
  const data = lodash.cloneDeep(componentList[e.dataTransfer.getData("index")]);
  if (data.component == "VText") {
    data.component = comData[0].tabComp;
  } else {
    data.component = comData[1].tabComp;
  }
  data.style.position = "absolute";
  data.style.left = e.clientX - 230 + "px";
  data.style.top = e.clientY - 100 + "px";
  console.log(e.clientX, e.clientY);
  store.addComponent(data);
};
const handleDragEnter = (e: any) => {
  e.preventDefault();
};
const handleDragOver = (e: any) => {
  e.preventDefault();
};
</script>

<style scoped lang="scss">
.visual-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  .toolbar {
    height: 80px;
    border: 1px solid #f60;
  }
  main {
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    overflow: hidden;
    .left {
      width: 200px !important;
      height: 100%;
      border: 1px solid #f60;
    }
    .center {
      height: 100%;
      flex: 1;
      border: 1px solid #f60;
      padding: 20px 30px;
      background-color: #f5f5f5;
      .content {
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        overflow: scroll;
      }
    }
    .right {
      width: 250px !important;
      height: 100%;
      border: 1px solid #f60;
    }
  }
}
</style>
