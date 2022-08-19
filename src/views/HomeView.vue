<template>
  <div class="home">
    <VisualEditor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VisualEditor from "@/components/VisualEditor.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    VisualEditor,
  },
});
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
