<template>
  <div class="visual-editor">
    <header class="toolbar">
      <ul class="btnlist">
        <li v-for="(item, index) in btnNameList" :key="index">
          <el-button>{{ item }}</el-button>
        </li>
      </ul>
      <div class="canvassize">
        <span class="text">画布大小</span
        ><el-input v-model="width" size="small"></el-input> ×
        <el-input v-model="height" size="small"></el-input>
      </div>
    </header>
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
          @mousedown="handleMouseDown"
        >
          <Shape
            v-for="(item, index) in store.componentData"
            :key="item.component"
            :defaultStyle="item.style"
            :element="item"
            :style="getShapeStyle(item.style)"
            :index="index"
          >
            <component
              :is="item.component"
              :style="item.style"
              :propValue="item.propValue"
            ></component
          ></Shape>
        </div>
      </section>
      <section class="right"></section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { reactive, markRaw, ref, onMounted } from "vue";
import { useStore } from "@/store/index";
import { componentList } from "@/assets/custom-component";
import { getShapeStyle } from "@/utils/style.js";
import ComponentList from "@/components/ComponentList.vue";
import VText from "@/components/costomComponents/VText.vue";
import Picture from "@/components/costomComponents/Picture.vue";
import VButton from "@/components/costomComponents/VButton.vue";
import Shape from "@/components/Shape.vue";
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
  {
    name: "VButton组件",
    tabComp: markRaw(VButton),
  },
]);
const btnNameList = ["撤销", "重做", "插入图片", "预览", "保存", "清空画布"];
let width = ref(1200);
let height = ref(740);

const store = useStore();
const handleDrop = (e: any) => {
  e.stopPropagation();
  e.preventDefault();
  const data = lodash.cloneDeep(componentList[e.dataTransfer.getData("index")]);
  if (data.component == "VText") {
    data.component = comData[0].tabComp;
  } else if (data.component == "Picture") {
    data.component = comData[1].tabComp;
  } else {
    data.component = comData[2].tabComp;
  }
  data.style.left = e.clientX - 230 + "px";
  data.style.top = e.clientY - 84 + "px";
  store.addComponent(data);
};
const handleDragEnter = (e: any) => {
  e.preventDefault();
};
const handleDragOver = (e: any) => {
  e.preventDefault();
};
const handleMouseDown = (e: any) => {
  e.stopPropagation();
};
onMounted(() => {
  console.log(getShapeStyle);
});
</script>

<style scoped lang="scss">
.visual-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  .toolbar {
    height: 64px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    .btnlist {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 20px;
      li {
        list-style: none;
        margin: 0 15px;
      }
    }
    .canvassize {
      display: flex;
      align-items: center;
      white-space: nowrap;
      .text {
        padding-bottom: 3px;
        margin-right: 10px;
      }
      .el-input {
        width: 50px;
      }
    }
  }
  main {
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    overflow: hidden;
    .left {
      width: 200px !important;
      height: 100%;
    }
    .center {
      height: 100%;
      flex: 1;
      padding: 20px 30px;
      background-color: #f5f5f5;
      .content {
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        overflow: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .right {
      width: 250px !important;
      height: 100%;
    }
  }
}
</style>
